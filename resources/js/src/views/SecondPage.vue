<template>
  <div>
    <h5>This is a second page</h5>
    <router-link to="/">Home</router-link>
    {{ name }}
  </div>
</template>

<script>

export default {
    name: 'SecondPage',
    data(){
        return{
            name: 'Srdjan Kordic'
        }
    }
}
</script>