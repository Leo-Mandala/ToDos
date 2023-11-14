<script>
import { v4 as uuidv4 } from 'uuid';

export default {
  name: 'AddToDoButton',
  data() {
    return {
      title: ''
    }
  },
  methods: {
    addToDo(event) {
      event.preventDefault();

      const newToDoObject = {
        id: uuidv4(),
        title: this.title,
        completed: false
      };

      this.$emit("add-todo-event", newToDoObject); 
      this.title = '';
    },
  }
}
</script>

<template>
  <div>
    <form @submit="addToDo">
      <input type="text" v-model="title" name="title">
      <button type="submit">Ajouter</button>
    </form>
  </div>
</template>

<style>
/* Your styles here */
</style>
