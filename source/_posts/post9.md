---
title: Apple9 News Style Article Example
subtitle: A Sample Post Imitating Apple News Layout
date: 2025-08-05
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

## Chapter 5

### Exercise 1

Given the pseudo code below:

```
find(n,a,b):
	if(n==1) return min(A[a],B[b])
	if(A[a + ceil(n/2)] < B[b + ceil(n/2)]) return find(k,a + floor(n/2),b)
	else return find(k,a,b + floor(n/2))
	
The answer is find(n,0,0).
```

The time complexity is $T(n) = T(\lceil \frac n 2 \rceil) + 2 \Rightarrow T(n)=2\lceil\log n\rceil = O(\log n)$.

### Exercise 2

We can use Binary Indexed Tree (also called Fenwick Tree) to count inversions.

You can refer to this page to learn it: [树状数组 - OI Wiki](https://oiwiki.org/ds/fenwick/)

```cpp
int lowbit(int x){return x&-x;}
void add(int x,int val){while(x<=n)c[x]+=val,x+=lowbit(x);}
int query(int x){
	int res=0;
	while(x)res+=c[x],x-=lowbit(x);
	return res;
}
```

After discretization, each time we can add $a_i$ and query for how many $a_j > a_i$ with $j<i$.

```cpp
int main(){
    ...
	sort(b+1,b+n+1);
	rep(i,1,n)a[i]=lower_bound(b+1,b+n+1,a[i])-b;
    //discretization
	for(int i=1;i<=n;++i){
		int x=a[i];
		add(x,1);
		ans+=query(n)-query(x);
	}
	printf("%lld\n",ans);
}
```

For this problem, we can still use Fenwick Tree to count significant inversions.

After discretization, each time we can add $a_i$ and query for how many $a_j > 2a_i$ with $j<i$.

```cpp
int main(){
    ...
    //discretization
	for(int i=1;i<=n;++i){
		int x=discretization(a[i]);
		add(x,1);
		ans+=query(2*n)-query(discretization(2*a[i]));
	}
	printf("%lld\n",ans);
}
```

Time complexity is $O(n\log n)$.