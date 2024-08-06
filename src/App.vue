<script>
import axios, { Axios } from 'axios';

import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import ProjectList from './pages/ProjectList.vue';
import { store } from './store';
export default{
  title:'project_app',
  components: {
    AppHeader,
    AppFooter,
    ProjectList
      
  },
  data(){
return {
 
  store,
  projects:[]
}
  },
  methods:{
getprojects() {
            axios.get(this.store.apiUrl)
                .then((response) => {
                  this.store.projects = response.data.results;
                  console.log(this.store.projects);
                })
                .catch(error => {
                    console.error(error);
                });
        },


  },
  created(){
    this.getprojects();
    
  }

};
</script> 
<template>
  <AppHeader></AppHeader>
  
  <ProjectList></ProjectList>
 
  <AppFooter></AppFooter>
</template>
<!-- <style></style> -->
