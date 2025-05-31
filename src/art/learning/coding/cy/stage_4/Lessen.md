---
title: 四阶段笔记
date: 2025-05-31
icon: pen-to-square
order: 1
category:
  - 代码
  - 学习
  - 四阶段
tag:
  - springboot 
  - nginx
  - redis
  - springcloud
  - nacos
---

## 四阶段笔记

# 学习大纲

1、springboot

2、nginx

3、redis

4、微服务 --- springcloud



案例：秒杀



解决 高并发、高可用、高性能



三阶段问题：依赖太多，配置太多

解决方法：使用springboot

## springboot

启动器 ---- spring-boot-starter-xxx 默认配置

约束大于配置



创建springboot项目：

idea脚手架、maven

springboot2 spring5.0 支持jdk 8

springboot3 spring6.0 支持jdk17



https://start.aliyun.com

阿里云镜像、才能使用jdk 8

配置信息通过脚手架创建

![image-20250219140522783](C:\Users\10953\AppData\Roaming\Typora\typora-user-images\image-20250219140522783.png)

![image-20250219140711508](C:\Users\10953\AppData\Roaming\Typora\typora-user-images\image-20250219140711508.png)

通过maven创建项目

![image-20250219143034436](C:\Users\10953\AppData\Roaming\Typora\typora-user-images\image-20250219143034436.png)

修改maven文件导入依赖

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>

  <groupId>com.cykj</groupId>
  <artifactId>demo1</artifactId>
  <version>1.0-SNAPSHOT</version>
  <packaging>jar</packaging>

  <!-- 继承springboot -->
  <parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <!-- jdk 8 不支持 3.0的springboot -->
    <version>2.6.13</version>
    <relativePath/> <!-- lookup parent from repository -->
  </parent>

  <name>demo1</name>
  <url>http://maven.apache.org</url>

  <properties>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <maven.compiler.source>8</maven.compiler.source>
    <maven.compiler.release>8</maven.compiler.release>
    <maven.compiler.target>8</maven.compiler.target>
  </properties>

  <dependencies>
   <!-- 导入springboot启动器、内置tomcat mvc -->
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
  </dependencies>
</project>

```

主函数配置![image-20250219143135970](C:\Users\10953\AppData\Roaming\Typora\typora-user-images\image-20250219143135970.png)

配置注解

# L 1 springboot



默认包扫描为启动类的下一级包



请求静态文件默认在resource下的static目录

(http://localhost:9900/1.jpg)

比如这个地址就会直接访问static下的1.jpg



![image-20250219144936603](C:\Users\10953\AppData\Roaming\Typora\typora-user-images\image-20250219144936603.png)

没有配置数据库导致的



两种配置文件都可以使用，properties优先级高于yml

mybatis的相关配置

![image-20250219161421386](C:\Users\10953\AppData\Roaming\Typora\typora-user-images\image-20250219161421386.png)

拦截器：



文件上传：

------------------------------------

# L2

文件上传的大小有限制，现阶段问题是如果上传文件太大就无法上传

在配置里可以修改上传大小限制

--------------------------------------------------------------------------

相对ssm springboot有什么优点 ==> 启动器 ===>springboot如何装配 === 启动器原理 ==> 了解过哪些启动器

===》会自动导依赖，进行一些默认配置





案例，写一个验证码的启动器来了解启动器的配置

## 验证码启动器

1、创建一个独立的工程

2、导入相关依赖

```xml
<properties>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <spring.boot.version>2.6.13</spring.boot.version>
</properties>

<dependencies>
    <!-- 自动装配 -->
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-autoconfigure</artifactId>
      <version>${spring.boot.version}</version>
    </dependency>

    <!-- 配置处理器 -->
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-configuration-processor</artifactId>
      <version>${spring.boot.version}</version>
    </dependency>
  </dependencies>
```

3、默认配置信息 additional-spring-configuration-metadata.json （例如：宽度，高度，字数，干扰线）

默认结构

```json
{
  "groups": [],
  "properties": [
    {
      "name": "cykj.code.height",
      "type": "java.lang.Integer",
      "description": "验证码高度",
      "defaultValue": 50
    },
    {
      "name": "cykj.code.width",
      "type": "java.lang.Integer",
      "description": "验证码宽度",
      "defaultValue": 200
    },
    {
      "name": "cykj.code.line-count",
      "type": "java.lang.Integer",
      "description": "验证码干扰线数量",
      "defaultValue": 10
    },
    {
      // 这里是配置类里配置项的名称
      "name": "cykj.code.code-count",
      // 设定类型
      "type": "java.lang.Integer",
      // 输入配置项时的提示词
      "description": "验证码字符数量",
      // 默认值
      "defaultValue": 20
    }

  ]
}
```

4、写默认配置选项属性类（将上面的值写在这个类里面）

```java
package com.cykj.entity;

import org.springframework.boot.context.properties.ConfigurationProperties;

/**
 * Description:  TODO
 * 验证码配置属性实体类
 * @author Guguguy
 * @version 1.0
 * @since 2025/2/20 下午3:34
 */

// 设置配置文件内修改配置的键名前缀，会去读取配置文件内cykj.code.开头的配置，会自动覆盖
// 需要在启动类上添加@EnableConfigurationProperties(CodeEntity.class)注解
@ConfigurationProperties(prefix = "cykj.code")
public class CodeEntity {
    private Integer height = 50;
    private Integer width = 150;
    private Integer codeCount = 4;
    private Integer lineCount = 20;

    public CodeEntity() {
    }

    public CodeEntity(Integer codeCount, Integer height, Integer lineCount, Integer width) {
        this.codeCount = codeCount;
        this.height = height;
        this.lineCount = lineCount;
        this.width = width;
    }

    public Integer getCodeCount() {
        return codeCount;
    }

    public void setCodeCount(Integer codeCount) {
        this.codeCount = codeCount;
    }

    public Integer getHeight() {
        return height;
    }

    public void setHeight(Integer height) {
        this.height = height;
    }

    public Integer getLineCount() {
        return lineCount;
    }

    public void setLineCount(Integer lineCount) {
        this.lineCount = lineCount;
    }

    public Integer getWidth() {
        return width;
    }

    public void setWidth(Integer width) {
        this.width = width;
    }
}

```

5、验证码具体业务

6、写到配置类上（具体的业务加载到ioc容器去）

```java
package com.cykj.config;

import com.cykj.entity.CodeEntity;
import com.cykj.service.CodeService;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * Description: TODO
 * 验证码配置类
 * @author Guguguy
 * @version 1.0
 * @since 2025/2/20 下午3:49
 */


@Configuration
// 开启配置属性自动注入
@EnableConfigurationProperties(CodeEntity.class)
public class CodeConfig {

    private CodeEntity codeEntity;


    // 构造器注入，仅限上面的@EnableConfigurationProperties(CodeEntity.class)里面的CodeEntity能注入
    public CodeConfig(CodeEntity codeEntity) {
        this.codeEntity = codeEntity;
    }

    @Bean
    public CodeService codeService() {
        return new CodeService(codeEntity);
    }
}

```

7、spring.factories 自动加载配置类 开启自动加载

```properties
org.springframework.boot.autoconfigure.EnableAutoConfiguration=com.cykj.config.CodeConfig
```

8、打包到本地，安装到本地仓库



然后就可以通过依赖注入的方式获取验证码



创建课程案例（京东秒杀平台）



vant ui



# L3 nginx

目前架构：单体架构 ===》 无法承受过多访问 ===》诞生分布式集群 ===》 同一个项目部署到不同的云服务器上

对完整项目进行拆分（例如案例中的商品模块，用户模块，订单模块。。。）

为此需要使用nginx

nginx ===》web服务器 ===》部署静态资源性能比较好（前端页面相关）

动静分离 ===》动态资源部署到tomcat，静态资源部署到nginx

nginx还能进行负载均衡，代理转发



弹性云服务器



## 负载均衡有几种方式(常用前两钟)

1、轮询（默认） 如果服务器承受压力不同就不太适合用这个，可以通过权重来配置转发的概率

2、加权轮询

3、ip_hash（同一个ip只访问一个服务器）

应用于验证码请求登录，这个还有一个解决方法就是redis

4、最小连接（least_conn）

寻找连接数最少的服务器进行转发

5、url_hash

同一地址使用同一台服务器

6、fair（第三方）

需要装第三方依赖



面试题：负载均衡的策略



这个也是面试题

## 代理转发：

### 正向代理

访问的网站是已知的

### 反向代理

像代购，他去帮你拿

你不知道访问的是什么具体服务器ip



作业：秒杀首页部署nginx，后台请求、vant ui



# L4 redis

面试题：

日志打印 log4j

springboot有什么优势（相较于ssm）

springboot如何自动装配

自定义启动器如何实现	

nginx有什么优点，负载均衡的策略有哪些

redis常用数据类型



## 出现背景

解决session使用场景

以及缓解高并发情况下的数据库压力

## 解决方案

添加一个中间件，将各个session的内容存放到中间件中

验证码存在redis中

## 应用场景

秒杀平台的商品存在这里



## Redis 高速缓存（非关系型数据库 ： key：value）

安装Redis



key一般存字符串 value存对于字符串类型      **string hash set list zset**

redis 的五种数据类型， incr decr 分别可以让数值加一减一

set key value 设定值

get key 获取值



### list ：双向链表

key=goods 里面存十个商品

获取长度，还有商品再进行弹出

rpush存入



常用命令：lpush rpush lpop rpop llen

### hash：存对象

常用命令hset hget hlen （长度） hsetnx（当字段不存在时才会存入）hvals 查看内容



### set：无序集合



### zset：有序集合

zadd key 权重 值



java使用redis 

导依赖

配置

使用

原生对object不太友好

改写进行序列化





# L5 redis 的使用

## 登录鉴权

如同三阶，使用拦截器，只不过将token和信息存入redis内

sa-token



redis存秒杀商品信息



持久化存储

redis 雪崩 穿透 击穿

nacos



# L6 redis 

redis 的持久化存储

一段时间后会将内存的数据存储到文件中

在两次备份中redis崩溃就会导致数据丢失

redis每一步操作都会记录下来（日志文件）==> AOF



redis的解决方案是 rdb + aof （在下次间隔完成存储之后删除上一次的日志文件）

面试题：redis如果实现持久化

redis 雪崩 穿透 击穿

## 击穿 

高并发场景下，短时间内一个热点key失效 / 被删除，此时有大量请求达到数据库，然后数据库崩溃

### 解决方案

1、加分布式锁，互斥锁，只有一个请求去请求数据库，其他请求等待数据库写入缓存后再去读取缓存数据

2、热点key永不失效

## 穿透

高并发场景下，key不存在，数据库也没有数据，请求会直接穿透缓存，到达数据库，大量请求穿透缓存到达数据库然后崩溃

### 解决方案

1、在缓存中写一个空数据 exp：hostGoods：200 =》 set （。。。，null），其他人访问到的就是空数据

## 雪崩

高并发场景下，同一时间，大量热点key同时失效 / 被删除，请求到达数据库，数据库崩溃

### 解决方案

1、热点key永不失效

2、让key间隔失效

3、分布式锁，只让一个请求去访问数据库



## nacos（微服务管理服务）

复杂管理所有后台应用（springboot模块、redis数据库、mysql数据库等）

注册中心

### 微服务(一种设置思想)

具体实施：springcloud / springcloud alibaba （nacos）

1、分布式（微服务）集群架构：

​		服务的拆分原则：遵循单一原则

nacos注册中心

安装，导入依赖

springcloud和springcloud alibaba

子工程导入nacos-discovery

配置文件



如何知道微服务存活：使用心跳线程



微服务，服务之间相互调用

restTemplate

feign

openFeign

HttpClient



restTemplate ==》 类 ==》ioc ==》@bean注入

1、将restTemplate放入ioc

2、用户微服务调用商品微服务（两者都需要注册到nacos上）

商品测试接口，用户去调用这个接口测试



实现负载均衡的组件



# L7 nacos 进阶

微服务的使用场景

并发量大的情况下、不同功能的并发量不同

集群架构：与集群部署的区别在于按需求功能进行拆分，某个服务出问题不会影响到其他服务、保证项目正常运行

解决高并发问题，构建高性能的服务器

拆分微服务可以更加方便项目的打包部署，方便功能的更新迭代



单体架构：代码修改（功能更新了）需要重新打包、重新部署，影响收益



## 微服务五大组件：

### 注册中心（统一管理微服务）

实现方式：nacos、eureka等

### 配置中心（统一管理配置）

包含redis配置，数据库配置等

实现方式：springcloud config、nacos

### 负载均衡

nginx、loadbalanced

### API网关（统一暴露api接口）

实现方式：zuul、gateway

### 服务包保护（限量访问、限流、熔断、降级）

### 其他方面

服务间调用：restTemplate、openFeign、HttpClient

服务链路追踪

服务日志监控



nginx和loadbalanced有什么区别：

nginx：高效的web服务器，用于部署静态资源，作为反向代理服务器进行转发

修改配置，重启nginx

服务端调用

loadbalanced为springcloud体系中，写在代码内部

无需修改配置，服务会注册到nacos注册中心中

客户端调用，可以直接转发到对应微服务

## 服务之间的调用

1、restTemplate

缺点：地址需要写死，不好维护

2、openFeign

无感开发，像调用本地service一样调用

实现步骤：

1、导入依赖

2、配置

3、使用



feign的参数映射接收

## 配置中心

### 导入依赖

### 写配置



application.yml 这些配置文件什么时候加载

bootstrap.properties

application.properties



问题：bootstrap和application什么时候加载，优先级？为什么要增加bootstrap



### 配置实时更新

nacos配置项添加refresh-enable

在需要配置的类中添加refreshScope注解

数据库配置信息如果发生变更，你得到的配置值是实时更新的，但是数据库操作会失败、因为他的jdbc连接类以及完成创建，所以即使配置发生变化，因为类以及创建完成，所以无法变更，所以数据库访问还是根据之前的配置来的

因此数据库信息更改需要重新启动服务

### 使用



问题：有些配置是通用的，有些配置是独特的，是某个微服务特有的

因此有以下解决方法

配置有分三种：主配置、拓展配置、共享配置

### 主配置：在配置文件中直接使用name设置配置文件名的

其他配置都必须带上.yml后缀

### 拓展配置：

### 共享配置：



面试：微服务组件有哪些：

什么时候使用微服务架构

微服务有什么优缺点

nacos如何知道哪些服务是可用的哪些是不可用的（通过心跳机制）

nacos的配置有几种，他们的优先级？

nginx负载均衡的策略与方式

nacos配置实时发生变化 使用发布者订阅者模式

当nacos配置发生变化时，他会查询有哪些微服务订阅这个配置文件，然后通知他，微服务随后拉取更新的配置文件

`24种设计模式`

### 常见的设计模式：介绍其中的运用地点（特别是框架中的设计模式）

生产者-消费者模式

#### 创建型模式：

单例模式
原型模式
简单工厂模式
工厂方法模式
抽象工厂模式
建造者模式

#### 结构型模式：

代理模式
适配器模式
桥接模式
装饰器模式
外观模式
享元模式
组合模式

#### 行为型模式：

模板方法模式
策略模式
命令模式
责任链模式
状态模式
观察者模式
中介者模式
迭代器模式
访问者模式
备忘录模式
解析器模式

# L8 nacos配置中心 后续、 MQ

思考题

springboot内核启动前加载：加载bootstrap.yml

内核启动后加载：application.yml

写在不同的文件的原因，有些配置需要在内核启动前拿到，否则会出现异常，因此需要在内核启动前先去处理



三种配置的优先级：

同时在三种配置中设定相同的值，在程序中打印，即可知道优先级

优先级：主配置》拓展配置》共享配置

拓展配置和共享配置实时更新需要在下面增加配置项refresh： true 记得在控制器加refreshScope注解



## MQ消息队列

为什么要使用：

使用场景

微服务体量大，系统反馈时间较长

串行开发 ==》并行

1、注册 ==》写入消息队列 ==》 再去发邮件，发短信通知

2、流量削峰：嘀嘀打车支付、支付排队

支付请求信息存入消息队列

3、应用解耦：让微服务间关系不太大



完成注册后发送一条消息到消息队列，消息队列发送请求到其他的微服务完成服务

## MQ的种类：RocketMQ、RabbitMQ、ActiveMQ

区别在于：？

使用场景：秒杀

NameSRV：NameServer：管理broker的，可做集群的服务器

Broker：管理消息主题/转发消息的服务器

Topic：主题/分类

Massage：消息



先启动nameserver再启动broker



安装rocketMQ：

linux环境变量配置/etc/profile



./mqshutdown namesrv



生产者：生产消息的，将消息放入队列的

消费者：消费消息的，将消息拿出队列的



普通消息，顺序消息，延迟消息



导入依赖

配置mq

测试发送



雪花算法





1、商品预热、热点（秒杀）商品， 缓存（redis）存？ 存所有热点商品、商品的规格、库存

2、下单操作，判断商品是否存在、判断库存够不够、**`不能重复下单`**（从缓存解决：判断用户有没有下单、结束）

3、



# L9 

服务多，端口多，不好使用调用

解决方案：统一对外暴露端口



如果在nginx上使用，如果新增或者删除要对nginx'配置文件进行修改，还要重启nginx过于繁琐



使用网关：统一暴露api接口 负载均衡



## 网关作用

统一暴露api接口

统一鉴权

限流

netty框架写的 ==》与传统web技术栈有冲突（springWeb， mvc）不能使用这几个依赖



导入依赖

创建配置文件

将gateway注册到注册中心





## 统一分布式鉴权

之前：拦截器实现登录鉴权

登录成功生成token，存入redis，并设置有效时间

把token返回前端，存入cookie

每次请求 请求头携带token

拦截器判断是否在白名单内

拦截后获取请求头的token进行绑定

有没有token，有没有过期

没过期延迟token时间

放行



之后使用过滤器鉴权：

登录成功生成token，存入redis，并设置有效时间

把token返回前端，存入cookie

每次请求 请求头携带token

`判断是否在过滤器白名单内`

*`进入过滤器获取请求头的token进行绑定`*

有没有token，有没有过期

没过期延迟token时间

放行



# L10 限流、熔断

## 复习

springboot 约定大于配置

nginx 负载均衡的六种策略 动静分离 反向代理

redis 高速缓存数据库，存入一些高热度的库，减轻数据库压力、验证码的统一校验（作为中间件使用）

redis 的五种数据类型，雪崩，击穿，穿透，登录校验



单体 ==> 分布式架构 拆分原则：单一原则：一个服务只做一个事情



注册中心：心跳机制，服务间的通信：restTemplate、openFeign、feign、HTTPClient

配置中心：主配置（这个微服务必须使用的），共享配置（多服务需要相同的配置），扩展配置（做一些特定功能需要的配置）

mq消息队列：流量的削峰 业务的解构，使用普通消息、延时消息

网关：对外统一暴露api接口、分布式登录鉴权

## 限流

第一种方案：gateway + redis 令牌桶

实现：导依赖、配置、创建配置规则（在网关配置）



压力测试使用Jmeter



第二种方案：sentinel

 

## 熔断

1、熔断hystrix + openFeign

导依赖 需要三个依赖：hystrix、openFeign、loadbalancer

配置

启动类开启hystrix

2、sentinel



# L11 sentinel

使用注意事项：sentinel的客户端要和微服务所在的服务器一致，否则sentinel启动会一片空白



服务器不同的话需要设置相同时区

使用时需要整合sentinel

导入依赖

添加配置



## 限流

资源名：为接口，参数，url等，大部分情况下使用url

针对来源：默认default为所有来源

阈值类型：qps每秒请求数 单机阈值：资源每秒钟请求达到5开始限制，默认拒绝请求



### 流控模式：

直接流控

直接对某个资源进行流控

关联流控

在同一个微服务里限制一些服务和特定服务的总并发数（在到达限制的情况下优先让特定服务运行，而其他服务将被拒绝）

链路流控

链路追踪，跨微服务、用户服务调用用户微服务

调用时会有一个入口路径，这边写的是入口微服务的url地址

比如通过order/create 调用 good 微服务内的create方法，order/query 调用 good 微服务的query方法，入口路径就是前面的order/**

限制也是限制入口的流量而不是限制调用的另一个微服务的流量

需要设置feign.sentinel.enable: true 和 spring.cloud.sentinel.web-context-unify: false

 spring.cloud.sentinel.transport.dashboard: {sentinel 控制台地址}



# 一些数据库使用例



![image-20250312160139284](assets/image-20250312160139284.png)
