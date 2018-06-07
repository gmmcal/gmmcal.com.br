<template>
  <a :class="item.css_class" :href="item.link">{{ item.label }}</a>
</template>

<script>
export default {
  props: ['item'],
}
</script>
