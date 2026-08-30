# Day 24/184 - July 24, 2026

## Training: Basic Graph Types & Forms

### Graph Type Definitions

#### Simple Graph
- No self-loops (node connecting to itself)
- No multiple edges between same nodes
- Clean, basic form

#### Connected Graph
- Path exists between EVERY pair of nodes
- All nodes reachable from any starting node
- Single connected component

#### Disconnected Graph
- At least one pair of nodes has NO path
- Multiple separate components
- Some nodes unreachable from others

#### Directed Graph
- Edges have direction (A → B, not B → A)
- One-way relationships
- Used for: flows, dependencies

#### Undirected Graph
- Edges have no direction (A ↔ B)
- Two-way relationships
- Used for: friendships, roads

#### Cyclic Graph
- Contains at least one cycle
- Can return to starting node following edges
- Common in real-world problems

#### Acyclic Graph
- NO cycles possible
- Tree is special case of acyclic graph
- Used for: DAGs, dependencies

#### Weighted Graph
- Edges have values/weights
- Represents costs, distances, capacities
- Needs: Dijkstra, Bellman-Ford

#### Unweighted Graph
- Edges have no values (all equal)
- Binary: edge exists or doesn't
- Needs: BFS

### Visual Examples

Simple Connected: Disconnected: Directed:
1---2 1---2 4 1 → 2
| | | | | ↓ ↓
3---4 3 5 5 3 → 4

Cyclic: Acyclic: Weighted:
1---2 1---2 1--(5)--2
|\ | | | | |
4--3 3---4 (3) (7)
| |
3--(2)--4


### Key Differences

| Type | Property | Use Case |
|------|----------|----------|
| Simple | No loops/duplicates | Basic structure |
| Connected | All nodes linked | Network analysis |
| Directed | One-way edges | Dependencies |
| Cyclic | Has cycles | Real-world systems |
| Weighted | Edge values | Shortest path |

### Key Learning
- Graph form determines algorithm choice
- Same problem, different graph = different solution
- Recognize patterns: connected? weighted? cyclic?

---

**Streak: 24/184** 🔥