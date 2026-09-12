---
title: "First Journal Entry: Storing My Learnings"
date: "2026-09-12"
summary: "Welcome to my personal learning journal. A dedicated space to store everything I learn — from core programming and architecture to minor daily discoveries, tools, and cross-disciplinary concepts."
tags: ["Learning", "Programming", "Engineering", "Journal"]
---

# Welcome to My Learning Journal

This journal serves as a personal, local-first knowledge base where I document and organize everything I learn. It is a central repository for my thoughts, findings, and technical notes across software development and beyond.

## Why a File-Based Journal?

Having markdown files stored directly in version control provides distinct advantages:

1. **Version-Controlled Thoughts**: Every post, revision, and code snippet is tracked with Git.
2. **Zero Overhead**: Writing in standard Markdown with YAML frontmatter means no CMS dashboards or database migrations.
3. **Automated Static Export**: Whenever changes are pushed to `main`, GitHub Actions automatically compiles static HTML pages and deploys them to GitHub Pages.
4. **Offline First**: Fully editable in any code editor with instant local preview.

```bash
# Adding a new journal entry is as simple as:
git checkout -b post/new-learning-topic
touch content/posts/new-learning-topic.md
# write your thoughts, commit, and push!
git push origin main
```

## What to Expect Here

This journal is an open-ended personal logbook. I want this space to capture **everything I learn** — major concepts or minor details, whether directly tied to my daily work or sparked by curiosity in other fields.

If an idea broadens my thinking, explains how something works under the hood, or solves a real problem, it has a place here:

### 1. Core Programming & Problem Solving
- **Algorithms & Data Structures**: Practical explorations of graph traversal, dynamic programming, trees, data structures, and problem-solving patterns.
- **Complexity & Optimization**: Big-O analysis in practice, memory footprints, cache locality, and performance considerations in languages like C++, Python, and Java.

### 2. Systems, Databases & Backend Engineering
- **Architecture & Design**: High-throughput backend engineering, concurrency handling, and clean modular designs using Spring Boot, Node.js, and Laravel.
- **Data Persistence**: Relational database modeling, query optimization, ACID guarantees, locking mechanisms, and stored procedures across PostgreSQL, MSSQL, and MySQL.

### 3. Frontend Engineering & User Interfaces
- **Web Technologies**: Modern React patterns, state management, component architecture, and responsive layouts.
- **Craft & UX**: Typography, color contrast, motion design, glassmorphic styling, and creating interfaces that feel snappy and pleasant to use.

### 4. Developer Workflows & Micro-Learnings
- **Tooling & Environment**: Shell commands (Bash, Zsh), Linux system utilities, Git workflows, debugging techniques, and terminal productivity tools.
- **Minor Discoveries & "Aha!" Moments**: Quirks in language specifications, obscure standard library methods, or quick troubleshooting notes that save hours of debugging.

### 5. Cross-Disciplinary & Curious Topics
- **Beyond Pure Software**: Concepts from mathematics, logic, hardware fundamentals, developer psychology, productivity systems, or whatever topic I dive into next.

---

No topic is too small or too niche. The goal is simple: **learn continuously, document thoroughly, and keep all knowledge in one accessible place.**
