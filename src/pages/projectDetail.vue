<script>

import axios, { Axios } from 'axios';

  export default {
    name: 'ProjectsDetail',
    
    data(){
        return{
            apiUrl:'http://127.0.0.1:8000/api/project',
            
            project:[],  
        }
      

  
      },
      methods:{
        getproject(){
           const url=this.apiUrl+'/'+this.$route.params.slug
          // console.log(url)
          // console.log(this.apiUrl)
          axios.get(url)
                    .then((response) => {
                      this.project=response.data.result
                      console.log(this.project)
                      
                    })
                    .catch(error => {
                        console.error(error);
                    });
        }
       

       },
       created(){
        this.getproject();
      }
    }
   
  
  </script>
  <template>
    <div class="container my-5">
        <h1>{{ this.project.title }}</h1>
        <router-link :to="{ name: 'projects' }" class="nav-link"> Torna ai progetti</router-link>
    </div>
    
  </template>
  
  <style scoped>
  /* Stili CSS specifici per il componente Project (se necessario) */
  </style>