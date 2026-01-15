# DevOps Process Management & CI/CD Fundamentals

## 1. Process Management

In production systems, applications must:

* Run continuously
* Restart automatically on failure
* Run in the background
* Manage logs efficiently

This is handled using **process managers**.

---

## 2. PM2 (Process Manager 2)

**PM2** is a production-grade process manager for Node.js applications.

### Why PM2 is Used

* Keeps apps running forever
* Auto-restarts apps on crash
* Runs apps in background (daemon mode)
* Manages logs
* Supports clustering (multi-core usage)

---

## 3. Installing PM2

```bash
npm install -g pm2
```

Global installation allows PM2 to manage apps system-wide.

---

## 4. Managing Applications with PM2

### Start an Application

```bash
pm2 start index.js
```

### Delete / Stop an Application

```bash
pm2 delete index.js
```

### Useful PM2 Commands

```bash
pm2 list        # List running processes
pm2 logs        # View logs
pm2 restart all # Restart all apps
```

---

## 5. Checking Running Processes (lsof)

**lsof** = *List Open Files*

Used to check which process is using a port.

```bash
lsof -i :3000
```

Output shows:

* Process ID (PID)
* Command using the port

Useful when:

* Port is already in use
* Debugging server issues

---

## 6. CI/CD Overview

**CI/CD** automates the process of building, testing, and deploying software.

* **CI** → Continuous Integration
* **CD** → Continuous Delivery or Continuous Deployment

Goal:

> Faster, safer, and more reliable software releases

---

## 7. Continuous Integration (CI)

CI means **frequent code integration with automatic checks**.

### What Triggers CI

* Pushing code to GitHub
* Opening a Pull Request

### What CI Does Automatically

```
Pull latest code
Install dependencies
Run tests
Build project
Lint / format code
```

### Example Flow

```
You push code
   ↓
CI runs tests
   ↓
❌ Test fails → Fix before merge
```

👉 CI helps catch bugs **before production**.

---

## 8. Continuous Delivery vs Continuous Deployment

### Continuous Delivery

* Code is always deploy-ready
* Deployment requires **manual approval**

### Continuous Deployment

* Code is deployed **automatically** after tests pass
* No human approval step

### Comparison Table

| Type                  | Human Approval | Example                   |
| --------------------- | -------------- | ------------------------- |
| Continuous Delivery   | Yes            | Click “Deploy”            |
| Continuous Deployment | No             | Auto deploy to production |

---

## 9. CI/CD Pipeline Flow

```
Code Push
   ↓
CI (test, build, lint)
   ↓
CD (deploy to server)
```

---

## 10. .github/workflows Directory

Inside the `.github/workflows/` folder, we define **CI/CD workflows** using **YAML** files.

### What Workflow Files Define

* When a workflow runs (push, PR, schedule)
* What jobs are executed
* What steps are performed

### Example Events

* `on: push`
* `on: pull_request`

---


