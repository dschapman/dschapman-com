# Convert markdown files from bear so that they're ready to be used by gatsby-theme-brain 
import pathlib

directory="./content/notes"
count = 0
for path in pathlib.Path(directory).iterdir():
    if path.is_file():
        current_file = open(path, "r")
        first_line = current_file.readline()
        rest_of_file = current_file.read()
        current_file.close()
        if first_line[0] == '#':
            title = first_line[1:-1]
            current_file = open(path, "w")
            current_file.write("---\ntitle: \"" + title + "\"\n---\n")
            current_file.write(rest_of_file)
            current_file.close()
            count = count+1
print("Modified " + str(count) + " .md files")