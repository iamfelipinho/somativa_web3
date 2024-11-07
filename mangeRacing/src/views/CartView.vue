<script setup lang="ts">
import { useCart } from '@/stores/cart';

const cart = useCart();
</script>

<template>
  <div class="cart-container">
    <h1 class="text-center mb-2">{{ $t('CART.TITLE') }}</h1>
    <table class="cart-table">
      <thead>
        <tr>
          <th>Item</th>
          <th>guidão</th>
          <th>motor</th>
          <th>roda da frente</th>
          <th>roda traseira</th>
          <th>Custo</th>    
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(robot, index) in cart.robots" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ robot.torso.id }} - {{ robot.torso.title }}</td>
          <td>{{ robot.base.id }} - {{ robot.base.title }}</td>
          <td>{{ robot.leftArm.id }} - {{ robot.leftArm.title }}</td> 
          <td>{{ robot.rightArm.id }} - {{ robot.rightArm.title }}</td> 
          <td>{{ robot.cost }}</td> 
          <td><button class="remove-button" @click="cart.removeRobot(index)">Excluir</button></td>
        </tr>
        <tr>
          <td colspan="5"><strong>Valor total:</strong></td>
          <td><strong>{{ cart.cost }}</strong></td>
          <td></td> <!-- Coluna vazia para alinhar o botão de exclusão -->
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped lang="scss">
.cart-container {
  padding: 2rem;
  background-color: #2b2b2b; /* Fundo cinza escuro */
  color: #ff6600; /* Laranja neon estilo Harley Davidson */
  min-height: 100vh; /* Altura mínima para preencher a tela */
}

.cart-title {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

.cart-table {
  width: 100%;
  border-collapse: collapse;
  margin: 0 auto; /* Centraliza a tabela */
  background-color: #1f1f1f; /* Fundo da tabela */
  color: #ff6600; /* Cor do texto */
}

.cart-table th, .cart-table td {
  padding: 1rem;
  text-align: left; /* Alinha o texto à esquerda */
  border-bottom: 1px solid #444; /* Borda inferior suave */
}

.cart-table th {
  background-color: #333; /* Fundo das cabeçalhos */
  font-weight: bold;
}

.cart-table tr:hover {
  background-color: #444; /* Fundo ao passar o mouse */
}

.remove-button {
  background-color: #ff3300; /* Botão de excluir */
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease; /* Efeito de transição ao passar o mouse */
}

.remove-button:hover {
  background-color: #ff6600; /* Cor ao passar o mouse */
}
</style>
