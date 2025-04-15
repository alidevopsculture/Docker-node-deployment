# 🚀 Dockerized Node.js App with CI/CD Deployment on AWS EC2

Welcome to my DevOps journey! This project demonstrates how to build a simple Node.js app, containerize it using Docker, and deploy it automatically to an AWS EC2 instance using GitHub Actions for CI/CD.

---

## 📁 Project Structure


---

## 🛠️ Tech Stack

- **Node.js** (v18)
- **Express.js** (basic web server)
- **Docker** (multi-stage build to optimize image size)
- **GitHub Actions** (CI/CD automation)
- **AWS EC2** (host for containerized app)
- **Docker Hub** (Docker image registry)

---

## 📦 Docker Workflow

### ✅ Multi-Stage Dockerfile

```Dockerfile
# Stage 1: Build
FROM node:18 AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

# Stage 2: Production
FROM node:18-slim
WORKDIR /app
COPY --from=builder /usr/src/app .
RUN npm prune --production
EXPOSE 3000
CMD ["node", "app.js"]
CI/CD Pipeline: GitHub Actions

Trigger
The workflow is triggered every time you push code to the main branch.

Pipeline Tasks:
Checkout code
Set up Node.js
Install dependencies
Login to Docker Hub using GitHub secrets
Build Docker image
Push image to Docker Hub
SSH into EC2 and run container
Secrets Used:
DOCKER_USERNAME
DOCKER_PASSWORD
EC2_HOST
EC2_USERNAME
EC2_SSH_KEY (private key in base64 format)

Sample Workflow Snippet

- name: Log in to DockerHub
  run: echo "${{ secrets.DOCKER_PASSWORD }}" | docker login -u "${{ secrets.DOCKER_USERNAME }}" --password-stdin

- name: Build Docker Image
  run: docker build -t ${{ secrets.DOCKER_USERNAME }}/node-app:latest .

- name: Push Docker Image
  run: docker push ${{ secrets.DOCKER_USERNAME }}/node-app:latest

- name: Deploy to EC2 via SSH
  uses: appleboy/ssh-action@v1.0.0
  with:
    host: ${{ secrets.EC2_HOST }}
    username: ${{ secrets.EC2_USERNAME }}
    key: ${{ secrets.EC2_SSH_KEY }}
    script: |
      docker pull ${{ secrets.DOCKER_USERNAME }}/node-app:latest
      docker stop node-app || true
      docker rm node-app || true
      docker run -d -p 80:3000 --name node-app ${{ secrets.DOCKER_USERNAME }}/node-app:latest

App Preview

Once deployed, the app will be accessible on your EC2's public IP or DNS. It serves a styled HTML page with a personalized message.

Shout-out

Special thanks to the DevOps community and to myself for being consistent and curious. 🚀

Author
Ali – DevOps Engineer | Building culture, containers & confidence.
