<template>
  <div class="about">
    <h1>This is an about pages {{ num }} </h1>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        num: 0
      }
    },
    created () {
      this.num = this.fibonacci(10)
    },

    methods: {
      fibonacci (n) {
        if ((n === 0) || (n === 1)) {
          return n
        }
        return this.fibonacci(n - 1) + this.fibonacci(n - 2)
      }
    }
  }
</script>
