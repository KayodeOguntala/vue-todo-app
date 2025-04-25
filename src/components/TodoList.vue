<template>
    <div class="todo-list">
        <p v-if="isLoading">Loading todos...</p>
        <p v-if="error">Error: {{ error }}</p>
        <p v-if="filteredTodos.length === 0">No todos found.</p>

        <input type="text" placeholder="Search todos..." v-model="search" />
        <select v-model="filter">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
        </select>

        <ul class="paginated-todo">
            <li v-for="todo in paginatedTodos" :key="todo.id">
                <router-link :to="`/todo/${todo.id}`">{{ todo.title }}</router-link>
            </li>
        </ul>

        <Pagination :current-page="currentPage" @update:current-page="currentPage = $event"
            :total-items="filteredTodos.length" :items-per-page="ITEMS_PER_PAGE" />
    </div>
</template>

<script>
import { fetchTodos } from '../utils/Api';
import Pagination from './Pagination.vue';

export default {
    components: {
        Pagination
    },
    data() {
        return {
            todos: [],
            isLoading: false,
            error: null,
            currentPage: 1,
            search: '',
            filter: 'all',
            ITEMS_PER_PAGE: 10,
            MAX_PAGE_LINKS: 10
        };
    },
    computed: {
        filteredTodos() {
            return this.todos
                .filter(todo =>
                    todo.title.toLowerCase().includes(this.search.toLowerCase())
                )
                .filter(todo =>
                    this.filter === 'all' ? true :
                        todo.completed === (this.filter === 'completed')
                );
        },
        paginatedTodos() {
            const start = (this.currentPage - 1) * this.ITEMS_PER_PAGE;
            const end = this.currentPage * this.ITEMS_PER_PAGE;
            return this.filteredTodos.slice(start, end);
        }
    },
    async created() {
        try {
            this.isLoading = true;
            const data = await fetchTodos();
            this.todos = data;
        } catch (err) {
            this.error = err.message;
        } finally {
            this.isLoading = false;
        }
    }
};
</script>

<style src="./TodoList.css" scoped></style>