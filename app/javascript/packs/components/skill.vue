<template>
  <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 skills-area">
    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 skills">
      <span class="chart skill-bg" :data-percent="skill.value">
        <span class="percent">{{ Math.round(skill.value) }}</span>
      </span>
      <h4>{{ skill.name }}</h4>
      <p>{{ skill.hero }}</p>
    </div>
  </div>
</template>

<script>
import EasyPieChart from 'easy-pie-chart'

export default {
  props: {
    skill: {
      type: Object,
      required: true
    }
  },
  mounted() {
    const element = this.$el.querySelector('.chart')
    new EasyPieChart(element, {
      barColor: '#ff675f',
      trackColor: '#e1e1e3',
      scaleColor: '#e1e1e3',
      scaleLength: 0,
      lineWidth: 15,
      size: 152
    })
  }
}
</script>

<style lang="scss" scoped>
.skills-area {
  height: 300px;
  padding: 0;

  .skills {
    float: none;
    margin: 0 auto;
    margin-bottom: 23px;
    padding: 0;
    text-align: center;

    p {
      color: #84868d;
      font-size: 13px;
      line-height: 18px;
      text-align: center;
    }

    img {
      margin: 0 auto;
      margin-bottom: 33px;
      max-width: 152px;
      width: 100%;
    }

    h4 {
      font-weight: 700;
      text-transform: uppercase;
    }

    .chart {
      display: inline-block;
      height: 152px;
      margin-bottom: 26px;
      position: relative;
      text-align: center;
      width: 152px;

      /deep/ canvas {
        left: 0;
        position: absolute;
        top: 0;
      }
    }

    .percent {
      color: #474d5d;
      display: inline-block;
      font-size: 21px;
      line-height: 152px;
      z-index: 2;

      &::after {
        content: '%';
        font-size: .8em;
        margin-left: .1em;
      }
    }
  }
}
</style>
