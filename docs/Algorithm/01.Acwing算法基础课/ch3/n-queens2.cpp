/* Title: n queens1
 * Author: @PommesPeter
 * Data:2021-04-29
 * */

#include <iostream>
using namespace std;

const int N = 10;
int n;
char g[N][N];
bool col[N], dg[N], udg[N], row[N];

void dfs(int x, int y, int s) {
    if (y == n) y  =0;
    x++;
    if (x == n) {
        if (s == n) {
            for (int i =0 ;i  <n ;i++ ) puts(g[i]);
            puts("");
        }
        return;
    }

    dfs(x,y + 1, s);
    if (!row[x] && !col[y] && !dg[x + y] && !udg[x - y  + n]) {
        g[x][y] = 'Q';
        row[x] = col[y] = dg[x + y] = udg[x - y + n];
        dfs(x, y + 1, s + 1 ) ;
        row[x] = col[y] = dg[x + y ] = udg[x - y + n];
        g[x][y] = '.';
    }
}

int main() {
    cin >>n;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            g[i][j] = '.';
        }
    }

    return 0;
}