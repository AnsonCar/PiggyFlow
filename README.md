<p align="center">
    <!-- <img width="192px" src="./docs/Logo/CY_Logo_Q2.png" > -->
</p>
<h1 align="center"><b>Piggy Flow</b></h1>

<p align="center">小豬心流</p>
<p align="center">V 0.0.7</p>

<main style="text-align: center;">
</main>

## 功能

## 快速部署

### docker

```bash
docker compose up -d --build
```

如果是用於測試正式上線情況，請使用 stage 文件

```
docker compose -f docker-compose-stage.yml up -d --build
```

### 創建首個帳號

#### 1. 打開 http://127.0.0.1:8000/api/docs

<img src= "https://raw.githubusercontent.com/AnsonCar/PiggyFlow/main/_document/vitepress/src/public/demo/demo-user.png" alt="Demo user"/></td>

#### 2. 打開 /api/user (post)，轉入 username 和 password，按 Execute

<img src= "https://raw.githubusercontent.com/AnsonCar/PiggyFlow/main/_document/vitepress/src/public/demo/demo-user-create.png" alt="Demo user create" /></td>

## UI 展示

<table style="border-collapse: collapse; border: 1px solid black;">
  <tr>
    <td style="width:40%;padding: 5px;background-color:#fff;">
      <img src= "https://raw.githubusercontent.com/AnsonCar/PiggyFlow/main/_document/vitepress/src/public/demo/demo1.png" alt="Demo1"   />
    </td>
    <td style="width:40%;padding: 5px;background-color:#fff;">
      <img src= "https://raw.githubusercontent.com/AnsonCar/PiggyFlow/main/_document/vitepress/src/public/demo/demo2.png" alt="Demo2"   />
    </td>
  </tr>
  <tr>
    <td style="width:40%;padding: 5px;background-color:#fff;">
      <img src= "https://raw.githubusercontent.com/AnsonCar/PiggyFlow/main/_document/vitepress/src/public/demo/demo3.png" alt="Demo3" />
    </td>
    <td style="width:40%;padding: 5px;background-color:#fff;">
      <img src= "https://raw.githubusercontent.com/AnsonCar/PiggyFlow/main/_document/vitepress/src/public/demo/demo4.png" alt="Demo4"/>
    </td>
  </tr>
</table>

## 項目架構

![](https://raw.githubusercontent.com/AnsonCar/PiggyFlow/v0.0.7/_document/vitepress/src/public/MainWorkFlow.png)

### 技術棧

#### 前端

**主用語言**: TypeScript  
**Web 架框**: Nuxt 3 | Vue 3.4  
**組件庫**: DaisyUI | Tailwind css  
**其他**: ...

### 后端

**主用語言**: Python 3.12.5  
**API 框架**: Django-ninja | Django 5.1  
**其他**: Django-ninja-jwt ...

## 項目結構

```
.
├── LICENSE
├── README.md
├── _document
├── backend
├── frontend
├── docker-compose-production.yml
├── docker-compose-stage.yml
└── docker-compose.yml
```
