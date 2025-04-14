# 🐳 Node.js Docker App – Production Deployment on AWS EC2

This project demonstrates how to containerize a Node.js application using Docker, optimize it using a multi-stage build, and deploy it to AWS EC2. It is also pushed to DockerHub as a production-ready image.

---

## 📦 Features

- ✅ Node.js (v18)
- ✅ Dockerized with Multi-Stage Build
- ✅ Lightweight, production-ready image using `node:18-slim`
- ✅ Environment exposed via port `3000`
- ✅ Deployed on AWS EC2
- ✅ Image hosted on DockerHub

---

## 🧱 Technologies Used

| Tool | Purpose |
|------|---------|
| Node.js | Backend JavaScript runtime |
| Docker | Containerization |
| DockerHub | Image registry |
| EC2 | Cloud hosting on AWS |
| GitHub | Version control |

---

## 🛠️ How to Run Locally

```bash
# Clone the repository
git clone https://github.com/<your-github>/node-docker-ec2.git
cd node-docker-ec2

# Build the Docker image
docker build -t ali-docker-app .

# Run the container
docker run -p 3000:3000 ali-docker-app


DockerHub Image

📦 Available on DockerHub:
👉 murtaza007/node-demo

# Pull the image
docker pull ali-devops/node-app:latest

# Run it
docker run -p 3000:3000 ali-devops/node-app

🏗️ Dockerfile Overview

FROM node:18 as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

FROM node:18-slim
WORKDIR /app
COPY --from=builder /app .
RUN npm prune --production
EXPOSE 3000
CMD ["node", "app.js"]

Multi-stage Dockerfile ensures small image size and faster deployment 🚀

☁️ Deployment on EC2

Launched EC2 instance (Ubuntu)
Installed Docker and pulled the image
Ran the container exposing port 3000
Configured EC2 Security Group to allow HTTP access
Accessed the app via http://<EC2-PUBLIC-IP>:3000

📈 Project Goals

Learn Docker multi-stage builds ✅
Push production images to DockerHub ✅
Deploy Node.js app on AWS EC2 ✅
Document the process like a DevOps engineer ✅

🤝 Author

Ali Murtaza – www.linkedin.com/in/ali-murtaza-35a17a230

📌 License
This project is open-sourced under the MIT license.
