---
title: 函数
date: 2025-05-07
icon: calculator
order: 9
category:
  - 数学
  - 考研
  - 高数
tag:
  - 零基础
---

## 幂函数

1. 称 $y = x^\mu (a \neq 0)$ 为幂函数，其中 $\mu$ 为实数

2. 常用的幂函数有 $y = x$， $y = x^2$， $y = \sqrt{x}$， $y = x^3$， $y = \sqrt[3]{x}$， $y = \frac{1}{x}$

## 指数函数

1. 称 $y = a^x (a > 0, a \neq 1)$ 为指数函数，其中 $a$ 为常数

2. 常用的指数函数： $y = e^x$

3. 指数运算法则（其中 $a\text{、}b$ 为正实数, $\alpha\text{、}\beta$ 为任意实数）

$$

\begin{aligned}

a^\alpha \cdot a^\beta = a^{\alpha + \beta} \\ 
\\
\frac{a^\alpha}{a^\beta} = a^{\alpha - \beta} \\
\\
a^\alpha \cdot b^\alpha = (ab)^\alpha \\
\\
a^{\alpha \beta} = (a^\alpha)^{\beta} \\
\\
a^{-\alpha} = \frac{1}{a^\alpha} \\
\\
\Big(\frac{a}{b}\Big)^{\alpha} = \frac{a^\alpha}{b^\alpha}

\end{aligned}

$$

## 对数函数

1. 称 $y = \log_a x (a > 0, a \neq 1)$ 为对数函数，其中 $a$ 为常数，$x > 0$，他是指数函数 $y = a^x$ 的反函数

2. 常用的对数函数： $y = \ln x$（自然对数 $\ln x = \log_e x$ ，其中 $e \approx 2.7$）

3. 对数运算法则 

$$

\begin{array}{c}

\log_a M + \log_a N = \log_a MN \\
\\
\log_a \frac{M}{N} = \log_a M - \log_a N \\
\\
\log_a M^n = n \log_a M \\
\\
\frac{1}{n} \log_a M = \log_a \sqrt[n]{M} \text{（幂的对数等于对数的倍数）} \\
\\
\log_a 1 = 0 \\
\\
\log_a a = 1 \\

\end{array}

$$

## 对称问题

点、函数图像和方程曲线在几种常见的中心对称、轴对称变换下的情况

| 对称轴（中心） | 点 $P(x, y)$ | 函数 $y = f(x)$ | 方程$(x, y) = 0$ | 备注 |
| :----: | :----: | :----: | :----: | :----: |
| $x = 0$ | $(-x, y)$ | $y = f(-x)$ | $f(-x, y) = 0$ | |
| $y = 0$ | $(x, -y)$ | $y = -f(x)$ | $f(x, -y) = 0$ |  |
| $(0, 0)$ | $(-x, -y)$ | $y = -f(-x)$ | $f(-x, -y) = 0$ |  |
| $y = x$ | $(y, x)$ | $x = f(y)$ | $f(x, y) = 0$ | 反函数沿此对称 |
| $y = -x$ | $(-y, -x)$ | $x = -f(-y)$ | $f(-y, -x) = 0$ | |
| $x = m$ | $(2m-x, y)$ | $y = f(2m-x)$ | $f(2m-x, y) = 0$ | |
| $y = n$ | $(x, 2n-y)$ | $y = 2n - f(x)$ | $f(x, 2n-y) = 0$ | |
| $(m, 0)$ | $(2m - x, -y)$ | $y = -f(2m - x)$ | $f(2m - x, -y) = 0$ |  |
| $(0, n)$ | $(-x, 2n - y)$ | $y = 2n - f(-x)$ | $f(-x, 2n - y) = 0$ |  |
| $(m, n)$ | $(2m - x, 2n - y)$ | $y = 2n - f(2m - x)$ | $f(2m - x, 2n - y) = 0$ |  |
| $y = x + b$ | $(y - b, x + b)$ | $x = f(y - b) - b$ | $(y - b, x + b) = 0$ |  |
| $y = -x + b$ | $(-y + b, -x + b)$ | $x = -f(-y + b) + b$ | $(-y + b, -x + b) = 0$ |  |

## 三角函数

1. $y = \sin x$

2. $y = \cos x$

3. $y = \tan x = \frac{\sin x}{\cos x}$

## 反三角函数

1. $y = \sin x$ 的反函数 $x = \arcsin y$

当 $2n\pi - \frac{\pi}{2} < x < 2n\pi + \frac{\pi}{2}$ 时，$y = \sin x$ 单调递增；当 $2n\pi + \frac{\pi}{2} < x < 2(n + 1) \pi - \frac{\pi}{2}$ 时，$y = \sin x$ 单调递减，所以当 $n = 0, \pm 1, \pm 2, \cdots$ 时，$x$ 可以分割为一段段长度为 $\pi$ 的区间，使得 $y = \sin x$ 在每个小区间内单调递增或单调递减，取 $-\frac{\pi}{2} \leq x \leq \frac{\pi}{2}$ 这一段所决定的反函数，叫做 $y = \sin x$ 的反函数的主值，用符号 $x = \arcsin y$ 表示（arc 是英文中的弧长，arcsin 就是其正弦值等于 y 的弧长，因为角度是用单位圆上的弧长来度量的）

2. $y = \cos x$ 的反函数 $x = \arccos y$

当 $2n\pi < x < (2n + 1)\pi$ 时，$y = \cos x$ 单调递减；当 $(2n + 1)\pi < x < (2n + 2) \pi$ 时，$y = \cos x$ 单调递增，所以当 $n = 0, \pm 1, \pm 2, \cdots$ 时，$x$ 可以分割为 $[m\pi, (m + 1)\pi](m \in Z)$ 这样一段段区间，使得 $y = \cos x$ 在每个小区间内单调递增或单调递减，我们通常取 $0 \leq x \leq \pi$ 这一段所决定的反函数，叫做 $y = \cos x$ 的反函数的主值，用符号 $x = \arccos y$ 表示

3. $y = \tan x$ 的反函数 $x = \arctan y$

曲线 $y = \tan x$ ，以 $\big(n\pi - \frac{\pi}{2}, n\pi + \frac{\pi}{2}\big)(n \in Z)$ 分成逐段递增的曲线分支，取 $-\frac{\pi}{2} < x < \frac{\pi}{2}$ 这一支作为 $y = \tan x$ 的反函数的主值，用符号 $x = arctan y$ 表示

- [其他相关常用结论](../Other.md)

## 函数的一些变换规则

假设有函数 $y = f(x)$ 有以下变换
$$

y = f(x) 
\begin{cases}

y = f(x) \pm y_0, \text{（函数上下平移距离 k ，上加下减）} \\
y = f(x \pm x_0), \text{（函数左右平移距离 k ，左加右减）} \\
y = kf(x)(k > 0), \text{（函数垂直伸长 k 倍）} \\
y = f(kx)(k > 0), \text{（函数水平伸长至 $\frac{1}{k}$ 倍）} \\

\end{cases}

$$

