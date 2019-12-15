const MainTemplate = 
`
  <div id="wrapper" v-bind:class="{ toggled: toggled }">
    <router-view :key="$route.fullPath"></router-view>
  </div>
`

export { MainTemplate }