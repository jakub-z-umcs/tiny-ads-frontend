<template>
  <div class="flex flex-wrap">
    <div
      v-for="ad in ads"
      v-bind:key="ad.id"
      class="
        w-1/3
        relative
        bg-white
        py-5
        px-4
        hover:bg-gray-50
        focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600
      "
    >
      <div class="flex justify-between space-x-3">
        <div class="min-w-0 flex-1">
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
          class="flex-shrink-0 whitespace-nowrap text-sm text-gray-500"
          >1d ago</time
        >
      </div>
      <div class="mt-1">
        <p class="line-clamp-2 text-sm text-gray-600">
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
