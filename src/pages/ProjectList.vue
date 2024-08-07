<script>
import { store } from '../store';
import axios, { Axios } from 'axios';

  export default {
    name: 'Projects',
    
      data(){
        return{
            store,
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
                axios.get(this.store.apiUrl, {params:{
                  page:this.correntpage
                }})
                    .then((response) => {
                      this.store.projects = response.data.results.data;
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
        
      
    
}
  

  

  
  </script>
  <template>
    <div class="container d-flex gap-5 justify-content-center my-5">
      <div  v-for="project in this.store.projects":key="project.id">

        <div class="card" style="width: 18rem;">
    
          <div class="card-body">
            <h5 class="card-title">{{project.title}}</h5>
            
            
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
     
    </div>
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