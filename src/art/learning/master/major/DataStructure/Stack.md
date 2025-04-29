---
title: 栈
icon: database
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

````markmap

# 顺序栈

````