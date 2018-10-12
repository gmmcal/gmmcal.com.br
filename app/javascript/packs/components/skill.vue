<template>
  <span class="skill" :style="style">{{ skill.name }}</span>
</template>

<script>
export default {
  props: {
    skill: {
      type: Object,
      required: true
    }
  },
  computed: {
    style() {
      const value = Math.round(this.skill.value)
      const max_font_size = 70
      const font_size = max_font_size * value / 100
      return {
        'font-size': font_size + 'px'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.skill {
  margin: 10px;
  padding: 0;
  line-height: 30px;
  align-self: center;
  display: inline-block;
}
</style>
