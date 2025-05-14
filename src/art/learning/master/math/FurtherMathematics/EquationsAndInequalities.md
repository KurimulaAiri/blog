---
title: 方程与不等式
icon: calculator
order: 5
category:
  - 数学
  - 考研
  - 高数
tag:
  - 零基础
---

## 一元二次方程及其解

$ax^2 + bx + c = 0 ( a \neq 0 )$ 为一元二次方程，记 $\Delta = b^2 - 4ac$

- 当 $\Delta > 0$ 时，方程有两个不相等的实数根， $x_1 = \frac{-b + \sqrt{\Delta}}{2a}, x_2 = \frac{-b - \sqrt{\Delta}}{2a}$

- 当 $\Delta = 0$ 时，方程有两个相等的实数根， $x_1 = x_2 = \frac{-b}{2a}$

- 当 $\Delta < 0$ 时， $\sqrt{\Delta} = \sqrt{-\Delta \cdot i^2} = \sqrt{-\Delta} i$，方程有两个不相等的共轭复数根， $x_{1,2} = \frac{-b \pm \sqrt{-\Delta}i}{2a}$

## 一元 $n$ 次方程根与系数的关系

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

### 不等式的三条性质

- 若$a > b$，则 $a + c > b + c$;

- 若$a > b$，$c > 0$，则 $ac > bc$;

- 若$a > b$，$c < 0$，则 $ac < bc$;

### 几种基本不等式

1. 若$a > 0$，则$|x| > a \Leftrightarrow x > a \text{ 或 } x < -a$;

2. 若$a < 0$，则$|x| > a \Leftrightarrow -a < x < a$;

3. 若$b > a > 0$，则$a \le |x| < b \Leftrightarrow a \le x < b \text{ 或 } -b < x \le -a$

4. $|ax + b| > c (c > 0)$ 可转化为 1. ; $|ax + b| < c (c > 0)$ 可转化为 2. ;

5. 均值不等式：$\frac{2}{\frac{1}{a} + \frac{1}{b}} \le \sqrt{ab} \le \frac{a + b}{2} \le \sqrt{\frac{a^2 + b^2}{2}} (a, b > 0)$

上面的式子分别代表了$a, b$ 的调和平均值、算术平均值、几何平均值、均方根 （等号仅在 $a = b$ 时成立）

6. 三角不等式：$\bigm||a| - |b|\bigm| \le |a \pm b| \le |a| + |b|$ （前面等号成立的条件是$ab \le 0$，后面等号成立的条件是：$ab \ge 0$，同时这个条件可以和前面的对应不等式互推）

7. 柯西不等式：设$a_1, a_2, \cdots, a_n$ 为 $n$ 个正数，$b_1, b_2, \cdots, b_n$ 为 $n$ 个正数，则：
$$
\begin{array}{c}
\left( \sum_{i = 1}^n a_i^2 \right) \left( \sum_{i = 1}^n b_i^2 \right) \ge \left(\sum_{i = 1}^n a_i b_i\right)^2 \\
\\
\text{ 等同于 } \\
\\
\sqrt{\left( \sum_{i = 1}^n a_i^2 \right)} \sqrt{\left( \sum_{i = 1}^n b_i^2 \right)} \ge \sum_{i = 1}^n a_i b_i \\
\\
\text{ 在向量中实际上就是模长的乘积大于向量的点积 } \\
\\
\|a_1 + a_2 + \cdots + a_n\| \cdot \|b_1 + b_2 + \cdots + b_n\| \ge \|a_1 b_1 + a_2 b_2 + \cdots + a_n b_n\| \\
\\
\text{ 之所以会大于等于是因为点积中还有一项 $\cos\theta$， $\theta$ 只有在两个向量同向时才为 1，否则小于 1} \\
\text{ 因此，模长乘积会大于等于点积 } \\
\end{array}
$$

::: details 证明

后续补充

:::

### 二次函数的不等问题

后续补充

## 补充内容

- 一般的，设一元二次方程 $ax^2 + bx + c = 0$ 的两个实根为 $x_1, x_2$，且一个大于 $m$ ，另一个小于 $m$ ，则有 $a \cdot f(m) < 0$ （其中 $f(x) = ax^2 + bx + c$ ）
