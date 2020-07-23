---
title: "The Basics of Bash Scripting"
---

[[Bash]] is a [[programming language]] that is used in [[unix]] based OS for the terminal including [[MacOS]] (although after Catalina zsh is the default terminal language). 

## If statements
In bash the format of the if statement is:
```bash
if [ CONDITIONAL TEST ]
  then
    CODE RUNS IF TRUE
  else if [ SECOND CONDITIONAL ]
    CODE RUNS IF TRUE
  else
    CODE RUNS IF FALSE
fi
```
A few important points
* The whitespace around each bracket matters
* The indentations do not matter
* Line breaks can be replaced with semi-colons
* The if statement is closed with the keyword *fi*

## Loops

### While Loop
In Bash the format of the while loop is:
```bash
while [ CONDITIONAL EXPRESSION ]
  do
    CODE RUNS WHILE TRUE
done
```
Much like an if statement, the whitespace around the brackets matters, indentations do not, line breaks can be replaced with semi-colons.

## Bash Conditional Expressions
Bash uses several conditional expressions enclosed in brackets \[ \] to compare **integers**. These can be used with if statements, while statements, or in any other boolean values. Here are some of the common ones.

| Expression | Test |
| ---------- | --------------------------- |
| \[ -d DIR \] | Returns true if a directory exists |
| \[ -d FILE \] | Returns true if a file exists |
| \[ -n VAR \] | Returns true if a variable or string's length is greater than 0 |
| \[ -z VAR \] | Returns true if a variable or string's length is 0 |
| \[ VAR1 -gt VAR2 ] | Returns true if VAR1 is greater than VAR2 |
| \[ VAR1 -ge VAR2 ] | Returns true if VAR1 is greater than or equal to VAR2 |
| \[ VAR1 -lt VAR2 ] | Returns true if VAR1 is less than VAR2 |
| \[ VAR1 -le VAR2 ] | Returns true if VAR1 is less than or equal to VAR2 |
| \[ VAR1 -eq VAR2 ] | Returns true if VAR1 is equal to VAR2 |
| \[ VAR1 -ne VAR2 ] | Returns true if VAR1 is not equal to VAR2 |

## Awk
Awk is a tool (actually a separate programming language) that parses through output from other commands or files and can reformat, change, or rearrange that output based on user-defined fields in the output stream.
### Usage
Awk, like many other bash commands can accept the output of other commands using a pipe character (|).
```bash
ls -l /home/username/somedirectory | awk 'SCRIPT GOES HERE'
```
It can also directly read files to parse through all text in the file.
```awk
awk 'SCRIPT GOES HERE' /home/username/somefile
```
#### Using Awk with bash variables
If your awk script references a bash variable make sure to use double quotes instead of single quotes. Single quotes in bash tell bash everything will be interpretted literally; however, this also means that you need to reference any awk variables (like $1) within the double quotes with a backslash in front - `\$1`

## Bash Scripts
Bash scritps often have the file ending .sh. The beginning of the file declares the interpreter that the script uses, often `#!/bin/bash`. The rest of the script are the bash commands or other programs you want bash to execute. 

### Adding Arguments to a Script
Usually arguments are referenced in a script positionally - `$1` refers to the first argument following the script name, `$2` refers to the second argument, etc. So if we have a bash script called myscript.sh, in the example `./myscript.sh 45 text` $1 refers to 45 and $2 refers to text. However if you want to add specific flags to organize the arguments your script expects you can do that using several methods the easiest being the `getopts` command.
#### `getopts`
`getopts` gives access to flags passed to your bash script through the `$opt` variable and if applicable the arguments associated with that flag through the `$OPTARG` variable. Because getopts returns false when there are no more variables it can be used with a while loop to deal with each flag passed. 

```bash
while getopts ":l:o:v" opt; do 
  case $opt in
  l) label=$OPTARG   ;;
  o) output=$OPTARG   ;;
  v) verbose=true     ;;
  \?) echo -e 'Usage: [Usage]'
      exit 2
  esac
done
```

The `:` following each letter means that an additional argument is expected following the flag. So in the example above the -l and -o flags expect additional arguments following the flag; however, because the -v flag does not have a colon no additional argument is expected.
