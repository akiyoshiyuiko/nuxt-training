<template>
  <h2 class="custom-h2">{{ text }}</h2>
</template>

<script lung="ts">
export default {
  props: {
    text: String
  }
};
</script>

<style lang="scss" scoped>
.custom-h2{
  font-size: 24px;
  color: red;
}
</style>
