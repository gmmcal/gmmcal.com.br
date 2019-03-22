<template>
  <div class="container">
    <ul class="social">
      <li>
        <a href="https://github.com/gmmcal" target="_blank" rel="noopener" aria-label="Github">
          <font-awesome-icon prefix="fab" :icon="iconGithub" size="lg"></font-awesome-icon>
        </a>
      </li>
      <li>
        <a href="https://gitlab.com/gmmcal" target="_blank" rel="noopener" aria-label="gitlab">
          <font-awesome-icon prefix="fab" :icon="iconGitlab" size="lg"></font-awesome-icon>
        </a>
      </li>
      <li>
        <a href="https://dev.to/gmmcal" target="_blank" rel="noopener" aria-label="dev.to">
          <font-awesome-icon prefix="fab" :icon="iconDev" size="lg"></font-awesome-icon>
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
import { faGithub, faGitlab, faDev, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  data() {
    return {
      iconGithub: faGithub,
      iconGitlab: faGitlab,
      iconDev: faDev,
      iconTwitter: faTwitter,
      iconLinkedin: faLinkedinIn,
    }
  },
  components: {
    'font-awesome-icon': FontAwesomeIcon,
  }
}
</script>

<style lang="scss" scoped>
@import "./app/assets/stylesheets/components/social";
</style>
