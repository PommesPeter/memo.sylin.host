# Chapter2 Data Structure

[TOC]

> Attention：
>
> - 一般在写算法题的时候都是用**数组**来模拟各种数据结构，因为使用结构体每次都要使用 new 创建对象，这个过程非常慢！
> - 算法题一般不用纠结浪费的问题，只需要在特定的时间之内运行完程序就行。

## Link List

### Single（邻接表）

- 用得比较多的是邻接表，邻接表用于存储**树和图**。

- 用数组表示的方法：

  1. 创建 `e[N]`数组表示链表中节点的值。
  2. 创建`ne[N]`数组表示链表当前节点的下一个，也就是指向下一个节点的指针。

- 对应关系为

  - 用下标来表示，`e[0]`表示链表中 0 号节点的值，`ne[0]`表示链表中 0 号节点的下一个指向的节点的下标。下图可说明。

    ![image-20220202172253072](src/DataStructure/image-20220202172253072.png)

    **其中，当指向的下一个节点为空时用 -1 表示。**

### Dual

>  主要用于优化，具体看题目。双链表就是有两个指针，一个指向前面，另一个指向后面。

- 规定**下标为 0 的点为头节点**，**下标为 1 的点为最后一个点**

- 用数组的表示方法：

  - 创建 `e[N]`数组表示链表中节点的值。

  - 创建 `l[N]` 和 `r[N]` 分别表示链表当前节点的左指针和右指针，分别指向前一个节点的 idx 和 后一个节点的 idx。（l 表示指向左边的，相当于向左的单链表的 `ne[N}`；r 表示指向右边的，相当于向右的单链表的 `ne[N}`。）

    ![image-20220217221334273](src/DataStructure/image-20220217221334273.png)

    ![image-20220218011014547](src/DataStructure/image-20220218011014547.png)

  - 



## Stack

- 普通栈

  **先进后出**

```cpp
const int N = 1e6 + 10;
int tt, stk[N];

void insert(int x) { stk[++tt] = x; }
void remove() { tt--; }
int top() { return stk[tt]; }
bool isEmpty() {
    if (tt > 0)
        return 0;
    else
        return 1;
}
```

- 单调栈

  

## Queue

- 普通队列

  **先进先出**

```cpp
const int N = 1e6 + 10;
// 队尾插入元素，队头弹出元素
int hh, tt = -1, q[N];

void insert(int x) { q[++tt] = x; }
void remove() { hh++; }
int front() { return q[hh]; }
int back() { return q[tt]; }
bool isEmpty() {
    if (hh <= tt)
        return 0;
    else
        return 1;
}
```

- 单调队列

  

## KMP

## Trie

## 并查集

## Heap

## Hash Map