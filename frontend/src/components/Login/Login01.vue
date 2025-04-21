<template>
  <div class="card bg-base-100 m-4">
    <div class="card-body">
      <!-- Tilte -->
      <h1 class="mb-4 w-full text-center text-4xl font-bold">{{ VITE_APP_NAME }}</h1>
      <!-- Input -->
      <div class="form-control">
        <label class="label">
          <span class="label-text">Username</span>
        </label>
        <input type="text" placeholder="Username" class="input input-bordered" v-model="username" />
      </div>

      <div class="form-control">
        <label class="label">
          <span class="label-text">Password</span>
        </label>
        <input type="password" placeholder="password" class="input input-bordered" v-model="password" />
        <label class="label">
          <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
        </label>
      </div>
      <!-- Button -->
      <div class="form-control mt-6">
        <button class="btn btn-neutral w-full" @click="login">Login</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const username = defineModel<String>('username');
const password = defineModel<String>('password');

const emit = defineEmits<{
  (e: 'login'): void;
}>();

function login() {
  emit('login');
}
const VITE_APP_NAME = import.meta.env.VITE_APP_NAME;
</script>
