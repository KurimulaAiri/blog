---
title: IPv4
date: 2025-07-23
icon: 'earth-americas'
order: 20
category: 
    - '408'
    - '计算机网络'
    - 考研
---

## IPv4 协议

![各层协议之间关系](https://store.s1r0ko.top/svg/m/cn/20/1_ver_1.svg)

::: tip

各层协议之中， **IP 协议（Internet Protocol）是互联网的核心**{#red-msg}

ARP 协议用于查询同一网络中的 `<主机 IP 地址, MAC 地址>` 之间的映射关系

ICMP 协议用于网络层实体之间互相通知“异常事件”

IGMP 协议用于实现 IP 组播

:::

## IP 数据报的格式

![IP 数据报的格式](https://store.s1r0ko.top/svg/m/cn/20/2_ver_1.svg)

IP 数据报分为**首部**和**数据部分**两个部分

首部的结构如图所示

::: info 首部

首部分为固定部分和可变部分两个部分

固定部分长度为 20 字节，可变部分长度为 0 ~ 40 字节不等

:::

