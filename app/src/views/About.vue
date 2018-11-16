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
      this.printFib(100)
    },

    methods: {
      fibonacci (n) {
        if ((n === 0) || (n === 1)) {
          return n
        }
        return this.fibonacci(n - 1) + this.fibonacci(n - 2)
      },

      printFib (n) {
        let array = []
        for (let i = 0; i < n; i++) {
          if (i < 2) {
            array[i] = 1
          } else {
            array[i] = array[i-1] + array[i-2]
          }
        }
        console.log(array)
      }
    }
  }
</script>
