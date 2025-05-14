---
title: 数列及其单调性
icon: calculator
order: 13
category:
  - 数学
  - 考研
  - 高数
tag:
  - 零基础
---

## 数列的概念

对于每个 $n \in N_+$ ，如果按照某一法则，对应着一个确定的实数 $x_n$，这些实数 $x_n$ 按照下标 $n$ 从小到大排列的一个序列

$$
x_1, x_2, x_3, \cdots, x_n, \cdots
$$

这个序列称为数列，简记为 $\{x_n\}$

数列 $\{x_n\}$ 可看作自变量为正整数 $n$ 的函数

$$

x_n = f(n), n \in N_+

$$

当自变量 $n$ 取 $1, 2, 3, \cdots$ 一切正整数时，对应的函数值就排列成数列 $\{x_n\}$

## 等差数列

首项 $a_1$，公差 $d(d \neq 0)$ 的数列 $a_1, a_1 + d, a_1 + 2d, \cdots, a_1 + (n - 1)d, \cdots$ 称为等差数列

1. 通项公式 $a_n = a_1 + (n - 1)d$

2. 前 $n$ 项的和：$S_n = \frac{n}{2}\big(2a_1 + (n - 1)d\big) = na_1 + \frac{n(n - 1)}{2}d = \frac{n}{2}(a_1 + a_n)$

## 等比数列

首项为 $a_1$，公比为 $q(q \neq 0)$ 的数列 $a_1, a_1q, a_1q^2, \cdots, a_1q^{n-1}, \cdots$ 称为等比数列

1. 通项公式 $a_n = a_1q^{n - 1}$

2. 前 $n$ 项和 $S_n = \begin{cases}na_1, &q = 1, \\ \\ \frac{a_1(1 - q^n)}{1 - q}, &q \neq 1, \\ \end{cases}$

::: details 证明

$$
\begin{cases}

&S_n = a_1 + a_1q + a_1q^2 + \cdots + a_1q^{n - 1} &\text{\textcircled{1}} \\

&qS_n = a_1q + a_1q^2 + a_1q^3 + \cdots + a_1q^n &\text{\textcircled{2}} \\

&S_n - qS_n = a_1 - a_1q^n &\text{由 \textcircled{2} - \textcircled{1} 得} \\

&S_n(1 - q) = a_1 - a_1q^n &\text{即} \\

&S_n = \frac{a_1(1 - q^n)}{1 - q} &\text{化简得}

\end{cases}
$$

:::

3. 常用 $1 + q + q^2 + \cdots + q^{n - 1} = \frac{1 - q^n}{1 - q}(q \neq 1)$ 

## 单调数列

若对所有正整数 $n$ ，有 $a_{n + 1} \geq a_n (a_{n + 1 \leq a_n})$ ，则称数列 $\{a_n\}$ 为单调不减（不增）数列，将 $\geq(\leq)$ 换成 $>(<)$ ，则称为单调递增（递减）数列，单调递增数列与单调递减数列统称为单调数列

## 处理数列 $\{a_n\}$ 的一些需要考虑地方

1. $S_n$ 与 $a_n$ 的关系： $a_n = S_n - S_{n - 1}$

2. 变形手段 （可能和其他的存在可裂项的规则结合，例如：$\ln$）
  - 错位相消法（前面证明等比数列求和公式的证明）
  - 裂项相消法（将一项拆成多项如：$\frac{1}{n(n + 1)} = \frac{1}{n} - \frac{1}{n + 1}$）
  - 乘除相消法（假设题目中存在 $\frac{a_n}{a_{n - 1}} = c$ 的关系，对于求解 $a_n$ 可以变换为 $a_n = \frac{a_n}{a_{n - 1}} \cdot \frac{a_{n - 1}}{a_{n - 2}} \cdots a_1$ 以此类推可以推出一长串的等式进行处理）