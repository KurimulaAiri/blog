---
title: 方程与不等式
icon: calculator
order: 105
category:
  - 数学
  - 考研
tag:
  - 零基础
---

## 一元二次方程及其解

$ax^2 + bx + c = 0 ( a \neq 0 )$ 为一元二次方程，记 $\Delta = b^2 - 4ac$

- 当 $\Delta > 0$ 时，方程有两个不相等的实数根， $x_1 = \frac{-b + \sqrt{\Delta}}{2a}, x_2 = \frac{-b - \sqrt{\Delta}}{2a}$

- 当 $\Delta = 0$ 时，方程有两个相等的实数根， $x_1 = x_2 = \frac{-b}{2a}$

- 当 $\Delta < 0$ 时， $\sqrt{\Delta} = \sqrt{-\Delta \cdot i^2} = \sqrt{-\Delta} i$，方程有两个不相等的共轭复数根， $x_{1,2} = \frac{-b \pm \sqrt{-\Delta}i}{2a}$

## 一元 n 次方程根与系数的关系

设 $f(x) = a_nx^n + a_{n-1}x^{n-1} + \cdots + a_1x + a_0 = 0 ( a_n \neq 0)$ 的根为 $x_1, x_2, \cdots, x_n$，则

$$

\begin{cases}

x_1 + x_2 + \cdots + x_n = -\frac{a_{n-1}}{a_n} \\

x_1x_2 + x_1x_3 + \cdots + x_{n-1}x_n = \frac{a_{n-2}}{a_n} \\

x_1x_2x_3 + x_1x_2x_4 + \cdots + x_{n-2}x_{n-1}x_n = \frac{a_{n-3}}{a_n} \\

\cdots \\

x_1x_2 \cdots x_n = (-1)^n \cdot \frac{a_0}{a_n} \\

\end{cases}

$$

反之亦成立

常考：设 $ax^2 + bx + c = 0(a \neq 0)$ 的两个根为 $x_1, x_2$，则 $\begin{cases} x_1 + x_2 = -\frac{b}{a},\\ x_1x_2 = \frac{c}{a} \end{cases}$

## 重要不等式及其应用

不等式的三条性质

- 若$a > b$，则 $a + c > b + c$;

- 若$a > b$，$c > 0$，则 $ac > bc$;

- 若$a > b$，$c < 0$，则 $ac < bc$;

几种基本不等式

1. 若$a > 0$，则$|x| > a \Leftrightarrow x > a 或 x < -a$;

2. 若$a < 0$，则$|x| > a \Leftrightarrow -a < x < a$;

3. 若$b > a > 0$，则$a \le |x| < b \Leftrightarrow a \le x < b 或 -b < x \le -a$

4. $|ax + b| > c (c > 0)$ 可转化为 1. ; $|ax + b| < c (c > 0)$ 可转化为 2. ;

5. 均值不等式：$\frac{2}{\frac{1}{a} + \frac{1}{b}} \le \sqrt{ab} \le \frac{a + b}{2} \le \sqrt{\frac{a^2 + b^2}{2}} (a, b > 0)$

上面的式子分别代表了$a, b$ 的调和平均值、算术平均值、几何平均值、均方根

6. 三角不等式：$\bigm||a| - |b|\bigm| \le |a + b| \le |a| + |b|$