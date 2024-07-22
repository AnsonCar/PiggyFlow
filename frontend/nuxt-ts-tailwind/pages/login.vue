<template>
  <main class="size-full flex flex-col justify-center items-center">
    <div class="card bg-base-100 w-full max-w-sm shrink-0">
      <div class="card-body pb-36">
        <h1 class="form-control text-4xl text-center font-bold mb-4">
          Piggy Flow
        </h1>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Username</span>
          </label>
          <input type="text" placeholder="Username" class="input input-bordered" :class="{ 'input-error': hasUsername }"
            v-model="username" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" class="input input-bordered"
            :class="{ 'input-error': hasPassword }" v-model="password" />
          <label class="label">
            <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary" @click="login">Login</button>
        </div>
        <p class="text-error h-6">
          <span v-if="isError">
            Login failed. Pleasetry again
          </span>
        </p>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});

import { useRouter } from 'vue-router';
import { loginToken } from '~/utils/db/token'

const router = useRouter();
const username = ref<string>('');
const password = ref<string>('');
const hasUsername = ref<boolean>(false);
const hasPassword = ref<boolean>(false);
const isError = ref<boolean>(false);

async function login() {
  hasUsername.value = await checkNull(username.value)
  hasPassword.value = await checkNull(password.value)

  if (!hasUsername.value && !hasPassword.value) {
    const res = await loginToken({
      username: username.value,
      password: password.value
    })
    if (res.access && res.refresh) {
      setCookie("token", res.access, 1)
      setCookie("refresh", res.refresh, 1)
      location.reload()
      // router.push('/');
    } else {
      isError.value = true
    }
  }
}
</script>
