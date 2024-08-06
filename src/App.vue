<script>
import axios, { Axios } from 'axios';
import projects from './components/project.vue';
import { store } from './store';
export default{
  title:'project_app',
  components: {
    projects  // Registra il componente Project
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
                  console.log(response.data)
                    this.store.projects= response.data
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
  <h1>Vue Vite Template</h1>
  
  <projects></projects>
  <p>Template di partenza per progetti Vite Vue</p>
</template>
<!-- <style></style> -->
