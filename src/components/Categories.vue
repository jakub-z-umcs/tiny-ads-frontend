<template>
  <div class="">
    <div class="py-12 mx-auto max-w-7xl lg:py-16">
      <p
        class="text-3xl font-extrabold tracking-wider text-center text-gray-900 uppercase "
      >
        Categories
      </p>

      <div class="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-5 lg:mt-8">
        <router-link
          :to="`/categories/${category.id}`"
          v-for="category in categories"
          v-bind:key="category.id"
          class="flex justify-center col-span-1 px-2 py-4 text-gray-600  bg-gray-50 hover:bg-indigo-50 hover:text-indigo-600"
        >
          <h2 class="text-xl">{{ category.name }}</h2>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Categories",
  data: function () {
    return {
      categories: [],
    };
  },
  mounted() {
    axios
      .get("/categories")
      .then((response) => (this.categories = response.data));
  },
};
</script>
