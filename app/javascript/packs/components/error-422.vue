<template>
  <vue-error leading="The change you wanted was rejected" content="Don't feel bad. It happens to everyone."></vue-error>
</template>

<script>
import I18n from '../i18n'
import Error from './error'

export default {
  components: {
    'vue-error': Error,
  },
}
</script>
