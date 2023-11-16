<template>
  <div>
    <h1>Ma Liste de Tâches</h1>
    <ul>
      <li :key="item.id" v-for="(item, index) in localTodoEntries">
        <ToDoItem
          :key="item.id"
          :todoItem="item"
          @toggle-complete="toggleComplete"
          @delete-item="() => deleteItem(index)"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import ToDoItem from "./ToDoItem.vue";

export default {
  name: "ToDos",
  components: {
    ToDoItem,
  },
  props: ["todoEntries"],
  computed: {
    localTodoEntries: {
      get() {
        return this.todoEntries;
      },
      set(updatedTodoEntries) {
        this.$emit("update:todoEntries", updatedTodoEntries);
      },
    },
  },
  methods: {
    toggleComplete(itemId) {
      const updatedEntries = this.todoEntries.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      });
      this.localTodoEntries = updatedEntries;
    },
    deleteItem(index) {
      this.todoEntries.splice(index, 1);
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 24px;
  color: #673ab7; /* Purple color */
  margin-bottom: 10px;
}

ul {
  list-style: none;
  padding: 0;
}

/* Your other styles here */
</style>
