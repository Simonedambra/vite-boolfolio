<script>
import { store } from '../store';

  export default {
    name: 'Projects',
    
      data(){
        return{
            store
        }
      },
      
    
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
    
    </div>
  </template>
  
  <style scoped>
  /* Stili CSS specifici per il componente Project (se necessario) */
  </style>