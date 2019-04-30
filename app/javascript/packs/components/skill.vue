<template>
  <span :class="this.skill_class">{{ skill.name }}</span>
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
    skill_class() {
      const value = Math.round(this.skill.value);
      return ["skill", "s-" + value].join(" ");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "stylesheets/components/skill";
</style>
