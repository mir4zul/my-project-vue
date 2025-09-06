<script setup>
import {useStorage} from "@/components/useStorage";

let food = useStorage("food");

</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <RouterLink to="/about">About</RouterLink>
    <h1 class="text-2xl font-bold">Home</h1>


    <div class="">
      <input v-model="food" class="border border-gray-300 rounded p-2" placeholder="Enter your name" type="text"
             @input="food"/>
      <p>{{ food }}</p>
    </div>
  </div>
</template>
