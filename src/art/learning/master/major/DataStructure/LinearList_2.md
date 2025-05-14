---
title: 线性表下
date: 2025-04-29
icon: database
order: 4
category:
    - 数据结构
    - '408'
    - 考研
    - 线性表
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

// 前向遍历（跳过头节点）
while (p->prior != NULL) {
    // 处理 p 节点的位置
    p = p->prior;
}

```

对于按位查找，只需要添加一个计数器，双链表和单链表一样，都是 $O(n)$ 的时间复杂度

由于链表不具备随机访问的特性，查找操作只能从一端顺序遍历

### 循环链表

循环链表的定义：

::: tabs 

@tab 循环单链表

```c

typedef struct LNode {
    ElemType data;
    struct LNode *next;
} LNode, *LinkList;

// 初始化一个循环单链表
bool InitList(LinkList &L) {
    L = (LNode *)malloc(sizeof(LNode)); // 创建头结点
    if (L == NULL) // 内存分配失败
        return false; // 返回错误
    L->next = L; // 头结点的 next 指向头结点
    return true;
}

// 判空操作
bool Empty(LinkList L) {
    return L->next == L;
}

```

对于经常需要对头尾节点进行操作的情况，可以使用带头节点和尾指针的循环单链表进行实现

@tab 循环双链表

```c
// 循环双链表
typedef struct DNode {
    ElemType data;
    struct DNode *prior, *next;
} DNode, *DLinkList;

// 初始化一个循环双链表
bool InitList(DLinkList &L) {
    L = (DNode *)malloc(sizeof(DNode)); // 创建头结点
    if (L == NULL) // 内存分配失败
        return false; // 返回错误
    L->prior = L; // 头结点的 prior 指向头结点
    L->next = L; // 头结点的 next 指向头结点
    return true;
}

// 判空操作
bool Empty(DLinkList L) {
    return L->next == L && L->prior == L;
}

```

:::

对于双链表和循环单链表，由于尾指针的存在，可以方便的进行尾插和尾删操作

::: tabs

@tab 双链表

```c

// 插入操作
bool InsertNextDNode(DNode *p, DNode *s) {
    if (p == NULL || s == NULL) // p 和 s 不能为 NULL
        return false;
    s->next = p->next; // s 的 next 指向 p 的后继
    if (p->next != NULL) // 如果 p 的后继不为 NULL，就修改 p 的后继的前驱为 s [!code warning]
        p->next->prior = s; // p 的后继的前驱为 s [!code warning]
    s->prior = p; // s 的前驱为 p
    p->next = s; // p 的后继为 s
    return true;
}

// 删除操作
bool DeleteNextDNode(DNode *p) {
    if (p == NULL) // p 不能为 NULL
        return false;
    DNode *q = p->next; // q 为 p 的后继
    if (q == NULL) // 如果 q 为 NULL，说明 p 无后继，直接返回
        return false;
    p->next = q->next; // p 的后继为 q 的后继
    if (q->next != NULL) // 如果 q 的后继不为 NULL，就修改 q 的后继的前驱为 p [!code warning]
        q->next->prior = p; // q 的后继的前驱为 p [!code warning]
    free(q); // 释放 q
    return true;
}

```

对于双链表操作，很多时候需要判断当前节点是否为末尾，针对尾节点需要特殊操作

@tab 循环双链表

```c
// 插入操作
bool InsertNextDNode(DNode *p, DNode *s) {
    if (p == NULL || s == NULL) // p 和 s 不能为 NULL
        return false;
    s->next = p->next; // s 的 next 指向 p 的后继
    p->next->prior = s; // p 的后继的前驱为 s 这里在循环双链表中就不需要考虑在末尾的情况 [!code warning]
    s->prior = p; // s 的前驱为 p
    p->next = s; // p 的后继为 s
    return true;
}

// 删除操作
bool DeleteNextDNode(DNode *p) {
    if (p == NULL) // p 不能为 NULL
        return false;
    DNode *q = p->next; // q 为 p 的后继
    p->next = q->next; // p 的后继为 q 的后继，同样的在循环双链表中就不需要考虑在末尾的情况 [!code warning]
    q->next->prior = p; // q 的后继的前驱为 p
    free(q); // 释放 q
    return true;
}

```

:::

### 静态链表 （考的不多）

#### 静态链表的定义

静态链表是借助数组来描述线性表的链式存储结构，因此静态链表需要预先分配一块**连续**的内存空间，静态链表中的元素是结点，每个结点由两个数据域组成，一个是存储数据元素的数据域，另一个是存储下一个结点地址的指针域（称为**数组下标**，从 0 开始，也可以称为游标） ，静态链表中的第一个结点存储在数组下标为 0 的位置，称为**头结点**，头节点不存储数据，只有一个指向下一个元素的指针域，最后一个结点存储在数组下标为 maxsize - 1 的位置，称为**尾结点**，尾结点的指针域为 -1 ，静态链表中不存在头指针和尾指针，因为静态链表中的元素是结点，而结点是由两个数据域组成的，因此静态链表中的元素个数就是数组的长度，即 maxsize

```c
#define maxsize 1000 // 定义数组长度

typedef struct {
    ElemType data; // 数据域
    int cur; // 游标，存储下一个结点的下标
} Node, StaticLinkList[maxsize]; // 这里需要注意的是，静态链表中的结点类型是 Node，而静态链表类型是 StaticLinkList，即静态链表类型是静态链表数组，数组中的每个元素都是一个结点
// 使用时定义一个 StaticLinkList list; ，等价于 Struct Node list[maxsize];
```

#### 静态链表的初始化

```c
// 初始化静态链表
bool InitList(StaticLinkList &L) {
    for (int i = 0; i < maxsize - 1; i++) // 将所有结点的游标都初始化为 i + 1 认为所有的节点的下一节点下标为 i + 1 的结点均为空闲结点
        L[i].cur = i + 1;
    L[maxsize - 1].cur = 0; // 尾结点的游标为 0
    return true;
}
```

#### 静态链表的查找操作

```c
// 静态链表的查找操作
int LocateElem(StaticLinkList L, ElemType e) {
    int i = L[0].cur; // i 为第一个结点的下标
    while (i != 0 && L[i].data != e) // 从第一个结点开始遍历，直到找到元素或者遍历到尾结点
        i = L[i].cur;
    return i;
}

// 按逻辑位次查找，返回节点逻辑位置的下标
int GetElem(StaticLinkList L, int i) {
    if (i < 1 || i > maxsize - 1) // i 不合法
        return -1;
    int j = L[0].cur; // j 为第一个结点的下标
    for (int k = 1; k <= i; k++) // 从第一个结点开始遍历，直到找到第 i 个结点
        j = L[j].cur;
    return j;
}
```

#### 静态链表的插入操作

```c
// 静态链表的插入操作
bool ListInsert(StaticLinkList &L, int i, ElemType e) {
    if (i < 1 || i > maxsize - 1) // i 不合法
        return false;
    int j = maxsize - 1; // j 为最后一个结点的下标
    while (j != 0 && L[j].data != e) // 从最后一个结点开始遍历，直到找到元素或者遍历到头结点
        j = L[j].cur;
    if (j != 0) // 找到元素，直接返回
        return false;
    int k = L[0].cur; // k 为第一个结点的下标
    L[0].cur = L[k].cur; // 将第一个结点的游标指向第 i 个结点
    L[k].cur = i; // 将第 i 个结点的游标指向第 k 个结点
    L[i].data = e; // 将第 i 个结点的值修改为 e
    L[i].cur = j; // 将第 i 个结点的游标指向第 j 个结点
    return true;
}
```

#### 静态链表的删除操作

```c
// 静态链表的删除操作
bool ListDelete(StaticLinkList &L, int i) {
    if (i < 1 || i > maxsize - 1) // i 不合法
        return false;
    int j = maxsize - 1; // j 为最后一个结点的下标
    while (j != 0 && L[j].cur != i) // 从最后一个结点开始遍历，直到找到第 i 个结点
        j = L[j].cur;
    if (j == 0) // 没有找到第 i 个结点
        return false;
    int k = L[0].cur; // k 为第一个结点的下标
    L[0].cur = L[k].cur; // 将第一个结点的游标指向第 i 个结点
    L[k].cur = L[j].cur; // 将第 i 个结点的游标指向第 k 个结点
    L[j].cur = L[j].cur; // 将第 j 个结点的游标指向第 j 个结点
    return true;
}
```

#### 静态链表的优缺点

优点：
- 增删操作只需要修改游标，不需要移动元素，从而改进了顺序存储结构中插入和删除操作需要移动大量元素的缺点
缺点：
- 不能随机访问，需要遍历链表才能找到第 i 个元素
- 容量固定，不能动态增加存储空间

适用场景：
1. 不支持指针的低级语言
2. 数据元素数量固定不变的场景（如操作系统中的文件分配表FAT）

## 顺序表和链表的对比

将从三大方面进行比较：逻辑结构、物理结构（存储结构）和数据的运算 / 基本操作

### 逻辑结构

顺序表和链表都是线性结构，即逻辑结构都是线性的

### 物理结构（存储结构）

顺序表：顺序存储结构，用一段连续的存储单元依次存储线性表的数据元素

链表：链式存储结构，用一组任意的存储单元存储线性表的数据元素（存储单元可以是连续的，也可以是不连续的）

由于结构不同，两者各有其优缺点

|  | 顺序表 | 链表 |
| :---: | :---: | :---: |
| 存储空间 | 连续的 | 不一定连续 |
| 存储密度 | 大 | 小 |
| 插入和删除 | 需要移动大量元素 | 不需要移动元素 |
| 逻辑顺序和物理顺序是否一致 | 一致 | 不一致 |
| 适用场景 | 适合元素个数已知且连续的场景 | 适合元素个数未知且不连续的场景 |
| 优点 | 支持随机存取、存储密度高 | 离散的小空间，分配方便 ，可以动态增加存储空间 |
| 缺点 | 插入和删除需要移动大量元素，效率低，更改容量不方便，占用大片连续空间 | 不支持随机存取，查找效率低，存储密度低 |

### 数据的运算 / 基本操作

主要分为六点：**创**、销、**查**、改、**增**、**删**

各操作时间复杂度

|  | 顺序表 | 链表 | 备注 |
| :---: | :---: | :---: | :---: |
| 创建 | $O(1)$ | $O(1)$ | |
| 销毁 | $O(1)$（静态声明） 或 $O(n)$（动态声明） | $O(n)$ | |
| 查找 | $O(1)$（按位查找） 或 $O(n)$（按值查找） | $O(n)$ | 顺序表的按值查找在采用特定算法时时间复杂度可以优化到 $O(\log_2n)$ |
| 修改 | $O(1)$ | $O(n)$ | |
| 增加 | $O(n)$ | $O(n)$ | 这里需要注意的是，虽然顺序表和链表都是 $O(n)$，但是顺序表的时间复杂度主要取决于元素的移动，会根据元素占用空间大小而有所不同；链表的时间复杂度主要取决于指针的移动，与元素占用空间大小无关，因此在增加时链表的效率总体还是优于顺序表的 |
| 删除 | $O(n)$ | $O(n)$（按值或按位） 或 $O(1)$（按节点指针） | 删除操作同增加操作一样 |

选择两者中的哪一个，需要根据实际场景进行选择

| 场景 | 顺序表 | 链表 |
| :---: | :---: | :---: |
| 元素个数已知且连续 | 适合 | 不适合 |
| 元素个数未知且不连续 | 不适合 | 适合 |
| 插入和删除操作较多 | 不适合 | 适合 |
| 查找操作较多 | 适合 | 不适合 |

## 关于一些答题技巧

能够从逻辑结构、物理结构、算法 / 基本操作三个方面进行比较分析

两者逻辑结构上都是线性表

但由于二者物理结构不同，前者属于顺序存储（特点，所带来的优缺点）；链表采用链式存储（特点、优缺点）

因为采用不同的物理结构，所以二者在算法 / 基本操作上会有所不同，需要具体分析

对于初始化时、插入元素时、查找元素时、修改元素时、删除元素时，不同操作中的两者的不同特点来进行分析

