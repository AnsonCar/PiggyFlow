<p align="center">
  <!-- <img width="192px" src="https://raw.githubusercontent.com/AnsonCar/PiggyFlow/main/_document/vitepress/src/public/MainWorkFlow.png" > -->
</p>

<h1 align="center"><b>Piggy Flow</b></h1>

<p align="center">
  <img src="https://img.shields.io/badge/version-0.9.0-blue" alt="Version">
  <img src="https://img.shields.io/github/license/AnsonCar/PiggyFlow" alt="License">
  <img src="https://img.shields.io/badge/Vue-3.4-green" alt="Vue">
  <img src="https://img.shields.io/badge/Django-5.1-green" alt="Django">
  <img src="https://img.shields.io/badge/Docker-Supported-blue" alt="Docker">
</p>

## Chinese Version

中文版本的介紹, 請查看 [README_CN.md](/README_CN.md).

## Overview

Piggy Flow is a full-stack template project built with Vite Vue 3 and Django 5.

## Features

- User authentication system
- RESTful API with Django Ninja
- Modern Vue 3 frontend
- Dockerized deployment
- Internationalization support

## Tech Stack

### Frontend

- **Framework**: Vue 3 + Vite
- **UI**: DaisyUI + Tailwind CSS
- **State**: Pinia
- **Language**: TypeScript

### Backend

- **Framework**: Django 5 + Django Ninja
- **Authentication**: Django Ninja JWT
- **Database**: PostgreSQL
- **Async Tasks**: Celery + Redis

## Quick Start

```bash
# Development
docker compose up -d --build

# Production
docker compose -f docker-compose-production.yml up -d --build
```

## UI Showcase

| Login Screen                                                                                                      | Dashboard                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| ![Login](https://raw.githubusercontent.com/AnsonCar/PiggyFlow/main/_document/vitepress/src/public/demo/demo1.png) | ![Dashboard](https://raw.githubusercontent.com/AnsonCar/PiggyFlow/main/_document/vitepress/src/public/demo/demo2.png) |

| User Management                                                                                                   | API Docs                                                                                                        |
| ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| ![Users](https://raw.githubusercontent.com/AnsonCar/PiggyFlow/main/_document/vitepress/src/public/demo/demo3.png) | ![API](https://raw.githubusercontent.com/AnsonCar/PiggyFlow/main/_document/vitepress/src/public/demo/demo4.png) |

## Project Structure

```
.
├── backend/       # Django backend
├── frontend/      # Vue frontend
├── _document/     # Documentation
└── docker-compose.*.yml  # Docker configurations
```
