<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { menuItems } from './mixin'

import Menubar from 'primevue/menubar'
import { MenuItem } from "primevue/menuitem";

export default defineComponent({
  name: 'MenuVue',
  components: {
    Menubar,
  },
  setup() {
    const items = ref<MenuItem[]>([]);

    onMounted(() => {
      items.value = menuItems();
    });

    return {
      items,
    };
  },
});
</script>

<template>
  <div>
    <Menubar class="w-full" :model="items">
      <template #start>
        <img alt="logo" src="/logo.png" height="40" class="ml-2">
      </template>
    </Menubar>
  </div>
</template>

<style lang="scss">
.p-menubar {
  justify-content: space-between;

  ul {
    z-index: 100;
  }
}
</style>
