<template>
  <div class="container">
    <ul class="social">
      <li>
        <a href="https://github.com/gmmcal" target="_blank" rel="noopener" aria-label="Github">
          <font-awesome-icon prefix="fab" :icon="iconGithub" size="lg"></font-awesome-icon>
        </a>
      </li>
      <li>
        <a href="https://twitter.com/gmmcal" target="_blank" rel="noopener" aria-label="Twitter">
          <font-awesome-icon prefix="fab" :icon="iconTwitter" size="lg"></font-awesome-icon>
        </a>
      </li>
      <li>
        <a href="https://linkedin.com/in/gmmcal" target="_blank" rel="noopener" aria-label="LinkedIn">
          <font-awesome-icon prefix="fab" :icon="iconLinkedin" size="lg"></font-awesome-icon>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  data() {
    return {
      iconGithub: faGithub,
      iconLinkedin: faLinkedinIn,
      iconTwitter: faTwitter,
    }
  },
  components: {
    'font-awesome-icon': FontAwesomeIcon,
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding: 40px 0;

  .social {
    list-style-type: none;
    margin: 0 auto;
    text-align: center;

    li {
      background: #fff;
      border-radius: 50%;
      color: #00bdbd;
      display: inline-block;
      height: 42px;
      line-height: 42px;
      margin: 0 6px;
      text-align: center;
      width: 42px;

      &:hover {
        background: #0a9f9f;

        a {
          color: #fff;
        }
      }

      a {
        color: #00bdbd;
        height: 42px;
        width: 42px;

        svg {
          line-height: 42px;
        }
      }
    }
  }
}
</style>
