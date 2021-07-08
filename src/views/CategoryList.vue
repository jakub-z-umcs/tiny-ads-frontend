<template>
  <div class="container mx-auto">
    <div>
      <Categories />
    </div>

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
  name: "CategoryList",
  components: {
    Categories,
    AdsList,
  },
  data: function () {
    return {
      ads: [],
    };
  },

  watch: {
    // call again the method if the route changes
    $route: "fetchData",
  },

  methods: {
    fetchData() {
      axios
        .get("/categories/" + this.$route.params.id)
        .then((response) => (this.ads = response.data));
    },
  },

  mounted() {
    this.fetchData();
  },
};
</script>