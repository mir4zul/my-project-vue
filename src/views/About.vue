<script setup>
import swal from "sweetalert"; // ✅ Import sweetalert

// define function
const flash = (message) => {
  swal("Success", message, "success");
}
</script>

<template>
  <div>
    <RouterLink to="/">Home</RouterLink>
    <h1>About</h1>

    <!-- ✅ this will now work -->
    <button @click="flash('It works!')">Flash</button>
  </div>
</template>
