<template>
  <ul :class="css_class">
    <li v-for="item in items" :key="item.id">
      <vue-menu-item :item="item" />
    </li>
  </ul>
</template>

<script>
import MenuItem from './menu_item'

export default {
  props: ['items', 'css_class'],
  components: {
    'vue-menu-item': MenuItem,
  }
}
</script>
