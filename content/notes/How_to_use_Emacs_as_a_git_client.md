---
title: How to use Emacs as a git client
aliases: ['Emacs as a git client', 'how to use magit']
---

[[Emacs]] can be used as a [[git]] client using the magit package. 

## How to commit files using magit
After installing magit, navigate to a git controlled folder and run `M-x magit status`. This will bring up the status of the current repository. From here you can use the arrow keys to select unstaged files and press `s` to stage them. 

After you have selected all the files you wish to stage press `c` to commit. This will bring up the commit menu where you can select additional options. Press `c` again and begin to enter the commit message. Once you have pres `C-c C-c` to finish the commit. Then run `M-x magit push` to push the changes to your upstream origin.


