import { ItemCart } from "@/models/Cart";
import { defineStore } from "pinia";

export const useCart = defineStore('cart', {
  state: () => ({
    robots: [] as Array<ItemCart>, 
  }),
  getters: {
    cost(state) {
      return state.robots.reduce((total, robot) => total + robot.cost, 0);
    },
  },
  actions: {
    addMoto(robot) {
      this.robots.push(robot);
    },
    removeRobot(index) {
      this.robots.splice(index, 1);
    },
  },
});

