<template>
  <div class="container mx-auto">
    <h1 class="text-2xl mt-6 text-center text-gray-600">Your Favourites</h1>
    <div class="mt-4">
      <AdsList :ads="ads" />
    </div>
  </div>
</template>


<script>
import axios from "axios";
import AdsList from "@/components/AdsList.vue";

export default {
  name: "Ads",
  components: {
    AdsList,
  },
  data: function () {
    return {
      ads: [],
    };
  },

  mounted() {
    axios.get("/favourites").then((response) => (this.ads = response.data));
  },
};
</script>