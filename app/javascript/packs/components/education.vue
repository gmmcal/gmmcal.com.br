<template>
  <div class="row education-details">
    <div class="col-xs-12 col-sm-3 col-md-2 col-lg-2">
      <div class="year">{{ end_date }}</div>
    </div>
    <div class="col-xs-12 col-sm-9 col-md-10 col-lg-10 right-area">
      <div class="arrowpart"></div>
      <div class="ex-con">
        <h4>{{ education.institution }}</h4>
        <h5>{{ education.course }}</h5>
        <vue-markdown class="description">{{ education.description }}</vue-markdown>
      </div>
    </div>
  </div>
</template>

<script>
import I18n from '../i18n'
import VueMarkdown from './markdown'

export default {
  props: ['education'],
  data() {
    return {
      I18n: I18n,
    }
  },
  computed: {
    end_date() {
      if (this.education.end_date === null) {
        return I18n.t('current', { scope: 'template' })
      }
      return I18n.l('date.formats.default', this.education.end_date)
    }
  },
  components: {
    'vue-markdown': VueMarkdown,
  },
}
</script>

<style lang="scss" scoped>
.education-details {
  .year {
    background: #ff675f;
    border-radius: 50%;
    color: #fff;
    font-size: 17px;
    height: 120px;
    padding: 40px 0;
    text-align: center;
    width: 120px;

    @media screen and (min-width: 1200px) {
      height: 140px;
      padding-top: 50px;
      width: 140px;
      padding-top: 58px;
    }

    @media screen and (max-width: 767px) {
      margin: 0 auto;
    }
  }

  .right-area {
    border-left: solid 1px #e5e4e4;
    padding-bottom: 47px;

    @media screen and (max-width: 767px) {
      border-left: 0;
    }

    .arrowpart {
      float: left;
      height: 50px;
      width: 15px;

      @media screen and (max-width: 767px) {
        float: none;
        height: 40px;
        width: 100%;
      }
    }

    .ex-con {
      background: #fafafa;
      border-bottom: solid 4px #e8e7e7;
      margin-left: 15px;
      padding: 22px 47px 6px;
      text-align: left;
      width: auto;

      .description {
        padding-bottom: 22px;
      }

      /deep/ p {
        color: #84868d;
        line-height: 21px;
        padding-bottom: 5px;
      }

      h4 {
        color: #474d5d;
        padding-bottom: 3px;
      }

      h5 {
        color: #474d5d;
      }

      @media screen and (max-width: 767px) {
        margin-left: 0;
      }
    }
  }

  &:last-child .right-area {
    padding-bottom: 0;
  }
}
</style>
