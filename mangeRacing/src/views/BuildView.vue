<script setup lang="ts">
import { PartsResponse, type PartsResponseType, Part } from '@/models/Parts';
import { getParts } from '@/services/part.service';
import { type Ref, ref, reactive } from 'vue';
import PartSelector from '@/components/PartSelector.vue';
import { ItemCart } from '@/models/Cart';
import { useCart } from '@/stores/cart';

const cart = useCart();

const availableParts: Ref<PartsResponse> = ref(new PartsResponse());
const itemCart = new ItemCart();  
const selectedParts = reactive<ItemCart>(itemCart);

getParts()
    .then(parts => {
        availableParts.value = parts;
        const { heads, arms, torsos, bases } = parts;

        selectedParts.head = heads[0];
        selectedParts.leftArm = arms[0];
        selectedParts.rightArm = arms[0];
        selectedParts.torso = torsos[0];
        selectedParts.base = bases[0];
    })
    .catch(error => console.error(error));

// Função para adicionar ao carrinho
const addCart = () => {
    console.log("Adicionado no carrinho os seguintes itens:");
    console.log("Parts: ", selectedParts); 

    selectedParts.updateCost();
    cart.addMoto(selectedParts);
};
</script>

<template>
    <div class="container">
        <h1 class="text-center mb-2">{{ $t('BUILD.TITLE') }}</h1> 

        <!-- Estrutura em grade para seleção de partes -->
        <div class="grid">
            <!-- Quadrado superior esquerdo -->
            <div class="guidao">
                <PartSelector
                    :parts="availableParts.heads"
                    position="top-left"
                    v-model="selectedParts.head"
                    class="grid-item"
                />
            </div>
            <!-- Quadrado superior direito -->
            <div class="rodaF">
                <PartSelector
                    :parts="availableParts.torsos"
                    position="top-right"
                    v-model="selectedParts.torso"
                    class="grid-item"
                />
            </div>
            <!-- Quadrado inferior esquerdo -->
            <div class="motor">
                <PartSelector
                    :parts="availableParts.arms"
                    position="bottom-left"
                    v-model="selectedParts.leftArm"
                    class="grid-item"
                />
            </div>
            <!-- Quadrado inferior direito -->
            <div class="rodaT">
                <PartSelector
                    :parts="availableParts.arms"
                    position="bottom-right"
                    v-model="selectedParts.rightArm"
                    class="grid-item"
                />
            </div>
        </div>

        <!-- Botão para adicionar ao carrinho -->
        <div class="addCart flex flex-row align-items-center justify-content-center">
            <button @click="addCart" id="add-cart" class="mt-4 app-dark-button">
                {{ $t('BUILD.ADD_CART') }}
            </button>
        </div>       
    </div>
</template>

<style scoped lang="scss">
.container {
    max-width: 800px;
    margin: auto;
}

#add-cart {
    padding: 0.5rem 1rem;
}

.grid {
    align-items: center;
    position: absolute;
}

.rodaT {
    position: relative;
    margin-top: 16rem;
    right: -1rem;
}

.motor {
    position: relative;
    margin-top: 16rem;
    right: 2rem;
}

.rodaF {
    position: relative;
    margin-top: 16rem;
    right: 5rem;
}

.guidao {
    position: relative;
    left: 9rem;
    margin-bottom: 5rem;
}

/* Estilização das setas */
.grid-item {
    position: relative; // Garante que o z-index funcione
    z-index: 2; // Coloca os botões na frente
    opacity: 0.85; // Deixa os botões um pouco mais transparentes
    transition: opacity 0.7s; // Adiciona uma transição suave

    &:hover {
        opacity: 1; // Opacidade total ao passar o mouse
    }

    .arrow {
        position: absolute;
        width: 50%;
        height: 6px;
        background-color: #ff7236;
    }

    .arrow.top {
        top: -6px; /* Posiciona na parte superior */
        left: 25%; /* Centraliza */
        transform: rotate(0deg);
    }

    .arrow.bottom {
        bottom: -6px; /* Posiciona na parte inferior */
        left: 25%; /* Centraliza */
        transform: rotate(180deg);
    }
}

/* Garante que os quadrados da grade tenham z-index menor */
.grid > div {
    position: relative;
    z-index: 1;
}

.addCart {
    margin-top: 28rem;
}

</style>
