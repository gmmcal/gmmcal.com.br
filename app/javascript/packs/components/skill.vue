<template>
  <div class=" col-xs-12 col-sm-4 col-md-4 col-lg-4 skills-area">
    <div class=" col-xs-12 col-sm-6 col-md-6 col-lg-6 skills">
      <span class="chart skill-bg" :data-percent="skill.value">
        <span class="percent">{{ skill.value }}</span>
        <canvas height="152" width="152"></canvas>
      </span>
      <h4>{{ skill.name }}</h4>
      <p>{{ skill.hero }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['skill']
}
</script>
