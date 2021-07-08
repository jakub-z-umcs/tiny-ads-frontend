<template>
  <div class="flex flex-wrap">
    <div
      v-for="ad in ads"
      v-bind:key="ad.id"
      class="relative w-1/3 px-4 py-5 bg-white hover:bg-gray-50"
    >
      <div class="flex justify-between space-x-3">
        <div class="flex-1 min-w-0">
          <div class="block focus:outline-none">
            <div class="flex">
              <p class="text-sm font-medium text-gray-900 truncate">
                {{ ad.title }}
              </p>
              <p class="ml-2">
                <HeartFavourite />
              </p>
            </div>
            <p class="text-sm text-gray-500 truncate">
              ${{ centsToDolars(ad.priceInCents) }}
            </p>
          </div>
        </div>
        <time
          datetime="2021-01-27T16:35"
          class="flex-shrink-0 text-sm text-gray-500 whitespace-nowrap"
        ></time>
      </div>
      <div class="mt-1">
        <p class="text-sm text-gray-600 line-clamp-2">
          {{ ad.description }}
        </p>
      </div>
    </div>
  </div>
</template>


<script>
import HeartFavourite from "@/components/HeartFavourite.vue";

export default {
  name: "AdsList",
  props: ["ads"],
  components: {
    HeartFavourite,
  },

  methods: {
    centsToDolars(cents) {
      return (cents / 100).toFixed(2);
    },
  },
};
</script>
