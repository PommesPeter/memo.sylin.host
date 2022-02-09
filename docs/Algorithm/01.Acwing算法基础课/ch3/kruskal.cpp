#include <iostream>
#include <algorithm>

using namespace std;

int n, m;
const int N = 1e6 + 10;
int p[N];

struct Edge
{
    int a, b, w;
    bool operator<(const Edge &E) const
    {
        return w < E.w;
    }
} e[N];

int find(int x)
{
    if (p[x] != x)
        p[x] = find(p[x]);
    return p[x];
}

int main()
{
    cin >> n >> m;
    for (int i = 0; i < m; i++)
    {
        cin >> e[i].a >> e[i].b >> e[i].w;
    }
    sort(e, e + m);
    for (int i = 1; i <= n; i++)
        p[i] = i;

    int cnt = 0, res = 0;
    for (int i = 0; i < m; i++)
    {
        int a = e[i].a, b = e[i].b, w = e[i].w;
        a = find(a), b = find(b);
        if (a != b)
        {
            p[a] = b;
            res += w; //权值和
            cnt++;    //加了多少条边
        }
    }
    if (cnt < n - 1)
        cout << "impossible" << endl;
    else
        cout << res << endl;
    return 0;
}