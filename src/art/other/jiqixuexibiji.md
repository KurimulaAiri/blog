---
title: 机器学习复习笔记
date: 2025-06-17
icon: 'earth-americas'
category:
  - 期末考复习
tag:
  - 机器学习
---
### LDA降维详解：从原理到实践  


#### **一、LDA降维的核心逻辑**  
线性判别分析（LDA）降维的本质是**监督学习下的投影优化**，其核心目标是通过线性变换将高维数据映射到低维空间，同时保留类别判别信息。与无监督的PCA不同，LDA利用样本标签信息，寻找能够最大化类间差异、最小化类内差异的投影方向。  


#### **二、数学原理与降维推导**  
##### **1. 关键矩阵定义（以二分类为例）**  
假设数据集有两类 $C_1$ 和 $C_2$，特征维度为 $d$，样本数分别为 $n_1$ 和 $n_2$。  
- **类内均值向量**：$\mu_1 = \frac{1}{n_1}\sum_{x \in C_1}x$，$\mu_2 = \frac{1}{n_1}\sum_{x \in C_2}x$  
- **总体均值向量**：$\mu = \frac{n_1\mu_1 + n_2\mu_2}{n_1 + n_2}$  
- **类内散度矩阵（$S_w$）**：衡量同类样本的离散程度  
  $$
  S_w = \sum_{x \in C_1}(x - \mu_1)(x - \mu_1)^T + \sum_{x \in C_2}(x - \mu_2)(x - \mu_2)^T
  $$  
- **类间散度矩阵（$S_b$）**：衡量不同类均值的差异程度  
  $$
  S_b = n_1(\mu_1 - \mu)(\mu_1 - \mu)^T + n_2(\mu_2 - \mu)(\mu_2 - \mu)^T
  $$  

##### **2. 优化目标：Fisher准则函数**  
LDA降维的目标是最大化投影后的类间散度与类内散度的比值：  
$$
J(w) = \frac{w^T S_b w}{w^T S_w w}
$$  
- 分子 $w^T S_b w$：投影后类间差异；  
- 分母 $w^T S_w w$：投影后类内差异。  

##### **3. 求解最优投影方向**  
通过拉格朗日乘数法，将问题转化为广义特征值问题：  
$$
S_b w = \lambda S_w w
$$  
最优解 $w$ 为 $S_w^{-1}S_b$ 的特征向量，对应最大的特征值。选取前 $k$ 个最大特征值的特征向量组成投影矩阵 $W = [w_1, w_2, \dots, w_k]$，实现降维：  
$$
X_{reduced} = X \cdot W
$$  

##### **4. 降维维度限制**  
- 对于 $K$ 类数据，LDA降维后的最大维度为 $K-1$，受限于类间散度矩阵 $S_b$ 的秩（$rank(S_b) \leq K-1$）。  
- 例如：鸢尾花数据集有3类，LDA最多降维到2维；二分类问题最多降维到1维。  


#### **三、LDA降维的具体步骤（多分类场景）**  
1. **计算各类均值与总体均值**：  
   - 对每个类别 $i$，计算均值向量 $\mu_i$；  
   - 计算总体均值向量 $\mu$。  
2. **构造类内散度矩阵 $S_w$**：  
   - 对每个类别 $i$，计算其散度矩阵 $S_{w,i} = \sum_{x \in C_i}(x - \mu_i)(x - \mu_i)^T$；  
   - 累加得到 $S_w = \sum_{i=1}^K S_{w,i}$。  
3. **构造类间散度矩阵 $S_b$**：  
   - 计算 $S_b = \sum_{i=1}^K n_i(\mu_i - \mu)(\mu_i - \mu)^T$，其中 $n_i$ 为类别 $i$ 的样本数。  
4. **求解广义特征值问题**：  
   - 计算矩阵 $S_w^{-1}S_b$ 的特征值和特征向量；  
   - 按特征值从大到小排序，选取前 $k$ 个特征向量组成投影矩阵 $W$（$k \leq K-1$）。  
5. **数据投影降维**：  
   - 对每个样本 $x$，计算 $x_{reduced} = x \cdot W$。  


#### **四、LDA降维的局限性与解决方案**  
##### **1. 局限性**  
- **矩阵不可逆问题**：当特征维度 $d$ 大于样本数 $n$ 时，$S_w$ 可能不可逆（如高维图像数据）。  
- **类别不平衡**：少数类的散度贡献小，导致投影方向偏向多数类。  
- **非线性数据**：对非线性可分数据，线性投影效果有限。  

##### **2. 解决方案**  
- **正则化LDA（RLDA）**：  
  在 $S_w$ 中添加正则项 $\lambda I$（$I$ 为单位矩阵），缓解不可逆问题：  
  $$
  S_w' = S_w + \lambda I
  $$  
- **PCA预处理+LDA**：  
  先用PCA将数据降至 $n-1$ 维，再进行LDA降维，避免 $S_w$ 不可逆。  
- **核LDA（K-LDA）**：  
  通过核函数将数据映射到高维空间，再进行线性LDA，处理非线性问题。  


#### **五、LDA vs PCA：降维逻辑对比**  
| 维度         | LDA（监督降维）                          | PCA（无监督降维）                          |
|--------------|-----------------------------------------|-------------------------------------------|
| **目标**     | 最大化类间差异，最小化类内差异          | 最大化数据方差（保留全局结构）            |
| **投影依据** | 依赖样本标签，利用类别判别信息          | 仅依赖数据分布，不考虑标签                |
| **维度上限** | $K-1$（$K$ 为类别数）                   | 原始特征维度 $d$                          |
| **适用场景** | 分类任务（如文本分类、图像识别）        | 可视化、降噪、无监督特征提取              |
| **典型案例** | 人脸识别（区分不同人）                  | 人脸特征压缩（保留像素相关性）            |  

### 主成分分析（PCA）：从高维到低维的信息压缩技术  


#### **一、PCA的核心定义与目标**  
**主成分分析（Principal Component Analysis）** 是一种常用的线性降维方法，其核心目标是：  
- 将高维数据映射到低维空间（称为“主成分”），同时尽可能保留原始数据的关键信息；  
- 通过最大化数据在低维空间中的方差，实现“降维但不损失重要信息”的目的。  


#### **二、数学原理：从方差最大化到特征值分解**  
##### 1. **数据预处理：标准化**  
假设原始数据矩阵为 $X \in \mathbb{R}^{n \times d}$（$n$ 个样本，$d$ 个特征），首先对每个特征进行标准化：  
$$x_j' = \frac{x_j - \mu_j}{\sigma_j}$$  
其中 $\mu_j$ 和 $\sigma_j$ 分别为第 $j$ 个特征的均值和标准差，确保各特征尺度一致。  

##### 2. **协方差矩阵与主成分的关系**  
- 标准化后的数据协方差矩阵为：  
  $$\Sigma = \frac{1}{n} X^T X$$  
  协方差矩阵的对角线元素表示各特征的方差，非对角线元素表示特征间的相关性。  
- **主成分**是一组正交的单位向量（即特征向量），其方向由协方差矩阵的特征值分解决定。具体来说：  
  - 最大特征值对应的特征向量是第一主成分，方向为数据方差最大的方向；  
  - 次大特征值对应的特征向量是第二主成分，与第一主成分正交，依此类推。  

##### 3. **最大化方差的数学推导**  
设主成分方向为单位向量 $w$，数据在 $w$ 上的投影方差为：  
$$\text{Var}(Xw) = w^T \Sigma w$$  
PCA的目标是找到一组正交向量 $w_1, w_2, \dots, w_k$（$k < d$），使得：  
$$\max \sum_{i=1}^k w_i^T \Sigma w_i$$  
通过拉格朗日乘数法求解，可得最优解为协方差矩阵的前 $k$ 个最大特征值对应的特征向量。  


#### **三、PCA的实施步骤（图解+数学）**  
以二维数据降为一维为例，步骤如下：  
1. **标准化数据**：如二维点集 $\{(x_1,y_1), (x_2,y_2), \dots, (x_n,y_n)\}$，计算均值和标准差后标准化。  
2. **计算协方差矩阵**：  
   $$\Sigma = \begin{bmatrix} \text{Var}(x) & \text{Cov}(x,y) \\ \text{Cov}(x,y) & \text{Var}(y) \end{bmatrix}$$  
3. **特征值分解**：求解 $\Sigma$ 的特征值 $\lambda_1 \geq \lambda_2$ 和对应特征向量 $v_1, v_2$。  
4. **选择主成分**：取最大特征值 $\lambda_1$ 对应的特征向量 $v_1$，作为降维方向（如右图中红色箭头）。  
5. **投影数据**：每个样本在 $v_1$ 上的投影即为降维后的一维数据：  
   $$z_i = v_1^T \cdot (x_i, y_i)^T$$  


#### **四、如何确定保留的主成分数量？**  
1. **累积方差贡献率**：前 $k$ 个主成分的方差之和占总方差的比例：  
   $$\text{贡献率} = \frac{\sum_{i=1}^k \lambda_i}{\sum_{i=1}^d \lambda_i} \times 100\%$$  
   通常选择 $k$ 使得贡献率达到80%~95%。  
2. **肘部法则（Elbow Method）**：绘制特征值随主成分数量的变化曲线，选择曲线“拐点”处的 $k$。  


#### **五、PCA的扩展：基于SVD的实现**  
实际应用中，PCA常通过奇异值分解（SVD）实现，避免直接计算协方差矩阵（尤其适用于大数据场景）：  
- 对标准化后的矩阵 $X$ 进行SVD分解：  
  $$X = U \Sigma V^T$$  
- 右奇异矩阵 $V$ 的列向量即为主成分方向，奇异值 $\Sigma$ 的平方对应特征值。  


#### **七、PCA的局限性**  
- **线性约束**：只能捕捉线性相关的特征，无法处理非线性结构。  
- **解释性差**：主成分是原始特征的线性组合，可能缺乏实际含义。  
- **对异常值敏感**：方差受离群点影响较大，需提前清洗数据。  

### ID3算法构建决策树的详细过程

ID3算法通过递归方式构建决策树，核心是**选择最优划分属性**并**递归生成子树**。下面我将通过一个具体例子，详细解释ID3构建决策树的完整步骤。


### **示例数据集**
假设我们有一个是否去打篮球的决策数据集：

| 天气 | 温度 | 湿度 | 风速 | 是否打篮球 |
|------|------|------|------|------------|
| 晴   | 高   | 高   | 弱   | 否         |
| 晴   | 高   | 高   | 强   | 否         |
| 多云 | 高   | 高   | 弱   | 是         |
| 雨   | 中   | 高   | 弱   | 是         |
| 雨   | 低   | 正常 | 弱   | 是         |
| 雨   | 低   | 正常 | 强   | 否         |
| 多云 | 低   | 正常 | 强   | 是         |
| 晴   | 中   | 高   | 弱   | 否         |
| 晴   | 低   | 正常 | 弱   | 是         |
| 雨   | 中   | 正常 | 弱   | 是         |
| 晴   | 中   | 正常 | 强   | 是         |
| 多云 | 中   | 高   | 强   | 是         |
| 多云 | 高   | 正常 | 弱   | 是         |
| 雨   | 中   | 高   | 强   | 否         |


### **ID3构建决策树的步骤**

#### **步骤1：计算根节点的信息熵**
首先计算整个数据集的信息熵，公式为：
$$H(S) = -\sum_{i=1}^{n} p_i \log_2 p_i$$

其中：
- $S$ 是数据集，包含14个样本
- 类别为“是”的样本有9个，类别为“否”的样本有5个
- $p_+ = \frac{9}{14}, p_- = \frac{5}{14}$

代入计算：
$$H(S) = -\left( \frac{9}{14} \log_2 \frac{9}{14} + \frac{5}{14} \log_2 \frac{5}{14} \right) \approx 0.940$$


#### **步骤2：计算每个特征的信息增益**
**1. 计算“天气”特征的信息增益**
- 天气=晴：5个样本（2是，3否）
- 天气=多云：4个样本（4是，0否）
- 天气=雨：5个样本（3是，2否）

计算各子集的信息熵：
$$H(\text{晴}) = -\left( \frac{2}{5} \log_2 \frac{2}{5} + \frac{3}{5} \log_2 \frac{3}{5} \right) \approx 0.971$$
$$H(\text{多云}) = -\left( \frac{4}{4} \log_2 \frac{4}{4} + \frac{0}{4} \log_2 \frac{0}{4} \right) = 0$$
$$H(\text{雨}) = -\left( \frac{3}{5} \log_2 \frac{3}{5} + \frac{2}{5} \log_2 \frac{2}{5} \right) \approx 0.971$$

计算条件熵：
$$H(S|\text{天气}) = \frac{5}{14} \times 0.971 + \frac{4}{14} \times 0 + \frac{5}{14} \times 0.971 \approx 0.694$$

信息增益：
$$IG(S, \text{天气}) = 0.940 - 0.694 = 0.246$$

**2. 同理计算其他特征的信息增益**
- $IG(S, \text{温度}) \approx 0.029$
- $IG(S, \text{湿度}) \approx 0.151$
- $IG(S, \text{风速}) \approx 0.048$


#### **步骤3：选择最优划分属性**
比较各特征的信息增益：
$$0.246 \ (\text{天气}) > 0.151 \ (\text{湿度}) > 0.048 \ (\text{风速}) > 0.029 \ (\text{温度})$$

**选择“天气”作为根节点的划分属性**


#### **步骤4：递归生成子树**
**1. 天气=晴的分支**
- 子数据集：5个样本（2是，3否）
- 计算该子集的信息熵和各特征的信息增益
- 选择“湿度”作为下一层划分属性（计算过程略）
  - 湿度=高：全为“否”
  - 湿度=正常：全为“是”

**2. 天气=多云的分支**
- 子数据集：4个样本（全为“是”）
- **该分支为叶节点，类别为“是”**

**3. 天气=雨的分支**
- 子数据集：5个样本（3是，2否）
- 计算该子集的信息熵和各特征的信息增益
- 选择“风速”作为下一层划分属性（计算过程略）
  - 风速=弱：全为“是”
  - 风速=强：全为“否”


### **最终生成的决策树**
```
                     [天气]
                   /   |   \
              晴 / 多云|    \ 雨
               /      |     \
         [湿度]       是   [风速]
        /    \            /    \
     高 /      \正常   弱 /      \强
      /        \        /        \
    否          是      是          否
```

### **总结**
ID3算法构建决策树的核心流程：
1. **计算根节点信息熵**
2. **计算所有特征的信息增益**
3. **选择信息增益最大的特征作为当前节点**
4. **根据该特征的不同取值划分子集**
5. **递归处理每个子集，直到满足停止条件**

该算法简单直观，但存在一些局限性（如倾向选择取值多的特征），后续发展出了C4.5、CART等改进算法。

