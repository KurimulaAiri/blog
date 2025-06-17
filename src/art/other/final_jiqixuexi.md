---
title: 机器学习选择题
date: 2025-06-17
icon: 'earth-americas'
category:
  - 期末考复习
tag:
  - 机器学习
---
### 期末随堂测试-数科22级

#### 1.(判断题) <p>使用k-means算法聚类，算法执行过程中有可能出现空簇。</p> 

- 答案:
  - **对** {#blue-msg}
  - 错

#### 2.(判断题) <p>基于密度的聚类方法DBSCAN无需指定簇的个数。</p> 

- 答案:
  - **对** {#blue-msg}
  - 错

#### 3.(判断题) <p>使用基于密度的聚类方法DBSCAN后，每个样本都会归到某个簇中。</p> 

- 答案:
  - 对
  - **错** {#blue-msg}

#### 4.(判断题) <p><strong>使用基于凝聚的层次聚类算法</strong><strong>AGNES聚类后，每个样本都会归到某个簇中。</strong></p> 

- 答案:
  - **对** {#blue-msg}
  - 错

#### 5.(判断题) <p><strong>基于凝聚的层次聚类算法</strong><strong>AGNES无需指定簇的个数。</strong></p> 

- 答案:
  - 对
  - **错** {#blue-msg}

#### 6.(判断题) <p>聚类评价指标Rand Index和Adjusted Rand Index均需要带有标注信息的样本。</p> 

- 答案:
  - **对** {#blue-msg}
  - 错

#### 7.(判断题) <p>聚类评价指标轮廓系数silhouette coefficient需要带有标注信息的样本。</p> 

- 答案:
  - 对
  - **错** {#blue-msg}

#### 8.(判断题) <p>当无法确定簇的个数k时，可以使用轮廓系数silhouette coefficient或者平方误差来指导选择合适的k。</p> 

- 答案:
  - **对** {#blue-msg}
  - 错

#### 9.(判断题) <p><strong>基于凝聚的层次聚类算法</strong><strong>AGNES的结果与簇间距离的计算方式有关系，不同的距离计算方式可能得到不同的结果。</strong></p> 

- 答案:
  - **对** {#blue-msg}
  - 错

#### 10.(单选题) <p>下列关于Binarizer(copy=)说法正确的是</p> 

- 选项:
  - **<p>copy=True可以保证在使用该类的过程中，输入数据不会被修改。</p>** {#blue-msg}
  - <p>copy=True没有实质性作用，可以忽略。</p>
  - <p>在使用该类时，输入数据总是不会被 修改。</p>

#### 11.(单选题) <p>下列选项中属于无监督学习算法的是？</p> 

- 选项:
  - <p>SVM</p>
  - <p>随机森林</p>
  - **<p>PCA</p>** {#blue-msg}
  - <p>LDA</p>

#### 12.(判断题) <p>k-均值聚类是寻找平方误差最小的簇划分。</p> 

- 答案:
  - **对** {#blue-msg}
  - 错

#### 13.(判断题) <p>k-均值聚类中的k是指特征的维度。</p> 

- 答案:
  - 对
  - **错** {#blue-msg}

#### 14.(判断题) <p>k-均值聚类的结果与初始聚类中心的选取无关。</p> 

- 答案:
  - 对
  - **错** {#blue-msg}

#### 15.(单选题) <p>下列选项中关于k-means++说法正确的是</p> 

- 选项:
  - <p>k-means++跟k-means一样，都是聚类算法。</p>
  - **<p>k-means++是一种挑选初始聚类中心的算法。</p>** {#blue-msg}
  - <p>k-means++是k-means的一种改进，可以解决k-means在大数据情况下速度慢的问题。</p>
  - <p>针对相同的数据集，使用k-means++得到的结果总是相同。</p>

#### 16.(单选题) <p>在实际使用k-means算法时，往往需要运行多次，然后根据每次的平方误差选取最优的一次。在使用sklearn时，KMeans类的初始化参数中设置该次数的是？</p> 

- 选项:
  - **<p><strong>n_init </strong></p>** {#blue-msg}
  - <p><strong>init</strong></p>
  - <p><strong>n_clusters</strong><strong> </strong></p>
  - <p>max_iter</p>

#### 17.(单选题) <p>在使用sklearn时，KMeans类哪个成员变量可以返回最终的聚类中心？</p> 

- 选项:
  - <p><strong>inertia_ </strong></p>
  - **<p><strong>cluster_centers</strong><strong>_</strong>&nbsp;</p>** {#blue-msg}
  - <p><strong>labels_ </strong></p>
  - <p><strong>n_iter_</strong></p>

#### 18.(判断题) <p><strong>mini batch k-means</strong>是k-means的一种改进，可以解决k-means在大数据情况下速度慢的问题。</p> 

- 答案:
  - **对** {#blue-msg}
  - 错

#### 19.(单选题) <p>mini batch k-mean的核心思想是：每次从所有样本中随机选取一批样本来更新聚类中心。请问sklearn.cluster.MiniBatchKMeans类中哪个参数是设置每批样本的数量？</p> 

- 选项:
  - **<p><strong>batch_size</strong></p>** {#blue-msg}
  - <p><strong>n_clusters</strong><strong> </strong></p>
  - <p><strong>n_init </strong></p>
  - <p><strong>init</strong><strong> </strong></p>

#### 20.(单选题) <p>下列关于k-means算法的运行时间叙述正确的是</p> 

- 选项:
  - **<p>运行时间与样本数量有关系，样本量越大，时间越长。</p>** {#blue-msg}
  - <p>运行时间受特征维度影响较大，样本数量几乎没有影响</p>
  - <p>运行时间受样本数量影响较大，特征维度几乎没有影响</p>

#### 21.(单选题) <p>回归问题和分类问题的区别是？</p> 

- 选项:
  - <p>特征不同</p>
  - <p>样本数量不同</p>
  - **<p>标注不同</p>** {#blue-msg}
  - <p>前者是无监督学习任务，后者是监督学习任务。</p>

#### 22.(判断题) <p>用于解决回归问题的KNN算法和用于解决分类问题的KNN算法的核心部分相同，均需找到与测试样本距离最近的k个训练样本。</p> 

- 答案:
  - **对** {#blue-msg}
  - 错

#### 23.(判断题) <p>当样本数量较少时，特别是样本量小于或者接近特征的维度，线性回归的最小二乘法不稳定。</p> 

- 答案:
  - **对** {#blue-msg}
  - 错

#### 24.(判断题) <p>构建回归树需要考虑如何选择切分变量和切分点。</p> 

- 答案:
  - **对** {#blue-msg}
  - 错

#### 25.(判断题) <p>在涉及目标值标准化的问题中，在计算MSE和MAE时需要将回归模型的输出做反变换。</p> 

- 答案:
  - **对** {#blue-msg}
  - 错

#### 26.(判断题) <p>回归问题的提升树算法，通过不断拟合已有模型的误差来学习弱学习器，最终得到强学习器。</p> 

- 答案:
  - **对** {#blue-msg}
  - 错

#### 27.(判断题) <p>通常把反映数据内在规律的信息叫做特征。</p> 

- 答案:
  - **对** {#blue-msg}
  - 错

#### 28.(多选题) <p>机器学习三要素是？</p> 

- 选项:
  - **<p>模型</p>** {#blue-msg}
  - **<p>策略</p>** {#blue-msg}
  - **<p>算法</p>** {#blue-msg}
  - <p>数据</p>

#### 29.(多选题) <p>用于评价分类模型性能的指标通常有</p> 

- 选项:
  - **<p>准确率</p>** {#blue-msg}
  - **<p>精确率</p>** {#blue-msg}
  - **<p>召回率</p>** {#blue-msg}
  - **<p>F1-值</p>** {#blue-msg}
  - <p>事件发生的几率</p>

#### 30.(单选题) <p>在哪一种距离下，单位圆周是顶点在坐标轴上的正方形？</p> 

- 选项:
  - <p>欧式距离</p>
  - **<p>曼哈顿距离</p>** {#blue-msg}
  - <p>切比雪夫距离</p>
  - <p>p为任意取值的闵可夫斯基距离</p>

#### 31.(判断题) <p>回归是无监督学习。</p> 

- 答案:
  - 对
  - **错** {#blue-msg}

#### 32.(判断题) <p>回归与分类的区别是：回归模型输出为连续值，分类模型输出为离散值。</p> 

- 答案:
  - **对** {#blue-msg}
  - 错

#### 33.(单选题) <p>最小二乘回归使用什么损失？</p> 

- 选项:
  - **<p>平方损失</p>** {#blue-msg}
  - <p>合页损失</p>
  - <p>对数损失</p>
  - <p>指数损失</p>

#### 34.(单选题) <p>岭回归和Lasso的正则项分别是？</p> 

- 选项:
  - **<p>L2范数和L1范数</p>** {#blue-msg}
  - <p>L1范数和L2范数</p>
  - <p>L0范数和L1范数</p>
  - <p>L2范数和L0范数</p>

#### 35.(单选题) <p>下列哪个算法可以抑制离群点的影响？</p> 

- 选项:
  - <p>最小乘回归</p>
  - <p>岭回归</p>
  - <p>Lasso回归</p>
  - **<p>Huber回归</p>** {#blue-msg}

#### 36.(多选题) <p>下列指标用于评价回归模型的有</p> 

- 选项:
  - **<p>均方误差</p>** {#blue-msg}
  - **<p>平均绝对误差</p>** {#blue-msg}
  - **<p>决定系数</p>** {#blue-msg}
  - <p>召回率</p>
  - <p>F1值</p>

#### 37.(判断题) <p>利用KNN算法回归时，选取距离测试样本最小的K个训练样本，然后对这K个近邻目标的值进行平均，得到测试样本的预测值。</p> 

- 答案:
  - **对** {#blue-msg}
  - 错

#### 38.(判断题) <p>在构建回归树时，关键问题是如何选择切分变量和切分点。确定最优切分变量和最优切分点通常使用启发式方法，即先固定切分方向<em>j</em>，确定切分点<em>s；</em>然后</p>
<p>遍历所有<em>j</em>，确定最优切分变量和切分点(<em>j</em>,<em>s</em>)。</p> 

- 答案:
  - **对** {#blue-msg}
  - 错

#### 39.(判断题) <p>针对回归问题，在构建提升树时，每次迭代是针对残差进行拟合来构建回归树的。</p> 

- 答案:
  - **对** {#blue-msg}
  - 错

#### 40.(单选题) <p>支持向量回归的损失函数是？</p> 

- 选项:
  - **<p><strong>epsilon_insensitive</strong></p>** {#blue-msg}
  - <p>平方损失</p>
  - <p>Huber损失</p>
  - <p>指数损失</p>

#### 41.(判断题) <p>使用PCA降维是无损的。</p> 

- 答案:
  - 对
  - **错** {#blue-msg}

#### 42.(判断题) <p>PCA降维是无监督学习方法。</p> 

- 答案:
  - **对** {#blue-msg}
  - 错

#### 43.(判断题) <p>PCA的核心思想是投影到方差更大的方向。</p> 

- 答案:
  - **对** {#blue-msg}
  - 错

#### 44.(判断题) <p>PCA需要先对样本进行中心化处理，即每个样本减去样本均值。</p> 

- 答案:
  - **对** {#blue-msg}
  - 错

#### 45.(多选题) <p>在PCA降维时，关于目标维度和累积贡献率的关系，下述说法正确的是</p> 

- 选项:
  - <p>目标维度越大，累积贡献率越小</p>
  - **<p>目标维度越大，累积贡献率越大</p>** {#blue-msg}
  - <p>累积贡献率和目标维度无关</p>
  - **<p>当目标维度和特征维度相同时，累积贡献率等于1.</p>** {#blue-msg}

#### 46.(判断题) <p>累积贡献率的取值范围是：大于0小于1</p> 

- 答案:
  - 对
  - **错** {#blue-msg}

#### 47.(多选题) <p>关于sklearn.decomposition.<strong>PCA</strong>(<strong>n_components)中的参数n_components，叙述正确的有</strong></p> 

- 选项:
  - **<p><strong>n_components可以取大于等于1的整数，此时表示目标维度</strong></p>** {#blue-msg}
  - **<p><strong>n_components</strong>取值为(0，1]之间的浮点数时，用累积贡献率来决定维数，即目标维度要使的对应的累积贡献率刚好大于等于该值</p>** {#blue-msg}
  - **<p>默认时无输入，此时n_components=min(样本数，特征数)</p>** {#blue-msg}
  - **<p>取值为字符串&ldquo;mle&rdquo;时, 用MLE算法自己选择一定数量的主成分特征来降维</p>** {#blue-msg}

#### 48.(判断题) <p><strong>可以通过sklearn.decomposition.PCA()中的成员变量explained_variance</strong><strong>_，获取协方差矩阵的特征根。</strong></p> 

- 答案:
  - **对** {#blue-msg}
  - 错

#### 49.(判断题) <p><strong>可以对sklearn.decomposition.PCA()中的成员变量explained_variance_ratio_进行求和</strong><strong>，来获取累积贡献率。</strong></p> 

- 答案:
  - **对** {#blue-msg}
  - 错

#### 50.(判断题) <p>&nbsp;<strong>可以通过sklearn.decomposition.PCA()中的成员变量mean_</strong><strong>，获取训练样本的均值。</strong></p> 

- 答案:
  - **对** {#blue-msg}
  - 错

#### 51.(判断题) <p><strong>可以通过sklearn.decomposition.PCA()中的成员变量components_ ，获取降维矩阵。</strong></p> 

- 答案:
  - **对** {#blue-msg}
  - 错

#### 52.(判断题) <p>KernelPCA是在更高维空间进行降维，所以需要设计低维到高位的投影函数。</p> 

- 答案:
  - 对
  - **错** {#blue-msg}

#### 53.(单选题) <p>sklearn中使用核PCA的类是：</p> 

- 选项:
  - **<p>KernelPCA</p>** {#blue-msg}
  - <p>PCA</p>
  - <p><strong>LinearDiscriminantAnalysis</strong></p>
  - <p>KernelSVM</p>

#### 54.(单选题) <p>在sklearn中使用PCA和核PCA这两个类时，初始化类时，目标维度均使用如下哪个参数指定？</p> 

- 选项:
  - **<p><strong>n_components</strong></p>** {#blue-msg}
  - <p><strong>kernel</strong></p>
  - <p><strong>gamma</strong></p>
  - <p><strong>degree</strong></p>

#### 55.(多选题) <p>在sklearn中，当使用PCA类时，如下选项哪些是关于核函数的参数？</p> 

- 选项:
  - **<p>linear</p>** {#blue-msg}
  - **<p>poly</p>** {#blue-msg}
  - **<p>rbf</p>** {#blue-msg}
  - **<p>sigmoid</p>** {#blue-msg}

#### 56.(单选题) <p><strong>在sklearn中，核PCA类使用如下哪个参数kernel指定和函数类型？</strong></p> 

- 选项:
  - <p><strong>n_components</strong></p>
  - **<p><strong>kernel</strong></p>** {#blue-msg}
  - <p><strong>gamma</strong></p>
  - <p><strong>degree</strong></p>

#### 57.(判断题) <p>使用核PCA时，针对训练集的核矩阵是对称矩阵。</p> 

- 答案:
  - **对** {#blue-msg}
  - 错

#### 58.(多选题) <p>在核PCA的过程中，在训练阶段针对训练集需要完成的步骤有哪些？</p> 

- 选项:
  - **<p>计算核矩阵</p>** {#blue-msg}
  - **<p>对核矩阵进行中心化处理</p>** {#blue-msg}
  - **<p>特征值分解，确定投影矩阵</p>** {#blue-msg}
  - <p>通过高维映射确定样本在高维空间中的投影</p>

#### 59.(多选题) <p>在核PCA的过程中，在测试阶段针对测试集需要完成的步骤有哪些？</p> 

- 选项:
  - **<p>计算测试集对应的核矩阵</p>** {#blue-msg}
  - **<p>测试集核矩阵中心和</p>** {#blue-msg}
  - **<p>使用训练阶段确定的投影矩阵，对测试机核矩阵进行投影</p>** {#blue-msg}
  - <p>将结果投影到原始的特征空间</p>

#### 60.(判断题) <p>KernelPCA是在更高维空间进行降维，所以需要设计低维到高位的投影函数。</p> 

- 答案:
  - 对
  - **错** {#blue-msg}

#### 61.(单选题) <p>sklearn中使用核PCA的类是：</p> 

- 选项:
  - **<p>KernelPCA</p>** {#blue-msg}
  - <p>PCA</p>
  - <p><strong>LinearDiscriminantAnalysis</strong></p>
  - <p>KernelSVM</p>

#### 62.(单选题) <p>在sklearn中使用PCA和核PCA这两个类时，初始化类时，目标维度均使用如下哪个参数指定？</p> 

- 选项:
  - **<p><strong>n_components</strong></p>** {#blue-msg}
  - <p><strong>kernel</strong></p>
  - <p><strong>gamma</strong></p>
  - <p><strong>degree</strong></p>

#### 63.(多选题) <p>在sklearn中，如下选项哪些是关于核PCA方法的关于核函数的参数？</p> 

- 选项:
  - **<p>linear</p>** {#blue-msg}
  - **<p>poly</p>** {#blue-msg}
  - **<p>rbf</p>** {#blue-msg}
  - **<p>sigmoid</p>** {#blue-msg}

#### 64.(单选题) <p><strong>在sklearn中，核PCA类使用如下哪个参数kernel指定和函数类型？</strong></p> 

- 选项:
  - <p><strong>n_components</strong></p>
  - **<p><strong>kernel</strong></p>** {#blue-msg}
  - <p><strong>gamma</strong></p>
  - <p><strong>degree</strong></p>

#### 65.(判断题) <p>使用核PCA时，针对训练集的核矩阵是对称矩阵。</p> 

- 答案:
  - **对** {#blue-msg}
  - 错

#### 66.(多选题) <p>在核PCA的过程中，在训练阶段针对训练集需要完成的步骤有哪些？</p> 

- 选项:
  - **<p>计算核矩阵</p>** {#blue-msg}
  - **<p>对核矩阵进行中心化处理</p>** {#blue-msg}
  - **<p>特征值分解，确定投影矩阵</p>** {#blue-msg}
  - <p>通过高维映射确定样本在高维空间中的投影</p>

#### 67.(多选题) <p>在核PCA的过程中，在测试阶段针对测试集需要完成的步骤有哪些？</p> 

- 选项:
  - **<p>计算测试集对应的核矩阵</p>** {#blue-msg}
  - **<p>测试集核矩阵中心和</p>** {#blue-msg}
  - **<p>使用训练阶段确定的投影矩阵，对测试机核矩阵进行投影</p>** {#blue-msg}
  - <p>将结果投影到原始的特征空间</p>

#### 68.(多选题) <p>下述降维方法是无监督的有？</p> 

- 选项:
  - **<p>PCA</p>** {#blue-msg}
  - **<p>KernelPCA</p>** {#blue-msg}
  - <p>LDA</p>

#### 69.(判断题) <p>LDA的核心思想是投影后保证类间距离最大化，类内距离最小化。</p> 

- 答案:
  - **对** {#blue-msg}
  - 错

#### 70.(判断题) <p>PCA选择分类性能最好的投影方向。</p> 

- 答案:
  - 对
  - **错** {#blue-msg}

#### 71.(单选题) <p>LDA降维后的维度需要满足？</p> 

- 选项:
  - <p>小于样本个数即可</p>
  - <p>小于类别数即可</p>
  - <p>可以等于样本个数，也可以等于类别数</p>
  - **<p>不超过样本个数，同时小于类别数</p>** {#blue-msg}

#### 72.(判断题) <p>LDA无需对样本中心化处理。</p> 

- 答案:
  - **对** {#blue-msg}
  - 错

#### 73.(单选题) <p>用于LDA降维的类sklearn.discriminant_analysis.LinearDiscriminantAnalysis，其哪个参数用于指定目标维度？</p> 

- 选项:
  - <p><strong style="box-sizing: border-box; color: #212529; font-family: -apple-system,BlinkMacSystemFont,&amp;quot; segoe ui&amp;quot;,roboto,&amp;quot;helvetica neue&amp;quot;,arial,&amp;quot;noto sans&amp;quot;,sans-serif,&amp;quot;apple color emoji&amp;quot;,&amp;quot;segoe ui emoji&amp;quot;,&amp;quot;segoe ui symbol&amp;quot;,&amp;quot;noto color emoji&amp;quot;; font-size: 16px; font-style: normal; font-variant: normal; font-weight: bold; letter-spacing: normal; orphans: 2; text-align: left; text-decoration: none; text-indent: 0px; text-transform: none; -webkit-text-stroke-width: 0px; white-space: normal; word-spacing: 0px;" data-mce-fragment="1">solver</strong></p>
  - **<p><span style="display: inline !important; float: none; background-color: #ffffff; color: #212529; font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'; font-size: 16px; font-style: normal; font-variant: normal; font-weight: bold; letter-spacing: normal; orphans: 2; text-align: left; text-decoration: none; text-indent: 0px; text-transform: none; -webkit-text-stroke-width: 0px; white-space: normal; word-spacing: 0px;">n_components</span></p>** {#blue-msg}
  - <p><strong style="box-sizing: border-box; color: #212529; font-family: -apple-system,BlinkMacSystemFont,&amp;quot; segoe ui&amp;quot;,roboto,&amp;quot;helvetica neue&amp;quot;,arial,&amp;quot;noto sans&amp;quot;,sans-serif,&amp;quot;apple color emoji&amp;quot;,&amp;quot;segoe ui emoji&amp;quot;,&amp;quot;segoe ui symbol&amp;quot;,&amp;quot;noto color emoji&amp;quot;; font-size: 16px; font-style: normal; font-variant: normal; font-weight: bold; letter-spacing: normal; orphans: 2; text-align: left; text-decoration: none; text-indent: 0px; text-transform: none; -webkit-text-stroke-width: 0px; white-space: normal; word-spacing: 0px;" data-mce-fragment="1">covariance_estimator</strong></p>
  - <p><em><span style="display: inline !important; float: none; background-color: #ffffff; color: #212529; font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'; font-size: 16px; font-style: normal; font-variant: normal; font-weight: bold; letter-spacing: normal; orphans: 2; text-align: left; text-decoration: none; text-indent: 0px; text-transform: none; -webkit-text-stroke-width: 0px; white-space: normal; word-spacing: 0px;">store_covariance</span></em></p>

#### 74.(单选题) <p>用于LDA降维的类sklearn.discriminant_analysis.LinearDiscriminantAnalysis，其哪个方法用于测试样本的投影？</p> 

- 选项:
  - <p><a class="reference internal" title="sklearn.discriminant_analysis.LinearDiscriminantAnalysis.fit_transform" href="https://scikit-learn.org/stable/modules/generated/sklearn.discriminant_analysis.LinearDiscriminantAnalysis.html#sklearn.discriminant_analysis.LinearDiscriminantAnalysis.fit_transform"><code class="xref py py-obj docutils literal notranslate"><span class="pre">fit_transform</span></code></a></p>
  - <p>fit</p>
  - **<p>transform</p>** {#blue-msg}
  - <p>predict</p>

#### 75.(单选题) <p>用于LDA降维的类sklearn.discriminant_analysis.LinearDiscriminantAnalysis，其哪个方法用于预测类别？</p> 

- 选项:
  - <p>fit_transform</p>
  - <p>fit</p>
  - <p>transform</p>
  - **<p>predict</p>** {#blue-msg}

#### 76.(单选题) <p>L1正则化和L2正则化中，哪一个更有让所学参数具有稀疏的趋势？</p> 

- 选项:
  - **<p>L1正则化</p>** {#blue-msg}
  - <p>L2正则化</p>
  - <p>它们没有区别</p>

#### 77.(判断题) <p>在回归问题中，对标注（即输出值）做标准化，不影响回归模型的评价指标值。</p> 

- 答案:
  - 对
  - **错** {#blue-msg}

#### 78.(多选题) <p>在回归问题中，对标注（即输出值）做标准化，回归模型的评价指标值改变的是？</p> 

- 选项:
  - **<p><strong>均方误差</strong></p>** {#blue-msg}
  - **<p><strong>平均绝对误差</strong></p>** {#blue-msg}
  - <p><strong>决定系数</strong></p>
  - <p>召回率</p>

#### 79.(判断题) <p>在前馈神经网络中，如果每一层均不使用非线性激活函数，那么该神经网络是一个线性模型。</p> 

- 答案:
  - **对** {#blue-msg}
  - 错

#### 80.(判断题) <p>使用前馈神经网络进行推理，是正向传播过程。</p> 

- 答案:
  - **对** {#blue-msg}
  - 错

#### 81.(判断题) <p>训练前馈神经网络的核心过程是误差反向传播过程。</p> 

- 答案:
  - **对** {#blue-msg}
  - 错

#### 82.(单选题) <p>使用如下网络，输入是（1,1）的，输出是多少？</p>
<p>其中，激活函数是变异的符号函数，即如果输入是非负数，那么输出为1；否则输出0.</p>
<p><img src="//img.ketangpai.com/ketangpai.aliapp.com/1/webroot/Uploads/Download/2025-05-16/68267a587c5c1.png?OSSAccessKeyId=LTAItfPkNIKJFibY&amp;Expires=4900952152&amp;Signature=MwaOrMKTYv52SaIowxgczpQK1TY%3D" width="428" height="178" crossOrigin="anonymous" /></p> 


- 选项:
  - **<p>0</p>** {#blue-msg}
  - <p>1</p>
  - <p>-0.5</p>
  - <p>-1.5</p>

#### 83.(多选题) <p>在推理阶段，对于给定的输入，一个前馈神经网络的输出结果和以下哪些项有关？</p> 

- 选项:
  - **<p>激活函数</p>** {#blue-msg}
  - **<p>相邻两层之间的权重系数</p>** {#blue-msg}
  - **<p>每个神经元的偏置</p>** {#blue-msg}
  - <p>学习率</p>

#### 84.(多选题) <p>在训练阶段，对于给定的网络结构，最终的模型和以下哪些项有关？</p> 

- 选项:
  - **<p>学习率</p>** {#blue-msg}
  - **<p>训练轮数（Epoch）</p>** {#blue-msg}
  - **<p>参数初始化方法</p>** {#blue-msg}
  - **<p>损失函数</p>** {#blue-msg}

#### 85.(判断题) <p>在使用sklearn的数据标准化类的时候，成员函数fit_transform和transform是一样的，没有区别。</p> 

- 答案:
  - 对
  - **错** {#blue-msg}

#### 86.(判断题) <p>Binarizer类中的fit()方法没有实质性作用。</p> 

- 答案:
  - **对** {#blue-msg}
  - 错

#### 87.(判断题) <p>在测试集上可以使用MaxAbsScale类的fit_transform()方法。</p> 

- 答案:
  - 对
  - **错** {#blue-msg}

#### 88.(判断题) <p>Normalizer类当norm='inf'时，实现的功能与MaxAbsScale类一样。</p> 

- 答案:
  - **对** {#blue-msg}
  - 错

#### 89.(单选题) <p>在定义卷积层是，卷积核的通道数如何确定？</p> 

- 选项:
  - **<p>必须等于当前被卷积的数据的通道数</p>** {#blue-msg}
  - <p>由人工确定</p>
  - <p>等于3</p>
  - <p>等于输出数据的通道数</p>

#### 90.(判断题) <p>使用StandardScaler变换以后，数据的取值范围变为(0,1)。</p> 

- 答案:
  - 对
  - **错** {#blue-msg}

#### 91.(单选题) <p>卷积结果的通道数如何确定？</p> 

- 选项:
  - <p>等于卷积核的通道数</p>
  - **<p>等于卷积核的数量</p>** {#blue-msg}
  - <p>等于当前被卷积的数据的通道数</p>
  - <p>等于3</p>

#### 92.(单选题) <p>针对输入是224X224X3的特征，使用11X11X3的卷积核，步长为4，填充为2，那么输出特征的空间尺寸为？</p> 

- 选项:
  - **<p>55X55</p>** {#blue-msg}
  - <p>224X224</p>
  - <p>112X112</p>
  - <p>234X234</p>

#### 93.(单选题) <p>连续使用三次3X3卷积，其感受野相当于多大？</p> 

- 选项:
  - <p>3X3</p>
  - <p>5X5</p>
  - **<p>7X7</p>** {#blue-msg}
  - <p>9X9</p>

#### 94.(判断题) <p>VGG的特点是连续使用堆叠的3X3卷积核来扩大感受野。</p> 

- 答案:
  - **对** {#blue-msg}
  - 错

#### 95.(判断题) <p>1X1卷积核的作用相当于对特征在通道方向上加权求和。</p> 

- 答案:
  - **对** {#blue-msg}
  - 错

#### 96.(判断题) <p>ResNet使用残差连接大大加深了卷积神经网络的深度。</p> 

- 答案:
  - **对** {#blue-msg}
  - 错

#### 97.(判断题) <p>DenseNet通过特征重用，既大幅度减少了网络的参数量，又在一定程度上缓解了梯度消失问题的产生。</p> 

- 答案:
  - **对** {#blue-msg}
  - 错

### 期末上机测试-数科22

#### 1.(填空题) <p>原始数据的样本数量为</p> 

- 答案:
  - **10000** {#blue-msg}

#### 2.(填空题) <p>原始数据的特征维度为</p> 

- 答案:
  - **64** {#blue-msg}

#### 3.(填空题) <p>特征的第1个维度的均值是？（请四舍五入保留4位小数）</p> 

- 答案:
  - **0.0081** {#blue-msg}

#### 4.(填空题) <p>特征的第1个维度的标准差是？（请四舍五入保留4位小数）</p> 

- 答案:
  - **0.9992** {#blue-msg}

#### 5.(填空题) <p>PCA的目标维度为？</p> 

- 答案:
  - **63** {#blue-msg}

#### 6.(填空题) <p>PCA的降维矩阵的第一个元素为？（请四舍五入保留4位小数）</p> 

- 答案:
  - **0.0016** {#blue-msg}

#### 7.(填空题) <p>模型在测试集上的准确率是？（请四舍五入保留4位小数）</p> 

- 答案:
  - **0.6373** {#blue-msg}

#### 8.(填空题) <p>模型在测试集上的召回率是？（请四舍五入保留4位小数）</p> 

- 答案:
  - **0.6417** {#blue-msg}

#### 9.(填空题) <p>模型在测试集上的精确率是？（请四舍五入保留4位小数）</p> 

- 答案:
  - **0.6882** {#blue-msg}

#### 10.(填空题) <p>模型在测试集上的F1值是？（请四舍五入保留4位小数）</p> 

- 答案:
  - **0.6152** {#blue-msg}

#### 11.(填空题) <p>第一个测试样本的预测类别为？</p> 

- 答案:
  - **1** {#blue-msg}

#### 12.(填空题) <p>第二个测试样本的预测类别为？</p> 

- 答案:
  - **1** {#blue-msg}

#### 13.(填空题) <p>第三个测试样本的预测类别为？</p> 

- 答案:
  - **1** {#blue-msg}

### 分类阶段性测试一-分类

#### 1.(多选题) <p>机器学习三要素是？</p> 

- 选项:
  - **<p>模型</p>** {#blue-msg}
  - **<p>策略</p>** {#blue-msg}
  - **<p>算法</p>** {#blue-msg}
  - <p>样本</p>

#### 2.(判断题) <p>感知器算法的损失函数是误分类点的总数。</p> 

- 答案:
  - 对
  - **错** {#blue-msg}

#### 3.(填空题) <p>sklearn提供的感知器类是Perceptron，该类实例化的时候一个重要的参数是eta0，请问该参数表示什么？</p> 

- 答案:
  - **学习率** {#blue-msg}

#### 4.(多选题) <p>下述指标常用来评价分类模型的有哪些？</p> 

- 选项:
  - **<p>准确率（accuracy）</p>** {#blue-msg}
  - **<p>精确率（precision）</p>** {#blue-msg}
  - **<p>召回率（recall）</p>** {#blue-msg}
  - **<p>F1-值（F1-score）</p>** {#blue-msg}
  - <p>均方误差</p>

#### 5.(段落说明) <p>现有10个样本，6个阳性（positive），4个阴性（negative）。模型分别将2个阳性和1个阴性样本预测错误，其余样本均预测正确。请根据该数据，完成下述四个题目。</p> 

- 答案:
  - 暂无答案

#### 6.(填空题) <p>模型的准确率（accuracy）是多少？（保留两位小数）</p> 

- 答案:
  - **0.70** {#blue-msg}

#### 7.(填空题) <p>模型的精确率（precision）是多少？（保留两位小数）</p> 

- 答案:
  - **0.80** {#blue-msg}

#### 8.(填空题) <p>模型的召回率（recall）是多少？（保留两位小数）</p> 

- 答案:
  - **0.67** {#blue-msg}

#### 9.(填空题) <p>F1-值（F1-score）是多少？（保留两位小数）</p> 

- 答案:
  - **0.73** {#blue-msg}

#### 10.(单选题) <p>点击率的预测是一个数据比例不平衡问题（比如训练集中样本呈阴性的比例为99%，阳性的比例是1%），如果我们用这种数据建立模型并使得训练集的准确率高达99%。下列说法正确的是</p> 

- 选项:
  - 模型的准确率非常高，我们不需要进一步探索
  - <p>不能确定模型是否好，应该进一步探讨精确率（precision），如果精确率高，说明模型好。</p>
  - <p>训练样本中阳性和阴性样本的比例不影响模型的性能。</p>
  - **<p>不能确定模型是否好，应该进一步探讨召回率（recall），如果召回率低，说明模型不好，需要重新考虑。</p>** {#blue-msg}

#### 11.(单选题) <p>下列关于支持向量机模型叙述错误的是？</p> 

- 选项:
  - <p>对偶问题的解中非零的alpha对应的样本是支持向量。</p>
  - **<p>将不是支持向量的样本去掉后，使用相同参数重新求得的超平面可能会不同。</p>** {#blue-msg}
  - <p>当惩罚系数C趋于无穷大时，软间隔最大化问题会退化为硬间隔最大化问题。</p>
  - <p>惩罚系数C越小，间隔越大，模型的泛化性能越差。</p>

#### 12.(单选题) <p>支持向量机的损失函数是？</p> 

- 选项:
  - <p>0-1损失函数</p>
  - <p>交叉熵损失函数</p>
  - <p>KL-散度</p>
  - **<p>合页损失函数</p>** {#blue-msg}

#### 13.(判断题) <p>线性不可分问题不能使用支持向量机模型求解。</p> 

- 答案:
  - 对
  - **错** {#blue-msg}

#### 14.(单选题) <p>sklearn中用支持向量机分类的类名是SVC，该类默认使用的核是？</p> 

- 选项:
  - **<p>径向基核函数</p>** {#blue-msg}
  - <p>多项式核函数</p>
  - <p>线性核函数</p>
  - <p>Sigmoid核函数</p>

#### 15.(单选题) <p>下列关于多类分类问题，叙述错误的是</p> 

- 选项:
  - <p>多类分类问题可以转化为二分类问题</p>
  - <p>one-versus-rest方法可以将多类分类问题转化为二分类问题，但是存在训练样本不平衡的问题。</p>
  - **<p>one-versus-one方法可以将多类分类问题转化为二分类问题，与one-versus-rest方法的计算量相当</p>** {#blue-msg}
  - <p>one-versus-one方法通常使用投票原则预测分类结果。</p>

#### 16.(单选题) <p>下列算法属于生成式模型的是？</p> 

- 选项:
  - **<p>朴素贝叶斯</p>** {#blue-msg}
  - <p>支持向量机</p>
  - <p>感知器算法</p>
  - <p>决策树</p>

#### 17.(单选题) <p>下列关于朴素贝叶斯叙述错误的是？</p> 

- 选项:
  - <p>朴素贝叶斯模型的核心假设是&ldquo;在类别已知的情况下，特征条件独立&rdquo;。</p>
  - **<p>朴素贝叶斯模型无法解决连续特征的分类问题。</p>** {#blue-msg}
  - <p>朴素贝叶斯常用于文本分类。</p>
  - <p>拉普拉斯平滑可以有效解决零概率问题。</p>

#### 18.(单选题) <p>sklearn中用于分类任务的K-近邻算法的类是KNeighborClassifier，下述那个参数是算法中的K？</p> 

- 选项:
  - **<p>n_neighbors</p>** {#blue-msg}
  - <p>metric</p>
  - <p>p</p>
  - <p>weights</p>

#### 19.(判断题) <p>K-近邻算法中的超参数K太大和太小对模型都有影响，不同的问题应该选择合适的K。</p> 

- 答案:
  - **对** {#blue-msg}
  - 错

#### 20.(判断题) <p>KD-树中的K和K-近邻中的K都是表示满足特定条件的样本个数。</p> 

- 答案:
  - 对
  - **错** {#blue-msg}

#### 21.(判断题) <p>KD-树和Ball-树都是为了提升K-近邻算法查找K个近邻样本的效率而设计的数据结构。与暴力搜索相比，它们在特征维度较小时有明显优势。</p> 

- 答案:
  - **对** {#blue-msg}
  - 错

#### 22.(多选题) <p>下列选项中关于K-近邻算法叙述正确的有</p> 

- 选项:
  - **<p>K-近邻算法没有明显的训练过程，计算量主要体现在测试阶段。</p>** {#blue-msg}
  - <p>用K-近邻算法分类，预测速度与训练样本多少无关，只与测试样本的数量有关系。</p>
  - <p>K-近邻算法的运算速度与特征的维度无关。</p>
  - **<p>在使用sklearn中的K-近邻算法时，如果选择了KD-树或Ball-树等数据结构，fit阶段主要用来构建相应的数据结构。</p>** {#blue-msg}

#### 23.(多选题) <p>关于决策树，下列说法正确的有</p> 

- 选项:
  - **<p>构建决策树的关键是确定划分属性。</p>** {#blue-msg}
  - <p>决策树越深模型的分类效果越好。</p>
  - **<p>如果使用信息增益确定最优划分属性，应该选择信息增益大的属性。</p>** {#blue-msg}
  - <p>如果使用基尼指数确定最优划分属性，应该选择基尼指数大的属性。</p>

#### 24.(单选题) <p>用决策树分类时，如果训练集规模很大，那么下面哪种方式比较合理？</p> 

- 选项:
  - <p>降低特征的维度</p>
  - 2. 增加学习率
  - **<p>3. 减少树的深度</p>** {#blue-msg}
  - <p>挑选少量样本来训练</p>

#### 25.(多选题) <p>决策树剪枝的主要目的是？</p> 

- 选项:
  - **<p>降低过拟合风险</p>** {#blue-msg}
  - <p>降低欠拟合风险</p>
  - <p>提高模型在训练集的准确率</p>
  - **<p>提高模型的泛化能力</p>** {#blue-msg}

#### 26.(多选题) <p>经典决策树有ID3，C4.5，CART等，下列选项中关于这些算法叙述正确的有</p> 

- 选项:
  - **<p>ID3没有考虑连续特征。</p>** {#blue-msg}
  - **<p>ID3使用信息增益确定划分属性。</p>** {#blue-msg}
  - **<p>C4.5使用增益率确定划分属性。</p>** {#blue-msg}
  - **<p>CART生成的树是二叉树，使用了基尼指数确定划分属性。</p>** {#blue-msg}
  - **<p>C4.5和CART都可以处理连续属性，都考虑了剪枝，都考虑了缺失值的处理。</p>** {#blue-msg}
  - <p>构建相同深度的决策树，CART比C4.5的运算量大。</p>

#### 27.(多选题) <p>下列选项中，哪些算法使用串行策略，通过提升的方式，由若干弱分类器构建出强分类器？</p> 

- 选项:
  - **<p>AdaBoost</p>** {#blue-msg}
  - **<p>梯度提升树</p>** {#blue-msg}
  - <p>决策树</p>
  - <p>Bagging</p>

#### 28.(多选题) <p>下列选项中，关于AdaBoost算法描述正确的有？</p> 

- 选项:
  - **<p>AdBoost算法通过调整样本的分布，使得当前的弱分类器会优先将分布值大的样本分对。</p>** {#blue-msg}
  - **<p>AdaBoost算法是向前分步算法的特例。</p>** {#blue-msg}
  - **<p>在sklearn中，用于分类的AdaBoost算法对应的类是AdaBoostClassifier，其中参数n_estimators是弱分类器个数。</p>** {#blue-msg}
  - <p>AdaBoost算法很好地体现了好而不同的策略。</p>

#### 29.(多选题) <p>下列选项中，关于Bagging，叙述正确的有？</p> 

- 选项:
  - **<p>在测试阶段，Bagging在学习到的基学习器中通过投票规则确定最终分类结果。</p>** {#blue-msg}
  - **<p>Bagging通过Bootstrap重采样的方式实现样本扰动，进而使各基学习器具有差异性。</p>** {#blue-msg}
  - **<p>在sklearn中，用于分类的Bagging算法对应的类是BaggingClassifier，其中参数n_estimators是基学习器的个数。</p>** {#blue-msg}
  - <p>Bootstrap重采样保证了所有训练样本都将被用来训练某个基学习器。</p>

#### 30.(单选题) <p>bootstrap 数据的含义是：</p> 

- 选项:
  - <p>有放回的从整体M中抽样m个特征</p>
  - <p>无放回的从整体M中抽样m个特征</p>
  - **<p>有放回的从整体N中抽样n个样本</p>** {#blue-msg}
  - <p>无放回的从整体N中抽样n个样本</p>

#### 31.(多选题) <p>下列选项中，关于随机森林叙述正确的有？</p> 

- 选项:
  - **<p>随机森林通过样本扰动和属性扰动使每棵决策树具有差异性。</p>** {#blue-msg}
  - **<p>大多数情况下，随机森林的性能优于Bagging。</p>** {#blue-msg}
  - <p>随机森林很好地使用了分而治之的策略。</p>
  - <p>构建随机森林时，随机选取属性个数的参数k无关紧要，该参数的大小对模型的性能影响不大。</p>

#### 32.(段落说明) <p>现根据以下数据要构建是否放贷的决策树。在此背景下，完成后续题目（42-51）。结果保留两位小数。</p>
<p>&nbsp;</p>
<table style="border-collapse: collapse; width: 99.6425%; height: 171px;" border="1">
<tbody>
<tr style="height: 19px;">
<td style="width: 19.6644%; height: 19px;">编号</td>
<td style="width: 19.6644%; height: 19px;">有工作</td>
<td style="width: 19.6644%; height: 19px;">有房产</td>
<td style="width: 19.6644%; height: 19px;">信贷情况</td>
<td style="width: 19.7765%; height: 19px;">放贷</td>
</tr>
<tr style="height: 19px;">
<td style="width: 19.6644%; height: 19px;">1</td>
<td style="width: 19.6644%; height: 19px;">是</td>
<td style="width: 19.6644%; height: 19px;">否</td>
<td style="width: 19.6644%; height: 19px;">好</td>
<td style="width: 19.7765%; height: 19px;">是</td>
</tr>
<tr style="height: 19px;">
<td style="width: 19.6644%; height: 19px;">2</td>
<td style="width: 19.6644%; height: 19px;">否</td>
<td style="width: 19.6644%; height: 19px;">是</td>
<td style="width: 19.6644%; height: 19px;">非常好</td>
<td style="width: 19.7765%; height: 19px;">是</td>
</tr>
<tr style="height: 19px;">
<td style="width: 19.6644%; height: 19px;">3</td>
<td style="width: 19.6644%; height: 19px;">是</td>
<td style="width: 19.6644%; height: 19px;">否</td>
<td style="width: 19.6644%; height: 19px;">非常好</td>
<td style="width: 19.7765%; height: 19px;">是</td>
</tr>
<tr style="height: 19px;">
<td style="width: 19.6644%; height: 19px;">4</td>
<td style="width: 19.6644%; height: 19px;">否</td>
<td style="width: 19.6644%; height: 19px;">是</td>
<td style="width: 19.6644%; height: 19px;">好</td>
<td style="width: 19.7765%; height: 19px;">是</td>
</tr>
<tr style="height: 19px;">
<td style="width: 19.6644%; height: 19px;">5</td>
<td style="width: 19.6644%; height: 19px;">否</td>
<td style="width: 19.6644%; height: 19px;">否</td>
<td style="width: 19.6644%; height: 19px;">一般</td>
<td style="width: 19.7765%; height: 19px;">否</td>
</tr>
<tr style="height: 19px;">
<td style="width: 19.6644%; height: 19px;">6</td>
<td style="width: 19.6644%; height: 19px;">否</td>
<td style="width: 19.6644%; height: 19px;">否</td>
<td style="width: 19.6644%; height: 19px;">好</td>
<td style="width: 19.7765%; height: 19px;">否</td>
</tr>
<tr style="height: 19px;">
<td style="width: 19.6644%; height: 19px;">7</td>
<td style="width: 19.6644%; height: 19px;">是</td>
<td style="width: 19.6644%; height: 19px;">否</td>
<td style="width: 19.6644%; height: 19px;">一般</td>
<td style="width: 19.7765%; height: 19px;">否</td>
</tr>
<tr style="height: 19px;">
<td style="width: 19.6644%; height: 19px;">8</td>
<td style="width: 19.6644%; height: 19px;">否</td>
<td style="width: 19.6644%; height: 19px;">否</td>
<td style="width: 19.6644%; height: 19px;">一般</td>
<td style="width: 19.7765%; height: 19px;">否</td>
</tr>
</tbody>
</table> 

- 答案:
  - 暂无答案

#### 33.(填空题) <p>样本集的信息熵为</p> 

- 答案:
  - **<p>1.00</p>** {#blue-msg}

#### 34.(填空题) <p>属性&ldquo;有工作&rdquo;的取值为&ldquo;是&rdquo;的样本集的熵为</p> 

- 答案:
  - **0.92** {#blue-msg}

#### 35.(填空题) <p>属性&ldquo;有工作&rdquo;的取值为&ldquo;否&rdquo;的样本集的熵为</p> 

- 答案:
  - **0.97** {#blue-msg}

#### 36.(填空题) <p>属性&ldquo;有工作&rdquo;的条件熵为</p> 

- 答案:
  - **0.95** {#blue-msg}

#### 37.(填空题) <p>属性&ldquo;有工作&rdquo;的信息增益为</p> 

- 答案:
  - **0.05** {#blue-msg}

#### 38.(填空题) <p>属性&ldquo;有房产&rdquo;的条件熵为</p> 

- 答案:
  - **0.69** {#blue-msg}

#### 39.(填空题) <p>属性&ldquo;有房产&rdquo;的信息增益为</p> 

- 答案:
  - **0.31** {#blue-msg}

#### 40.(填空题) <p>属性&ldquo;信贷情况&rdquo;的条件熵为</p> 

- 答案:
  - **0.34** {#blue-msg}

#### 41.(填空题) <p>属性&ldquo;信贷情况&rdquo;的信息增益为</p> 

- 答案:
  - **0.66** {#blue-msg}

#### 42.(填空题) <p>根节点的划分属性是</p> 

- 答案:
  - **信贷情况** {#blue-msg}

#### 43.(段落说明) <p>现根据以下数据，使用朴素贝叶斯预测新样本（是，是，好）的放贷情况。请完成下述题目（53-61），结果保留两位小数。</p>
<p>&nbsp;</p>
<table style="border-collapse: collapse; width: 99.6425%; height: 171px;" border="1">
<tbody>
<tr style="height: 19px;">
<td style="width: 19.6644%; height: 19px;">编号</td>
<td style="width: 19.6644%; height: 19px;">有工作</td>
<td style="width: 19.6644%; height: 19px;">有房产</td>
<td style="width: 19.6644%; height: 19px;">信贷情况</td>
<td style="width: 19.7765%; height: 19px;">放贷</td>
</tr>
<tr style="height: 19px;">
<td style="width: 19.6644%; height: 19px;">1</td>
<td style="width: 19.6644%; height: 19px;">是</td>
<td style="width: 19.6644%; height: 19px;">否</td>
<td style="width: 19.6644%; height: 19px;">好</td>
<td style="width: 19.7765%; height: 19px;">是</td>
</tr>
<tr style="height: 19px;">
<td style="width: 19.6644%; height: 19px;">2</td>
<td style="width: 19.6644%; height: 19px;">否</td>
<td style="width: 19.6644%; height: 19px;">是</td>
<td style="width: 19.6644%; height: 19px;">非常好</td>
<td style="width: 19.7765%; height: 19px;">是</td>
</tr>
<tr style="height: 19px;">
<td style="width: 19.6644%; height: 19px;">3</td>
<td style="width: 19.6644%; height: 19px;">是</td>
<td style="width: 19.6644%; height: 19px;">否</td>
<td style="width: 19.6644%; height: 19px;">非常好</td>
<td style="width: 19.7765%; height: 19px;">是</td>
</tr>
<tr style="height: 19px;">
<td style="width: 19.6644%; height: 19px;">4</td>
<td style="width: 19.6644%; height: 19px;">否</td>
<td style="width: 19.6644%; height: 19px;">是</td>
<td style="width: 19.6644%; height: 19px;">好</td>
<td style="width: 19.7765%; height: 19px;">是</td>
</tr>
<tr style="height: 19px;">
<td style="width: 19.6644%; height: 19px;">5</td>
<td style="width: 19.6644%; height: 19px;">否</td>
<td style="width: 19.6644%; height: 19px;">否</td>
<td style="width: 19.6644%; height: 19px;">一般</td>
<td style="width: 19.7765%; height: 19px;">否</td>
</tr>
<tr style="height: 19px;">
<td style="width: 19.6644%; height: 19px;">6</td>
<td style="width: 19.6644%; height: 19px;">否</td>
<td style="width: 19.6644%; height: 19px;">否</td>
<td style="width: 19.6644%; height: 19px;">好</td>
<td style="width: 19.7765%; height: 19px;">否</td>
</tr>
<tr style="height: 19px;">
<td style="width: 19.6644%; height: 19px;">7</td>
<td style="width: 19.6644%; height: 19px;">是</td>
<td style="width: 19.6644%; height: 19px;">否</td>
<td style="width: 19.6644%; height: 19px;">一般</td>
<td style="width: 19.7765%; height: 19px;">否</td>
</tr>
<tr style="height: 19px;">
<td style="width: 19.6644%; height: 19px;">8</td>
<td style="width: 19.6644%; height: 19px;">否</td>
<td style="width: 19.6644%; height: 19px;">否</td>
<td style="width: 19.6644%; height: 19px;">一般</td>
<td style="width: 19.7765%; height: 19px;">否</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p> 

- 答案:
  - 暂无答案

#### 44.(填空题) <p>P(Y=是)=？</p> 

- 答案:
  - **<p>0.50</p>** {#blue-msg}

#### 45.(填空题) <p>P(有工作=是|Y=是)=？</p> 

- 答案:
  - **<p>0.50</p>** {#blue-msg}

#### 46.(填空题) <p><span style="display: inline !important; float: none; background-color: #ffffff; color: #000000; font-family: Roboto,Helvetica,Arial,sans-serif; font-size: inherit; font-size-adjust: none; font-stretch: inherit; font-style: inherit; font-variant: inherit; font-weight: 400; letter-spacing: normal; line-height: inherit; orphans: 2; text-align: left; text-decoration: none; text-indent: 0px; text-transform: none; -webkit-text-stroke-width: 0px; white-space: normal; word-spacing: 0px;">P(有房产=是|Y=是)=？</span></p> 

- 答案:
  - **<p>0.50</p>** {#blue-msg}

#### 47.(填空题) <p><span style="display: inline !important; float: none; background-color: #ffffff; color: #000000; font-family: Roboto,Helvetica,Arial,sans-serif; font-size: inherit; font-size-adjust: none; font-stretch: inherit; font-style: inherit; font-variant: inherit; font-weight: 400; letter-spacing: normal; line-height: inherit; orphans: 2; text-align: left; text-decoration: none; text-indent: 0px; text-transform: none; -webkit-text-stroke-width: 0px; white-space: normal; word-spacing: 0px;">P(信贷情况=好|Y=是)=？</span></p> 

- 答案:
  - **<p>0.50</p>** {#blue-msg}

#### 48.(填空题) <p><span style="display: inline !important; float: none; background-color: #ffffff; color: #000000; font-family: Roboto,Helvetica,Arial,sans-serif; font-size: inherit; font-size-adjust: none; font-stretch: inherit; font-style: inherit; font-variant: inherit; font-weight: 400; letter-spacing: normal; line-height: inherit; orphans: 2; text-align: left; text-decoration: none; text-indent: 0px; text-transform: none; -webkit-text-stroke-width: 0px; white-space: normal; word-spacing: 0px;">P(Y=否)=？</span></p> 

- 答案:
  - **<p>0.50</p>** {#blue-msg}

#### 49.(填空题) <p><span style="display: inline !important; float: none; background-color: #ffffff; color: #000000; font-family: Roboto,Helvetica,Arial,sans-serif; font-size: inherit; font-size-adjust: none; font-stretch: inherit; font-style: inherit; font-variant: inherit; font-weight: 400; letter-spacing: normal; line-height: inherit; orphans: 2; text-align: left; text-decoration: none; text-indent: 0px; text-transform: none; -webkit-text-stroke-width: 0px; white-space: normal; word-spacing: 0px;">P(有工作=是|Y=否)=？</span></p> 

- 答案:
  - **<p>0.25</p>** {#blue-msg}

#### 50.(填空题) <p><span style="display: inline !important; float: none; background-color: #ffffff; color: #000000; font-family: Roboto,Helvetica,Arial,sans-serif; font-size: inherit; font-size-adjust: none; font-stretch: inherit; font-style: inherit; font-variant: inherit; font-weight: 400; letter-spacing: normal; line-height: inherit; orphans: 2; text-align: left; text-decoration: none; text-indent: 0px; text-transform: none; -webkit-text-stroke-width: 0px; white-space: normal; word-spacing: 0px;">P(有房产=是|Y=否)=？</span></p> 

- 答案:
  - **<p>0.00</p>** {#blue-msg}

#### 51.(填空题) <p><span style="display: inline !important; float: none; background-color: #ffffff; color: #000000; font-family: Roboto,Helvetica,Arial,sans-serif; font-size: inherit; font-size-adjust: none; font-stretch: inherit; font-style: inherit; font-variant: inherit; font-weight: 400; letter-spacing: normal; line-height: inherit; orphans: 2; text-align: left; text-decoration: none; text-indent: 0px; text-transform: none; -webkit-text-stroke-width: 0px; white-space: normal; word-spacing: 0px;">P(信贷情况=好|Y=否)=？</span></p> 

- 答案:
  - **<p>0.25</p>** {#blue-msg}

#### 52.(单选题) <p>根据上述计算结果，<span style="display: inline !important; float: none; background-color: #ffffff; color: #000000; font-family: Roboto,Helvetica,Arial,sans-serif; font-size: inherit; font-size-adjust: none; font-stretch: inherit; font-style: inherit; font-variant: inherit; font-weight: 400; letter-spacing: normal; line-height: inherit; orphans: 2; text-align: left; text-decoration: none; text-indent: 0px; text-transform: none; -webkit-text-stroke-width: 0px; white-space: normal; word-spacing: 0px;">样本（是，是，好）是否放贷？</span></p> 

- 选项:
  - **<p>是</p>** {#blue-msg}
  - <p>否</p>
  - <p>无法确定</p>

#### 53.(段落说明) <p>现有如下样本：</p>
<table style="border-collapse: collapse; width: 16.0795%; height: 105px;" border="1">
<tbody>
<tr style="height: 21px;">
<td style="width: 33.4507%; height: 21px;">x1</td>
<td style="width: 33.4507%; height: 21px;">x2</td>
<td style="width: 33.4507%; height: 21px;">y</td>
</tr>
<tr style="height: 21px;">
<td style="width: 33.4507%; height: 21px;">0</td>
<td style="width: 33.4507%; height: 21px;">1</td>
<td style="width: 33.4507%; height: 21px;">+1</td>
</tr>
<tr style="height: 21px;">
<td style="width: 33.4507%; height: 21px;">0</td>
<td style="width: 33.4507%; height: 21px;">2</td>
<td style="width: 33.4507%; height: 21px;">+1</td>
</tr>
<tr style="height: 21px;">
<td style="width: 33.4507%; height: 21px;">1</td>
<td style="width: 33.4507%; height: 21px;">0</td>
<td style="width: 33.4507%; height: 21px;">-1</td>
</tr>
<tr style="height: 21px;">
<td style="width: 33.4507%; height: 21px;">2</td>
<td style="width: 33.4507%; height: 21px;">0</td>
<td style="width: 33.4507%; height: 21px;">-1</td>
</tr>
</tbody>
</table>
<p>使用SVM得到分类超平面：w1x1+w2x2+b=0.</p>
<p>请完成下列问题（63-66）。结果保留两位小数。</p> 

- 答案:
  - 暂无答案

#### 54.(填空题) <p>w1=?</p> 

- 答案:
  - **<p>-1.00</p>** {#blue-msg}

#### 55.(填空题) <p>w2=?</p> 

- 答案:
  - **<p>1.00</p>** {#blue-msg}

#### 56.(填空题) <p>b=?</p> 

- 答案:
  - **<p>0.00</p>** {#blue-msg}

#### 57.(单选题) <p>利用上述模型进行分类，样本(2,1)的分类结果是？</p> 

- 选项:
  - <p>+1</p>
  - **<p>-1</p>** {#blue-msg}
  - <p>无法确定。</p>

