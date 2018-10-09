<template>
  <p class="skill" :style="style">{{ skill.name }}</p>
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
p.skill {
  margin: 10px;
  padding: 0;
  line-height: 45px;
  align-self: center;
}
</style>
