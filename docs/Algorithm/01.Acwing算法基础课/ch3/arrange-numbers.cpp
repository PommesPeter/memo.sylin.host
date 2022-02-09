/* Title: Arrange numbers
 * Author: @PommesPeter
 * Data:2021-04-29
 * */

#include <iostream>

using namespace std;

const int N = 10;
int n;
int path[N] = {0};
bool st[N];

void dfs(int u) {
    //当u等于n的时候，说明已经遍历完一条支路了，也就是所有位置已经被填满了
    //这里的u代表的是解的长度
    if (u == n) {
        for (int i = 0; i < n; i++) printf("%d ", path[i]);
        puts("");
        return;
    }
    for (int i = 1 ;i <= n; i++) {
        if (!st[i]) {
            path[u] = i;
            st[i] = true;
            dfs(u + 1);
            //恢复现场，把原来那个位置看作是没访问过的
            st[i] = false;
        }
    }

}


int main() {
    cin >> n;

    dfs(0);
    return 0;
}
