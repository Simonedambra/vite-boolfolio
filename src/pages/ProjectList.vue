<script>

import axios, { Axios } from 'axios';
import projectcard from './projectcard.vue';

  export default {
    name: 'Projects',
    components:{
        projectcard
},
      data(){
        return{
            apiUrl:'http://127.0.0.1:8000/api/project',
            projects:[],
            response:{},
            correntpage:1,
            
        }
        

      },
      
      methods:{
        Prevpage(){
          console.log('prev')
          if (this.correntpage > 1){
            this.correntpage--;
            this.getprojects();
          }


        },
        Nextpage(){
          console.log('next')
          if (this.correntpage < 4){
            this.correntpage++;
            this.getprojects();
          }
          
        },
        
    getprojects() {
                axios.get(this.apiUrl, {params:{
                  page:this.correntpage
                }})
                    .then((response) => {
                      this.response=response.data.results
                      
                    })
                    .catch(error => {
                        console.error(error);
                    });
            },
    
    
      },
      created(){
        this.getprojects();
        
      }
        
      
    
}
  

  

  
  </script>
  <template>
    <div class="container d-flex py-5">
      <div class="col"v-for="project in response.data"> 

        <projectcard :title="project.title" :slug="project.slug"></projectcard>


      </div>
    </div>

    <!-- <div class="container d-flex gap-5 justify-content-center my-5">
      <div  v-for="">

        <div class="card" style="width: 18rem;">
    
          <div class="card-body">
            <h5 class="card-title">{{project.title}}</h5>
            
            
           <router-link :to="{ name: 'ProjectDetail', params: { slug} }" class="btn btn-primary">
dattaglio
</router-link>
          </div>
        </div>
      </div>
     
    </div>-->
    <div class="container">
      <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" @click="Prevpage()">Previous</a></li>
    
    <li class="page-item"><a class="page-link" @click="Nextpage()">Next</a></li>
  </ul>
</nav>
    </div>
  </template>
  
  <style scoped>
  /* Stili CSS specifici per il componente Project (se necessario) */
  </style>