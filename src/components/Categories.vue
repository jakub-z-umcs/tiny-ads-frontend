<template>
  <div class="">
    <div class="max-w-7xl mx-auto py-12 lg:py-16">
      <p
        class="
          text-center text-base
          font-semibold
          uppercase
          text-gray-600
          tracking-wider
        "
      >
        Categories
      </p>

      <div class="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-5 lg:mt-8">
        <router-link
          :to="`/categories/${category.id}`"
          v-for="category in categories"
          v-bind:key="category.id"
          class="
            col-span-1
            flex
            justify-center
            py-4
            px-2
            bg-gray-50
            text-gray-600
            hover:bg-indigo-50
            hover:text-indigo-600
          "
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
