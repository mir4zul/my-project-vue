<script setup>
import { ref } from 'vue'
import Button from "./Button.js";

// State
const count = ref(0)
const activeBtn = ref(null) // 'inc' or 'dec'

// Functions
const increment = () => {
  count.value++
  activeBtn.value = 'inc'
}

const decrement = () => {
  count.value--
  activeBtn.value = 'dec'
}
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <h1 class="text-2xl font-bold">Count</h1>

    <div>
      <p class="text-2xl">{{ count }}</p>
    </div>

    <div class="space-x-2">
      <button
          class="px-4 py-2 rounded-md"
          :class="activeBtn === 'inc' ? 'bg-green-700 text-white' : 'bg-green-500'"
          @click="increment"
      >
        Increment
      </button>

     <Button label="hello" @click="increment"/>
    </div>
  </div>
</template>
