<script setup>
import {ref} from "vue";

const name = ref(localStorage.getItem("name") || "");

function write() {
  localStorage.setItem("name", name.value);
}

</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <RouterLink to="/about">About</RouterLink>
    <h1 class="text-2xl font-bold">Home</h1>

    <div class="">
      <input v-model="name" class="border border-gray-300 rounded p-2" placeholder="Enter your name" type="text"
             @input="write"/>
      <p>{{ name }}</p>
    </div>
  </div>
</template>
