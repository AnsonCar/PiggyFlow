# 🐷 Piggy Frontend

Vue 3 + TypeScript + Vite + Pinia + TailwindCSS + TalwindCSS Motion + DaisyUI

## 🛠️ Tech Stack

- [Vue 3](https://vuejs.org/) - Progressive JavaScript Framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [Pinia](https://pinia.vuejs.org/) - Vue Store Management
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS Framework
- [Tailwind CSS Motion](https://rombo.co/tailwind/) - Animation plugin
- [DaisyUI](https://daisyui.com/) - Tailwind CSS Components

## 🚀 Quick Start

```
docker compose -f docker-compose.product.yml up
```

## 📁 Project Structure

```
.
├── README.md
├── docker
├── docker-compose.product.yml  # Docker Compose config for production environment
├── index.html
├── nginx.conf                  # Nginx configuration
├── package-lock.json
├── package.json
├── src
│ ├── App.vue
│ ├── assets                    # Static assets (images, fonts, etc.)
│ ├── components                # Reusable Vue components
│ ├── composables               # Vue composables for reusable logic
│ ├── i18n
│ ├── index.css
│ ├── layouts
│ ├── main.ts
│ ├── middleware
│ ├── pages
│ ├── routes
│ ├── stores
│ ├── types
│ ├── utils
│ └── vite-env.d.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts                  # Vite build and development configuration
```
