# 系统架构

## 整体架构图

![架构图](/public/MainWorkFlow.png)

## 前端架构

- **框架**: Vue 3 + Vite
- **UI**: DaisyUI + Tailwind CSS
- **状态管理**: Pinia
- **语言**: TypeScript

## 后端架构

- **框架**: Django 5 + Django Ninja
- **数据库**: PostgreSQL
- **认证**: Django Ninja JWT
- **异步任务**: Celery + Redis

## 数据流

1. 前端通过 API 客户端与后端通信
2. 后端处理业务逻辑并访问数据库
3. 异步任务通过 Redis 队列处理
4. 认证通过 JWT 令牌实现

[查看技术细节 →](/technology)
