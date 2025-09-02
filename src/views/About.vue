<script setup>
import {ref} from "vue";

let message = ref('About page')

setTimeout(() => {
  message.value = 'About page updated'
}, 2000)

</script>

<template>
  <div>
    <RouterLink to="/">Home</RouterLink>
    <h1>About</h1>
    {{ message }}

    <input v-model="message" class="border border-gray-300 rounded" type="text">
    <input v-model="message" class="border border-gray-300 rounded" type="text">
    <input v-model="message" class="border border-gray-300 rounded" type="text">
  </div>
</template>