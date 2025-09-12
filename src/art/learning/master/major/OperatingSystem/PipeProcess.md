---
title: 管程
date: 2025-09-11
icon: 'gears'
order: 16
category: 
    - '408'
    - '操作系统'
    - 考研  
---

## 为何引入管程

在引入管程之前，进程间互斥同步的方式主要依靠信号量机制
但是信号量机制存在诸多问题：编写程序困难、易出错等

能不能设计一种机制，让程序员写程序时不需要再关注复杂的 PV 操作，让写代码更轻松呢？

1973年，Brinch Hansen 首次在程序设计语言（ Pascal ）中引入了“管程”成分——一种高级同步机制

## 管程的定义和基本特征

管程是一种特殊的软件模块，有这些部分组成：

1. 局部于管程的**共享数据结构**声明
2. 对该数据结构进行操作的**一组过程**（函数）
3. 对局部于管程的共享数据设置初始值的语句
4. 管程有一个名字

管程的基本特征：

1. 局部于管程的数据只能被局部于管程的过程所访问
2. 一个进程只有通过调用管程内的过程才能进入管程访问共享数据 :thumbsup:
3. **每次仅允许一个进程在管程内执行某个内部过程**{#red-msg} :thumbsup:

!!**感觉有点像面向对象语言中的类**!!

- **使用管程解决生产者消费者问题**

```c title='管程内容伪代码'
monitor ProducerConsumer {
    condition full, empty; // 条件变量用来实现同步（排队）管程中设置条件变量和 等待/唤醒 操作：以解决同步问题
    int count = 0; // 缓冲区中的产品数

    void insert(Item item){ // 把产品item放入缓冲区，由编译器负责实现各进程互斥地进入管程中的过程
        if(count == N) // 缓冲区满
            wait(full); // 等待缓冲区不满
        // 把产品item放入缓冲区
        count++; // 缓冲区中的产品数增加
        insert_item(item); // 把产品item放入缓冲区
        if(count == 1) // 缓冲区空
            signal(empty); // 通知消费者可以取产品了
    }

    Item remove(){ // 从缓冲区取出一个产品
        if(count == 0) // 缓冲区空
            wait(empty); // 等待缓冲区不空
        // 从缓冲区取出一个产品
        count--; // 缓冲区中的产品数减少
        Item item = remove_item(); // 从缓冲区取出一个产品
        if(count == N-1) // 缓冲区满
            signal(full); // 通知生产者可以放产品了
        return remove_item();
    }
}
```

::: code-tabs

@tab 生产者

```c
//生产者进程
producer(){
    while(true){
        // 生产一个产品
        Item item = produce();
        // 把产品放入缓冲区
        ProducerConsumer.insert(item);
    }
}
```

@tab 消费者

```c
//消费者进程
consumer(){
    while(true){
        // 从缓冲区取出一个产品
        Item item = ProducerConsumer.remove();
        // 消费产品
        consume(item);
    }
}
```

:::

引入管程的目的无非就是要更方便地实现进程互斥和同步

1. 需要在管程中定义共享数据（如生产者消费者问题的缓冲区）
2. 需要在管程中定义用于访问这些共享数据的“入口”——其实就是一些函数（如生产者消费者问题中，可以定义一个函数用于将产品放入缓冲区，再定义一个函数用于从缓冲区取出产品）
3. 只有**通过这些特定的“入口”才能访问共享数据**{#blue-msg}
4. 管程中有很多“入口”，但是**每次只能开放其中一个“入口”**{#blue-msg}，并且只能让一个进程或线程进入（如生产者消费者问题中，各进程需要互斥地访问共享缓冲区。管程的这种特性即可保证个时间段内最多只会有一个进程在访问缓冲区。**注意：这种互斥特性是由编译器负责实现的，程序员不用关心）**{#red-msg}
5. 可在管程中设置**条件变量**{#blue-msg}及 **等待/唤醒 操作**{#blue-msg}以解决同步问题。可以让一个进程或线程在条件变量上等待（此时，该进程应先释放管程的使用权，也就是让出“入口”）；可以通过唤醒操作将等待在条件变量上的进程或线程唤醒

程序员可以用某种特殊的语法定义一个管程（比如：monitor ProducerConsumer ... end monitor;）之后其他程序员就可以使用这个管程提供的特定“入口”很方便地使用实现进程 同步/互斥 了

这其实就是封装的思想

Java 中，如果用关键字 synchronized 来描述一个函数，那么这个函数同一时间段内只能被一个线程调用（注意：是对象级别的）

```java
static class monitor {

    private Item buffer[] = new Item[N];

    private int count = 0;

    // 每次只能有一个线程进入 insert 函数，如果多个线程同时调用 insert 函数，则后来者需要排队等待
    public synchronized void insert(Item item){
        while(count == N) {
            wait();
        }
        buffer[count++] = item;
        notify();
    }
    
    public synchronized Item remove(){
        while(count == 0) {
            wait();
        }
        Item item = buffer[--count];
        notify();
        return item;
    }
}
```
