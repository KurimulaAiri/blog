---
title: C语言的一些知识点
icon: code
category:
  - 代码
  - 实用文档
tag:
  - c
  - c++
---

## 关于指针

## typedef 的使用

```c

// 我们可以定义某种类型的别名，称之为类型定义(typedef)，也可以对某种类型的指针进行定义
// 定义后，在之后的使用中就可以直接使用其别名

int p = 1;
int *i = &p;

// 使用typedef定义后

typedef int newP;
typedef int *newPp;

newP p = 1;
newPp i = &p;

```