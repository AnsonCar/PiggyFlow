<template>
  <main class="bg-base-300 flex-center size-full flex-col">
    <LoginBox v-model:username="username" v-model:password="password" @login="login" />
  </main>
</template>

<script setup lang="ts">
import { obtainToken } from '@/api/api.token';
import LoginBox from '@/components/Login/LoginBox.vue';
import { useAlertStore } from '@/stores/alertStore';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/authStore';
import { checkNull } from '../utils/func';

const authStore = useAuthStore();
const alertStore = useAlertStore();
const router = useRouter();

const username = ref<string>('');
const password = ref<string>('');

async function login() {
  console.log(username.value);
  console.log(password.value);
  const hasUsername = await checkNull(username.value);
  const hasPassword = await checkNull(password.value);

  if (!hasUsername && !hasPassword) {
    const res: TokenObtainPairOutputSchema = await obtainToken({
      username: username.value,
      password: password.value,
    });
    if (res.access && res.refresh) {
      authStore.setToken(res.access, res.refresh);
      router.push({ name: 'home' });
    } else {
      alertStore.addItem({ level: 'error', message: 'Login failed. Please try again' });
    }
  } else {
    alertStore.addItem({ level: 'warning', message: 'Please enter your username and password' });
  }
}
</script>
