<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import FooterBot from '@/components/FooterBot.vue'
import Menu from './components/Menu.vue';
</script>

<template>
  <main id="card-app">
    <nav class="navbar">
      <div class="nav-links">
        <RouterLink to="/">
          <img src="@/assets/images/logoHarley.png" alt="Logo Harley" class="logo" />
        </RouterLink>
        <RouterLink class="m-4" to="/build">Build</RouterLink>
        <RouterLink class="m-4" to="/cart">Cart</RouterLink>  
      </div>
      <span class="title">MANGE RACING</span>
    </nav>
    <div id="content-app">
      <Menu />
      <RouterView />
    </div>
  </main>
</template>

<style scoped lang="scss">
#card-app {
  height: 100%;
  width: 100%;
  background-color: #2b2b2b; // Cinza escuro
  color: #ff6600; // Laranja neon estilo Harley Davidson
  font-family: 'Staatliches', sans-serif; // Fonte Staatliches
  font-size: 1.2rem; // Aumentando o tamanho padrão
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: #1f1f1f;
  color: #ff6600;

  .nav-links {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    .logo {
      height: 3rem;
      margin-left: 1rem;
    }

    a {
      color: #ff6600;
      text-decoration: none;
      font-weight: bold;
      font-size: 1.5rem; // Aumentando o tamanho dos links

      &:hover {
        color: #ff3300;
      }
    }
  }

  .title {
    font-size: 2.4rem; // Aumentando o tamanho do título
    font-weight: bold;
    margin-right: 2 rem;
  }
}

#content-app {
  padding: 2rem;
}

.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10rem;
  background-color: #000000;

  .footer-bots {
    display: flex;
    justify-content: space-evenly;
    width: 80%;
  }
}
</style>
