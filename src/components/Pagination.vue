<template>
  <div class="pagination">
    <button
      :disabled="currentPage === 1"
      @click="handlePageChange(currentPage - 1)"
      aria-label="Previous Page"
    >
      Previous
    </button>

    <button
      v-for="page in totalPages"
      :key="page"
      @click="handlePageChange(page)"
      :class="['page-button', { active: page === currentPage }]"
      :aria-label="`Go to Page ${page}`"
    >
      {{ page }}
    </button>

    <button
      :disabled="currentPage === totalPages"
      @click="handlePageChange(currentPage + 1)"
      aria-label="Next Page"
    >
      Next
    </button>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    totalItems: {
      type: Number,
      required: true
    },
    itemsPerPage: {
      type: Number,
      default: 10
    }
  },
  emits: ['update:currentPage'],
  computed: {
    totalPages() {
      return Math.ceil(this.totalItems / this.itemsPerPage)
    }
  },
  methods: {
    handlePageChange(pageNumber) {
      this.$emit('update:currentPage', pageNumber)
    }
  }
}
</script>
<style src="./Pagination.css" scoped></style>
