---
title: Linux expect 脚本使用
authors: [peter]
tags: [Linux things]
---

## 需求场景

最近需要在 shell 脚本进行一些 CLI 交互式操作（指在脚本中输入文字或回车等操作），经过调研发现可以使用 expect 脚本实现，通常以 `.ex` 或 `.exp` 结尾。（与 shell 脚本有区别）

## Linux expect 脚本

`expect` 是建立在 tcl 基础上的一个自动化交互套件, 在一些需要交互输入指令的场景下, 可通过脚本设置自动进行交互通信. 其交互流程是:

:::tip 启动流程
spawn 启动指定进程 -> expect 获取指定关键字 -> send 想指定进程发送指定指令 -> 执行完成, 退出.
:::

## expect 用法

### 安装 expect

通常 linux 系统不会自动安装 expect 脚本，故需要自行安装，需要安装 `tcl` 和 `expect` 两个包，Ubuntu 下的安装指令为：

```bash
sudo apt install tcl expect
```

### expect 关键字

- spaw: 启动新的交互进程, 后面跟命令或者指定程序
- expect: 从进程中接收信息, 如果匹配成功, 就执行 expect 后的动作
- send: 向进程发送字符串
- send exp_sen: 用于发送指定的字符串信息
- exp_continue: 在 expect 中多次匹配就需要用到
- send_use: 用来打印输出 相当于 shell 中的 echo
- interact: 允许用户交互
- exit: 退出 expect 脚本
- eof: expect执行结束, 退出
- set: 定义变量
- puts: 输出变量
- set timeout: 设置超时时间

### 样例

本例为在无法设置 ssh-key 的情况下向 `ssh` 进程中输入密码。

```shell
#!/usr/bin/expect

set timeout 30
spawn ssh -l root 172.16.22.131
expect "password*"
send "123456\r"
interacts

```

解读：

1. `set timeout 30`: 设置 30s 的 timeout
2. `spawn ssh -l root 172.16.22.131`: 创建一个 ssh 进程，并执行 ssh
3. `expect "password*"`: 执行完 2 后期望 (expect) 拿到的控制台输出
4. `send "123456\r"`: 向终端输入流发送 "123456\r"，其中 `\r` 表示回车
5. `interacts`: 表示应用上述的交互

more cases comming soon...
