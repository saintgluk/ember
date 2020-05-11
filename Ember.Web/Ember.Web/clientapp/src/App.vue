<template>
  <div id="app">
    <div v-if="!isProductionTip" style="position: absolute; left: 50%; z-index: 101; line-height: 1;">
      <div style="position: relative; left: -50%; border: dotted red 1px; background-color:red; font-weight:bold;">
        Внимание, тестовый сервер! Environment: {{typeEnv}}
      </div>
    </div>
    <div class="header">
      <b-navbar type="dark" variant="dark">
        <b-navbar-nav>
          <b-nav-item :to="{name: 'home'}" exact>Home</b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </div>
    <div class="body">
      <router-view />
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      typeEnv: process.env.NODE_ENV,
      isProductionTip: process.env.NODE_ENV === 'production'
    };
  },
};
</script>

<style scoped>
</style>
