<script>
import { RouterLink, RouterView } from 'vue-router';
import ToDos from './components/ToDos.vue';
import AddToDoButton from './components/AddToDoButton.vue';


export default {
  name: 'App',
  components: {
    ToDos,
    AddToDoButton,
  },
  data() {
    return { 
      todoEntries: [
        {
          id: 1,
          title: 'faire la vaiselle -_-',
          completed: false
        },
        {
          id: 2,
          title: 'jouer a Cyberpunk2077 :D',
          completed: false
        },
        {
          id: 3,
          title: 'code ? :D',
          completed: false
        }
      ]
    };
  },
  methods: {
    addToDoItem(newToDoItem) {
      this.todoEntries.push(newToDoItem); // Corrected the logic to add the new item to the list
    }
  }
};
</script>

<template>
  <div id="app">
    <ToDos v-bind:todoEntries="todoEntries" />
    <AddToDoButton @add-todo-event="addToDoItem" />
  </div>
</template>

<style>
/* Your styles here */
</style>
