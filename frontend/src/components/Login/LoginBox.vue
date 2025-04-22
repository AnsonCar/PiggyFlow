<template>
  <main class="card bg-base-100 m-4 w-[86vw] transition-all duration-300 ease-out sm:w-sm">
    <article class="card-body w-full" @keyup.enter="login">
      <!-- Tilte -->
      <h1 class="mb-4 w-full text-center text-4xl font-bold">{{ VITE_APP_NAME }}</h1>
      <!-- Input -->
      <p class="my-2">
        <label class="label">
          <span class="label-text">Username</span>
        </label>
        <input type="text" placeholder="Username" class="input input-bordered w-full" v-model="username" />
      </p>

      <p class="my-2">
        <label class="label">
          <span class="label-text">Password</span>
        </label>
        <input type="password" placeholder="password" class="input input-bordered w-full" v-model="password" />
      </p>

      <!-- Forgot password -->
      <span class="label">
        <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
      </span>

      <!-- Button -->
      <p class="mt-6">
        <button class="btn btn-neutral w-full" @click="login">Login</button>
      </p>
    </article>
  </main>
</template>

<script setup lang="ts">
const username = defineModel<String>('username');
const password = defineModel<String>('password');

const VITE_APP_NAME = import.meta.env.VITE_APP_NAME;

const emit = defineEmits<{
  (e: 'login'): void;
}>();

function login() {
  emit('login');
}
</script>
