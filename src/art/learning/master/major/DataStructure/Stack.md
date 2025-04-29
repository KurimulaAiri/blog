---
title: 栈
icon: database
order: 5
category:
  - 数据结构
  - 考研
  - '408'
  - 栈
tag:
  - c
  - c++
---

## 栈的定义

栈（Stack）是一种特殊的线性表，仅允许在表的一端进行插入和删除运算。这一端被称为**栈顶**，相对地，把另一端称为**栈底**。向一个栈插入新元素又称作**进栈**、入栈或压栈，它是把新元素放到栈顶元素的上面，使之成为新的栈顶元素；从一个栈删除元素又称作**出栈**或退栈，它是把栈顶元素删除掉，使其相邻的元素成为新的栈顶元素。 

没有元素时称为**空栈**。栈的特点是：**先进后出**，或者说是**后进先出（LIFO）**，从栈顶放入元素的操作叫进栈，取出元素叫出栈。

## 栈的基本操作

需要实现的基本功能有这些：

`InitStack(&S)`：初始化栈。构造一个空栈 S ，分配内存空间

`DestroyStack(&S)`：销毁栈。销毁栈 S ，释放栈所占用的内存空间

`Push(&S,x)`：进栈。若栈 S 未满，则将 x 加入使之成为新的栈顶

`Pop(&S,&x)`：出栈。若栈 S 未空，则弹出 S 的栈顶元素，用 x 返回

`GetTop(S,&x)`：取栈顶元素。若栈 S 未空，则用 x 返回 S 的栈顶元素，**和出栈操作不同，取栈顶元素后栈顶指针不变，不会将栈顶元素从栈中删除**

`StackEmpty(S)`：判断栈是否为空。若栈 S 为空，则返回 true，否则返回 false

对于一类题型，给定进栈顺序，问有几种合法的出栈顺序，则需考虑栈的**后进先出**特性

出栈顺序的数量与元素进栈顺序和数量有关，符合一定数学规律，对于 n 个不同元素进栈，出栈元素的个数为 $\frac{n}{n+1}C^n_{2n}$ 即卡特兰数

## 顺序栈

### 顺序栈的定义

顺序栈是栈的顺序存储结构，它用一组地址连续的存储单元依次存放自栈底到栈顶的数据元素，同时附设指针 top 指示栈顶元素在顺序栈中的位置

```c title="顺序栈的定义"
#define MAXSIZE 10 // 顺序栈的最大容量
typedef struct {
    SElemType data[MAXSIZE]; // 用数组存储顺序栈
    int top; // 栈顶指针，记录栈顶元素在数组中的下标
} SqStack; // 顺序栈类型
```

::: tabs 

@tab 栈顶指针指向栈顶元素

```c title="顺序栈的初始化"
bool InitStack(SqStack &S) {
    S.top = -1; // 初始化栈顶指针
    return true;
}
```

@tab 栈顶指针指向栈顶元素的下一个位置

```c title="顺序栈的初始化"
bool InitStack(SqStack &S) {
    S.top = 0; // 初始化栈顶指针
    return true;
}
```

:::

### 顺序栈的基本操作

::: tabs

@tab 栈顶指针指向栈顶元素

```c title="进栈"
bool Push(SqStack &S, SElemType e) {
    if (S.top == MAXSIZE - 1) // 栈满
        return false;
    S.data[++S.top] = e; // 栈顶指针先加 1，再赋值
    return true;
}
```

```c title="出栈"
bool Pop(SqStack &S, SElemType &e) {
    if (S.top == -1) // 栈空
        return false;
    e = S.data[S.top--]; // 先赋值，栈顶指针再减 1
    return true;
}
```

```c title="取栈顶元素"
bool GetTop(SqStack S, SElemType &e) { 
    if (S.top == -1) // 栈空
        return false;
    e = S.data[S.top]; // 直接赋值
    return true;
}
```

```c title="判断栈是否为空"
bool StackEmpty(SqStack S) {
    if (S.top == -1) // 栈空
        return true;
    return false;
}
```

@tab 栈顶指针指向栈顶元素的下一个位置

```c title="进栈"
bool Push(SqStack &S, SElemType e) {
    if (S.top == MAXSIZE) // 栈满
        return false;
    S.data[S.top++] = e; // 栈顶指针先赋值，再加 1
    return true;
}
```

```c title="出栈"
bool Pop(SqStack &S, SElemType &e) {
    if (S.top == 0) // 栈空
        return false;
    e = S.data[--S.top]; // 先赋值，栈顶指针再减 1
    return true;
}
```

```c title="取栈顶元素"
bool GetTop(SqStack S, SElemType &e) { 
    if (S.top == 0) // 栈空
        return false;
    e = S.data[S.top - 1]; // 直接赋值
    return true;
}
```

```c title="判断栈是否为空"
bool StackEmpty(SqStack S) {
    if (S.top == 0) // 栈空
        return true;
    return false;
}
```

:::

由于栈属于静态数组，在不使用时毁占据大量内存，因此引出共享栈的概念

### 共享栈

共享栈是指将两个顺序栈共享一个一维数组，两个栈的栈底分别位于数组的两端，两个栈顶向数组中间靠拢，两个栈顶指针分别指向两个栈顶元素在数组中的下标，两个栈顶指针的差值就是栈中元素个数

```c title="共享栈的定义"
#define MAXSIZE 10 // 顺序栈的最大容量
typedef struct {
    SElemType data[MAXSIZE]; // 用数组存储顺序栈
    int top1; // 栈 1 的栈顶指针，记录栈 1 的栈顶元素在数组中的下标
    int top2; // 栈 2 的栈顶指针，记录栈 2 的栈顶元素在数组中的下标
} ShStack; // 共享栈类型
```

```c title="共享栈的初始化"
bool InitStack(ShStack &S) {
    S.top1 = -1; // 栈 1 的栈顶指针
    S.top2 = MAXSIZE; // 栈 2 的栈顶指针
    return true;
}
```

```c title="栈满条件"
S.top1 + 1 == S.top2 // 栈 1 的栈顶指针的下一个位置指向栈 2 的栈顶指针
```

## 顺序栈小结

````markmap
---
markmap:
    colorFreezeLevel: 2
---

# 顺序栈

## 顺序存储，用静态数组实现，并需要记录栈顶指针

## 基本操作

### 创、增、删、查

## 两种实现

### 初始化时 top = -1

- 入栈

    - S.data[++S.top] = e

- 出栈

    - e = S.data[S.top--]

- 获得栈顶元素

    - e = S.data[S.top]

- 栈空 / 栈满的条件是？

    - 栈空：S.top == -1

    - 栈满：S.top == MAXSIZE - 1

### 初始化时 top = 0

- 入栈

    - S.data[S.top++] = e

- 出栈

    - e = S.data[--S.top]

- 获得栈顶元素

    - e = S.data[S.top - 1]

- 栈空 / 栈满的条件是？

    - 栈空：S.top == 0

    - 栈满：S.top == MAXSIZE

## 共享栈

### 两个栈共享同一片连续的内存空间，两个栈从两边往中间扩展

### 初始化

- 一号栈顶指针初始为 -1，二号栈顶指针初始为 MAXSIZE

### 栈满条件

- top1 + 1 == top2;

````

## 链栈

链栈可以认为是一个单链表，只是只能进行头插头删操作

链栈同样有带头结点的链栈和不带头结点的链栈，区别在于不带头结点的链栈的第一个结点就是栈顶结点

```c title="链栈的定义"
typedef struct SNode {
    SElemType data;
    struct SNode *next;
} SNode, *LinkStack;
```

::: tabs

@tab 带头结点

```c title="链栈的初始化"
bool InitStack(LinkStack &S) {
    S = (LinkStack)malloc(sizeof(SNode)); // 创建头结点
    if (S == NULL) // 内存分配失败
        return false; // 返回错误
    S->next = NULL; // 头结点的 next 为 NULL
    return true;
}
```

```c title="链栈的入栈"
bool Push(LinkStack &S, SElemType e) {
    LinkStack p = (LinkStack)malloc(sizeof(SNode)); // 创建新结点
    if (p == NULL) // 内存分配失败
        return false; // 返回错误
    p->data = e; // 新结点的数据域为 e
    p->next = S->next; // 新结点的 next 指向头结点的 next
    S->next = p; // 头结点的 next 指向新结点
    return true;
}
```

```c title="链栈的出栈"
bool Pop(LinkStack &S, SElemType &e) {
    if (S->next == NULL) // 栈空
        return false; // 返回错误
    LinkStack p = S->next; // p 指向栈顶结点
    e = p->data; // e 为栈顶结点的数据域
    S->next = p->next; // 头结点的 next 指向栈顶结点的 next
    free(p); // 释放栈顶结点
    return true;
}
```

```c title="链栈的取栈顶元素"
bool GetTop(LinkStack S, SElemType &e) {
    if (S->next == NULL) // 栈空
        return false; // 返回错误
    e = S->next->data; // e 为栈顶结点的数据域
    return true;
}
```

```c title="链栈的判空"
bool Empty(LinkStack S) {
    return S->next == NULL;
}
```

@tab 不带头结点

```c title="链栈的初始化"
bool InitStack(LinkStack &S) {
    S = NULL; // 头结点为空
    return true;
}
```

```c title="链栈的入栈"
bool Push(LinkStack &S, SElemType e) {
    LinkStack p = (LinkStack)malloc(sizeof(SNode)); // 创建新结点
    if (p == NULL) // 内存分配失败
        return false; // 返回错误
    p->data = e; // 新结点的数据域为 e
    p->next = S; // 新结点的 next 指向头结点
    S = p; // 头结点指向新结点
    return true;
}
```

```c title="链栈的出栈"
bool Pop(LinkStack &S, SElemType &e) {
    if (S == NULL) // 栈空
        return false; // 返回错误
    LinkStack p = S; // p 指向栈顶结点
    e = p->data; // e 为栈顶结点的数据域
    S = p->next; // 头结点指向栈顶结点的 next
    free(p); // 释放栈顶结点
    return true;
}
```

```c title="链栈的取栈顶元素"
bool GetTop(LinkStack S, SElemType &e) {
    if (S == NULL) // 栈空
        return false; // 返回错误
    e = S->data; // e 为栈顶结点的数据域
    return true;
}
```

```c title="链栈的判空"
bool Empty(LinkStack S) {
    return S == NULL;
}
```

:::