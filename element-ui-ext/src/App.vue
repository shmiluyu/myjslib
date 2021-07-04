<template>
  <div id="app">
    <el-row :gutter="10">
      <el-col :span="3">
        <div v-for="route in routers" :key="route.path">
          <router-link :to="{name:route.name}">{{ route.name }}</router-link>
        </div>
      </el-col>
      <el-col :span="21">
        <router-view />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { routes } from '@/router'
export default {
  name: 'App',
  data() {
    return {
      routers: routes
    }
  }
}
</script>

<style>

</style>
