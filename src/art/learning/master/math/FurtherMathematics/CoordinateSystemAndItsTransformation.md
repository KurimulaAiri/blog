---
title: 坐标系及其变换
date: 2025-05-14
icon: calculator
order: 14
category:
  - 数学
  - 考研
  - 高数
tag:
  - 零基础
---

## 三大坐标系

- 直角坐标系

- 极坐标系

- 参数方程体系（$\begin{cases}x = x(t), \\ \\ y = y(t), \end{cases}$）

## 直角坐标系

在平面上作两条互相垂直且有公共原点的数轴，称直角坐标系

### 坐标变换

1. 坐标系的平移

设平面上有一直角坐标系（称为旧坐标系），其原点为 $O$，坐标轴为$Ox$，$Oy$ 设平面上又有另一坐标系（称为新坐标系），其原点为 $O'$ ，坐标轴为 $O'X$ ，$O'Y$ ，设$O'X$ ，$O'Y$ 分别与 $Ox$ ，$Oy$ 平行并且正方向相同，新坐标轴可以看作将旧坐标轴经过平移而得到.设点 $O'$ 在旧坐标系中的坐标为 $(a,b)$

设平面上一点 $M$ ，它在旧坐标系中的坐标是 $(x, y)$ ，在新坐标系中的坐标是 $(X, Y)$ ，现在找出 $(x, y)$ 和 $(X, Y)$ 之间的关系

![这里是图22，后面补拍]()

从点 M 作 Ox 轴的垂线，它在 Ox 上的垂足是 P ，在 $O'X$ 轴上的垂足是 $P'$ ，则

$$

OP = x, O'P' = X, ON = a, OP = ON + NP = ON + O'P',

$$

故：

$$

x = a + X

$$

从点 $M$ 作 $Oy$ 轴的垂线，同样可得：

$$

y = b + Y

$$

于是就建立了新旧坐标之间的互换关系

$$

\begin{cases}
x = a + X, \\ \\
y = b + Y.
\end{cases}

\text{即：}

\begin{cases}
X = x - a, \\ \\
Y = y - b.
\end{cases}

$$

$(a, b)$ 是新坐标系原点 $O'$ 在旧坐标系中的坐标

2. 坐标系的旋转 :thumbsup:

设平面上有两个直角坐标系，坐标系的原点都是 $O$ ，旧坐标系的坐标轴为 $Ox$，$Oy$ ，新坐标系的坐标轴为 $OX$，$OY$ ，设由 $Ox$ 轴绕原点按逆时针方向旋转角 $\theta$ 得到 $OX$ 轴，现在要找出点 $M$ 的新、旧坐标 $(X,Y),(x,y)$ 间的关系（见图 24 ）

![这里是图24，后面补拍]()

记：

$$

|OM| = r

$$

设由 $Ox$ 轴按逆时针方向旋转到 $\overline{OM}$ 所成的角为 $\varphi$ ，由 $O'X$ 轴按逆时针方向旋转到 $\overline{OM}$ 所成的角为 $\varphi'$ ，则有：

$$

\cos{\varphi} = \frac{x}{r}, \sin{\varphi} = \frac{y}{r}.

\\

\cos{\varphi'} = \frac{X}{r}, \sin{\varphi'} = \frac{Y}{r}.

$$

而 $\theta$ 、 $\varphi'$ 、 $\varphi$ 之间的关系为：

$$

\varphi = \theta + \varphi'.

$$

由此可知，

$$

\begin{cases}
x &= r\cos{\varphi} = r\cos{\theta + \varphi'} = r\cos{\theta}\cos{\varphi'} - r\sin{\theta}\sin{\varphi'}.

\\

&= X\cos{\theta} - Y\sin{\theta}.

\\

y &= r\sin{\varphi} = r\sin{\theta + \varphi'} = r\cos{\theta}\sin{\varphi'} + r\sin{\theta}\cos{\varphi'}.

\\

&= X\sin{\theta} + Y\cos{\theta}.
\end{cases}

$$

故点 $M$ 的新、旧坐标间的关系式为：

$$

\begin{cases}
X &= x\cos{\theta} - y\sin{\theta}, \\ \\
Y &= x\sin{\theta} + y\cos{\theta}.
\end{cases}

$$

解出 $x$ 、 $y$ 与 $X$ 、 $Y$ 之间的关系：

$$

\begin{cases}
x &= X\cos{\theta} + Y\sin{\theta}, \\ \\
y &= -X\sin{\theta} + Y\cos{\theta}.
\end{cases}

$$

## 极坐标系

在平面上任取一点 $O$ ，从 $O$ 作一条射线$\overline{Ox}$，再取好一定的长度单位,这样，就建立了平面上的极坐标系，点 $O$ 称为极点，射线 $\overline{Ox}$ 称为极轴，如图26所示.

![这里是图26，后面补拍]()

这里是指狭义上的极坐标系（考研也是这个标准），即：

- $r \ge(\text{或}\gt) 0$

- $\theta \in [0, 2\pi)$

极坐标系下的曲线方程：

$$

r = r(\theta) 

\\

\text{或} 

\\

F(r, \theta) = 0 \text{（隐式表达）}

$$

### 几种常见曲线的极坐标方程

- **过点 $A(a,\alpha)$ ，倾斜角为 $\beta$ 的直线（见图 30 ）.**

![这里是图30，后面补拍]()

由 $\frac{\alpha}{\sin{[\pi - (\theta - \beta)]}} = \frac{\rho}{\sin{\alpha - \beta}}$ ，故有 $\rho = \frac{a\sin{\alpha - \beta}}{\sin{(\theta - \beta)}}$

特例：

**a.** 当 $\alpha = 0$ 时，$\rho = \frac{a\sin{\beta}}{\sin{\beta - \theta}}$ ，表示过极轴上一点 $A(a,0)$ ，倾斜角为 $\beta$ 的直线

**b.** 当 $\alpha = 0, \beta = \frac{\pi}{2}$ 时，$\rho \cos{\theta} = a$ ，表示过极轴上一点 $A(a,0)$ ，与极轴垂直的直线（此时极点到直线的距离为 $|a|$ ）

**c.** 当 $\alpha = \frac{\pi}{2}, \beta = 0$ 时，$\rho \sin{\theta} = a$ ，表示过极轴上一点 $A(a,\frac{\pi}{2})$ ，与极轴平行的直线（此时极点到直线的距离为 $|a|$ ）

- **以 $A(a, \alpha)$ 为中心，半径为 $r$ 的圆（见图 31 ）.**

![这里是图31，后面补拍]()

由 $r^2 = a^2 + \rho^2 - 2a\rho\cos{\alpha - \theta}$

特例：

**a.** 当 $\alpha = 0, r = |a|$ 时，$\rho = 2a\cos{\theta}$ ，表示圆心在极轴上的一点 $A(a,0)$ ，半径为 $|a|$ 的圆

**b.** 当 $\alpha = \frac{\pi}{2}, r = |a|$ 时，$\rho = 2a\sin{\theta}$ ，表示圆心在极垂线（过极点垂直于极轴的直线）上的一点 $A(a,\frac{\pi}{2})$ ，半径为 $|a|$ 的圆
