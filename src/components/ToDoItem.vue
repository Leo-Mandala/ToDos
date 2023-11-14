<template>
  <div :class="{'completed': todoItem.completed}">
    <p :style="{ color: todoItem.completed ? 'blue' : 'black' }">{{ todoItem.title }}</p>
    <button @click="markComplete">Fait</button>
    <button @click="deleteItem">Delete</button> <!-- Add a delete button -->
  </div>
</template>

<script>
export default {
  name: 'ToDoItem',
  props: ['todoItem'],
  methods: {
    markComplete() {
      this.todoItem.completed = !this.todoItem.completed; // Toggles the completed property
      this.$emit('toggle-complete', this.todoItem.id);
    },
    deleteItem() {
      console.log(this.todoItem.id);
      this.$emit('delete-item', this.todoItem.id); // Emit an event to delete the item
    }
  }
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
