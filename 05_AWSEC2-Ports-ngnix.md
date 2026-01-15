# DevOps AWS EC2, Ports & Nginx Fundamentals

## 1. AWS EC2 Instance & Key Pair (.pem)

When creating an **EC2 instance** on AWS, you generate or select a **key pair**.

* The downloaded `.pem` file contains a **private SSH key**
* This key is required to securely connect to the EC2 instance

⚠️ **Never share the `.pem` file**

---

## 2. File Permissions for `.pem` Key

AWS requires strict permissions on the private key file.

```bash
chmod 700 file.pem
```

### Why this is required

* Only the owner should be able to read/write/execute the key
* SSH refuses to use keys with open permissions

---

## 3. Connecting to EC2 Using SSH

```bash
ssh -i file.pem ubuntu@<public-ip-address>
```

### Example

```bash
ssh -i mykey.pem ubuntu@13.234.45.67
```

**Flow:**

```
Local Machine → SSH → AWS EC2 VM
```

---

## 4. Reloading Shell Configuration

```bash
source ~/.bashrc
```

Used when:

* Environment variables are updated
* Aliases or PATH changes are made

---

## 5. Why EC2 is Not Ideal for Frontend (React)

Although possible, EC2 is **not recommended** for frontend apps like React.

### Reasons

* Requires manual setup (Nginx, SSL, scaling)
* No auto-scaling by default
* Higher maintenance

### Better Alternatives

* S3 + CloudFront
* Vercel / Netlify

**EC2 is best suited for:**

* Backend APIs (Node.js)
* Databases
* Custom servers

---

## 6. Deploying Node.js Backend on EC2

* Node.js app runs on a specific port (e.g., 3000)

```bash
node index.js
```

Access via:

```
http://<public-ip>:3000
```

or

```
http://<aws-domain-name>:3000
```

---

## 7. Ports & Protocols Explained

| Protocol          | Port |
| ----------------- | ---- |
| HTTP              | 80   |
| HTTPS             | 443  |
| Node.js (default) | 3000 |

Examples:

```
https://www.google.com  → Port 443
http://example.com      → Port 80
```

If port is default, browser hides it automatically.

---

## 8. One Service per Port Rule

* Only **one process** can listen on a port at a time
* You cannot run multiple apps directly on port 80

This creates a problem when hosting multiple services.

---

## 9. Nginx as a Reverse Proxy

To remove ugly port numbers and handle multiple services, we use **Nginx**.

### What Nginx Does

* Listens on port **80 / 443**
* Routes traffic to different backend ports

```
Client
  |
  v
Nginx (80)
  |------> App 1 (8081) → www.be1.com
  |------> App 2 (8080) → www.be2.com
```

This is called a **Reverse Proxy**.

---

## 10. Installing Nginx

```bash
sudo apt update
sudo apt install nginx
```

Check status:

```bash
sudo systemctl status nginx
```

---

## 11. Nginx Configuration Files

Main config file:

```bash
sudo vi /etc/nginx/nginx.conf
```

Site-specific configs:

```bash
/etc/nginx/sites-available/
/etc/nginx/sites-enabled/
```

---

## 12. Nginx Reverse Proxy Configuration (Practical Example)

### Editing the Nginx Config File

First, open the Nginx configuration file:

```bash
sudo vi /etc/nginx/nginx.conf
```

> ⚠️ Do **not** prefix `rm` with `sudo vi`. Only use `sudo vi` to edit the file.

---

### Example: Reverse Proxy for Node.js Backend

```nginx
events {
    # Event directives
}

http {
    server {
        listen 80;
        server_name be1.100xdevs.com;

        location / {
            proxy_pass http://localhost:8080;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }
    }
}
```

### What This Configuration Does

* Nginx listens on **port 80** (default HTTP)
* Requests to `be1.100xdevs.com` are accepted
* Traffic is forwarded to a Node.js app running on **port 8080**
* Headers are forwarded correctly for WebSocket support

---

### Reloading Nginx Configuration

After saving the file, reload Nginx:

```bash
sudo nginx -s reload
```

This applies changes **without stopping the server**.

---
