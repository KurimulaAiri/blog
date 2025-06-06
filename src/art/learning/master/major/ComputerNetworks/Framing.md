---
title: 组帧
date: 2025-05-31
icon: 'earth-americas'
order: 14
category: 
    - '408'
    - '计算机网络'
    - 考研
---

## 含义

将上一层数据封装成帧的过程称为组帧

组帧的主要内容：

- 帧定界：如何让接收方能够确定帧的界限

- 透明传输：接收方要能够去除“帧定界”的附加信息，把“帧”“恢复原貌”

## 四种组帧方法

::: warning

$$

\text{帧长} = \text{帧头长度} + \text{帧数据长度} + \text{帧尾长度} = \text{计数字段长度} + \text{数据长度}

$$

:::

### 字符计数法

原理：在每个帧的开头，用一个**定长计数字段**表示帧长

最大缺点：任何一个计数字段出错，都会导致后续所有帧无法定界

## 字节填充法

原理：在数据头尾加上控制字符 SOH 和 EOT（Start of Header 和 End of Transmission），两字节之间的部分就为数字

- SOH 

    - 二进制：00000001

    - 十六进制：01H

- EOT

    - 二进制：00000100

    - 十六进制：04H

对于数据内可能存在上述两种字符的情况，发送方会在发送前将数据内容包含的这两种字节数据前添加转义字符 ESC （Escape Character）（00011011），数据接收方会将转义字符去除，还原数据

同样的，如果数据中含有转义字符 ESC ，也需要在其前添加转义字符 ESC ，以防止数据接收方误判

总言之，当帧数据内部出现特殊字符时，需要在其前添加转义字符 ESC ，而数据接收方会对其进行逆操作

### 零比特填充法

原理：使用特殊比特串表示帧的开始和结束

- 帧开始：01111110

- 帧结束：01111110

和字节填充法一样，会遇到帧数据内部出现特殊字符的情况，对于这种情况

发送方需要对帧的数据进行处理：每当遇到连续的 5 个 1，就在其后面填充一个 0，

接收方也需要对帧的数据进行处理：每当遇到连续的 5 个 1，就将其后面的 0 去除

::: tip 

数据链路层中组帧使用这种协议的方法的协议：

- HDLC

- PPP

:::

### 违规编码法

这种方法需要物理层的配合

原理：

在帧的开头和结尾，分别插入一个时钟周期的违规编码，比如在曼彻斯特编码中，每个编码在一个时钟周期内一定要发生一次跳变，在曼彻斯特编码传输的数据下，我们可以在开头和结尾插入一个周期不跳变的信号作为违规编码来标记帧的数据部分