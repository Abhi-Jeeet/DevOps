
````md

This document covers the basic Linux commands and Node.js tools I studied on Day 1 while working in **Ubuntu / WSL**.

---

## 1. `pwd` — Print Working Directory
Displays the absolute path of the current directory.

```bash
pwd
````

---

## 2. `cd` — Change Directory

Used to navigate between directories.

```bash
cd folder_name
cd ..
cd ~
cd /
```

Examples:

```bash
cd test     # enter test directory
cd ..       # move to parent directory
cd ~        # go to home directory
```

---

## 3. `ls` — List Files and Directories

Shows files and folders in the current directory.

```bash
ls
ls -l
ls -a
```

* `-l` → detailed view
* `-a` → shows hidden files

---

## 4. `mkdir` — Make Directory

Creates a new directory.

```bash
mkdir folder_name
```

Example:

```bash
mkdir test
```

---

## 5. `touch` — Create File

Creates an empty file.

```bash
touch file.txt
```

Example:

```bash
touch index.js
```

---

## 6. `cat` — Display File Content

Prints file content to the terminal.

```bash
cat file.txt
```

---

## 7. `vi` — Edit File Using Vim

Opens a file in Vim editor.

```bash
vi file.txt
```

Basic Vim commands:

* `i` → insert mode
* `Esc` → exit insert mode
* `:w` → save
* `:q` → quit
* `:wq` → save and quit

---

## 8. `mv` — Move or Rename Files/Folders

Moves or renames files and directories.

```bash
mv source destination
```

Examples:

```bash
mv test ..              # move test folder to parent directory
mv old.txt new.txt      # rename file
```

---

## 9. `cp` — Copy Files/Folders

Copies files or directories.

```bash
cp file1 file2
cp -r folder1 folder2
```

Example:

```bash
cp -r test backup_test
```

---

## 10. `nvm` — Node Version Manager

Used to manage multiple Node.js versions.

```bash
nvm --version
nvm install node
nvm use node
```

---

## 11. `npm` — Node Package Manager

Manages Node.js packages.

```bash
npm --version
npm init
npm install package_name
```

Example:

```bash
npm install express
```

---

## 12. `node` — Node.js Runtime

Runs JavaScript files or opens Node REPL.

```bash
node
node app.js
```

### Exit Node REPL:

```bash
.exit
```

or press:

```text
Ctrl + D
```


📌 *This file documents my Day 1 progress while learning Linux, Bash, and Node.js using Ubuntu (WSL).*

```

---

```
