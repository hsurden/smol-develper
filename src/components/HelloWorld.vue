<template>
  <div class="hello-world">
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      message: 'Hello, World!'
    }
  }
}
</script>

<style scoped>
.hello-world {
  text-align: center;
  margin-top: 40px;
}
</style>