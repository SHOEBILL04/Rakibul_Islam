---
title: "Graph Algorithms & Optimization in ICPC: A Retrospective"
date: "2026-08-28"
summary: "Analyzing shortest path variants, DSU on tree, and micro-optimizations learned during the ICPC 2025 Dhaka Regional."
tags: ["Algorithms", "C++", "ICPC", "Graphs"]
---

# Graph Algorithms & Optimization in ICPC: A Retrospective

During our preparation and contest run at the **ICPC 2025 Dhaka Regional Site**, efficient graph traversal and query decomposition were instrumental in securing our **#44th Place** finish.

Here is a recap of key patterns, time complexity bounds, and implementation tips.

---

## 1. Dijkstra with 0-1 BFS Hybridization

When edge weights are constrained to $\{0, W\}$, a standard `std::priority_queue` with $\mathcal{O}(E \log V)$ overhead can often be reduced to $\mathcal{O}(V + E)$ using a deque:

```cpp
#include <iostream>
#include <vector>
#include <deque>

using namespace std;
const int INF = 1e9;

struct Edge {
    int to, weight;
};

vector<int> zeroOneBFS(int startNode, int totalNodes, const vector<vector<Edge>>& graph) {
    vector<int> distance(totalNodes + 1, INF);
    deque<int> dq;

    distance[startNode] = 0;
    dq.push_front(startNode);

    while (!dq.empty()) {
        int u = dq.front();
        dq.pop_front();

        for (const auto& edge : graph[u]) {
            int v = edge.to;
            int w = edge.weight;
            if (distance[u] + w < distance[v]) {
                distance[v] = distance[u] + w;
                if (w == 0) {
                    dq.push_front(v);
                } else {
                    dq.push_back(v);
                }
            }
        }
    }
    return distance;
}
```

---

## 2. Comparing Algorithmic Complexities

| Algorithm | Best For | Time Complexity | Space Complexity |
| :--- | :--- | :--- | :--- |
| **0-1 BFS** | Binary edge weights | $\mathcal{O}(V + E)$ | $\mathcal{O}(V)$ |
| **Dijkstra + Heap** | Non-negative weights | $\mathcal{O}(E \log V)$ | $\mathcal{O}(V + E)$ |
| **Floyd-Warshall** | All-pairs dense graph | $\mathcal{O}(V^3)$ | $\mathcal{O}(V^2)$ |
| **Tarjan's SCC** | Directed cycles | $\mathcal{O}(V + E)$ | $\mathcal{O}(V)$ |

---

## 3. Python Quick Prototyping Script

During practice sessions, prototyping algorithms in Python helps quickly verify edge cases before writing optimized C++:

```python
from collections import defaultdict
import heapq

def dijkstra(n: int, edges: list[tuple[int, int, int]], source: int) -> dict[int, int]:
    adj = defaultdict(list)
    for u, v, w in edges:
        adj[u].append((v, w))
        adj[v].append((u, w))

    dist = {i: float('inf') for i in range(1, n + 1)}
    dist[source] = 0
    pq = [(0, source)]

    while pq:
        curr_dist, u = heapq.heappop(pq)
        if curr_dist > dist[u]:
            continue
        for v, weight in adj[u]:
            if curr_dist + weight < dist[v]:
                dist[v] = curr_dist + weight
                heapq.heappush(pq, (dist[v], v))

    return dist
```

---

## 4. Database Query Analogy (SQL)

In relational database systems, recursive queries for hierarchical trees use CTEs (`WITH RECURSIVE`):

```sql
-- Finding all descendants in a category hierarchy
WITH RECURSIVE CategoryTree AS (
    SELECT id, name, parent_id, 1 as depth
    FROM categories
    WHERE parent_id IS NULL
    UNION ALL
    SELECT c.id, c.name, c.parent_id, ct.depth + 1
    FROM categories c
    INNER JOIN CategoryTree ct ON c.parent_id = ct.id
)
SELECT * FROM CategoryTree ORDER BY depth, id;
```

---

## Contest Takeaways Checklist

- [x] Fast I/O (`cin.tie(nullptr)`) enabled for all interactive and high-volume streams.
- [x] Pre-allocated vectors with `reserve()` to eliminate vector dynamic resizing overhead.
- [x] Handled disconnected components and self-loops early.
- [ ] Implement randomized stress-tester with automated diff generators.
