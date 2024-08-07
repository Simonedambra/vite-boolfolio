<script>
export default{
name:'projectcard',
props:{
title:String,
slug:String
}
}
</script>
<template>
    <div class="card" style="width: 18rem;">
  
  <div class="card-body">
    <h5 class="card-title">{{title}}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <router-link :to="{ name: 'Detail', params: { slug } }" class="btn btn-primary">
dattaglio
</router-link>
  </div>
</div>
</template>