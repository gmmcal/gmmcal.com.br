<template>
  <vue-error leading="Looks like you found a bug..." content="Let me check if I can find a fix for it. BRB!"></vue-error>
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
