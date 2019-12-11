const MainTemplate = 
`
  <div id="wrapper">
    <router-view :key="$route.fullPath"></router-view>
  </div>
`

export { MainTemplate }