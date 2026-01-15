## 1. IP Addressing (IPv4)

**IPv4** addresses are 32-bit numerical labels assigned to devices in a network.

* Range: `0.0.0.0` to `255.255.255.255`
* Each octet ranges from `0` to `255`

### Examples

```
132.11.22.133
0.1.2.3
```

### Special IPv4 Addresses

* `0.0.0.0` → Represents *all IPv4 addresses* or an unspecified address
* `255.255.255.255` → Broadcast address

Why this matters in DevOps:

* Used in server binding, networking, firewall rules, Docker/Kubernetes networking

---

## 2. Local Network & Routing (Mild Hosting)

Local networking is essential for development, testing, and internal services.

### Common Commands

#### `ifconfig`

* Displays network interface details
* Shows IP address, MAC address, and network status

> (Modern alternative: `ip a`)

#### `npx serve`

* Quickly serves a static site locally
* Useful for frontend testing

```bash
npx serve
```

Runs a local server like:

```
http://localhost:3000
```

---

## 3. Hosts File (`/etc/hosts`)

Used for local DNS resolution.

```bash
sudo vi /etc/hosts
```

### Example

```
127.0.0.1   myapp.local
```

This allows:

```
http://myapp.local
```

Why DevOps uses this:

* Local testing without public DNS
* Simulating production domains

---

## 4. DNS (Domain Name System)

DNS converts **domain names** into **IP addresses**.

Example:

```
google.com → 142.250.xxx.xxx
```

### DNS in DevOps

* Load balancing
* Service discovery
* High availability
* Cloud hosting

Common DNS Records:

* `A` → IPv4 address
* `AAAA` → IPv6 address
* `CNAME` → Alias
* `MX` → Mail server

---

## 5. TURN Protocol

**TURN (Traversal Using Relays around NAT)** is a networking protocol.

Used when:

* Devices are behind NAT/firewalls
* Direct peer-to-peer connection fails

### Common Use Cases

* Video calls (WebRTC)
* Real-time communication apps

Why DevOps should know:

* Required in scalable real-time systems
* Impacts latency and infrastructure cost

---

## 6. Intranet

An **Intranet** is a private internal network.

### Characteristics

* Accessible only inside an organization
* Used for internal tools, dashboards, services

### DevOps Relevance

* Internal CI/CD tools
* Monitoring dashboards
* Secure microservices communication

---

## 7. Diagrams (Important for Understanding)

### 7.1 Basic Network Flow Diagram

```
[ User / Browser ]
        |
        | HTTP / HTTPS Request
        v
[ DNS Resolver ]
        |
        | Domain → IP Resolution
        v
[ Load Balancer ]
        |
        | Traffic Distribution
        v
[ Application Server ]
        |
        | DB Query / API Call
        v
[ Database / External Service ]
```

**Explanation (DevOps perspective):**

* DNS resolves domain to IP
* Load balancer distributes traffic
* App server handles business logic
* Database stores persistent data

---

### 7.2 DNS Resolution Flow Diagram

```
User enters: www.example.com
        |
        v
[ Browser Cache ]
        |
        v
[ OS Cache ]
        |
        v
[ Local DNS Resolver (ISP) ]
        |
        v
[ Root DNS Server ]
        |
        v
[ TLD Server (.com) ]
        |
        v
[ Authoritative DNS Server ]
        |
        v
Returns IP Address (e.g. 93.184.216.34)
```

**Key Notes:**

* Caching improves performance
* DNS failure = service outage
* DevOps ensures DNS reliability

---

### 7.3 Localhost & Hosts File Flow

```
Browser → myapp.local
        |
        v
/etc/hosts
127.0.0.1 myapp.local
        |
        v
Local Server (Node / Nginx)
```

Used for:

* Local testing
* Microservices simulation

---

## Summary

DevOps networking essentials include:

* IPv4 addressing
* Local & private networking
* DNS resolution
* Traffic flow understanding
* Internal (Intranet) systems

These concepts are **critical** for:

* Deployment
* Debugging production issues
* Cloud infrastructure
* Kubernetes & microservices
