<script lang="ts">
import { defineComponent } from "vue";
import { RouterView } from "vue-router";


export default defineComponent({
  name: "AppVue",
  components: { RouterView },

  methods: {

  }
});
</script>

<template>
  <AppToast :breakpoints="{ '700px': { width: '100%', right: '0', left: '0' } }" data-test="toast.mensagem" />
  <router-view />
</template>

<style>
</style>