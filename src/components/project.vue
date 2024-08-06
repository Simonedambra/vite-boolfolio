<script>
import { store } from '../store';
  export default {
    name: 'Projects',
    
      data(){
        return{
            store
        }
      }
    }
  ;
  </script>
  <template>
    sòhsk
    
    <div  v-for="(project ,index) in this.store.projects":key="project.id">
        {{index.title}}      
    </div>
    
  </template>
  
  <style scoped>
  /* Stili CSS specifici per il componente Project (se necessario) */
  </style>