---
title: 计网选择题
date: 2025-06-09
icon: 'earth-americas'
category:
  - 期末考复习
tag:
  - 计算机网络
---
### 第11章测试
#### 1. End systems use port numbers to select the proper application. What is the smallest port number that can be dynamically assigned by a host system?（单选题）
- 终端系统使用端口号来选择合适的应用程序。主机系统可以动态分配的最小端口号是多少？
  - 选项：
    - 1
    - 64
    - 128
    - 256
    - 512
    - 1024（**正确答案**）{#blue-msg}

#### 2. During data transfer, what are the main responsibilities of the receiving host? (Choose two.)（多选题）
- 在数据传输过程中，接收主机的主要职责是什么？（选择两项）
  - 选项：
    - throughput（吞吐量）
    - encapsulation（封装）
    - acknowledgment（确认）（**正确答案**）{#blue-msg}
    - bandwidth（带宽）
    - segmentation（分段）
    - reassembly（重组）（**正确答案**）{#blue-msg}

#### 3. TCP/IP connection-oriented sessions begin with a three-way handshake. Which items describe the handshake process? (Choose three.)（多选题）
- TCP/IP面向连接的会话以三次握手开始。哪些选项描述了握手过程？（选择三项）
  - 选项：
    - acknowledge（确认）（**正确答案**）{#blue-msg}
    - synchronize（同步）（**正确答案**）{#blue-msg}
    - encapsulate（封装）
    - negotiate（协商）（**正确答案**）{#blue-msg}
    - create（创建）
    - propagate（传播）

#### 4. What is the purpose of TCP/UDP port numbers?（单选题）
- TCP/UDP端口号的目的是什么？
  - 选项：
    - indicate the beginning of a three-way handshake（指示三次握手的开始）
    - reassemble the segments into the correct order（将分段重新组装成正确的顺序）
    - identify the number of data packets that may be sent without acknowledgment（识别在无需确认的情况下可以发送的数据数据包数量）
    - track different conversations crossing the network at the same time（跟踪同时穿越网络的不同会话）（**正确答案**）{#blue-msg}

#### 5. Which of the following describes the operation of TCP window size?（单选题）
- 以下哪项描述了TCP窗口大小的操作？
  - 选项：
    - Window size increases as all data transfers.（在所有数据传输时窗口大小增加。）
    - Window size is the TCP process used prepare data for transmission.（窗口大小是TCP用于准备数据传输的过程。）
    - Window size is decreased if packets are lost.（如果数据包丢失，窗口大小会减小。）（**正确答案**）{#blue-msg}
    - Window size of 15 means that the next byte expected is byte number 15.（窗口大小为15意味着期望的下一个字节是第15个字节。）

#### 6. Which of the following protocols operate at the application layer of the OSI model? (Choose two.)（多选题）
- 以下哪些协议在OSI模型的应用层运行？（选择两项）
  - 选项：
    - FTP（文件传输协议）（**正确答案**）{#blue-msg}
    - TCP（传输控制协议）
    - UDP（用户数据报协议）
    - HTTP（超文本传输协议）（**正确答案**）{#blue-msg}

#### 7. Which of the following services is used to translate a web address into an IP address?（单选题）
- 以下哪种服务用于将网址转换为IP地址？
  - 选项：
    - DNS（域名系统）（**正确答案**）{#blue-msg}
    - WINS（Windows Internet命名服务）
    - DHCP（动态主机配置协议）
    - Telnet（远程登录协议）

#### 8. Which protocols can be used to transfer files between systems? (Choose two)（多选题）
- 哪些协议可用于在系统之间传输文件？（选择两项）
  - 选项：
    - TFTP（简单文件传输协议）（**正确答案**）{#blue-msg}
    - DNS（域名系统）
    - SNMP（简单网络管理协议）
    - FTP（文件传输协议）（**正确答案**）{#blue-msg}
    - DHCP（动态主机配置协议）

#### 9. What does TCP use to begin the three-way handshaking process? （单选题）
- TCP使用什么来开始三次握手过程？
  - 选项：
    - The destination host sends an ACK segment. （目的主机发送一个ACK段。）
    - The sending host sends a SYN segment. （发送主机发送一个SYN段。）（**正确答案**）{#blue-msg}
    - The sending host sends a SYN and ACK segment. （发送主机发送一个SYN和ACK段。）
    - The destination host sends a SYN segment.（目的主机发送一个SYN段。）

#### 10. Which port numbers are commonly assigned for FTP use? (Choose two.) （多选题）
- 哪些端口号通常用于FTP？（选择两项）
  - 选项：
    - 19 
    - 20 （**正确答案**）{#blue-msg}
    - 21 （**正确答案**）{#blue-msg}
    - 22


### 第九章
#### 1. The network 128.128.32.0 has 1022 useable hosts. What is the subnet mask for this network?（单选题）
- 网络128.128.32.0有1022个可用主机。该网络的子网掩码是什么？
  - 选项：
    - 255.255.250.0
    - 255.255.251.0
    - 255.255.252.0（**正确答案**）{#blue-msg}
    - 255.255.254.0
    - 255.255.255.0

#### 2. Which subnet mask would be assigned to the network address of 192.168.32.0 to provide 510 useable host addresses per subnetwork?（单选题）
- 应该为网络地址192.168.32.0分配哪个子网掩码，以便每个子网提供510个可用主机地址？
  - 选项：
    - 255.255.0.0
    - 255.255.255.0
    - 255.255.254.0（**正确答案**）{#blue-msg}
    - 255.255.248.0

#### 3. Which TCP/IP layer provides services that support a logical connection between the sending and receiving hosts?（单选题）
- TCP/IP的哪一层提供支持发送和接收主机之间逻辑连接的服务？
  - 选项：
    - application（应用层）
    - network（网络层）
    - IP（网际协议层）
    - transport（传输层）（**正确答案**）{#blue-msg}
    - presentation（表示层）

#### 4. What should a system administrator consider when assigning an IP address to a network server? (Choose two.)（多选题）
- 系统管理员在为网络服务器分配IP地址时应考虑什么？（选择两项）
  - 选项：
    - Servers should have addresses assigned dynamically through a DHCP.（服务器应该通过DHCP动态分配地址。）
    - Servers with a dynamically assigned IP address would be difficult to locate on a network.（动态分配IP地址的服务器在网络上很难定位。）（**正确答案**）{#blue-msg}
    - Servers with periodically changed IP addresses have little effect on a network.（定期更改IP地址的服务器对网络影响很小。）
    - Servers should have IP addresses assigned statically by a network system administrator.（服务器应该由网络系统管理员静态分配IP地址。）（**正确答案**）{#blue-msg}

#### 5. What is the network broadcast address for a Class C address of 192.168.32.0 with the default subnet mask?（单选题）
- 对于默认子网掩码的C类地址192.168.32.0，其网络广播地址是什么？
  - 选项：
    - 192.168.0.0
    - 192.168.0.255
    - 192.168.32.0
    - 192.168.32.254
    - 192.168.32.255（**正确答案**）{#blue-msg}

#### 6. Several solutions have been developed to expand the number of IP addresses available for public use. Which technologies are solutions? (Choose three.)（多选题）
- 已经开发了几种解决方案来扩展可供公共使用的IP地址数量。哪些技术是这些解决方案？（选择三项）
  - 选项：
    - DHCP（动态主机配置协议）
    - classless interdomain routing（无类域间路由）（**正确答案**）{#blue-msg}
    - IPv6（互联网协议第6版）（**正确答案**）{#blue-msg}
    - a new 64 bit addressing scheme（一种新的64位寻址方案）
    - Network Address Translation（网络地址转换）（**正确答案**）{#blue-msg}
    - IPv5（互联网协议第5版）

#### 7. How many usable hosts are available given a Class C IP address with the default subnet mask?（单选题）
- 给定一个具有默认子网掩码的C类IP地址，有多少可用主机？
  - 选项：
    - 254（**正确答案**）{#blue-msg}
    - 255
    - 256
    - 510
    - 511
    - 512

#### 8. How would you explain to a client that IP is unreliable?（单选题）
- 你将如何向客户解释IP是不可靠的？
  - 选项：
    - It offers a best chance attempt of routing data, but usually delivers data to remote hosts without a problem.（它提供了路由数据的最佳尝试，但通常能毫无问题地将数据传送到远程主机。）
    - It performs no error checking and correction services, relying on the upper layers for those services.（它不执行错误检查和纠正服务，依靠上层来提供这些服务。）（**正确答案**）{#blue-msg}
    - It simply broadcasts the data out on all available paths, thus ensuring delivery.（它只是在所有可用路径上广播数据，从而确保传输。）
    - When applied in self-healing networks, it is mostly reliable.（当应用于自愈网络时，它大多是可靠的。）
    - It uses a best guess algorithm to route and deliver data, resulting in a robust network.（它使用最佳猜测算法来路由和传输数据，从而形成一个健壮的网络。）

#### 9. Which of the following would be a function of ICMP?（单选题）
- 以下哪项是ICMP的功能？
  - 选项：
    - It provides control and messaging capabilities.（它提供控制和消息传递功能。）（**正确答案**）{#blue-msg}
    - It provides address resolution services.（它提供地址解析服务。）
    - It supports e-mail functionality.（它支持电子邮件功能。）
    - It enables file transfer between hosts.（它允许主机之间进行文件传输。）
    - It allows remote login to distant hosts.（它允许远程登录到远程主机。）

#### 10. Which operations are performed by IP? (Choose three.)（多选题）
- IP执行哪些操作？（选择三项）
  - 选项：
    - routing packets to remote hosts（将数据包路由到远程主机）（**正确答案**）{#blue-msg}
    - providing a physical addressing scheme（提供物理寻址方案）
    - defining frames（定义帧）
    - defining packets（定义数据包）（**正确答案**）{#blue-msg}
    - transferring data between the internet layer and the network access layer（在互联网层和网络访问层之间传输数据）（**正确答案**）{#blue-msg}
    - transferring data between the internet layer and the application layer（在互联网层和应用层之间传输数据）


### 第二章测试
#### 1. Which of the following are ways that bandwidth is commonly measured? (Choose three.) 
- 以下哪些是常用的带宽测量方式？（选择三项）
  - 选项：
    - GHzps
    - kbps（千比特每秒）（**正确答案**）{#blue-msg}
    - Mbps（兆比特每秒）（**正确答案**）{#blue-msg}
    - Nbps
    - MHzps
    - Gbps（吉比特每秒）（**正确答案**）{#blue-msg}

#### 2. Which of the following physical topologies connects all cables to a central point of concentration?
- 以下哪种物理拓扑结构将所有电缆连接到一个集中点？
  - 选项：
    - ring（环形）
    - star（星形）（**正确答案**）{#blue-msg}
    - mesh（网状）
    - bus（总线）

#### 3. Which of the following are considered valid types of VPNs? (Choose three.) 
- 以下哪些被认为是有效的VPN类型？（选择三项）
  - 选项：
    - internal（内部）
    - intranet（企业内部网）（**正确答案**）{#blue-msg}
    - external（外部）
    - extranet（企业外部网）（**正确答案**）{#blue-msg}
    - local（本地）
    - access（接入）（**正确答案**）{#blue-msg}

#### 4. Refer to the following list. Choose the correct order of data encapsulation when a device sends information.
- 参考以下列表。选择设备发送信息时数据封装的正确顺序。
  - 列表：1.segments（段） 2.bits（位）  3.packets（数据包） 4.data（数据）5.frames（帧）
  - 选项：
    - 1 - 3 - 5 - 4 - 2
    - 2 - 1 - 3 - 5 - 4
    - 2 - 4 - 3 - 5 - 1
    - 4 - 3 - 1 - 2 - 5
    - 4 - 1 - 3 - 5 - 2（**正确答案**）{#blue-msg}
    - 3 - 5 - 1 - 2 - 4

#### 5. During the data encapsulation process, how is the data broken down by the transport layer?
- 在数据封装过程中，传输层如何分解数据？
  - 选项：
    - packets（数据包）
    - segments（段）（**正确答案**）{#blue-msg}
    - data bits（数据位）
    - frames（帧）

#### 6. Which of the following describe a LAN? (Choose two.) 
- 以下哪些描述了局域网（LAN）？（选择两项）
  - 选项：
    - operates within a limited geographical area（在有限的地理区域内运行）（**正确答案**）{#blue-msg}
    - provides dial-up connectivity（提供拨号连接）
    - uses serial interfaces to allow operation at lower speeds（使用串行接口以允许在较低速度下运行）
    - connects physically adjacent devices（连接物理上相邻的设备）（**正确答案**）{#blue-msg}
    - ensures single access to specialty hosts（确保对专用主机的单一访问）

#### 7. Which of the following are factors that determine throughput? (Choose two。）
- 以下哪些是决定吞吐量的因素？（选择两项）
  - 选项：
    - types of passwords used on servers（服务器上使用的密码类型）
    - type of Layer 3 protocol used（使用的第3层协议类型）
    - network topology（网络拓扑结构）（**正确答案**）{#blue-msg}
    - width of the network cable（网络电缆的宽度）
    - number of users on the network（网络上的用户数量）（**正确答案**）{#blue-msg}

#### 8. Which of the following topologies are considered logical topologies? (Choose two.) 
- 以下哪些拓扑结构被认为是逻辑拓扑结构？（选择两项）
  - 选项：
    - bus（总线）
    - token-passing（令牌传递）（**正确答案**）{#blue-msg}
    - star（星形）
    - mesh（网状）
    - broadcast（广播）（**正确答案**）{#blue-msg}
    - hierarchical（分层）

#### 9. Which of the following is true regarding network bandwidth?
- 关于网络带宽，以下哪项是正确的？
  - 选项：
    - Bandwidth is free.（带宽是免费的。）
    - Bandwidth has capacity limits.（带宽有容量限制。）（**正确答案**）{#blue-msg}
    - Bandwidth never increases.（带宽永远不会增加。）
    - Bandwidth is not a key factor in analyzing network performance.（带宽不是分析网络性能的关键因素。）

#### 10. From the following list, choose the data packaging type that is created at the data link layer during the data encapsulation process.
- 从以下列表中，选择在数据封装过程中数据链路层创建的数据打包类型。
  - 选项：
    - packets（数据包）
    - segments（段）
    - data bits（数据位）
    - frames（帧）（**正确答案**）{#blue-msg}

#### 11. Which protocols are commonly part of the application layer of the TCP/IP model? (Choose three.) 
- 哪些协议通常是TCP/IP模型应用层的一部分？（选择三项）
  - 选项：
    - FTP（文件传输协议）（**正确答案**）{#blue-msg}
    - DNS（域名系统）（**正确答案**）{#blue-msg}
    - UDP（用户数据报协议）
    - TCP（传输控制协议）
    - HTTP（超文本传输协议）（**正确答案**）{#blue-msg}

#### 12. Which OSI and TCP/IP layer appears in both models yet has different functions in each?
- 哪个OSI和TCP/IP层在两个模型中都出现，但在每个模型中具有不同的功能？
  - 选项：
    - transport（传输层）
    - session（会话层）
    - application（应用层）（**正确答案**）{#blue-msg}
    - Internet（互联网层）
    - physical（物理层）

#### 13. Which layer of the TCP/IP model deals with quality-of-service issues such as reliability, flow control, and acknowledgement?
- TCP/IP模型的哪一层处理诸如可靠性、流量控制和确认等服务质量问题？
  - 选项：
    - application（应用层）
    - internet（互联网层）
    - transport（传输层）（**正确答案**）{#blue-msg}
    - network（网络层）

#### 14. Which layer of the TCP/IP model encapsulates TCP segments into packets?
- TCP/IP模型的哪一层将TCP段封装成数据包？
  - 选项：
    - application（应用层）
    - transport（传输层）
    - internet（互联网层）（**正确答案**）{#blue-msg}
    - network（网络层）
    - physical（物理层）

#### 15. Which of the following is the official name for the address assigned to each network interface card (NIC) by its manufacturer?
- 以下哪项是制造商分配给每个网络接口卡（NIC）的地址的正式名称？
  - 选项：
    - NIC address（网卡地址）
    - MAC address（媒体访问控制地址）（**正确答案**）{#blue-msg}
    - IP address （IP地址）
    - Source Address（源地址）


### 第一章测试
#### 1. Convert the decimal number 231 into its binary equivalent. Select the correct answer from the list below.（单选题）
- 将十进制数231转换为二进制等效数。从以下列表中选择正确答案。
  - 选项：
    -  11110010
    -  11011011
    -  11110110
    -  11100111（**正确答案**）{#blue-msg}
    -  11100101
    -  11101110

#### 2. What is the numeric base of hexadecimal numbers? 
- 十六进制数的数值基数是多少？
  - 选项：
    -  Base 8（基数8）
    -  Base 10（基数10）
    -  Base 16（基数16）（**正确答案**）{#blue-msg}
    -  Base 32（基数32）
    -  Base 2（基数2）

#### 3. Which of the following are functions of a web browser without the addition of plug-ins? (Choose three.) 
- 以下哪些是不添加插件的情况下网络浏览器的功能？（选择三项）
  - 选项：
    -  receives information（接收信息）（**正确答案**）{#blue-msg}
    -  requests information（请求信息）（**正确答案**）{#blue-msg}
    -  contacts web servers（联系Web服务器）（**正确答案**）{#blue-msg}
    -  displays flash animation（显示Flash动画）
    -  displays Quicktime movies（显示Quicktime电影）
    -  updates IRQ's（更新中断请求）

#### 4. In an 8 bit binary number, what is the total number of combinations of the eight bits?
- 在一个8位二进制数中，这八位的组合总数是多少？
  - 选项：
    -  128
    -  254
    -  255
    -  256（**正确答案**）{#blue-msg}
    -  512
    -  1024

#### 5. If you perform a Boolean AND on the IP address 172.16.20.23 using the subnet mask of 255.255.252.0, which of the following is the subnetwork address? 
- 如果你使用子网掩码255.255.252.0对IP地址172.16.20.23进行布尔与运算，以下哪个是子网地址？
  - 选项：
    -  172.16.0.0
    -  172.16.16.0
    -  172.16.20.0（**正确答案**）{#blue-msg}
    -  172.16.20.16
    -  172.16.24.0

#### 6. What are the requirements for an Internet connection? (Choose three.)
- 互联网连接需要哪些条件？（选择三项）
  - 选项：
    -  remote host（远程主机）
    -  physical connection（物理连接）（**正确答案**）{#blue-msg}
    -  Logical connection（逻辑连接）（**正确答案**）{#blue-msg}
    -  firewall（防火墙）
    -  application（应用程序）（**正确答案**）{#blue-msg}

#### 7. Which specialized equipment is used to make a physical connection from a PC to a network? (Choose two.)
- 哪些专用设备用于将PC与网络进行物理连接？（选择两项）
  - 选项：
    -  router（路由器）（**正确答案**）{#blue-msg}
    -  switch（交换机）（**正确答案**）{#blue-msg}
    -  CD Rom（光盘驱动器）
    -  network interface card（网络接口卡）

#### 8. Which of the following are valid hexadecimal numbers? (Choose three.) 
- 以下哪些是有效的十六进制数？（选择三项）
  - 选项：
    -  DEF3（**正确答案**）{#blue-msg}
    -  1G45
    -  1F35（**正确答案**）{#blue-msg}
    -  DH3F
    -  453（**正确答案**）{#blue-msg}
    -  0X35F

#### 9. Which of the following interprets the data and displays the information in an understandable form for the user to see? 
- 以下哪项解释数据并以用户可以理解的形式显示信息？
  - 选项：
    -  application（应用程序）（**正确答案**）{#blue-msg}
    -  protocol stack（协议栈）
    -  remote devices（远程设备）
    -  logical connection（逻辑连接）
    -  physical connection（物理连接）

#### 10. Which of the following are popular web browsers? (Choose three.) 
- 以下哪些是流行的网络浏览器？（选择三项）
  - 选项：
    - Acrobat（Adobe Acrobat）
    - Internet Explorer（Internet Explorer浏览器）（**正确答案**）{#blue-msg}
    - Macromedia Flash（Macromedia Flash）
    -  FireFox（FireFox浏览器）（**正确答案**）{#blue-msg}
    - Chrome（Chrome浏览器）（**正确答案**）{#blue-msg}

#### 11. Which of the following will test the internal loopback of a node? 
- 以下哪项将测试节点的内部回环？
  - 选项：
    - ping 10.10.10.1
    - ping 192.168.1.1
    - ping 127.0.0.1（**正确答案**）{#blue-msg}
    - ping 223.223.223.223
    - ping 255.255.255.255


### 第九章 - 2
#### 1. Which of the following are not valid Class A network IDs? (Choose two answers.)（多选题）
- 以下哪些不是有效的A类网络ID？（选择两个答案）
  - 选项：
    -  1.0.0.0
    -  130.0.0.0（**正确答案**）{#blue-msg}
    -  127.0.0.0（**正确答案**）{#blue-msg}
    -  9.0.0.0

#### 2. Which of the following is a network broadcast address?（单选题）
- 以下哪个是网络广播地址？
  - 选项：
    -  10.1.255.255
    -  192.168.255.1
    -  224.1.1.255
    -  172.30.255.255（**正确答案**）{#blue-msg}

#### 3. Which of the following are not valid Class B network IDs?（单选题）
- 以下哪些不是有效的B类网络ID？
  - 选项：
    -  130.0.0.0
    -  191.255.0.0
    -  128.1.0.0
    -  150.255.0.0
    -  All are valid Class B network IDs.（所有都是有效的B类网络ID。）（**正确答案**）{#blue-msg}

#### 4. Which of the following answers lists the prefix (CIDR) format equivalent of 255.255.254.0?（单选题）
- 以下哪个答案列出了与255.255.254.0等效的前缀（CIDR）格式？
  - 选项：
    -  /19
    -  /20
    -  /23（**正确答案**）{#blue-msg}
    -  /24
    -  /25

#### 5. Which of the following answers lists the prefix (CIDR) format equivalent of 255.255.255.240?
- 以下哪个答案列出了与255.255.255.240等效的前缀（CIDR）格式？
  - 选项：
    -  /26
    -  /28（**正确答案**）{#blue-msg}
    -  /27
    -  /30
    -  /29

#### 6. Working at the help desk, you receive a call and learn a user's PC IP address and mask (10.55.66.77, mask 255.255.255.0). When thinking about this using classful logic, you determine the number of network (N), subnet (S), and host (H) bits. Which of the following is true in this case?（单选题）
- 在帮助台工作时，你接到一个电话并得知用户的PC IP地址和掩码（10.55.66.77，掩码255.255.255.0）。当使用分类逻辑思考这个问题时，你确定了网络（N）、子网（S）和主机（H）位的数量。在这种情况下，以下哪项是正确的？
  - 选项：
    -  N=12
    -  S=12
    -  H=8（**正确答案**）{#blue-msg}
    -  S=8
    -  N=24 304

#### 7. Working at the help desk, you receive a call and learn a user's PC IP address and mask (192.168.9.1/27). When thinking about this using classful logic, you determine the number of network (N), subnet (S), and host (H) bits. Which of the following is true in this case?（单选题）
- 在帮助台工作时，你接到一个电话并得知用户的PC IP地址和掩码（192.168.9.1/27）。当使用分类逻辑思考这个问题时，你确定了网络（N）、子网（S）和主机（H）位的数量。在这种情况下，以下哪项是正确的？
  - 选项：
    -  N=24（**正确答案**）{#blue-msg}
    -  S=24
    -  H=8
    -  H=7

#### 8. Which of the following statements is true about classless IP addressing concepts?（单选题）
- 关于无类IP寻址概念，以下哪项陈述是正确的？
  - 选项：
    -  Uses a 128-bit IP address（使用128位IP地址）
    -  Applies only for Class A and B networks（仅适用于A类和B类网络）
    -  Separates IP addresses into network, subnet, and host parts（将IP地址分为网络、子网和主机部分）
    -  Ignores Class A, B, and C network rules（忽略A类、B类和C类网络规则）（**正确答案**）{#blue-msg}

#### 9. Which of the following masks, when used as the only mask within a Class B network, would supply enough subnet bits to support 100 subnets? (Choose two.)（多选题）
- 以下哪些掩码，当作为B类网络中唯一的掩码使用时，能提供足够的子网位来支持100个子网？（选择两项）
  - 选项：
    -  /24（**正确答案**）{#blue-msg}
    -  255.255.255.252（**正确答案**）{#blue-msg}
    -  /20
    -  255.255.252.0

#### 10. Which of the following was a short-term solution to the IPv4 address exhaustion problem?（单选题）
- 以下哪项是IPv4地址耗尽问题的短期解决方案？
  - 选项：
    -  IP version 6（互联网协议第6版）
    -  IP version 5（互联网协议第5版）
    -  NAT/PAT（网络地址转换/端口地址转换）（**正确答案**）{#blue-msg}
    -  ARP（地址解析协议）

#### 11. A router receives an Ethernet frame that holds an IPv6 packet. The router then makes a decision to route the packet out a serial link. Which of the following statements is true about how a router forwards an IPv6 packet?（单选题）
- 路由器接收到一个包含IPv6数据包的以太网帧。然后路由器决定通过串行链路路由该数据包。关于路由器如何转发IPv6数据包，以下哪项陈述是正确的？
  - 选项：
    -  The router discards the Ethernet data-link header and trailer of the received frame.（路由器丢弃接收到的帧的以太网数据链路头和尾。）（**正确答案**）{#blue-msg}
    -  The router makes the forwarding decision based on the packet's source IPv6 address.（路由器根据数据包的源IPv6地址做出转发决策。）
    -  The router keeps the Ethernet header, encapsulating the entire frame inside a new IPv6 packet before sending it over the serial link.（路由器保留以太网头，在通过串行链路发送之前将整个帧封装在一个新的IPv6数据包中。）
    -  The router uses the IPv4 routing table when choosing where to forward the packet.（路由器在选择转发数据包的位置时使用IPv4路由表。）

#### 12. Which of the following is the shortest valid abbreviation for FE80:0000:0000:0100:0000:0000:0000:0123?（单选题）
- 以下哪个是FE80:0000:0000:0100:0000:0000:0000:0123的最短有效缩写？
  - 选项：
    -  FE80::100::123
    -  FE8::1::123
    -  FE80::100:0:0:0:123:4567
    -  FE80:0:0:100::123（**正确答案**）{#blue-msg}

#### 13. Which of the following is the shortest valid abbreviation for 2000:0300:0040:0005:6000:0700:0080:0009?（单选题）
- 以下哪个是2000:0300:0040:0005:6000:0700:0080:0009的最短有效缩写？
  - 选项：
    -  2:3:4:5:6:7:8:9
    -  2000:300:40:5:6000:700:80:9（**正确答案**）{#blue-msg}
    -  2000:300:4:5:6000:700:8:9
    -  2000:3:4:5:6:7:8:9

#### 14. Which of the following is the unabbreviated version of IPv6 address 2001:DB8::200:28?（单选题）
- 以下哪个是IPv6地址2001:DB8::200:28的未缩写版本？
  - 选项：
    -  2001:0DB8:0000:0000:0000:0000:0200:0028（**正确答案**）{#blue-msg}
    -  2001:0DB8::0200:0028
    -  2001:0DB8:0:0:0:0:0200:0028
    -  2001:0DB8:0000:0000:0000:0000:200:0028

#### 15. Which of the following is the prefix for address 2000:0000:0000:0005:6000:0700:0080:0009, assuming a mask of /64?（单选题）
- 假设掩码为/64，以下哪个是地址2000:0000:0000:0005:6000:0700:0080:0009的前缀？
  - 选项：
    -  2000::5::/64
    -  2000::5:0:0:0:0/64
    -  2000:0:0:5::/64（**正确答案**）{#blue-msg}
    -  2000:0:0:5:0:0:0:0/64

#### 16. Host A is a PC, connected to switch SW1 and assigned to VLAN 1. Which of the following are typically assigned an IP address in the same subnet as host A? (Choose two answers.)（多选题）
- 主机A是一台PC，连接到交换机SW1并分配到VLAN 1。以下哪些通常被分配与主机A在同一子网中的IP地址？（选择两个答案）
  - 选项：
    -  The local router's WAN interface（本地路由器的广域网接口）
    -  The local router's LAN interface（本地路由器的局域网接口）（**正确答案**）{#blue-msg}
    -  All other hosts attached to the same switch（连接到同一交换机的所有其他主机）
    -  Other hosts attached to the same switch and also in VLAN 1（连接到同一交换机且也在VLAN 1中的其他主机）（**正确答案**）{#blue-msg}

#### 17. Why does the formula for the number of hosts per subnet (2 E +H – 2) require the subtraction of two hosts?（单选题）
- 每个子网的主机数量公式（2 E +H – 2）为什么需要减去两个主机？
  - 选项：
    -  To reserve two addresses for redundant default gateways (routers)（为冗余默认网关（路由器）保留两个地址）
    -  To reserve the two addresses required for DHCP operation（为DHCP操作保留两个地址）
    -  To reserve addresses for the subnet ID and default gateway (router)（为子网ID和默认网关（路由器）保留地址）
    -  To reserve addresses for the subnet broadcast address and subnet ID（为子网广播地址和子网ID保留地址）（**正确答案**）{#blue-msg}

#### 18. A Class B network needs to be subnetted such that it supports 100 subnets and 100 hosts/subnet. Which of the following answers list a workable combination for the number of network, subnet, and host bits? (Choose two answers.)（多选题）
- 一个B类网络需要进行子网划分，以便支持100个子网和每个子网100个主机。以下哪些答案列出了网络、子网和主机位数量的可行组合？（选择两个答案）
  - 选项：
    -  Network = 16, subnet = 7, host = 7
    -  Network = 16, subnet = 8, host = 8（**正确答案**）{#blue-msg}
    -  Network = 16, subnet = 9, host = 7（**正确答案**）{#blue-msg}
    -  Network = 8, subnet = 7, host = 17

#### 19. Which of the following are private IP networks? (Choose two answers.)（多选题）
- 以下哪些是私有IP网络？（选择两个答案）
  - 选项：
    -  172.31.0.0（**正确答案**）{#blue-msg}
    -  172.32.0.0
    -  192.168.255.0（**正确答案**）{#blue-msg}
    -  192.1.168.0
    -  11.0.0.0

#### 20. Which of the following are public IP networks? (Choose three answers.)（多选题）
- 以下哪些是公共IP网络？（选择三个答案）
  - 选项：
    -  9.0.0.0（**正确答案**）{#blue-msg}
    -  172.30.0.0
    -  192.168.255.0
    -  192.1.168.0（**正确答案**）{#blue-msg}
    -  1.0.0.0 （**正确答案**）{#blue-msg}

#### 21. Before Class B network 172.16.0.0 is subnetted by a network engineer, what parts of the structure of the IP addresses in this network already exist, with a specific size? (Choose two answers.)（多选题）
- 在网络工程师对B类网络172.16.0.0进行子网划分之前，该网络中IP地址结构的哪些部分已经存在，并且具有特定的大小？（选择两个答案）
  - 选项：
    -  Network（网络）（**正确答案**）{#blue-msg}
    -  Subnet（子网）
    -  Host（主机）（**正确答案**）{#blue-msg}
    -  Broadcast（广播）

#### 22. A network engineer spends time thinking about the entire Class B network 172.16.0.0 and how to subnet that network. He then chooses how to subnet this Class B network and creates an addressing and subnetting plan, on paper, showing his choices. If you compare his thoughts about this network before subnetting the network to his thoughts about this network after mentally subnetting the network, which of the following occurred to the parts of the structure of addresses in this network?（单选题）
- 一位网络工程师花时间思考整个B类网络172.16.0.0以及如何对该网络进行子网划分。然后他选择了如何对这个B类网络进行子网划分，并在纸上创建了一个寻址和子网划分计划，展示了他的选择。如果你将他在子网划分之前对这个网络的想法与他在心理上进行子网划分之后对这个网络的想法进行比较，以下哪项发生在这个网络中地址结构的部分？
  - 选项：
    -  The subnet part got smaller.（子网部分变小了。）
    -  The host part got smaller.（主机部分变小了。）（**正确答案**）{#blue-msg}
    -  The network part got smaller.（网络部分变小了。）
    -  The host part was removed.（主机部分被移除了。）
    -  The network part was removed.（网络部分被移除了。）

#### 23. Which of the following are not valid Class A network IDs? (Choose two answers.)（多选题）
- 以下哪些不是有效的A类网络ID？（选择两个答案）
  - 选项：
    -  1.0.0.0
    -  130.0.0.0（**正确答案**）{#blue-msg}
    -  127.0.0.0（**正确答案**）{#blue-msg}
    -  9.0.0.0

#### 24. Which of the following are true about IP address 172.16.99.45's IP network? (Choose two answers.)（多选题）
- 关于IP地址172.16.99.45的IP网络，以下哪些是正确的？（选择两个答案）
  - 选项：
    -  The network ID is 172.0.0.0.（网络ID是172.0.0.0。）
    -  The network is a Class B network.（该网络是一个B类网络。）（**正确答案**）{#blue-msg}
    -  The default mask for the network is 255.255.255.0.（该网络的默认掩码是255.255.255.0。）
    -  The number of host bits in the unsubnetted network is 16.（未子网划分的网络中主机位的数量是16。）（**正确答案**）{#blue-msg}

#### 25. Which of the following are true about IP address 192.168.6.7's IP network? (Choose two answers.)（多选题）
- 关于IP地址192.168.6.7的IP网络，以下哪些是正确的？（选择两个答案）
  - 选项：
    -  The network ID is 192.168.6.0.（网络ID是192.168.6.0。）（**正确答案**）{#blue-msg}
    -  The network is a Class B network.（该网络是一个B类网络。）
    -  The default mask for the network is 255.255.255.0.（该网络的默认掩码是255.255.255.0。）（**正确答案**）{#blue-msg}
    -  The number of host bits in the unsubnetted network is 16.（未子网划分的网络中主机位的数量是16。）

#### 26. Which of the following answers lists the dotted-decimal notation (DDN) equivalent of /30?（单选题）
- 以下哪个答案列出了与/30等效的点分十进制表示法（DDN）？
  - 选项：
    -  255.255.255.192
    -  255.255.255.252（**正确答案**）{#blue-msg}
    -  255.255.255.240
    -  255.255.254.0
    -  255.255.255.0


### 第八章测试
#### 1. Which of the following would alleviate the problem of excessive collisions in a LAN? (Choose two.)
- 以下哪些方法可以缓解局域网中过多冲突的问题？（选择两项）
  - 选项：
    - reduce the size of collision domains（减少冲突域的大小）（**正确答案**）{#blue-msg}
    - reduce number of broadcast domains（减少广播域的数量）
    - add extra hubs（添加额外的集线器）
    - add extra managed switches（添加额外的管理型交换机）（**正确答案**）{#blue-msg}
    - add additional transceivers（添加额外的收发器）
    - increase the length of UTP cable runs（增加非屏蔽双绞线（UTP）电缆的长度）

#### 2. A network administrator has a multi-floor LAN to monitor and maintain. Through careful monitoring, the administrator has noticed a large amount of broadcast traffic slowing the network. Which device would you use to best solve this problem?
- 一位网络管理员需要监控和维护一个多层局域网。通过仔细监控，管理员发现大量的广播流量正在拖慢网络。你会使用哪种设备来最好地解决这个问题？
  - 选项：
    - bridge（网桥）
    - hub（集线器）
    - router（路由器）（**正确答案**）{#blue-msg}
    - transceiver（收发器）

#### 3. Which of the following describes the concept of full-duplex mode?
- 以下哪项描述了全双工模式的概念？
  - 选项：
    - traffic passing in one direction at a time with no collisions（一次只有一个方向的流量通过，且无冲突）
    - traffic passing faster downstream than upstream（下游流量比上游流量快）
    - traffic passing equally in both directions with no collisions（两个方向的流量平等通过，且无冲突）（**正确答案**）{#blue-msg}
    - traffic passing faster upstream than downstream（上游流量比下游流量快）

#### 4. Which of the following are not to be exceeded when implementing the 5 - 4 - 3 - 2 - 1 Rule? (Choose three.)
- 在实施 5 - 4 - 3 - 2 - 1 规则时，以下哪些不能超过？（选择三项）
  - 选项：
    - five broadcast domains（五个广播域）
    - four hubs（四个集线器）（**正确答案**）{#blue-msg}
    - three routers（三个路由器）
    - three host segments（三个主机网段）（**正确答案**）{#blue-msg}
    - one collision domain（一个冲突域）（**正确答案**）{#blue-msg}

#### 5. Which items are contributors to latency in a switched network? (Choose two.)
- 哪些因素会导致交换网络中的延迟？（选择两项）
  - 选项：
    - circuit delays（电路延迟）（**正确答案**）{#blue-msg}
    - software delays（软件延迟）（**正确答案**）{#blue-msg}
    - incorrect MAC addressing（错误的 MAC 地址）
    - too many collision domains（过多的冲突域）

#### 6. Which of the following are considered Layer 1 devices? (Choose two.)
- 以下哪些被认为是第一层设备？（选择两项）
  - 选项：
    - router（路由器）
    - switch（交换机）
    - repeater（中继器）（**正确答案**）{#blue-msg}
    - bridge（网桥）
    - hub（集线器）（**正确答案**）{#blue-msg}

#### 7. A switch reads the first 64 bytes of a data field and forwards data, before the entire data field has been read. Which switching method allows this?
- 交换机在读取完整个数据字段之前，先读取数据字段的前 64 字节并转发数据。哪种交换方法允许这样做？
  - 选项：
    - store and forward（存储转发）
    - cut - through（直通式）
    - fragment - free（无碎片交换）（**正确答案**）{#blue-msg}
    - asymmetric（非对称）
    - symmetric（对称）

#### 8. Which of the following is a term associated with replacing hubs with switches to increase the number of collision domains?
- 以下哪个术语与用交换机替换集线器以增加冲突域数量相关？
  - 选项：
    - encapsulation（封装）
    - latency（延迟）
    - segmentation（分段）（**正确答案**）{#blue-msg}
    - layered model（分层模型）
    - broadcast domain（广播域）
    - extended（扩展）

#### 9. What does a switch build as it reads MAC addresses that pass through it?
- 当交换机读取通过它的 MAC 地址时，它会构建什么？
  - 选项：
    - Routing Topology table（路由拓扑表）
    - Content Addressable Memory table（内容可寻址内存表）（**正确答案**）{#blue-msg}
    - Store and Forward list（存储转发列表）
    - Cut - through domain（直通域）
    - MAC Route Address table（MAC 路由地址表）

#### 10. What impact does a bridge have on a network? (Choose two.)
- 网桥对网络有什么影响？（选择两项）
  - 选项：
    - reduces the number collision domains（减少冲突域的数量）
    - increases number of collision domains（增加冲突域的数量）（**正确答案**）{#blue-msg}
    - adds additional broadcast domains（增加额外的广播域）
    - has no impact on broadcast domains（对广播域没有影响）（**正确答案**）{#blue-msg}
    - reduces the length of the shared media（减少共享媒体的长度）

#### 11. While working on her computer, Mary noticed longer than normal network data transfers. Mary investigates the problem and notices that her co - worker John has been hosting an online video conference. What is the network probably experiencing?
- 玛丽在使用她的电脑时，注意到网络数据传输比平时慢。玛丽调查了这个问题，发现她的同事约翰一直在主持一个在线视频会议。网络可能正在经历什么？
  - 选项：
    - collision storm（冲突风暴）
    - broadcast storm（广播风暴）（**正确答案**）{#blue-msg}
    - IP storm（IP 风暴）
    - data rain storm（数据雨风暴）

#### 12. What will a bridge do if it receives a frame with a MAC address that is not within the table?
- 如果网桥收到一个 MAC 地址不在其表中的帧，它会怎么做？
  - 选项：
    - discard frame（丢弃帧）
    - ignore frame（忽略帧）
    - send frame to appropriate port（将帧发送到合适的端口）
    - send frame to all ports except source port（将帧发送到除源端口之外的所有端口）（**正确答案**）{#blue-msg}

#### 13. Which LAN devices make frame forwarding decisions based on MAC addresses? (Choose two.)
- 哪些局域网设备根据 MAC 地址做出帧转发决策？（选择两项）
  - 选项：
    - hub（集线器）
    - router（路由器）
    - bridge（网桥）（**正确答案**）{#blue-msg}
    - switch（交换机）（**正确答案**）{#blue-msg}
    - transceiver（收发器）

#### 14. Which of the following does a router use to make a forwarding decision?
- 路由器使用以下哪一项来做出转发决策？
  - 选项：
    - destination IP address（目的 IP 地址）（**正确答案**）{#blue-msg}
    - MAC address（MAC 地址）
    - source IP address（源 IP 地址）
    - encapsulation address（封装地址）
    - default gateway（默认网关）

#### 15. Which switching mode describes a switch that transfers a frame as soon as the destination MAC address is read?
- 哪种交换模式描述了一种交换机，它在读取到目的 MAC 地址后立即传输帧？
  - 选项：
    - fragment - free（无碎片交换）
    - cut - through（直通式）（**正确答案**）{#blue-msg}
    - store - and - forward（存储转发）
    - latency forwarding（延迟转发）

### 第六章测试
#### 1. What does the word "Base" indicate in 10Base2?
- 在 10Base2 中，“Base” 一词表示什么？
  - 选项：
    - The number standard used.（使用的数字标准。）
    - Baseband signaling is used.（使用基带信号。）（**正确答案**）{#blue-msg}
    - Only a portion of the transmission medium is used.（仅使用传输介质的一部分。）
    - Broadband signaling is used.（使用宽带信号。）

#### 2. Which of the following are specified by IEEE standards as sublayers of the OSI data link layer? (Choose two.)
- 以下哪些是 IEEE 标准规定的 OSI 数据链路层的子层？（选择两项）
  - 选项：
    - Logical Link Control（逻辑链路控制）（**正确答案**）{#blue-msg}
    - Logical Layer Control（逻辑层控制）
    - Media Access Control（介质访问控制）（**正确答案**）{#blue-msg}
    - Logical Link Communication（逻辑链路通信）
    - Media Access Communication（介质访问通信）
    - Physical Access Communication（物理访问通信）

#### 3. Which of the following describe Ethernet MAC addresses? (Choose three.)
- 以下哪些描述了以太网 MAC 地址？（选择三项）
  - 选项：
    - 24 bit OUI and 24 bit serial number（24 位组织唯一标识符和 24 位序列号）（**正确答案**）{#blue-msg}
    - 32 bit network and 48 bit host address（32 位网络地址和 48 位主机地址）
    - 6 pairs of hex digits（6 对十六进制数字）（**正确答案**）{#blue-msg}
    - 48 hex digits（48 位十六进制数字）
    - logical host address（逻辑主机地址）
    - physical address（物理地址）（**正确答案**）{#blue-msg}

#### 4. Which characteristics of Ethernet contribute to its widespread use? (Choose three.)
- 以太网的哪些特性促成了其广泛应用？（选择三项）
  - 选项：
    - ease of maintenance（易于维护）（**正确答案**）{#blue-msg}
    - collision free technology（无冲突技术）
    - scalability（可扩展性）（**正确答案**）{#blue-msg}
    - low cost of installation（安装成本低）（**正确答案**）{#blue-msg}
    - compatibility with 802.5 standard（与 802.5 标准兼容）
    - collision avoidance capabilities（冲突避免能力）

#### 5. What happens on an Ethernet network after a collision occurs? (Choose three.)
- 以太网网络发生冲突后会发生什么？（选择三项）
  - 选项：
    - A backoff algorithm is invoked and transmission is stopped.（调用退避算法并停止传输。）（**正确答案**）{#blue-msg}
    - Devices involved in the collision have a random period of time for priority retransmission of the damaged packet.（参与冲突的设备有一个随机的时间段来优先重传受损的数据包。）
    - The devices involved in the collision release a token indicating the time each station may begin retransmitting.（参与冲突的设备释放一个令牌，指示每个站点可以开始重传的时间。）
    - The devices involved in the collision do not have priority to transmit data.（参与冲突的设备没有传输数据的优先级。）（**正确答案**）{#blue-msg}
    - The devices with data to transmit return to a listen - before - transmit mode.（有数据要传输的设备返回到先听后发模式。）（**正确答案**）{#blue-msg}
    - Transmit work will restart with the reissuance of all data.（传输工作将随着所有数据的重新发送而重启。）

#### 6. How are collisions detected on an Ethernet network?
- 以太网网络中如何检测冲突？
  - 选项：
    - Stations identify the altered FCS field on the colliding packets.（站点识别冲突数据包中改变的帧校验序列（FCS）字段。）
    - The signal amplitude on the networking media is higher than normal.（网络介质上的信号幅度高于正常水平。）（**正确答案**）{#blue-msg}
    - Traffic on the network cannot be detected due to a blockage（由于堵塞，网络上的流量无法被检测到）
    - The signal amplitude on the networking media is lower than normal.（网络介质上的信号幅度低于正常水平。）

#### 7. How is a MAC address represented?
- MAC 地址是如何表示的？
  - 选项：
    - four groups of eight binary digits separated by a decimal point（四组八位二进制数字，用小数点分隔）
    - four Base10 digits separated by a decimal point（四个十进制数字，用小数点分隔）
    - six hexadecimal digits（六位十六进制数字）
    - twelve hexadecimal digits（十二位十六进制数字）（**正确答案**）{#blue-msg}
    - twenty - four Base10 digits（二十四个十进制数字）

#### 8. Which of the following is included in the frame address field? (Choose two.)
- 以下哪些包含在帧地址字段中？（选择两项）
  - 选项：
    - source IP address（源 IP 地址）
    - destination IP address（目的 IP 地址）
    - destination subnet mask（目的子网掩码）
    - source MAC address（源 MAC 地址）（**正确答案**）{#blue-msg}
    - destination MAC address（目的 MAC 地址）（**正确答案**）{#blue-msg}

#### 9. Which options below are field names of a generic frame? (Choose three.)
- 以下哪些是通用帧的字段名？（选择三项）
  - 选项：
    - IP header（IP 头部）
    - voltage reference（电压参考）
    - data（数据）（**正确答案**）{#blue-msg}
    - description（描述）
    - length（长度）（**正确答案**）{#blue-msg}
    - frame check sequence（帧校验序列）（**正确答案**）{#blue-msg}

#### 10. Which features describe the concept of Carrier Sense Multiple Access with Collision Detection? (Choose two.)
- 哪些特性描述了载波侦听多路访问/冲突检测（CSMA/CD）的概念？（选择两项）
  - 选项：
    - collisionless environment（无冲突环境）
    - non - deterministic（非确定性）（**正确答案**）{#blue-msg}
    - deterministic（确定性）
    - uses first - come, first - served approach（采用先来先服务的方法）（**正确答案**）{#blue-msg}
    - uses a token to transmit data（使用令牌来传输数据）

#### 11. Which of the following are the functions of CSMA/CD? (Choose three.)
- 以下哪些是 CSMA/CD 的功能？（选择三项）
  - 选项：
    - transmitting and receiving data packets（传输和接收数据包）（**正确答案**）{#blue-msg}
    - releasing a token when the network is clear（当网络空闲时释放一个令牌）
    - detecting errors within data packets or on the network（检测数据包内或网络上的错误）（**正确答案**）{#blue-msg}
    - passing a token to each station on the network（将令牌传递给网络上的每个站点）
    - decoding data packets and checking them for valid addresses before passing them to the upper layers of the OSI model（解码数据包并检查其有效地址，然后再将它们传递到 OSI 模型的上层）（**正确答案**）{#blue-msg}

#### 12. What is the purpose of the preamble in an Ethernet frame?
- 以太网帧中前导码的作用是什么？
  - 选项：
    - is used as a pad for data（用作数据填充）
    - identifies the source address（标识源地址）
    - identifies the destination address（标识目的地址）
    - marks the end of timing information（标记定时信息的结束）
    - is used for timing synchronization with alternating patterns of ones and zeros（用于通过交替的 1 和 0 模式进行定时同步）（**正确答案**）{#blue-msg}

#### 13. After an Ethernet collision, when the backoff algorithm is invoked, which device has priority to transmit data?
- 以太网发生冲突后，当调用退避算法时，哪个设备有优先传输数据的权利？
  - 选项：
    - the device involved in the collision with the lowest MAC address（参与冲突的设备中 MAC 地址最低的设备）
    - the device involved in the collision with the lowest IP address（参与冲突的设备中 IP 地址最低的设备）
    - any device in the collision domain whose backoff timer expires first（冲突域中退避计时器最先到期的任何设备）（**正确答案**）{#blue-msg}
    - those that began transmitting at the same time（那些同时开始传输的设备）

#### 14. Which ports on a hub forward traffic?
- 集线器上哪些端口转发流量？
  - 选项：
    - only to the port where the destination host resides（仅转发到目的主机所在的端口）
    - to the ports in all other collision domains（转发到所有其他冲突域中的端口）
    - all ports except the originating port（除源端口之外的所有端口）（**正确答案**）{#blue-msg}
    - all ports（所有端口）

#### 15. In which two layers of the OSI model does Ethernet function? (Choose two.)
- 以太网在 OSI 模型的哪两层工作？（选择两项）
  - 选项：
    - application（应用层）
    - session（会话层）
    - transport（传输层）
    - network（网络层）
    - data link（数据链路层）（**正确答案**）{#blue-msg}
    - physical（物理层）（**正确答案**）{#blue-msg}

### 第三章测试
#### 1. What is the maximum transmission rate of a device compliant with the basic 802.11ac standard? (choose two)
- 符合基本 802.11ac 标准的设备的最大传输速率是多少？（选择两项）
  - 选项：
    - 27 Mbps
    - 54 Mbps
    - 81 Mbps
    - 108 Mbps
    - 1300Mbps（**正确答案**）{#blue-msg}
    - 600Mbps（**正确答案**）{#blue-msg}

#### 2. Which of the following are benefits of coaxial cable within a LAN environment? (Choose two.)
- 在局域网环境中，同轴电缆的优点有哪些？（选择两项）
  - 选项：
    - easier to install than UTP（比非屏蔽双绞线（UTP）更容易安装）
    - less expensive than fiber（比光纤便宜）（**正确答案**）{#blue-msg}
    - requires fewer repeaters than UTP（比 UTP 需要更少的中继器）（**正确答案**）{#blue-msg}
    - easily accommodates additions to network（容易适应网络的扩展）
    - faster transport speeds than fiber（比光纤传输速度快）

#### 3. How is the current determined if the voltage and resistance of an electrical circuit are known?
- 如果已知电路的电压和电阻，如何确定电流？
  - 选项：
    - Add the voltage and resistance.（将电压和电阻相加。）
    - Divide the voltage by the resistance.（用电压除以电阻。）（**正确答案**）{#blue-msg}
    - Divide the resistance by the voltage.（用电阻除以电压。）
    - Multiply the voltage by the resistance.（将电压和电阻相乘。）
    - Subtract the resistance from the voltage.（用电压减去电阻。）
    - This problem cannot be solved with the given information.（根据给定信息无法解决此问题。）

#### 4. Which of the following terms refers to electrical pressure?
- 以下哪个术语指的是电压？
  - 选项：
    - ampere（安培）
    - voltage（电压）（**正确答案**）{#blue-msg}
    - wattage（功率）
    - impedance（阻抗）
    - resistance（电阻）

#### 5. Select the characteristics specified by 10BaseT. (Choose three.)
- 选择 10BaseT 所规定的特性。（选择三项）
  - 选项：
    - twisted pair cable（双绞线电缆）（**正确答案**）{#blue-msg}
    - T style connectors（T 型连接器）
    - baseband transmission（基带传输）（**正确答案**）{#blue-msg}
    - 10 megabits per second data rate（10 兆比特每秒的数据速率）（**正确答案**）{#blue-msg}
    - 10 gigabits per second data rate（10 吉比特每秒的数据速率）
    - decimal encoded data transmission（十进制编码数据传输）

#### 6. What does UTP cable rely on to reduce signal degradation caused by EMI and RFI?
- 非屏蔽双绞线（UTP）电缆依靠什么来减少由电磁干扰（EMI）和射频干扰（RFI）引起的信号衰减？
  - 选项：
    - shielding（屏蔽）
    - magnetism（磁性）
    - cancellation（抵消）（**正确答案**）{#blue-msg}
    - insulation（绝缘）
    - properly grounded connections（正确接地的连接）
    - RJ - 45 connectors（RJ - 45 连接器）

#### 7. What is the unit of measurement for electrical voltage?
- 电压的计量单位是什么？
  - 选项：
    - volt（伏特）（**正确答案**）{#blue-msg}
    - ohm（欧姆）
    - ampere（安培）
    - watt（瓦特）
    - kilowatt（千瓦）

#### 8. What is the unit of measurement for electrical current?
- 电流的计量单位是什么？
  - 选项：
    - volt（伏特）
    - ohm（欧姆）
    - ampere（安培）（**正确答案**）{#blue-msg}
    - watt（瓦特）
    - kilowatt（千瓦）

#### 9. Which type of cable has the color of the wires in pins #1 and #2 on one end appear on the other end at pins #3 and #6, and vice - versa?
- 哪种类型的电缆一端的 1 号和 2 号引脚的线颜色在另一端出现在 3 号和 6 号引脚，反之亦然？
  - 选项：
    - rollover cable（反转电缆）
    - straight - through cable（直通电缆）
    - crossover cable（交叉电缆）（**正确答案**）{#blue-msg}
    - console cable（控制台电缆）
    - hub connector cable（集线器连接电缆）

#### 10. Which combinations of charges will be repelled by electric force? (Choose two.)
- 哪些电荷组合会因电场力而相互排斥？（选择两项）
  - 选项：
    - neutral and neutral（中性和中性）
    - neutral and positive（中性和正电荷）
    - neutral and negative（中性和负电荷）
    - positive and positive（正电荷和正电荷）（**正确答案**）{#blue-msg}
    - positive and negative（正电荷和负电荷）
    - negative and negative（负电荷和负电荷）（**正确答案**）{#blue-msg}

#### 11. Which of the following materials severely restrict the flow of electrons?
- 以下哪种材料会严重限制电子的流动？
  - 选项：
    - conductors（导体）
    - ion solutions（离子溶液）
    - semiconductors（半导体）
    - insulators（绝缘体）（**正确答案**）{#blue-msg}
    - silicon based materials（硅基材料）
    - carbon objects（碳物体）

#### 12. What occurs when a voltage source is connected to a completed electrical circuit?
- 当电压源连接到一个完整的电路时会发生什么？
  - 选项：
    - current will decrease in the circuit（电路中的电流会减小）
    - resistance will increase in the circuit（电路中的电阻会增加）
    - resistance will decrease in the circuit（电路中的电阻会减小）
    - electrons will flow from the positive to the negative terminals（电子将从正极流向负极）
    - electrons will flow from the negative terminal to the positive terminal（电子将从负极流向正极）（**正确答案**）{#blue-msg}