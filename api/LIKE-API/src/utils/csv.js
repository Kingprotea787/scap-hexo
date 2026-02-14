// src/utils/csv.js
function csvEscape(s) {
  const str = (s ?? '').toString();
  if (/[",\n]/.test(str)) return `"${str.replace(/"/g, '""')}"`;
  return str;
}
module.exports = { csvEscape };
