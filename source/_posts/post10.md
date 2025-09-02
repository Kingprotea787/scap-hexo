---
title: Apple10 News Style Article Example
subtitle: A Sample Post Imitating Apple News Layout
date: 2025-08-04
author: Grok
banner: /img/hero.png
tags:
  - Technology
  - News
  - Apple
excerpt: This is a lead paragraph or intro excerpt that appears prominently in the Apple News style layout.
layout: post  # 指定布局为 post.ejs
---

# Introduction

Welcome to this sample article. Here, we'll explore various Markdown elements rendered in an Apple News-inspired design.

## Chapter 1

**Exercise 1**

False. Consider we have 2 men $A, C$ and 2 women $B, D$.

For $A$, $B$ is better than $D$; for $C$, $D$ is better than $B$; for $B$, $C$ is better than $A$; for $D$, $A$ is better than $C$.

The stable matching is $(A,B), (C,D)$.

But we can find that $A$ is ranked second on the preference list of $B$, $C$ is ranked second on the preference list of $D$.

Clearly, no such pair exists.

**Exercise 2**

True. Consider we have a matching $(m, p), (q, w)$.

We know that $m$ and $w$ prefer each other than their partner, so by definition this matching is **not stable**.

So there must exist the match $(m,w)$.

**Exercise 3**

No. We can construct a situation that, network $\mathcal{A}$ has 2 shows $\{a_1=1, a_2=3\}$, network $\mathcal{B}$ has 2 shows $\{b_1=2,b_2=4\}$.

If $a_1-b_1, a_2-b_2$: $\mathcal{A}$ will swap $a_1, a_2$ so that $\mathcal{A}$ can win one slot instead of zero.

If $a_1-b_2, a_2-b_1$: $\mathcal{B}$ will swap $b_1, b_2$ so that $\mathcal{B}$ can win two slots instead of one.

*(Like Tian Ji racing horses, huh?)*

So there is not always a stable pair of schedules.

**Exercise 8**

Yes. We can construct a situation for 3 men $A, B, C$ and 3 women $X,Y,Z$, and their preferences are shown below:

| men  | preferences | women | preferences |
| ---- | ----------- | ----- | ----------- |
| A    | X>Z>Y       | X     | C>B>A       |
| B    | Z>X>Y       | Y     | A>B>C       |
| C    | Z>Y>X       | Z     | A>B>C       |

If $Z$ doesn't lie, the stable matching will be $(A,X), (B,Z), (C,Y)$.

If $Z$ lies, $Z$ will show her preference as $A>C>B$. By this fake preference the stable matching will be $(A,Z), (B,X), (C,Y)$.

So $Z$ can get a better man by telling a lie.