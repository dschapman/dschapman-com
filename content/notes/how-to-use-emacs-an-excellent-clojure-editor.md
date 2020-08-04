---
title: How to Use Emacs, an Excellent Clojure Editor 
---


I didn&rsquo;t use this chapter to get my [[Emacs]] editor set up since I just use [[Doom]] and am learning Emacs seperately by reading the book Mastering Emacs. Instead I installed Cider by uncommenting the clojure language in my `init.el` Doom configuration file. I also added `(setq org-babel-clojure-backend 'cider)` to my `config.el` file.

After that I was able to get the [[REPL]] up and running by running `M-x cider-jack-in`


## A Cornucopia of Useful Key Bindings

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


<colgroup>
<col  class="org-left" />

<col  class="org-left" />
</colgroup>
<tbody>
<tr>
<td class="org-left">Shortcut</td>
<td class="org-left">Effect</td>
</tr>


<tr>
<td class="org-left"><code>C-x C-e</code></td>
<td class="org-left"><code>cider-eval-last-expression</code></td>
</tr>


<tr>
<td class="org-left"><code>C-c M-n M-n</code></td>
<td class="org-left">Set the namespace to the namespace listed at the top of the current file.</td>
</tr>


<tr>
<td class="org-left"><code>C-c C-k</code></td>
<td class="org-left">Compile the current file within the REPL session.</td>
</tr>


<tr>
<td class="org-left"><code>C-↑ / C-↓</code></td>
<td class="org-left">Cycle through the REPL history</td>
</tr>


<tr>
<td class="org-left"><code>C-enter</code></td>
<td class="org-left">At the REPL prompt complete an incomplete command</td>
</tr>


<tr>
<td class="org-left"><code>C-c C-d C-d</code></td>
<td class="org-left">Display documentation for the symbol under point</td>
</tr>


<tr>
<td class="org-left"><code>M-. and M-,</code></td>
<td class="org-left">Navigate to source code for symbol under point and return to your original buffer.</td>
</tr>


<tr>
<td class="org-left"><code>C-c C-d C-a</code></td>
<td class="org-left">Apropros search; find arbitrary text across function names and documentation.</td>
</tr>
</tbody>
</table>


## How to Handle Errors

-   You can close the cider error buffer by pressing q
-   The stack trace can be filtered



## Paredit

-   This is the minor-mode that lets Emacs automatically just
-   You can turn off the mode by running `M-x paredit-mode`
-   There are a whole bunch of paredit shortcuts that help you adjust parentheses, `M-(` surrounds an expression with parentheses, and `C-→` and `C-←`, slurp and barf respectively

Next Chapter: [[Do Things: A Clojure Crash Course]]

