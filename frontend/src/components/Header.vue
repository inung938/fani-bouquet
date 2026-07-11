<template>
  <header class="w-full top-0 sticky z-50 bg-background/80 backdrop-blur-md border-b border-surface-container-high/50">
    <nav class="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
      <router-link to="/" class="flex items-center gap-3 hover:opacity-90 transition-opacity group">
        <div class="relative flex-shrink-0">
          <img src="/logo.png" alt="Fani Bouquet Logo" 
            class="h-10 w-10 object-cover rounded-full ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all duration-300 shadow-md" />
        </div>
        <div class="flex flex-col leading-tight">
          <span class="font-display-lg text-[18px] md:text-[20px] text-primary font-semibold tracking-tight">
            Fani Bouquet
          </span>
          <span class="text-[10px] text-on-surface-variant tracking-widest uppercase hidden md:block">Floral Studio</span>
        </div>
      </router-link>
      
      <!-- Desktop Links -->
      <div class="hidden md:flex gap-8 items-center">
        <router-link to="/#gallery" class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">
          Gallery
        </router-link>
        <router-link to="/#story" class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">
          Story
        </router-link>
        <router-link 
          to="/catalog" 
          class="font-body-md text-body-md transition-colors"
          :class="isCatalogPage ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'"
        >
          Catalog
        </router-link>
        <!-- <router-link to="/#reviews" class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">
          Reviews
        </router-link> -->
      </div>

      <div class="hidden md:block">
        <router-link to="/catalog" class="inline-block bg-primary text-on-primary font-label-md text-label-md px-6 py-3 rounded-full hover:bg-primary/90 hover:scale-95 transition-all shadow-sm">
          Shop Now
        </router-link>
      </div>

      <!-- Mobile Menu Toggle Button -->
      <button 
        @click="toggleMobileMenu" 
        class="md:hidden p-2 text-on-surface-variant hover:text-primary focus:outline-none"
        aria-label="Toggle menu"
      >
        <span class="material-symbols-outlined text-3xl">
          {{ isMobileMenuOpen ? 'close' : 'menu' }}
        </span>
      </button>
    </nav>

    <!-- Mobile Navigation Drawer -->
    <transition name="slide">
      <div v-if="isMobileMenuOpen" class="md:hidden bg-background border-t border-surface-container-high px-margin-mobile py-6 space-y-4 shadow-lg absolute w-full left-0 z-40">
        <router-link 
          to="/#gallery" 
          @click="closeMobileMenu"
          class="block font-body-md text-body-lg text-on-surface-variant hover:text-primary transition-colors py-2 border-b border-surface-container/50"
        >
          Gallery
        </router-link>
        <router-link 
          to="/#story" 
          @click="closeMobileMenu"
          class="block font-body-md text-body-lg text-on-surface-variant hover:text-primary transition-colors py-2 border-b border-surface-container/50"
        >
          Story
        </router-link>
        <router-link 
          to="/catalog" 
          @click="closeMobileMenu"
          class="block font-body-md text-body-lg py-2 border-b border-surface-container/50 transition-colors"
          :class="isCatalogPage ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'"
        >
          Catalog
        </router-link>
        <!-- <router-link 
          to="/#reviews" 
          @click="closeMobileMenu"
          class="block font-body-md text-body-lg text-on-surface-variant hover:text-primary transition-colors py-2 border-b border-surface-container/50"
        >
          Reviews
        </router-link> -->
        <div class="pt-4">
          <router-link 
            to="/catalog" 
            @click="closeMobileMenu"
            class="block text-center bg-primary text-on-primary font-label-md text-label-md px-6 py-3 rounded-full hover:bg-primary/90 transition-all shadow-sm"
          >
            Shop Now
          </router-link>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isMobileMenuOpen = ref(false);

const isCatalogPage = computed(() => route.path === '/catalog');

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};
</script>

<style scoped>
.slide-enter-active, .slide-leave-active {
  transition: all 0.3s ease-out;
}
.slide-enter-from, .slide-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
