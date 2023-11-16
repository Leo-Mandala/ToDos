<template>
  <div>
    <form @submit="addToDo">
      <input type="text" v-model="title" name="title" placeholder="Nouvelle tâche">
      <button type="submit">Ajouter</button>
    </form>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";

export default {
  name: "AddToDoButton",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    addToDo(event) {
      event.preventDefault();

      const newToDoObject = {
        id: uuidv4(),
        title: this.title,
        completed: false,
      };

      this.$emit("add-todo-event", newToDoObject);
      this.title = "";
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  margin-bottom: 20px;
}

input {
  flex: 1;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
}

button:hover {
  background-color: #218838;
}

</style>
