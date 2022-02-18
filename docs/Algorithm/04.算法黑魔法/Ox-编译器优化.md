---
tags:
    - BasicAlgorithm
---

# 什么是 Ox 优化？

身边经常打 ACMer 可能会经常说到 “开 O1优化”，“开 O2” 这类的名词。结合网上的资料和自己的研究，得出如下结论。

## Ox 优化

Ox 代表的是 GCC (GNU Compiler Collection) 编译器当中的一个参数，表示 gcc 编译器当中的优化标识参数。常规使用方式如下：

```bash
gcc -O a.c

gcc -O2 b.c
```

Ox 优化的目标是更小的目标文件和更短的运行速度。我们平时默认使用的是 O0 优化，也就是不进行任何优化。除此之外的优化都会对我们编写的代码进行修改（等价的修改，根据编译原理），会对代码中条件语句、循坏语句等进行优化。所谓的 Ox 是已经被整合成一个单一的参数，在背后还有大量的运行参数，针对不同的情况进行优化。关于更多优化选项的解释请转到[该博客](https://blog.csdn.net/xinianbuxiu/article/details/51844994)自行查询。

### O1 优化

对于 O1 优化会开启以下参数（知道这些然而并有没有什么用，可跳过）

在不影响编译速度的前提下，尽量采用一些优化算法减小代码大小和可执行代码的运行速度。开启的优化选项如下：

```bash
-fauto-inc-dec 
-fbranch-count-reg 
-fcombine-stack-adjustments 
-fcompare-elim 
-fcprop-registers 
-fdce 
-fdefer-pop 
-fdelayed-branch 
-fdse 
-fforward-propagate 
-fguess-branch-probability 
-fif-conversion2 
-fif-conversion 
-finline-functions-called-once 
-fipa-pure-const 
-fipa-profile 
-fipa-reference 
-fmerge-constants 
-fmove-loop-invariants 
-freorder-blocks 
-fshrink-wrap 
-fshrink-wrap-separate 
-fsplit-wide-types 
-fssa-backprop 
-fssa-phiopt 
-fstore-merging 
-ftree-bit-ccp 
-ftree-ccp 
-ftree-ch 
-ftree-coalesce-vars 
-ftree-copy-prop 
-ftree-dce 
-ftree-dominator-opts 
-ftree-dse 
-ftree-forwprop 
-ftree-fre 
-ftree-phiprop 
-ftree-sink 
-ftree-slsr 
-ftree-sra 
-ftree-pta 
-ftree-ter 
-funit-at-a-time
```

### O2 优化

在 O1 优化的基础上会牺牲部分编译速度，采用几乎所有的目标配置支持的优化算法，用以提高目标代码的运行速度。优化选项如下：

```bash
-fthread-jumps 
-falign-functions  -falign-jumps 
-falign-loops  -falign-labels 
-fcaller-saves 
-fcrossjumping 
-fcse-follow-jumps  -fcse-skip-blocks 
-fdelete-null-pointer-checks 
-fdevirtualize -fdevirtualize-speculatively 
-fexpensive-optimizations 
-fgcse  -fgcse-lm  
-fhoist-adjacent-loads 
-finline-small-functions 
-findirect-inlining 
-fipa-cp 
-fipa-cp-alignment 
-fipa-bit-cp 
-fipa-sra 
-fipa-icf 
-fisolate-erroneous-paths-dereference 
-flra-remat 
-foptimize-sibling-calls 
-foptimize-strlen 
-fpartial-inlining 
-fpeephole2 
-freorder-blocks-algorithm=stc 
-freorder-blocks-and-partition -freorder-functions 
-frerun-cse-after-loop  
-fsched-interblock  -fsched-spec 
-fschedule-insns  -fschedule-insns2 
-fstrict-aliasing -fstrict-overflow 
-ftree-builtin-call-dce 
-ftree-switch-conversion -ftree-tail-merge 
-fcode-hoisting 
-ftree-pre 
-ftree-vrp 
-fipa-ra
```

### O3 优化

除了包含 O2 优化的所有优化选项外，会采用很多向量化的算法，提高代码的并行执行效率，利用 CPU 的流水线、Cache 等。会开启如下优化选项：

```bash
-finline-functions      // 采用一些启发式算法对函数进行内联
-funswitch-loops        // 执行循环unswitch变换
-fpredictive-commoning  // 
-fgcse-after-reload     //执行全局的共同子表达式消除
-ftree-loop-vectorize　  // 
-ftree-loop-distribute-patterns
-fsplit-paths 
-ftree-slp-vectorize
-fvect-cost-model
-ftree-partial-pre
-fpeel-loops 
-fipa-cp-clone options
```

## 使用方法

> Attention:
>
> - 请务必了解清楚所参加的竞赛是否允许使用 Ox 优化，避免造成犯规等严重错误。

在算法竞赛当中，因为我们不能直接操作选择编译选项，所以可以在代码中添加对应的预编译参数来实现。假设目前我们有如下代码：

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    cout << n << "Welcom to the world of Algorithm" << endl;
	return 0;
}
```

开启优化后：

```cpp
#pragma GCC optimize(1)
#pragma GCC optimize(2)
#pragma GCC optimize(3,"Ofast","inline")

#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    cout << n << "Welcom to the world of Algorithm" << endl;
	return 0;
}
```



## 参考 Link

- [关于O2优化](https://blog.csdn.net/Tony_Wang_JT/article/details/104444969)
- [-O1,-O2,-O3编译优化知多少](https://blog.csdn.net/xinianbuxiu/article/details/51844994)
- [GCC中-O1 -O2 -O3 优化的原理是什么？](https://www.zhihu.com/question/27090458)
- [黑魔法](https://blog.csdn.net/weixin_43272781/article/details/90726422)