<template>
  <div class="content">
    <h1>Rsbuild with Vue</h1>
    <p class="text-yellow-600">Start building amazing things with Rsbuild.</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'


const initUsb = async () => {
  //@ts-expect-error
  const devices = await navigator.usb.getDevices()
  console.log(devices);
}

onMounted(async () => {
  await initUsb()
})

</script>

<style scoped></style>
