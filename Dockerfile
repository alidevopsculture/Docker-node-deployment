# STAGE 01 ------------------------------------
#----------------------------------------------
# Use Node base image

FROM node:18 AS Builder

# Create app directory
WORKDIR /usr/src/app

# Copy files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all the stuffs
COPY . .

# STAGE 2 ------------------------------------
#--------------------------------------------

FROM node:18-slim

# deciding the working directory
WORKDIR /app

# copying the dependencises from stage 1 
COPY --from=builder /usr/src/app .

# Removes unnecessary dev packages
RUN npm prune --production

# Expose port lable 3000
EXPOSE 3000

# Run app
CMD ["node","app.js"]


