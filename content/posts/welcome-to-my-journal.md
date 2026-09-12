---
title: "First Journal Entry: Building in Public"
date: "2026-09-12"
summary: "Welcome to my local-first engineering notebook. Documenting everything I learn — from complex algorithms and system architecture to minor concepts, tools, and cross-disciplinary curiosities."
tags: ["Learning", "CS", "Engineering", "Journal"]
---

# Welcome to My Learning Journal

This journal serves as a local-first engineering notebook where I document my explorations in competitive programming, distributed systems architecture, database internals, and software engineering.

## Why a File-Based Journal?

Having markdown files stored directly in version control provides distinct advantages:

1. **Version-Controlled Thoughts**: Every post, revision, and code snippet is tracked with Git.
2. **Zero Overhead**: Writing in standard Markdown with YAML frontmatter means no CMS dashboards or database migrations.
3. **Automated Static Export**: Whenever changes are pushed to `main`, GitHub Actions automatically compiles static HTML pages and deploys them to GitHub Pages.
4. **Offline First**: Fully editable in any code editor with instant local preview.

```bash
# Adding a new journal entry is as simple as:
git checkout -b post/systems-concurrency
touch content/posts/systems-concurrency.md
# write your thoughts, commit, and push!
git push origin main
```

## What to Expect Here

This journal is an open-ended engineering logbook. Rather than only posting polished case studies, I want this space to capture **everything I learn** — from fundamental algorithmic breakthroughs to the smallest command-line trick or quirky browser behavior.

Whether a concept directly relates to my day-to-day focus in computer science or stems from curiosity in completely different fields, if it broadens my thinking or solves a real problem, it has a home here:

### 1. Core Computer Science & Algorithms
- **Algorithmic Insights**: Deep dives into graph theory, dynamic programming, segment trees, number theory, and contest post-mortems from ICPC and national programming contests.
- **Complexity Analysis & Trade-offs**: Big-O bounds in practice, memory footprints, cache locality, and micro-optimizations in C++ and Python.

### 2. Systems, Databases & Backend Engineering
- **Architecture & Design**: High-throughput backend engineering, concurrency handling, and clean modular designs using Spring Boot, Node.js, and Laravel.
- **Data Persistence**: Relational database modeling, query optimization, ACID guarantees, locking mechanisms, and stored procedures across PostgreSQL, MSSQL, and MySQL.

### 3. Frontend Engineering & Interface Design
- **Web Technologies**: Modern React patterns, state management, component architecture, and responsive layouts.
- **Craft & UX**: Typography, color contrast, motion design, glassmorphic styling, and creating interfaces that feel snappy and pleasant to use.

### 4. Developer Workflows & Micro-Learnings
- **Tooling & Environment**: Shell wizardry (Bash, Zsh), Linux system utilities, Git workflows, debugging tricks, and terminal productivity tools.
- **Minor Discoveries & "Aha!" Moments**: Quirks in language specifications, obscure standard library methods, or quick troubleshooting notes that saved hours of debugging.

### 5. Cross-Disciplinary & Exploratory Concepts
- **Beyond Pure CS**: Concepts from mathematics, logic, hardware fundamentals, developer psychology, productivity systems, or whatever rabbit hole I dive into next.

---

No idea is too small or too niche. The goal is simple: **learn continuously, document thoroughly, and share openly.**
