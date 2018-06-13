<template>
  <div class=" col-xs-12 col-sm-4 col-md-4 col-lg-4 skills-area">
    <div class=" col-xs-12 col-sm-6 col-md-6 col-lg-6 skills">
      <span class="chart skill-bg" :data-percent="skill.value">
        <span class="percent"></span>
      </span>
      <h4>{{ skill.name }}</h4>
      <p>{{ skill.hero }}</p>
    </div>
  </div>
</template>

<script>
import EasyPieChart from 'easy-pie-chart'

export default {
  props: ['skill'],
  mounted: function(el) {
    const element = this.$el.querySelector('.chart')
    new EasyPieChart(element, {
      barColor: '#ff675f',
      trackColor: '#e1e1e3',
      scaleColor: '#e1e1e3',
      scaleLength: 0,
      lineWidth: 15,
      size: 152,
      onStep (from, to, percent) {
        const percentage_element = element.querySelector('.percent')
        percentage_element.textContent = Math.round(percent)
      }
    })
  }
}
</script>
