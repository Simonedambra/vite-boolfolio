<script>


import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import ProjectList from './pages/ProjectList.vue';

export default{
  title:'project_app',
  components: {
    AppHeader,
    AppFooter,
    ProjectList
      
  },
  data(){
return {
 
  
  
}

}
}
</script> 
<template>
  <AppHeader></AppHeader>
  
  <router-view></router-view>
 
  <AppFooter></AppFooter>
</template>
<!-- <style></style> -->
