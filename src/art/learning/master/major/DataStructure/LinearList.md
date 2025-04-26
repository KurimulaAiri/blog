---
title: 线性表
icon: database
category: 
    - 数据结构
    - '408'
    - 考研
tag: 
    - c++
    - c
---

## 线性表的定义

线性表是具有**相同数据类型**的 n 个数据元素的**有限序列**，其中 n 为**表长**，当 n=0 时，称为空表，若用 L 表示线性表，则其一般表示为 $L = (a_1, a_2, \cdots , a_i, a_{i+1}, \cdots , a_n)$

这里需要注意的一些事项：

$a_i$ 的下标代表该元素在所在线性表中的第 $i$ 个位序，即第 $i$ 个元素

$a_1$ 称为**表头元素**， $a_n$ 称为**表尾元素** 

除第一个元素外，每个元素有且仅有一个**直接前驱元素**；除最后一个元素外，每个元素有且仅有一个**直接后继元素**

位序从 1 开始，数组下标从 0 开始

## 线性表的基本操作

`InitList(&L)`：初始化表。构造一个空的线性表 L ，分配内存空间

`DestroyList(&L)`：销毁操作。销毁线性表，并释放线性表 L 所占用的内存空间

`ListInsert(&L, i, e)`：插入操作。在表 L 中的第 i 个位置上插入指定元素 e
`ListDelete(&L, i, &e)`：删除操作。删除表 L 中第i个位置的元素，并用 e 返回删除元素的值

`LocateElem(L, e)`：按值查找操作。在表 L 中查找具有给定关键字值的元素

`GetElem(L, i)`：按位查找操作。获取表 L 中第 i 个位置的元素的值。

其他常用操作：
`Length(L)`：求表长。返回线性表 L 的长度，即L中数据元素的个数

`PrintList(L)`：输出操作。按前后顺序输出线性表 L 的所有元素值

`Empty(L)`：判空操作。若 L 为空表，则返回 `true` ，否则返回 `false`



**一些需要注意的点：**

- 对数据的操作（记忆思路）——创销、增删改查

- C语言函数的定义—— <返回值类型> 函数名（<参数1类型> 参数1，<参数2类型>参数2，……）

- 实际开发中，可根据实际需求定义其他的基本操作

- 函数名和参数的形式、命名都可改变（Reference:严蔚敏版《数据结构》）

- 什么时候要传入引用“&”——对参数的修改结果需要“带回来”

## 线性表的存储结构（逻辑上和物理上）

### 顺序表

#### 顺序表的定义

用顺序存储的方式实现线性表顺序存储

把逻辑上相邻的元素存储在物理位置上也相邻的存储单元中，元素之间的关系由存储单元的邻接关系来体现

具体表现为：

- 第一个元素在内存中存放的位置是`Loc(L)`

- 第二个元素在内存中存放的位置是`Loc(L)` + 数据元素大小

- 第三个元素在内存中存放的位置是`Loc(L)` + 数据元素大小 * 2

数据元素大小具体在C语言中的实现为使用`sizeof(ElemType)`函数，例如：`sizeof(int)`的输出结果为 4（字节）

对于另外一个结构体的例子：

```c
typedef struct {
    int num; // 号数
    int people; // 人数
} Customer; // 定义了一个叫做Customer的类型

int main() {
    int size = sizeof(Customer)
    printf("%d", size); // 打印得 8
}
```

#### 顺序表的实现

- 静态分配

```c
#define MaxSize 10 // 宏定义最大长度
typedef struct {
    ElemType data[MaxSize]; // 使用静态的 “ 数组 ” 存放数据元素
    int length; // 顺序表的当前长度
} SqList; // 顺序表的类型定义（静态分配方式）
```

这样进行分配会造成存储空间很大程度的浪费，因此对于长度经常变化的数据需要使用动态分配

需要注意的是，访问表的内容时，不能直接通过访问数组，因为数组内的某些数据可能存在脏数据，正规的访问方式是，通过对应的访问方法来进行访问元素

- 动态分配
```c
#define InitSize 10 // 定义初始表的长度
typedef struct {
    ElemType *data; // 指示动态分配数组的指针（第一个元素的指针）
    int MaxSize; // 定义最大长度，因为表的长度是动态的，所以需要定义最大长度来进行限制
    int length; // 当前表长
}SeqList; // 顺序表的类型定义（动态分配方式）
```

需要注意的点是：

在C语言中，用于申请内存和释放内存的两个函数是：`malloc()`和`free()`，这两个函数都需要引入`stdlib.h`这个头文件

`malloc()`函数会开辟对应参数大小的连续的内存空间

而`free()`函数则会回收这一地址，`free()`函数的参数是一个指针，它会将指针所指的对应类型的内存空间进行释放

使用示例：

```c
#include<stdlib.h>
L.data = (ElemType * ) malloc(sizeof(ElemType) * InitSize); 
// 这里malloc返回的是一个指向开辟的内存地址起始位置的指针，需要强制转换成所需的数据元素的指针
// 这样这个指针就相当于指向这片内存中存储的第一个该数据元素的位置，然后将其赋值给表中的data
```

完整的链表方法演示：

```c
#include<stdlib.h>

#define InitSize 10 // 定义初始表的长度
typedef struct {
    int *data; // 指示动态分配数组的指针（第一个元素的指针）,这里假设是int类型
    int MaxSize; // 定义最大长度，因为表的长度是动态的，所以需要定义最大长度来进行限制
    int length; // 当前表长
}SeqList; // 顺序表的类型定义（动态分配方式）

void InitList(SeqList &L) {
    L.data = (int* ) malloc(sizeof(int) * InitSize); // 开辟空间
    L.MaxSize = InitSize; // 初始化最大长度
    L.length = 0; // 初始化表长
}

void IncreaseSize(SeqList &L, int len) {
    int *p = L.data; // 保存旧表的首地址
    L.data = (int* ) malloc(sizeof(int) * (L.MaxSize + len)); // 开辟新的空间
    for (int i = 0; i < L.length; i++) {
        L.data[i] = p[i]; // 将旧表中的数据复制到新表中
    }
    L.MaxSize = L.MaxSize + len; // 更新最大长度
    free(p); // 释放旧表的空间
}

int main() {
    SeqList L; // 声明一个顺序表
    InitList(L); // 初始化顺序表
    // ……随便插入几条数据
    IncreaseSize(L, 5); // 扩展顺序表
    return 0;
}
```

显而易见的，动态顺序表对于扩容有着强大的优势

#### 顺序表的特点

- **优点**
  - 数据的随机访问：即可以在$O(1)$时间内找到第 i 个元素
  
  - 存储密度高：每个节点只存储数据元素
  
- **缺点**
- 扩展容量不方便：采用静态存储无法拓展容量，而采用动态存储则会耗费大量时间复制原本的数据
  
- 插入、删除操作不方便，需要移动大量元素
  
- 要求大量连续的存储空间

#### 顺序表的插入

需要实现的功能是：

`ListInsert(&L, i, e)`：插入操作。在表 L 中的第 i 个位置上插入指定元素 e

对于如下例子，顺序表进行插入操作：

```c
#define MaxSize 10 // 最大长度
typedef struct { // 结构
	int data[MaxSize]; // 静态数组，这里假设是int数组
    int length; // 当前表长
}SqList; // 定义顺序表类型

void InitList(SqList &L) { // 初始化顺序表
    for (int i = 0; i < MaxSize; i++) {
        L.data[i] = 0; // 将所有元素置为0
    }
}

/*
 * 需要注意的是这里的 i 是从1开始的，因为其表示的是插入的位置，而不是数组的下标
 *
 */
bool ListInsert(SqList &L,int i,int e) {
    if (i < 1 || i > L.length + 1) { // 判断插入位置是否合法,是否位于表尾之后
        return false; // 不合法则返回false
    }
    if (L.length >= MaxSize) { // 判断顺序表是否已满
        return false; // 已满则返回false
    }
    for (int j = L.length; j >= i; j--) { // 从最后一个元素开始，依次后移
        L.data[j] = L.data[j - 1];
    }
    L.data[i - 1] = e; // 插入元素
    L.length++; // 表长加1
    return true; // 插入成功
}

int main() {
    SqList L; // 声明一个顺序表
    InitList(L); // 初始化顺序表
    ListInsert(&L, 3, 10); // 在第3个位置插入10
    return 0;
}
```

对于插入语句的时间复杂度，有几种情况：

- 最好情况：$O(1)$，即插入位置为表尾，不需要移动元素

- 最坏情况：$O(n)$，即插入位置为表头，需要移动表中所有元素

- 平均情况：假设插入到表中任意位置的概率是相同的，即 $P(i) = \frac{1}{n+1}$，则平均情况时间复杂度为：

$$
  \begin{aligned}
  &\sum_{i=1}^{n+1} P(i) \times O(i) \\
  =&\sum_{i=1}^{n+1} \frac{1}{n+1} \times O(i) \\
  =&\frac{1}{n+1} \times \sum_{i=1}^{n+1} O(i) \\
  =&\frac{1}{n+1} \times \sum_{i=1}^{n+1} i \\
  =&\frac{1}{n+1} \times \frac{(n+1) \times n}{2} \\
  =&\frac{n(n+1)}{2(n+1)} \\
  =&\frac{n}{2}
  \end{aligned}
$$

  因此平均情况时间复杂度为 $O(n)$

#### 顺序表的删除

需要实现的功能是：

`ListDelete(&L, i, &e)`：删除操作。删除表 L 中第 i 个位置的元素，并用 e 返回删除元素的值

同样使用上面的数据表：

```c
#define MaxSize 10 // 最大长度
typedef struct { // 结构
    int data[MaxSize]; // 静态数组，这里假设是int数组
    int length; // 当前表长
}SqList; // 定义顺序表类型

void InitList(SqList &L) { // 初始化顺序表
    for (int i = 0; i < MaxSize; i++) {
        L.data[i] = 0; // 将所有元素置为0
    }
}

/*
 * 需要注意的是这里的 i 是从1开始的，因为其表示的是删除的位置，而不是数组的下标
 */
bool ListDelete(SqList &L, int i, int &e) {
    if (i < 1 || i > L.length) { // 判断删除位置是否合法
        return false; // 不合法则返回false
    }
    e = L.data[i - 1]; // 取出删除元素
    for (int j = i; j < L.length; j++) { // 从删除位置开始，依次前移
        L.data[j - 1] = L.data[j];
    }
    L.length--; // 表长减1
    return true; // 删除成功
}

int main() {
    SqList L; // 声明一个顺序表
    InitList(L); // 初始化顺序表
    // ... 假设已经插入了一些元素
    int e; // 定义一个变量，用于存储删除的元素
    ListDelete(&L, 3, e); // 删除第3个元素
    return 0;
}
```

对于删除语句的时间复杂度，同样有几种情况：

- 最好情况：$O(1)$，即删除位置为表尾，不需要移动元素
- 最坏情况：$O(n)$，即删除位置为表头，需要移动表中所有元素
- 平均情况：假设删除到表中任意位置的概率是相同的，即 $P(i) = \frac{1}{n}$，$i=1$ 时， 需要循环 $n-1$ 次……则平均情况时间复杂度为：

$$
\begin{aligned}
  &\sum_{i=1}^{n-1} P(i) \times O(i) \\
  =&\sum_{i=1}^{n-1} \frac{1}{n} \times O(i) \\
  =&\frac{1}{n} \times \sum_{i=1}^{n-1} O(i) \\
  =&\frac{1}{n} \times \sum_{i=1}^{n-1} (n-i) \\
  =&\frac{1}{n} \times \frac{n \times (n-1)}{2} \\
  =&\frac{n-1}{2}
  \end{aligned}
$$

  因此平均情况时间复杂度也为 $O(n)$

#### 顺序表的按位查找

需要实现的功能是：

`GetElem(L, i)`：按位查找操作。获取表L中第i个位置的元素的值。

对于静态顺序表：

```c
#define MaxSize 10 // 最大长度
typedef struct { // 结构
    int data[MaxSize]; // 静态数组，这里假设是int数组
    int length; // 当前表长
}SqList; // 定义顺序表类型

void InitList(SqList &L) { // 初始化顺序表
    for (int i = 0; i < MaxSize; i++) {
        L.data[i] = 0; // 将所有元素置为0
    }
}

/*
 * 注意这里返回的类型是数据表中的元素类型不是固定的int，而参数列表中的 i 是指元素所在的位次
 */
int GetElem(SqList L, int i) { // 按位查找操作
    if (i < 1 || i > L.length) { // 判断查找位置是否合法
        return -1; // 不合法则返回-1
    }
    return L.data[i - 1]; // 返回第i个位置的元素
}

int main() {
    SqList L; // 声明一个顺序表
    InitList(L); // 初始化顺序表
    // ... 假设已经插入了一些元素
    int e = GetElem(L, 3); // 获取第3个元素的值
    return 0;
}
```

对于动态顺序表：

```c
#define InitSize 10 // 初始分配量 10 
typedef struct { // 结构
    int *data; // 指针，指向动态分配的数组
    int MaxSize; // 最大容量
    int length; // 当前表长
}SeqList; // 定义顺序表类型

void InitList(SeqList &L) { // 初始化顺序表
    L.data = (int *)malloc(InitSize * sizeof(int)); // 为顺序表分配InitSize个int类型的空间
    L.MaxSize = InitSize; // 设置顺序表的最大容量
    L.length = 0; // 设置顺序表当前长度为0
}

/*
 * 注意这里返回的类型是数据表中的元素类型不是固定的int，而参数列表中的 i 是指元素所在的位次
 */
int GetElem(SeqList L, int i) { // 按位查找操作
    if (i < 1 || i > L.length) { // 判断查找位置是否合法
        return -1; // 不合法则返回-1
    }
    // 这里需要注意的是，指针可以使用[]运算符，即 L.data[n] 相当于 *(L.data + n * sizeof(ElemType))
    // 例如 L.data[3] 相当于 *(L.data + 3 * sizeof(ElemType)) 也就是第四个元素的起始
    return L.data[i - 1]; // 返回第i个位置的元素
}

int main() {
    SeqList L; // 声明一个顺序表
    InitList(L); // 初始化顺序表
    // ... 假设已经插入了一些元素
    int e = GetElem(L, 3); // 获取第3个元素的值    int i = LocateElem(L, e); // 查找元素e在顺序表中的位置
    return 0;
}
```

对于上述两者的时间复杂度均为 $O(1)$

由于顺序表的各个数据元素在内存中连续存放，因此可以根据起始地址和数据元素大小立刻计算得到对应位次的元素地址，并立刻定位到该元素，因此顺序表具有**随机存取**的特性

#### 顺序表的按值查找

需要实现的功能是：

`LocateElem(L, e)`：按值查找操作。在表 L 中查找具有给定关键字值的元素

以动态顺序表为例：

```c
#define InitSize 10 // 初始分配量 10
typedef struct { // 结构
    int *data; // 指针，指向动态分配的数组
    int MaxSize; // 最大容量
    int length; // 当前表长
}SeqList; // 定义顺序表类型

void InitList(SeqList &L) { // 初始化顺序表
    L.data = (int *)malloc(InitSize * sizeof(int)); // 为顺序表分配InitSize个int类型的空间
    L.MaxSize = InitSize; // 设置顺序表的最大容量
    L.length = 0; // 设置顺序表当前长度为0
}

int LocateElem(SeqList L, int e) { // 按值查找操作
    for (int i = 0; i < L.length; i++) { // 从表头开始遍历
        if (L.data[i] == e) { // 如果找到元素e [!code highlight]
            return i + 1; // 返回元素e在表中的位次
        }
    }
    return 0; // 如果没有找到元素e，则返回0
}

int main() {
    SeqList L; // 声明一个顺序表
    InitList(L); // 初始化顺序表
    // ... 假设已经插入了一些元素
    int i = LocateElem(L, 3); // 查找元素 3 在顺序表中的位置
    return 0;
}
```

对于上述代码有个问题就是对于数据元素为结构体的顺序表，不能直接使用`==`运算符对两个结构体进行比较，需要自己重新编写判断条件或者专门写一个判断方法用于判断两个相同类型的结构体是否相等，在C++中也可以通过重载运算符的方式来判断两个相同类型的结构体是否相等

在《数据结构》考试中，可以直接使用`==`，该科目不会过分要求代码是否能实际运行，主要是考察逻辑能力



对于按值查找的时间复杂度，同样也分为三种情况：

- 最好情况：顺序表中第一个元素就是要查找的元素，此时时间复杂度为 $O(1)$

- 最坏情况：顺序表中最后一个元素就是要查找的元素，此时时间复杂度为 $O(n)$

- 平均情况：顺序表中每个元素被查找的概率相同，均为 $\frac{1}{n}$，对于目标元素在第 n 位时，需要的循环次数也位 n ，因此平均循环次数就为：

$$
    \sum_{i=1}^{n} \frac{i}{n} = \frac{1}{n} \sum_{i=1}^{n} i = \frac{1}{n} \frac{n(n+1)}{2} = \frac{n+1}{2}
$$

  因此平均时间复杂度为 $O(n)$



### 链表

#### 单链表

##### 单链表的定义

线性表的链式存储也称单链表，它是指通过一组任意的存储单元来存储线性表中的数据元素。链表中的数据是以结点来表示的，每个结点的构成：元素(数据元素的映像)+指针(指示后继元素存储位置)，元素就是存储数据的存储单元，指针就是连接每个结点的地址数据。

在代码中的实现为：

```c
typedef struct LNode { // 定义节点类型
    ElemType data; // 数据域
    struct LNode *next; // 指针域
}LNode, *LinkList; // 定义 LinkList 为指向结构体 LNode 的指针类型，这里的LinkList指的是整个链表的头指针，而LNode指的是链表中的每一个节点

// 实际上，LinkList 可以直接定义为 LNode *，即直接定义一个指向结构体 LNode 的指针类型
// 但是为了区分链表的头指针和链表中的每一个节点，因此定义 LinkList 为指向结构体 LNode 的指针类型，而 LNode 为结构体类型
```

- **不带头节点**的单链表初始化

```c
typedef struct LNode { // 定义节点类型
    ElemType data; // 数据域
    struct LNode *next; // 指针域
}LNode, *LinkList; // 定义两个类型别名，LNode 为结构体类型，LinkList 为指向结构体 LNode 的指针类型

bool InitList(LinkList &L) { // 初始化链表
    L = NULL; // 头指针置空，表示链表中没有节点，链表为空
    return true;
}

int main() {
    LinkList L; // 声明一个链表
    InitList(L); // 初始化链表
    return 0;
}
```

- **带头节点**的单链表初始化

```c
typedef struct LNode { // 定义节点类型
    ElemType data; // 数据域
    struct LNode *next; // 指针域
}LNode, *LinkList; // 定义两个类型别名，LNode 为结构体类型，LinkList 为指向结构体 LNode 的指针类型

bool InitList(LinkList &L) { // 初始化链表
    L = (LinkList)malloc(sizeof(LNode)); // 为头节点分配内存空间
    // 头节点本身不存储数据，因此 data 域可以不赋值
    if (L == NULL) // 判断是否分配内存成功
        return false; // 分配失败，返回 false
    L->next = NULL; // 头节点的指针域置空，表示链表中没有节点，链表为空
    return true;
}

int main() {
    LinkList L; // 声明一个链表
    InitList(L); // 初始化链表
    return 0;
}
```

##### 单链表的插入

需要实现的功能：

`ListInsert(&L, i, e)`：插入操作。在链表的第 i 个位置插入指定元素 e 

- **带头节点**

```c
typedef struct LNode { // 定义节点类型
    ElemType data; // 数据域
    struct LNode *next; // 指针域
}LNode, *LinkList; // 定义两个类型别名，LNode 为结构体类型，LinkList 为指向结构体 LNode 的指针类型

bool InitList(LinkList &L) { // 初始化链表
    L = (LinkList)malloc(sizeof(LNode)); // 为头节点分配内存空间
    // 头节点本身不存储数据，因此 data 域可以不赋值
    if (L == NULL) // 判断是否分配内存成功
        return false; // 分配失败，返回 false
    L->next = NULL; // 头节点的指针域置空，表示链表中没有节点，链表为空
    return true; // 分配成功，返回 true
}

bool ListInsert(LinkList &L, int i, ElemType e) { // 在链表的第 i 个位置插入指定元素 e
    if (i < 1) // 判断插入位置是否合法
        return false; // 插入位置不合法，返回 false
    LNode *p = L; // p 指向头节点
    int j = 0; // j 为计数器，记录当前扫描到的位置
    while (p != NULL && j < i - 1) { // 遍历链表，直到 p 指向第 i - 1 个元素或者 p 为空
        p = p->next; // p 指向下一个节点
        j++; // 计数器 j 自增 1
    }
    if (p == NULL) // i 值不合法，链表中不存在第 i 个元素
        return false; // 返回 false
    LNode *s = (LinkList)malloc(sizeof(LNode)); // 为插入的新节点分配内存空间
    s->data = e; // 将数据域置为 e
    s->next = p->next; // 将插入节点的指针域指向第 i 个节点
    p->next = s; // 将第 i - 1 个节点的指针域指向插入节点
    return true; // 插入成功，返回 true
}

```

最坏时间复杂度：$O(n)$

- **不带头节点**

```c
typedef struct LNode { // 定义节点类型
    ElemType data; // 数据域
    struct LNode *next; // 指针域
}LNode, *LinkList; // 定义两个类型别名，LNode 为结构体类型，LinkList 为指向结构体 LNode 的指针类型

bool InitList(LinkList &L) { // 初始化链表
    L = NULL; // 头指针置空，表示链表中没有节点，链表为空
    return true;
}

bool ListInsert(LinkList &L, int i, ElemType e) { // 在链表的第 i 个位置插入指定元素 e
    if (i < 1) // 判断插入位置是否合法
        return false; // 插入位置不合法，返回 false
    // 由于没有头节点，因此插入位置 i 为 1 时需要进行特殊处理 [!code ++]
    if (i == 1) { // [!code ++]
        LNode *s = (LinkList)malloc(sizeof(LNode)); // 为插入的新节点分配内存空间 [!code ++]
        s->data = e; // 将数据域置为 e [!code ++]
        s->next = L; // 将插入节点的指针域指向头节点 [!code ++]
        L = s; // 将头节点指向插入节点 [!code ++]
        return true; // 插入成功，返回 true [!code ++]
    } // [!code ++]
    LNode *p; // 声明节点 
    int j = 1; // j 为计数器，记录当前扫描到的位置，这里 j 从 1 开始，记录为第一个节点，因为没有头节点 [!code highlight]
    p = L; // p 指向第一个节点
    while (p != NULL && j < i - 1) { // 遍历链表，直到 p 指向第 i - 1 个元素或者 p 为空
        p = p->next; // p 指向下一个节点
        j++; // 计数器 j 自增 1
    }
    if (p == NULL) // i 值不合法，链表中不存在第 i 个元素
        return false; // 返回 false
    LNode *s = (LinkList)malloc(sizeof(LNode)); // 为插入的新节点分配内存空间
    s->data = e; // 将数据域置为 e
    s->next = p->next; // 将插入节点的指针域指向第 i 个节点
    p->next = s; // 将第 i - 1 个节点的指针域指向插入节点
    return true; // 插入成功，返回 true
}

```

最坏时间复杂度：$O(n)$

- **后插**

`InsertNextNode(*p, e)`：给定一个节点 p，插入新节点，新节点的元素为 e，新节点插入到 p 的下一个节点的位置

```c
typedef struct LNode { // 定义节点类型
    ElemType data; // 数据域
    struct LNode *next; // 指针域
}LNode, *LinkList; // 定义两个类型别名，LNode 为结构体类型，LinkList 为指向结构体 LNode 的指针类型

bool InsertNextNode(LNode *p, ElemType e) { // 给定一个节点 p，插入新节点，新节点的元素为 e，新节点插入到 p 的下一个节点的位置
    if (p == NULL) // 判断 p 是否为空
        return false; // p 为空，返回 false
    LNode *s = (LNode *)malloc(sizeof(LNode)); // 为插入的新节点分配内存空间
    if (s == NULL) // 判断是否分配内存成功
        return false; // 分配失败，返回 false
    s->data = e; // 将数据域置为 e
    s->next = p->next; // 将插入节点的指针域指向第 i 个节点
    p->next = s; // 将第 i - 1 个节点的指针域指向插入节点
    return true; // 插入成功，返回 true
}

```

时间复杂度：$O(1)$

完成后插操作后可以直接将上面的部分代码替换成后插代码的函数

```c
// 以带头节点的链表为例
typedef struct LNode { // 定义节点类型
    ElemType data; // 数据域
    struct LNode *next; // 指针域
}LNode, *LinkList; // 定义两个类型别名，LNode 为结构体类型，LinkList 为指向结构体 LNode 的指针类型

bool InitList(LinkList &L) { // 初始化链表
    L = (LinkList)malloc(sizeof(LNode)); // 为头节点分配内存空间
    if (L == NULL) // 判断是否分配内存成功
        return false; // 分配失败，返回 false
    L->next = NULL; // 头节点的指针域置空，表示链表中没有节点，链表为空
    return true; // 分配成功，返回 true
}

bool InsertNextNode(LNode *p, ElemType e) { // 给定一个节点 p，插入新节点，新节点的元素为 e，新节点插入到 p 的下一个节点的位置
    if (p == NULL) // 判断 p 是否为空
        return false; // p 为空，返回 false
    LNode *s = (LNode *)malloc(sizeof(LNode)); // 为插入的新节点分配内存空间
    if (s == NULL) // 判断是否分配内存成功
        return false; // 分配失败，返回 false
    s->data = e; // 将数据域置为 e
    s->next = p->next; // 将插入节点的指针域指向第 i 个节点
    p->next = s; // 将第 i - 1 个节点的指针域指向插入节点
    return true; // 插入成功，返回 true
}

bool ListInsert(LinkList &L, int i, ElemType e) { // 在链表的第 i 个位置插入指定元素 e
    if (i < 1) // 判断插入位置是否合法
        return false; // 插入位置不合法，返回 false
    LNode *p = L; // p 指向头节点
    int j = 0; // j 为计数器，记录当前扫描到的位置
    while (p != NULL && j < i - 1) { // 遍历链表，直到 p 指向第 i - 1 个元素或者 p 为空
        p = p->next; // p 指向下一个节点
        j++; // 计数器 j 自增 1
    }
    return InsertNextNode(p, e); // 调用后插函数，将新节点插入到第 i - 1 个节点之后，返回插入成功与否 [!code ++]

    if (p == NULL) // i 值不合法，链表中不存在第 i 个元素 [!code --]
        return false; // 返回 false [!code --]
    LNode *s = (LinkList)malloc(sizeof(LNode)); // 为插入的新节点分配内存空间 [!code --]
    s->data = e; // 将数据域置为 e [!code --]
    s->next = p->next; // 将插入节点的指针域指向第 i 个节点 [!code --]
    p->next = s; // 将第 i - 1 个节点的指针域指向插入节点 [!code --]
    return true; // 插入成功，返回 true [!code --]
}

```

- **前插**

前插顾名思义是在指定位置的元素的前一位插入新的元素，这里给出两种方法

​		第一种：`InsertPriorNode(&L ,*p, e)` 这里通过传入头指针，然后对整个列表进行遍历，找到所需元素位置的前一位元素，然后进行后插操作，时间复杂度为 $O(n)$ 

​		第二种：`InsertPriorNode(*p, e)` 这里提供另一种思路，在传入节点后新建一个节点，将旧节点数据复制到新节点上，并将传入的数据存入旧节点，逻辑上实现了前插操作，时间复杂度为 $O(1)$

:::tabs 

@tab 当传入为数值时（ElemType）

```c
bool InsertPriorNode(LNode *p, ElemType e) { // 在指定节点 p 的前一位插入新节点，新节点的元素为 e
    if (p == NULL) // 判断 p 是否为空
        return false; // p 为空，返回 false
    LNode *s = (LNode *)malloc(sizeof(LNode)); // 为插入的新节点分配内存空间
    if (s == NULL) // 判断是否分配内存成功
        return false; // 分配失败，返回 false
    s->data = p->data; // 将新节点的数据域置为 p 的数据域
    p->data = e; // 将 p 的数据域置为 e
    s->next = p->next; // 将新节点的指针域指向 p 的下一个节点
    p->next = s; // 将 p 的指针域指向新节点
    return true; // 插入成功，返回 true
}
```

@tab 当传入为节点时（Node）

```c
bool InsertPriorNode(LNode *p, LNode *s) { // 在指定节点 p 的前一位插入新节点，新节点为 s
    if (p == NULL || s == NULL) // 判断 p 和 s 是否为空
        return false; // p 或 s 为空，返回 false
    s->next = p->next; // 将新节点的指针域指向 p 的下一个节点
    p->next = s; // 将 p 的指针域指向新节点
    ElemType tmp = p->data; // 将 p 的数据域暂存
    p->data = s->data; // 将 p 的数据域置为 s 的数据域
    s->data = tmp; // 将 s 的数据域置为 p 的数据域
    return true; // 插入成功，返回 true
}
```

:::



##### 单链表的删除

对于删除，只讨论带头节点的情况

需要实现的功能：

`ListDelete(&L, i, &e)`：删除操作。删除表 L 中第 i 个位置的元素，并返回删除元素的值，时间复杂度为 $O(n)$

`ListDelete(*p)`：删除操作。删除指定节点 p ，时间复杂度为 $O(1)$

:::tabs

@tab 删除指定位置元素（i）

```c
bool ListDelete(LinkList &L, int i, ElemType &e) { // 删除链表 L 中第 i 个位置的元素，并返回删除元素的值
    if (i < 1) // 判断删除位置是否合法
        return false; // 删除位置不合法，返回 false
    LNode *p = L; // p 指向头节点
    int j = 0; // j 为计数器，记录当前扫描到的位置
    while (p != NULL && j < i - 1) { // 遍历链表，直到 p 指向第 i - 1 个元素或者 p 为空
        p = p->next; // p 指向下一个节点
        j++; // 计数器 j 自增 1
    }
    if (p == NULL) // i 值不合法，链表中不存在第 i 个元素
        return false; // 返回 false
    LNode *q = p->next; // q 指向第 i 个节点
    p->next = q->next; // 将第 i - 1 个节点的指针域指向第 i + 1 个节点
    e = q->data; // 将删除的元素赋值给 e
    free(q); // 释放第 i 个节点
    return true; // 删除成功，返回 true
}
```

@tab 删除指定节点（Node）（除最后一个节点外）

```c
bool ListDelete(LNode *p) { // 删除指定节点 p
    if (p == NULL) // 判断 p 是否为空
        return false; // p 为空，返回 false
    LNode *q = p->next; // q 指向第 i 个节点
    p->data = q->data; // 将删除的元素赋值给 e （这里需要注意，如果删除的元素是最后一个元素，这边会报错，对于这种情况只能从头开始遍历进行删除操作）[!code warning]
    p->next = q->next; // 将第 i - 1 个节点的指针域指向第 i + 1 个节点
    free(q); // 释放第 i 个节点
    return true; // 删除成功，返回 true
}
```

:::



##### 单链表的查找

对于查找我们需要实现两个功能：

`GetElem(L, i)`：按位查找操作。获取表中第 i 个位置的元素的值

`GetElem(L, e)`：按值查找操作。查找表中是否存在含有给定值 e 的元素，若存在则返回该元素的地址，若不存在则返回 NULL

时间复杂度均为 $O(n)$

下面两种情况都是默认带头节点的情况

:::tabs

@tab 按位查找（i）

```c
LNode * GetElem(LinkList L, int i) { // 按位查找操作。获取表中第 i 个位置的元素的值
    if (i < 0) // 判断查找位置是否合法
        return NULL; // 查找位置不合法，返回 ERROR
    LNode *p = L; // p 指向头节点
    int j = 0; // j 为计数器，记录当前扫描到的位置
    while (p != NULL && j < i) { // 遍历链表，直到 p 指向第 i 个元素或者 p 为空
        p = p->next; // p 指向下一个节点
        j++; // 计数器 j 自增 1
    }
    return p; // 返回第 i 个元素
}
```

@tab 按值查找（e）

```c
int GetElem(LinkList L, ElemType e) { // 按值查找操作。查找表中是否存在含有给定值 e 的元素
    LNode *p = L->next; // p 指向头节点的下一个节点
    int i = 1; // i 为计数器，记录当前扫描到的位置
    while (p != NULL && p->data != e) { // 遍历链表，直到 p 指向含有给定值 e 的元素或者 p 为空，这里仍然会出现结构体比较的问题需要注意 [!code warning]
        p = p->next; // p 指向下一个节点
        i++; // 计数器 i 自增 1
    }
    return p; // 返回该元素
}
```

:::

有了对查找操作的封装，前面提到的插入和删除操作就可以直接调用查找操作，从而简化代码

```c
bool ListInsert(LinkList &L, int i, ElemType e) { // 在链表的第 i 个位置插入指定元素 e
    if (i < 1) // 判断插入位置是否合法
        return false; // 插入位置不合法，返回 false
    LNode *p = L; // p 指向头节点 [!code --]
    int j = 0; // j 为计数器，记录当前扫描到的位置 [!code --]
    while (p != NULL && j < i - 1) { // 遍历链表，直到 p 指向第 i - 1 个元素或者 p 为空 [!code --]
        p = p->next; // p 指向下一个节点 [!code --]
        j++; // 计数器 j 自增 1 [!code --]
    } // [!code --]
    LNode *p = GetElem(L, i - 1); // 调用查找函数， p 指向第 i - 1 个节点 [!code ++]
    return InsertNextNode(p, e); // 调用后插函数，将新节点插入到第 i - 1 个节点之后，返回插入成功与否 [!code ++]
}
```



##### 单链表的建立

这里仍然以带头节点的单链表为例

需要实现的功能是

