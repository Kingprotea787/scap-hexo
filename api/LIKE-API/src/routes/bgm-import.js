function mapCategory(subjectType, uiCategory){
  if (uiCategory === 7) return 'Manga';
  if (uiCategory === 1) return 'Novel';
  return {
    2:'Anime', 3:'Music', 4:'Game', 6:'LiveAction', 5:'Other', 1:'Book'
  }[subjectType] || 'Other';
}

const { Router } = require('express');
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const router = Router();
const DATA_FILE = path.join(__dirname, '../../data/bgm.yml');

router.post('/api/bgm-import', async (req, res) => {
  try {
    const { subject_id, uiCategory } = req.body || {};
    if (!subject_id) return res.status(400).json({ error: 'subject_id required' });

    const uiCat = Number(uiCategory || 0);

    const headers = { 'User-Agent': 'NominationApp/1.0 (student_project_demo)' };

    const sResp = await fetch(`https://api.bgm.tv/v0/subjects/${encodeURIComponent(subject_id)}`, { headers });
    if (!sResp.ok) return res.status(sResp.status).json({ error: 'Upstream subject error' });
    const subject = await sResp.json();

    const pResp = await fetch(`https://api.bgm.tv/v0/subjects/${encodeURIComponent(subject_id)}/persons`, { headers });
    const persons = pResp.ok ? await pResp.json() : [];

    const cResp = await fetch(`https://api.bgm.tv/v0/subjects/${encodeURIComponent(subject_id)}/characters`, { headers });
    const characters = cResp.ok ? await cResp.json() : [];

    // ========== audience ==========
    const audience =
      Array.isArray(persons)
        ? (persons.find(p => p?.relation === '动画制作' || p?.relation === '制作')?.name || '')
        : '';

    // ========== cast (前三个声优) ==========
    const cast = [];
    if (Array.isArray(characters)) {
      for (const ch of characters) {
        for (const actor of (ch?.actors || [])) {
          if (actor?.name) cast.push(actor.name);
          if (cast.length >= 3) break;
        }
        if (cast.length >= 3) break;
      }
    }

    const entry = {
      img: subject?.images?.large || subject?.images?.medium || subject?.images?.small || '',
      alt: subject?.name_cn || subject?.name || '',
      title: subject?.name_cn || subject?.name || '',
      synopsis: subject?.summary || '',
      rating: subject?.rating?.score || 0,
      audience,
      cast
    };

    // ========== 读旧文件 ==========
    let data = {};
    if (fs.existsSync(DATA_FILE)) {
      data = yaml.load(fs.readFileSync(DATA_FILE, 'utf8')) || {};
      if (typeof data !== 'object' || Array.isArray(data) || data === null) data = {};
    }

    // 把“漫画/小说”分开
    const category = mapCategory(subject?.type, uiCat);
    if (!Array.isArray(data[category])) data[category] = [];

    // 去重：按 title
    data[category] = data[category].filter(i => i?.title !== entry.title);
    data[category].push(entry);

    fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
    fs.writeFileSync(DATA_FILE, yaml.dump(data, { lineWidth: -1 }), 'utf8');

    res.json({ ok: true, category, entry });

  } catch (e) {
    console.error('Import Error:', e);
    res.status(500).json({ error: 'Import failed', detail: String(e?.message || e) });
  }
});

module.exports = router;
