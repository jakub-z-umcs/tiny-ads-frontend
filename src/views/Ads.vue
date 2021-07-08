<template>
  <div class="container mx-auto">
    <div>
      <Categories />
    </div>

    <router-link
      to="/ads/new"
      class="
        inline-flex
        items-center
        px-4
        py-2
        ml-3
        border border-transparent
        text-sm
        font-medium
        rounded-md
        shadow-sm
        text-white
        bg-indigo-600
        hover:bg-indigo-700
        focus:outline-none
        focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
      "
    >
      Add new ad
    </router-link>

    <div class="mt-4">
      <AdsList :ads="ads" />
    </div>
  </div>
</template>


<script>
import Categories from "@/components/Categories.vue";
import axios from "axios";
import AdsList from "@/components/AdsList.vue";

export default {
  name: "Ads",
  components: {
    Categories,
    AdsList,
  },
  data: function () {
    return {
      ads: [],
    };
  },

  mounted() {
    axios.get("/ads").then((response) => (this.ads = response.data));
  },
};
</script>