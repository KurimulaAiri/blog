---
title: 队列
icon: database
order: 6
category:
  - 数据结构
  - 考研
  - '408'
  - 队列
tag:
  - c
  - c++
---

## 队列的定义

队列（Queue）是一种特殊的线性表，特殊之处在于它只允许在表的**前端(front)**进行删除操作，而在表的**后端(rear)**进行插入操作，和栈一样，队列是一种操作受限制的线性表。进行插入操作的端称为**队尾**，进行删除操作的端称为**队头**。队列中没有元素时，称为**空队列**。

队列的特点是先进先出（FIFO），即先存入队列的数据，要先取出。

## 队列的基本操作

需要实现的基本功能有这些：

`InitQueue(&Q)`：初始化队列。构造一个空队列 Q

`DestroyQueue(&Q)`：销毁队列。销毁队列 Q ，释放队列所占用的内存空间

`EnQueue(&Q,x)`：进队。若队列 Q 未满，则将 x 加入使之成为新的队尾

`DeQueue(&Q,&x)`：出队。若队列 Q 未空，则删除 Q 的队头元素，用 x 返回

`GetHead(Q,&x)`：取队头元素。若队列 Q 未空，则用 x 返回 Q 的队头元素，**和出队操作不同，取队头元素后队头指针不变，不会将队头元素从队列中删除**

`QueueEmpty(Q)`：判断队列是否为空。若队列 Q 为空，则返回 true，否则返回 false

## 队列的顺序存储结构

结构定义如下:

```c title="队列的顺序存储结构"
#define MAXSIZE 10 // 顺序队列的最大容量
typedef struct {
    QElemType data[MAXSIZE]; // 用数组存储队列
    int front; // 队头指针，记录队头元素在数组中的下标
    int rear; // 队尾指针，记录队尾元素在数组中的下标
} SqQueue; // 顺序队列类型
```

## 顺序队列的基本操作

### 顺序队列的初始化

```c title="顺序队列的初始化"
bool InitQueue(SqQueue &Q) {
    Q.front = Q.rear = 0; // 初始化队头指针和队尾指针
    return true;
}
```

### 顺序队列的判空

```c title="顺序队列的判空"
bool QueueEmpty(SqQueue Q) {
    if (Q.front == Q.rear) // 队头指针和队尾指针相等，队列为空
        return true;
    else
        return false;
}
```

### 顺序队列的入队

```c title="顺序队列的入队"
bool EnQueue(SqQueue &Q, QElemType e) {
    if ((Q.rear + 1) % MAXSIZE == Q.front) // 队满，这里之所以 +1 ，是为了防止队尾指针和队头指针相等，导致与队列判空的条件重合，所以需要牺牲一个存储空间，用这种状态来对队列判满进行判断
        return false;
    Q.data[Q.rear] = e; // 队尾指针加 1，存入元素
    Q.rear = (Q.rear + 1) % MAXSIZE; // 队尾指针加 1，取模，这边取模是为了防止队尾指针越界，并且将队尾指针重新指向空余的位置
    return true;
}
```    

因为这个循环的特性，该队列也被称为循环队列

### 顺序队列的出队

```c title="顺序队列的出队"
bool DeQueue(SqQueue &Q, QElemType &e) {
    if (Q.front == Q.rear) // 队空
        return false;
    e = Q.data[Q.front]; // 将队头元素赋值给 e
    Q.front = (Q.front + 1) % MAXSIZE; // 队头指针加 1，取模，这边取模是为了防止队头指针越界，并且将队头指针重新指向空余的位置
    return true;
}
```

### 顺序队列的取队头元素

```c title="顺序队列的取队头元素"
bool GetHead(SqQueue Q, QElemType &e) {
    if (Q.front == Q.rear) // 队空
        return false;
    e = Q.data[Q.front]; // 将队头元素赋值给 e
    Q.front = (Q.front + 1) % MAXSIZE; // 出队操作单纯删除这一句就是取队头元素了 [!code --]
    return true;
}
```

### 计算循环队列长度

```c title="计算循环队列长度"
int QueueLength(SqQueue Q) {
    return (Q.rear - Q.front + MAXSIZE) % MAXSIZE; // 队尾指针 - 队头指针 + 数组长度，取模，这边取模是为了防止队尾指针越界
}
```

### 对于一定要把队列填满的情况，即两个指针可以重合时

为了区分队满和队空的情况，就需要调整队列的结构，多增加一个 size 用来记录队列的长度，当队列满时，size == MAXSIZE，当队列空时，size == 0

修改后的队列结构如下：

```c title="修改后的队列结构"
#define MAXSIZE 10 // 顺序队列的最大容量
typedef struct {
    QElemType data[MAXSIZE]; // 用数组存储队列
    int front; // 队头指针，记录队头元素在数组中的下标
    int rear; // 队尾指针，记录队尾元素在数组中的下标
    int size; // 队列长度
} SqQueue; // 顺序队列类型
```

在这种结构下，入队出队还需要多一步对 size 的修改，入队时 size++，出队时 size--

也可以使用一个 tag 标识，标记最近一次成功的操作是入队还是出队，入队时 tag = 1，出队时 tag = 0，这样就可以不用修改 size 了

使用该方法的结构如下：

```c title="使用 tag 标识的结构"
#define MAXSIZE 10 // 顺序队列的最大容量
typedef struct {
    QElemType data[MAXSIZE]; // 用数组存储队列
    int front; // 队头指针，记录队头元素在数组中的下标
    int rear; // 队尾指针，记录队尾元素在数组中的下标
    int tag; // 标识，1 表示最近一次操作是入队，0 表示最近一次操作是出队
} SqQueue; // 顺序队列类型
```

## 关于循环队列的其他出题方式

以上情况都是在以队尾指针指向队尾元素的下一位为基础，在考试中可能会出现队尾指针直接指向队尾元素的情况

对于这种情况的出队入队操作又有不一样的情况，在操作前需要先移动指针

```c title="队尾指针直接指向队尾元素的出队入队操作"
bool EnQueue(SqQueue &Q, QElemType e) {

  Q.rear = (Q.rear + 1) % MAXSIZE; // 队尾指针加 1，取模，这边取模是为了防止队尾指针越界，并且将队尾指针重新指向空余的位置 [!code warning]

  if ((Q.rear + 1) % MAXSIZE == Q.front) // 队满，这里之所以 +1 ，是为了防止队尾指针和队头指针相等，导致与队列判空的条件重合，所以需要牺牲一个存储空间，用这种状态来对队列判满进行判断
        return false;
    Q.data[Q.rear] = e; // 队尾指针加 1，存入元素
    return true;
}

bool DeQueue(SqQueue &Q, QElemType &e) {

    Q.front = (Q.front + 1) % MAXSIZE; // 队头指针加 1，取模，这边取模是为了防止队头指针越界，并且将队头指针重新指向空余的位置 [!code warning]

    if (Q.front == Q.rear) // 队空
        return false;
    e = Q.data[Q.front]; // 将队头元素赋值给 e
    return true;
}
```

同时该情况也会导致初始化有所不同，这里队尾指针需要指向队头指针的上一位

同时判空判满的条件也需要修改，这里不过多展开

````markmap
---
markmap:
  colorFreezeLevel: 2
---

# 队列的顺序实现

## 实现思想

### 用静态数组存放元素，设置 队头/队尾 (front/rear) 指针

### 循环队列：用模运算（取余）将存储空间在逻辑上连成环状

### `Q.rear = (Q.rear + 1) % MAXSIZE;`

## 重要考点

### 如何 初始化、入队、出队

### 如何 判空、判满

### 如何 计算循环队列长度

## 分析思路

### 确定 front、rear 指针的指向

- rear 指向队尾元素后一个位置

- rear 指向队尾元素

### 确定判空判满的方法

- 牺牲一个存储单元

- 增加 size 变量记录队列长度

- 增加 tag = 0 / 1 用于标识最近一次操作是入队还是出队

- ……


````