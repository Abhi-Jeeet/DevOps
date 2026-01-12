# 🐧 Bash / Linux Commands – Detailed Revision Notes with Examples


## 📁 `ls` – List Files and Directories

### `ls`
Lists files and folders in the current directory.
```bash
ls
````

---

### `ls -l`

Shows detailed information (permissions, owner, size, date).

```bash
ls -l
```

---

### `ls -R`

Lists files **recursively** (subfolders included).

```bash
ls -R
```

---

### `ls -t`

Sort files by **last modified time** (newest first).

```bash
ls -t
```

---

### `ls -lt`

Long listing + sorted by modification time.

```bash
ls -lt
```

---

### `ls -la`

Shows **hidden files** along with details.

```bash
ls -la
```

---

### `ls -lRa`

Recursive + long listing + hidden files.

```bash
ls -lRa
```

---

### `ls -lr`

Reverse order listing (oldest first).

```bash
ls -lr
```

---

### `ls -s`

Lists files sorted by size.

```bash
ls -s
```

---

### `ls *.json`

Lists all `.json` files in current directory.

```bash
ls *.json
```

---

### `ls bash*`

Lists files starting with `bash`.

```bash
ls bash*
```

---

### `ls -a ..`

Lists all files in the **parent directory**.

```bash
ls -a ..
```

---

### Find `.js` files recursively

```bash
ls -lR | grep ".js"
```

✔️ Better approach:

```bash
find . -name "*.js"
```

---

## 📄 `cat` – View & Write Files

### View file content

```bash
cat file.txt
```

---

### Write to file (overwrite)

```bash
cat > bash.txt
Hello Bash
```

---

### Append to file

```bash
cat >> bash.txt
Learning Linux
```

---

## 📂 Directory Management

### Create nested directories

```bash
mkdir -p frontend/scripts
```

---

### Copy folder recursively

```bash
cp -r src backup/
```

---

### Delete folder recursively

```bash
rm -r old_folder
```

⚠️ **Dangerous command – no undo**

---

## 🔐 `chmod` – File Permissions

### Permission Values

| Permission | Value |
| ---------- | ----- |
| Read       | 4     |
| Write      | 2     |
| Execute    | 1     |

---

### Symbolic Mode

```bash
chmod u+x script.sh
```

✔️ User gets execute permission.

```bash
chmod g-w file.txt
```

✔️ Removes write permission from group.

---

### Numeric Mode

```bash
chmod 755 script.sh
```

✔️ User: rwx, Group: r-x, Others: r-x

---

## 🖨️ `echo` – Print Output

```bash
echo "Hello World"
```

Write output to file:

```bash
echo "Linux Rocks" > note.txt
```

---

## 📄 `head` – Top Lines

```bash
head file.txt
```

```bash
head -n 3 file.txt
```

✔️ First 3 lines.

---

## 📄 `tail` – Bottom Lines

```bash
tail file.txt
```

```bash
tail -n 4 file.txt
```

✔️ Last 4 lines.

---

### Extract Specific Line Range

```bash
tail -n +4 file.txt | head -n 7
```

✔️ Lines 4 → 10.

```bash
head -n 15 file.txt | tail -n 2
```

✔️ Lines 14 & 15.

---

## 🔢 `wc` – Word Count

```bash
wc file.txt
```

```bash
wc -l file.txt
```

✔️ Line count only.

---

## 🔍 `grep` – Search Patterns

### Basic Search

```bash
grep "one" file.txt
```

✔️ Substring match.

---

### Exact Word

```bash
grep -w "one" file.txt
```

---

### Print Only Match

```bash
grep -o "one" file.txt
```

---

### Ignore Case

```bash
grep -i "one" file.txt
```

---

### Line Numbers

```bash
grep -n "2" file.txt
```

---

### Count Matching Lines

```bash
grep -c "error" log.txt
```

---

### Exclude Pattern

```bash
grep -v "error" log.txt
```

---

### Context Lines

```bash
grep -A 1 error log.txt
```

✔️ After match.

```bash
grep -B 1 error log.txt
```

✔️ Before match.

```bash
grep -C 1 error log.txt
```

✔️ Both sides.

---

## 🕒 `history` – Command History

```bash
history
```

---

## ✏️ `sed` – Stream Editor

### Replace Text

```bash
sed 's/ERROR/CRITICAL/' log.txt
```

---

### Print Matching Lines

```bash
sed -n '/Error/p' log.txt
```

---

### In-place Replace with Backup

```bash
sed -i.backup 's/ERROR/CRITICAL/' log.txt
```

---

### Replace Specific Line

```bash
sed '3s/ERROR/CRITICAL/' log.txt
```

---

### Replace Line Range

```bash
sed '3,5s/ERROR/CRITICAL/' log.txt
```

---

## 📊 `awk` – Text Processing

### Print Matching Lines

```bash
awk '/ERROR/ {print}' log.txt
```

---

### Replace Text

```bash
awk '{gsub(/ERROR/, "CRITICAL"); print}' log.txt
```

---

### BEGIN & END Blocks

```bash
awk 'BEGIN {print "START"} {print} END {print "END"}' log.txt
```

---

### Print Specific Columns

```bash
awk '{print $1, $2}' log.txt
```

---

### Custom Separator

```bash
awk -F "," '{print $1, $2}' file.csv
```

---

### Count Occurrences

```bash
awk '{count[$2]++} END {print count["ERROR"]}' log.txt
```

---

### Conditional Filtering

```bash
awk '{ if ($1 > 1598863888) print }' log.txt
```

---