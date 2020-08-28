---
title: Lecture 6: Version Control (git) Notes
---

Notes on: https://www.youtube.com/watch?v=2sjqTHE0zok

# Summary of Git

In [[Git]]

- **tree:** folders
- **blob:** files

Git uses a directed acyclic graph to model history.

Each snapshot has some number of parents and they can be m

## Git structures explained in pseudo code

- `type blob = array < byte >`
- `type tree = map < string, tree | blob >`

```
type commit =  struct {
        parents: array < commit >
        author: string
        message: string
        snapshot: tree
```

Any one of these three things is an object.

- In Git all objects are content addressed. Uses pointers to other trees, commits, etc
- Git maintains sets objects and references in repositories
- **references:** mappings of human readable and non-readable strings.

# Git Commands explained

- `git checkout` moves the head pointer and changes your contents of your working directory. Can be used to switch to a snapshot or a branch
- `git diff` compares two different snapshots
- `git branch` creates a new branch
- `git merge` merges different branches
- `git remote` lists out the current known remote or allows you to set new ones.
- `git branch --set-upstream-to=origin/master` tells git which upstream branch corresponds to which local branch. This allows for the simple `git push` syntax that I&rsquo;m used to using.
- `git fetch` checks for changes but doesn&rsquo;t pull them
- `git merge` or `git pull` pulls those changes down.
- `git add -p` allows you to add changes in parts interactively
- `git bisect` takes in a script and binary searches to find the first commit that this test stopped working.

# Additional Resources

- **[Lecture Notes](https://missing.csail.mit.edu/2020/version-control/):** Better notes than I took.
- **[Pro Git](https://git-scm.com/book/en/v2):** Highly Recommended Reading apparently.
