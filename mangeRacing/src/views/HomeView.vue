<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
 <div class="flex flex-row align-items-center justify-content-evenly content-container">
  <section class="flex flex-column align-items-start text-section">
    <h1>{{ $t('HOME.TITLE') }}</h1>
    <button id="order" @click="router.push('/build')" 
    class="mt-4 app-dark-button">{{ $t('HOME.ORDER') }}</button>
  </section>
  <img src="../assets/images/harley.png" alt="Harley" class="harley-image"/>
 </div>
</template>

<style scoped lang="scss">
.content-container {
  padding: 2rem;
  width: 100%;
}

.text-section {
  flex: 1;
  text-align: left;
  margin-right: 2rem;
  
  h1 {
    font-size: 5rem;
    width: 25rem;
    text-align: left;
    margin-bottom: 1rem;
    margin-left: 19rem;

    // #order {
    //     height: 3.2rem;
    //     width: 20rem;
    //     border-radius: 1rem;
    //     align-self: center; 
    // }
  }

  #order {
    height: 3.2rem;
    width: 20rem;    
    border-radius: 2.5rem;  
    margin-left: 19rem;  
    // align-self: center;
  }
}

.harley-image {
  flex: 1;
  max-width: 33%;
//   height: auto;
  object-fit: cover;
  margin-right: 15rem;
}
</style>
