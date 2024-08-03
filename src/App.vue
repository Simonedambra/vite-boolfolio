<script>
import axios, { Axios } from 'axios';

export default{
  title:'projects',
  url:'http://127.0.0.1:8000/api/project',
  data(){
return {
  
}
  },
  methods:{
getprojects(){
  const result= axios.get(url).then(Response =>{
    console.log(Response)
  })
}

  },
  created(){
    this.getprojects();
  }

};
</script> 
<template>
  <h1>Vue Vite Template</h1>
  <p>Template di partenza per progetti Vite Vue</p>
</template>
<!-- <style></style> -->
