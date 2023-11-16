<template>
  <div :class="{ completed: todoItem.completed }">
    <p :style="{ color: todoItem.completed ? '#007bff' : 'black' }">
      {{ todoItem.title }}
    </p>
    <div>
      <button @click="markComplete">Fait</button>
      <button @click="deleteItem">Supprimer</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToDoItem",
  props: ["todoItem"],
  methods: {
    markComplete() {
      this.todoItem.completed = !this.todoItem.completed;
      this.$emit("toggle-complete", this.todoItem.id);
    },
    deleteItem() {
      this.$emit("delete-item", this.todoItem.id);
    },
  },
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}

div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}

button {
  padding: 6px 10px;
  font-size: 14px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
}

button:first-child {
  background-color: #17a2b8; /* Teal color */
  color: white;
  margin-right: 8px;
}

button:last-child {
  background-color: #dc3545; /* Red color */
  color: white;
}

button:hover {
  opacity: 0.8;
}

/* Your other styles here */
</style>
