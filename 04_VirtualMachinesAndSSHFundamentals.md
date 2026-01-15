# DevOps Virtual Machines & SSH Fundamentals

## 1. Hypervisor

A **Hypervisor** is a software layer that allows multiple virtual machines (VMs) to run on a single physical machine (host).

```
[ Physical Host Machine ]
          |
     [ Hypervisor ]
      /     |     \
 [ VM1 ]  [ VM2 ]  [ VM3 ]
```

### Types of Hypervisors

* **Type 1 (Bare Metal)** – Runs directly on hardware (VMware ESXi, Hyper-V, KVM)
* **Type 2** – Runs on top of an OS (VirtualBox, VMware Workstation)

**DevOps relevance:**

* Cloud providers use hypervisors to provide scalable VMs
* Foundation of AWS EC2, GCP Compute Engine, Azure VMs

---

## 2. Bare Metal Servers

A **Bare Metal Server** is a physical server dedicated to a single tenant.

```
[ Hardware ] → [ OS ] → [ Application ]
```

### Characteristics

* No virtualization layer
* High performance
* Full hardware control

### Use Cases

* High-performance databases
* Low-latency systems
* Security-critical workloads

---

## 3. SSH Protocol

**SSH (Secure Shell)** is a secure protocol used to access remote machines over a network.

* Encrypted communication
* Replaces insecure protocols like Telnet

```
Local Machine  ──(Encrypted SSH)──>  Remote VM
```

**Used in DevOps for:**

* Server administration
* Deployments
* Debugging production issues

---

## 4. Connecting to a VM Using SSH

### Basic Command

```bash
ssh root@<ipv4-address>
```

### Example

```bash
ssh root@123.23.23.32
```

**Flow:**

```
User → SSH Client → Internet → VM SSH Server
```

---

## 5. SSH Key Pairs

SSH authentication is commonly done using **key pairs** instead of passwords.

### Key Types

* **Public Key** → Stored on server
* **Private Key** → Kept secure on client

```
[ Private Key ]  ⇄  [ Public Key ]
(Client)              (Server)
```

---

## 6. authorized_keys File

```bash
cat ~/.ssh/authorized_keys
```

* Stores public SSH keys allowed to access the machine
* If a public key exists here, its matching private key can log in

```
Public Key → authorized_keys → SSH Access Granted
```

⚠️ Anyone with the matching private key gets full access to the machine.

---

## 7. Generating SSH Keys

```bash
ssh-keygen
```

This creates:

* `id_rsa` → Private key
* `id_rsa.pub` → Public key

---

## 8. SSH Directory Structure

```bash
cd ~/.ssh
```

Common Files:

* `id_rsa` → Private key (❗ never share)
* `id_rsa.pub` → Public key
* `authorized_keys` → Allowed public keys

### Viewing Keys

```bash
cat ~/.ssh/id_rsa.pub   # public key
cat ~/.ssh/id_rsa       # private key
```

---

## 9. SSH Authentication Flow Diagram

```
User runs ssh command
        |
        v
SSH Client sends public key info
        |
        v
Server checks authorized_keys
        |
        v
Key Match?
   |        \
 Yes         No
  |           \
Access      Access
Granted     Denied
```

---

## Summary

This section covers:

* Virtualization fundamentals
* Hypervisors & bare metal servers
* Secure server access using SSH
* SSH key-based authentication

These concepts are **critical** for:

* Cloud computing
* Secure deployments
* DevOps automation
