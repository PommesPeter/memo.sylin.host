/* Title: n queens1
 * Author: @PommesPeter
 * Data:2021-04-29
 * */

#include <iostream>

using namespace std;

const int N = 105;
int n;
char g[N][N];
bool col[N], dg[N], udg[N];

/*
自己的理解: u代表遍历行，i代表遍历列，通过递归的方式前进
 只要是没有被访问过的地方，那就可以放上问题要解决的内容，然后继续往下遍历

 */

void dfs(int u) {
    if (u == n) {
        //这个部分是每次当遍历完一个树的分支后进行的步骤。
        for (int i = 0; i < n; i++) puts(g[i]);
        puts("");
        return;
    }
    for (int i = 0; i < n; i++) {
        //为什么这里是u+i和n-u+i
        //一个特殊的小技巧：用平面直角坐标系可以类比，一个斜率是正数的直线的截距是y=x+b=>b=y-x；一个斜率是负数的直线截距是y=-x+b=>b=y+x
        //为了不让截距为负数，通常加上偏移量n，即b=y-x+n

        //这里这部分的if条件可以根据实际问题进行替换，只需要确定问题的条件，这里就是问题的条件
        //里面的内容dfs(u+1)函数分成的上下两部分基本是对称的，dfs之前是根据问题来构造出解，dfs之后是还原现场，使得回溯可以进行
        //同时也是说明了后面就其他的就是当成不满足条件的就行执行正常的步骤即可。
        //这里这部分代码就是处理遍历过程中需要根据约束条件来进行相应的判断的。
        if (!col[i] && !dg[u + i] && !udg[n - u + i]) {
            g[u][i] = 'Q';
            col[i] = dg[u + i] = udg[n - u + i] = true;
            dfs(u + 1);
            col[i] = dg[u + i] = udg[n - u + i] = false;
            g[u][i] = '.';
        }
    }
}

int main () {
    cin >> n;
    for (int i =0 ;i < n; i++) {
        for (int j= 0; j < n; j++) {
            g[i][j] = '.';
        }
    }
    dfs(0);
    return 0;

}

