---
title: Building, Running, and the REPL
---

-   Set up [[Clojure]]
-   Learn to run code using the [[REPL]]
-   Introduction to [[Clojure]]

## What is Clojure?

-   founded by [[Rich Hickey]]
-   Alloy of [[Lisp]] and [[functional programming]]
    -   Lisp allows you to write expressively
    -   [[functional programming]] allows you to think like a programmer
-   **Clojure Language:** A Lisp dialect with a functional emphasis.
-   **Clojure Compiler:** An executable JAR file, clojure.jar, which takes Clojure code and compiles it into Java Virtual Machine (JVM) bytecode
-   Clojure is a hosted language - executed on the [[Java Virtual Machine]] (JVM) and uses the JVM for core features. It can also target [[Javascript]] and the Microsoft Common Language Runtime, but this book only focuses on the JVM implementation.
-   Clojure.jar reads Clojure source code and produces [[Java]] bytecode

## Leiningen

Most clojurists use Leiningen to build and manage their projects. We&rsquo;re going to do 4 tasks.

1.  Create a new Clojure project
2.  Running the Clojure project
3.  Building the Clojure project
4.  Using the REPL

I installed the jdk & Leiningen using [[Homebrew]]



### Create a New Clojure Project

Once you have Leiningen is installed this creates a new app.

    lein new app clojure-noob

I passed it up to Github: <https://github.com/dschapman/clojure-noob>

-   **clojure.clj:** the configuration file for Leiningen. Definses dependencies, what function should run first.
-   **src/project-name:** This is where all the source code goes
-   **core.clj:** is where we&rsquo;re writing our Clojure code for this excersise
-   **test/:** contains tests
-   **resources/:** where you store assets


### Running the Clojure Project

    lein run

-   We defined a function called -main that we executed at the command line.
-   You can also use lein uberjar to generate a jar file that anyone can execute


### Using the REPL

-   **[[REPL]]:** A tool for experimenting with code. It allows you to interact with a running piece of code so you can quickly try out ideas. It then reads your input, evaluates it, prints the result, and loops, presenting you with a prompt again.
-   **prefix notation:** the operator always comes first in an expression
-   The REPL is similar to SSH - in the same way SSH allows you to make changes to a running server the REPL allows you to make changes to a running program


### Example of Prefix Notation

For example:
```clojure
    (+ 1 2 3 4)
```
Will output this
```
    10
```
or
```clojure
    (do (println "no prompt here!")
        (+ 1 3))
```

Next Chapter: [How to Use Emacs, an Excellent Clojure Editor | Clojure for the Brave and True](how_to_use_emacs_an_excellent_clojure_editor_clojure_for_the_brave_and_true.md)

