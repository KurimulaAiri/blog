---
title: 线性表下
icon: database
category:
    - 数据结构
    - '408'
    - 考研
tag:
    - c
    - c++
---

## 链表

### 双链表

#### 双链表的定义

由于在单链表的使用中，对于某些操作需要取到元素的前驱，实现这个功能对于单链表来说非常麻烦，可能需要遍历整个表

因此，为了解决这个问题，双链表应运而生

双链表的结构为：数据域和前驱指针和后继指针

链表结构如下：

```c

typedef struct DNode { 
    int data;
    struct DNode *prior, *next;
} DNode, *DLinkList; // 这里和之前一样，都 Node 是为了强调节点，DLinkList 是为了强调双链表，是链表的指针

```

#### 双链表的初始化

::: tabs

@tab 带头节点

```c

bool InitDLinkList(DLinkList &L) {
    L = (DNode *)malloc(sizeof(DNode)); // 创建头结点
    if (L == NULL) // 内存分配失败
        return false; // 返回错误
    L->prior = NULL; // 头节点的 prior 为 NULL，且永远为 NULL
    L->next = NULL; // 头节点的 next 为 NULL
    return true;
}

```

@tab 无头节点

```c

bool InitDLinkList(DLinkList &L) { 
    L = NULL;
    return true;
}

```

:::

#### 双链表判空

```c
bool Empty(DLinkList L) {
    return L == NULL;
}
```

#### 双链表的插入

```c
// 在p节点之后插入s节点
bool InsertNextDNode(DNode *p, DNode *s) {
    if (p == NULL || s == NULL) // p 和 s 不能为 NULL
        return false;
    s->next = p->next; // s 的后继为 p 的后继
    if (p->next != NULL) // 如果 p 的后继不为 NULL，就修改p的后继的前驱为 s
        p->next->prior = s; //  p 的后继的前驱为 s
    s->prior = p; // s 的前驱为 p
    p->next = s; // p 的后继为 s
    return true;
}

```

#### 双链表的删除

```c
// 删除 p 节点之后的节点
bool DeleteNextDNode(DNode *p) {
    if (p == NULL) // p 不能为 NULL
        return false;
    DNode *q = p->next; // q 为 p 的后继
    if (q == NULL) // 如果 q 为 NULL，说明 p 为最后一个节点，无法删除
        return false;
    p->next = q->next; // p 的后继为 q 的后继
    if (q->next != NULL) // 如果 q 的后继不为 NULL，就修改 q 的后继的前驱为 p
        q->next->prior = p; // q 的后继的前驱为 p
    free(q); // 释放 q
    return true;
}

```

#### 双链表的遍历

```c
// 使用循环遍历双链表
// 后向遍历
while (p != NULL) {
    // 处理 p 节点的位置
    p = p->next;
}

// 前向遍历
while (p != NULL) {
    // 处理 p 节点的位置
    p = p->prior;
}


```

