<p align="center">
  <!-- <img width="192px" src="https://raw.githubusercontent.com/AnsonCar/PiggyFlow/main/_document/vitepress/src/public/MainWorkFlow.png" > -->
</p>

<h1 align="center"><b>Piggy Flow 中文文档</b></h1>

<p align="center">
  <img src="https://img.shields.io/badge/version-0.9.0-blue" alt="Version">
  <img src="https://img.shields.io/github/license/AnsonCar/PiggyFlow" alt="License">
  <img src="https://img.shields.io/badge/Vue-3.4-green" alt="Vue">
  <img src="https://img.shields.io/badge/Django-5.1-green" alt="Django">
  <img src="https://img.shields.io/badge/Docker-Supported-blue" alt="Docker">
</p>

> For English documentation, please see [README.md](/README.md).

## 概述

Piggy Flow 是一个基于 Vite Vue 3 和 Django 5 的全栈模板项目。

## 功能

- 用户认证系统
- 基于 Django Ninja 的 RESTful API
- 现代化的 Vue 3 前端
- Docker 化部署
- 国际化支持

## 技术栈

### 前端

- **框架**: Vue 3 + Vite
- **UI**: DaisyUI + Tailwind CSS
- **状态管理**: Pinia
- **语言**: TypeScript

### 后端

- **框架**: Django 5 + Django Ninja
- **认证**: Django Ninja JWT
- **数据库**: PostgreSQL
- **异步任务**: Celery + Redis

## 快速开始

```bash
# 开发环境
docker compose up -d --build

# 生产环境
docker compose -f docker-compose-production.yml up -d --build
```

## 界面展示

| 登录界面                                                                                                         | 仪表盘                                                                                                             |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| ![登录](https://raw.githubusercontent.com/AnsonCar/PiggyFlow/main/_document/vitepress/src/public/demo/demo1.png) | ![仪表盘](https://raw.githubusercontent.com/AnsonCar/PiggyFlow/main/_document/vitepress/src/public/demo/demo2.png) |

| 用户管理                                                                                                         | API 文档                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| ![用户](https://raw.githubusercontent.com/AnsonCar/PiggyFlow/main/_document/vitepress/src/public/demo/demo3.png) | ![API](https://raw.githubusercontent.com/AnsonCar/PiggyFlow/main/_document/vitepress/src/public/demo/demo4.png) |

## 项目结构

```
.
├── backend/       # Django后端
├── frontend/      # Vue前端
├── _document/     # 文档
└── docker-compose.*.yml  # Docker配置
```
