<template>
  <div class="container mx-auto">
    <form class="space-y-8 divide-gray-200 max-w-3xl mx-auto">
      <div class="space-y-8 divide-gray-200">
        <div>
          <div>
            <h3 class="text-lg leading-6 font-medium text-gray-900 mt-4">
              Add new ad
            </h3>
            <p class="mt-1 text-sm text-gray-500">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>

          <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div class="sm:col-span-4">
              <label
                for="username"
                class="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <div class="mt-1 flex rounded-md shadow-sm">
                <input
                  type="text"
                  name="username"
                  id="username"
                  autocomplete="username"
                  class="
                    flex-1
                    focus:ring-indigo-500
                    focus:border-indigo-500
                    block
                    w-full
                    min-w-0
                    rounded-md
                    sm:text-sm
                    border-gray-300
                  "
                />
              </div>
            </div>

            <div class="sm:col-span-4">
              <label
                for="price"
                class="block text-sm font-medium text-gray-700"
              >
                Price
              </label>
              <div class="mt-1 flex rounded-md shadow-sm">
                <input
                  type="text"
                  name="price"
                  id="price"
                  autocomplete="price"
                  class="
                    flex-1
                    focus:ring-indigo-500
                    focus:border-indigo-500
                    block
                    w-full
                    min-w-0
                    rounded-md
                    sm:text-sm
                    border-gray-300
                  "
                />
              </div>
            </div>

            <div class="sm:col-span-6">
              <label
                for="description"
                class="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <div class="mt-1">
                <textarea
                  id="description"
                  name="description"
                  rows="3"
                  class="
                    shadow-sm
                    focus:ring-indigo-500
                    focus:border-indigo-500
                    block
                    w-full
                    sm:text-sm
                    border border-gray-300
                    rounded-md
                  "
                ></textarea>
              </div>
            </div>

            <div class="sm:col-span-6">
              <label
                for="description"
                class="block text-sm font-medium text-gray-700"
              >
                Category
              </label>
              <multiselect
                class="w-full mt-1"
                v-model="selectedCategories"
                :options="availableCategories"
                :multiple="true"
                label="name"
                track-by="name"
              >
              </multiselect>
            </div>
          </div>
        </div>
      </div>

      <div class="">
        <div class="flex justify-end">
          <button
            type="button"
            class="
              bg-white
              py-2
              px-4
              border border-gray-300
              rounded-md
              shadow-sm
              text-sm
              font-medium
              text-gray-700
              hover:bg-gray-50
              focus:outline-none
              focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
            "
          >
            Cancel
          </button>
          <button
            type="submit"
            class="
              ml-3
              inline-flex
              justify-center
              py-2
              px-4
              border border-transparent
              shadow-sm
              text-sm
              font-medium
              rounded-md
              text-white
              bg-indigo-600
              hover:bg-indigo-700
              focus:outline-none
              focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
            "
          >
            Save
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
import axios from "axios";

export default {
  name: "NewAd",
  components: {
    Multiselect,
  },
  data: function () {
    return {
      selectedCategories: [],
      availableCategories: [],
    };
  },

  mounted() {
    axios
      .get("/categories")
      .then((response) => (this.availableCategories = response.data));
  },
};
</script>
