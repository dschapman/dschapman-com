---
title: "Basic Git Commans"
---

# Getting Started

Basic commands to [[version control]] files with [[git]]

## To initialize a new git repository

`git init`
This will initialize a new git repository in your current folder

## To clone an existing repository

`git clone <repo url>`
This will clone the repo found at that url. It creates a folder in your current folder.

## To add a file to the git folder

`git add <file name>`


## To commit all staged changes

`git commit -m "<commit message>"`

## To commit all changes to local repo

`git commit -am "<commit message>"`

## To add a [Github](github.md) remote repo

`git remote add origin https://github.com/user/repo.git`

## To push to a remote repo

`git push`

## To pull down the latest versions from a remote repo

`git pull`