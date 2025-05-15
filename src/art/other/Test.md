---
title: 测试用
icon: code
category:
    - 杂项
tags:
    - LaTex
---

## 公式块

$$

\text{激活函数为：}

\\

ReLU(x) = \begin{cases} x & x > 0 \\ 0 & x \leq 0 \end{cases}

\\

\text{输入层到第一个隐藏层}

\\

W_1 = 
\begin{bmatrix}
0.1 & 0.2 & 0.3 \\
0.3 & 0.2 & 0.1 \\
\end{bmatrix}

b_1 =
\begin{bmatrix}
0.5 \\
-0.2 \\
0.3 \\
\end{bmatrix}

\\

\text{第一个隐藏层到第二个隐藏层}

\\

W_2 =
\begin{bmatrix}
0.2 & 0.4 \\
0.6 & 0.5 \\
0.3 & 0.1 \\
\end{bmatrix}

b_2 =
\begin{bmatrix}
0.1 \\
-0.6 \\
\end{bmatrix}

\\

\text{第二个隐藏层到输出层}

\\

W_3 =
\begin{bmatrix}
0.5 \\
0.5 \\
\end{bmatrix}

b_3 =
\begin{bmatrix}
0.4 \\
\end{bmatrix}
$$

已知输入向量为 $X = \begin{bmatrix} 1 \\ -1 \\ \end{bmatrix}$

计算输入到第一个隐藏层的输出 $H_1$：

$$

z_1 = W_1^TX + b_1 = \begin{bmatrix} 0.1 & 0.3 \\ 0.2 & 0.2 \\ 0.3 & 0.1 \\ \end{bmatrix} \begin{bmatrix} 1 \\ -1 \\ \end{bmatrix} + \begin{bmatrix} 0.5 \\ -0.2 \\ 0.3 \\ \end{bmatrix} = \begin{bmatrix} 0.3 \\ -0.2 \\ 0.5 \\ \end{bmatrix}

\\

H_1 = ReLU(z_1) = \begin{bmatrix} 0.3 \\ 0 \\ 0.5 \\ \end{bmatrix}

$$

计算第一个隐藏层到第二个隐藏层的输出 $H_2$：

$$

z_2 = W_2^TH_1 + b_2 = \begin{bmatrix} 0.2 & 0.6 & 0.3 \\ 0.4 & 0.5 & 0.1 \\ \end{bmatrix} \begin{bmatrix} 0.3 \\ 0 \\ 0.5 \\ \end{bmatrix} + \begin{bmatrix} 0.1 \\ -0.6 \\ \end{bmatrix} = \begin{bmatrix} 0.31 \\ -0.43  \\ \end{bmatrix}

\\

H_2 = ReLU(z_2) = \begin{bmatrix} 0.31 \\ 0 \\ \end{bmatrix}

$$

计算第二个隐藏层到输出层的输出 $H_3$：

$$

z_3 = W_3^TH_2 + b_3 = \begin{bmatrix} 0.5 & 0.5 \\ \end{bmatrix} \begin{bmatrix} 0.31 \\ 0 \\ \end{bmatrix} + \begin{bmatrix} 0.4 \\ \end{bmatrix} = 0.555 

$$