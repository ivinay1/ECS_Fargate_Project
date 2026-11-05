# AWS ECS Fargate Auto Scaling Project

## Overview

A containerized Node.js application deployed on AWS ECS using Fargate. The project demonstrates container deployment, application load balancing, and automatic scaling based on traffic.

## Architecture

**User → Application Load Balancer → ECS Fargate Service → Node.js Containers**

- **Docker:** Containerizes the Node.js application.
- **Amazon ECR:** Stores Docker images.
- **Amazon ECS:** Manages the containerized application.
- **AWS Fargate:** Runs containers without managing EC2 instances.
- **Application Load Balancer:** Distributes incoming traffic across healthy tasks.
- **CloudWatch:** Monitors application and infrastructure metrics.
- **Auto Scaling:** Automatically adjusts the number of running tasks based on demand.

## Features

- Node.js application with EJS dashboard.
- Docker-based deployment.
- Health-check endpoint for load balancer monitoring.
- Multiple ECS tasks for availability.
- Load balancing and automatic scaling.

## Learning Objectives

- Understand container deployment using ECS and Fargate.
- Configure an Application Load Balancer.
- Implement ECS Service Auto Scaling.
- Monitor application health and scaling behavior.
