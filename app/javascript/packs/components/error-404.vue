<template>
  <vue-error leading="Page Not Found" content="The page you are looking for could not be found. You can trying getting to another place in the menu above"></vue-error>
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
