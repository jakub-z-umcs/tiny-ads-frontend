<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <!-- This example requires Tailwind CSS v2.0+ -->
  <nav class="bg-gray-200 shadow-md z-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <img
              class="block lg:hidden h-8 w-auto"
              src="https://i.imgur.com/sljHSAD.png"
              alt="Workflow"
            />
            <img
              class="hidden lg:block h-8 w-auto"
              src="https://i.imgur.com/sljHSAD.png"
              alt="Workflow"
            />
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
            <router-link
              to="/ads"
              class="
                border-transparent
                text-gray-500
                hover:border-gray-300
                hover:text-gray-700
                inline-flex
                items-center
                px-1
                pt-1
                border-b-2
                text-sm
                font-medium
              "
            >
              Ads
            </router-link>
            <router-link
              to="/favourites"
              class="
                border-transparent
                text-gray-500
                hover:border-gray-300
                hover:text-gray-700
                inline-flex
                items-center
                px-1
                pt-1
                border-b-2
                text-sm
                font-medium
              "
            >
              Favourites
            </router-link>
            <router-link
              to="/login"
              class="
                border-transparent
                text-gray-500
                hover:border-gray-300
                hover:text-gray-700
                inline-flex
                items-center
                px-1
                pt-1
                border-b-2
                text-sm
                font-medium
              "
            >
              Login
            </router-link>
            <router-link
              to="/register"
              class="
                border-transparent
                text-gray-500
                hover:border-gray-300
                hover:text-gray-700
                inline-flex
                items-center
                px-1
                pt-1
                border-b-2
                text-sm
                font-medium
              "
            >
              Register
            </router-link>
          </div>
        </div>
        <div class="hidden sm:ml-6 sm:flex sm:items-center"></div>
        <div class="-mr-2 flex items-center sm:hidden">
          <!-- Mobile menu button -->
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from "axios";

export default {
  name: "Navbar",
  props: {
    msg: String,
  },

  data() {
    return {};
  },

  methods: {
    logout() {
      axios.get("/auth/logout").then((response) => {
        if (response.status == 200) {
          this.$router.push("/login");
        }
      });
    },
  },
};
</script>