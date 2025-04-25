<template>
  <div v-if="isOpen" class="modal" role="dialog" aria-labelledby="modal-title">
    <div class="modal-content">
      <button class="close" @click="closeModal" aria-label="Close Modal">
        ×
      </button>
      <h2 id="modal-title">Create Todo</h2>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      <form @submit.prevent="handleSubmit">
        <input
          type="text"
          name="title"
          v-model="formData.title"
          placeholder="Todo Title"
          required
        />
        <textarea
          name="description"
          v-model="formData.description"
          placeholder="Todo Description"
        />
        <button type="submit">Save</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    isOpen: {
      type: Boolean,
      required: true
    },
    initialData: {
      type: Object,
      default: () => ({})
    },
    errorMessage: {
      type: String,
      default: ''
    }
  },
  emits: ['closeModal', 'submit'],
  data() {
    return {
      formData: { ...this.initialData }
    }
  },
  watch: {
    initialData: {
      handler(newVal) {
        this.formData = { ...newVal }
      },
      deep: true
    }
  },
  methods: {
    handleSubmit() {
      this.$emit('submit', this.formData)
    },
    closeModal() {
      this.$emit('closeModal')
    }
  }
}
</script>

<style src="./Modal.css" scoped></style>