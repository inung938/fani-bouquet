<template>
  <footer class="w-full mt-auto bg-surface-container-low dark:bg-surface-container-lowest">
    <div class="flex flex-col md:flex-row justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-12 gap-8 max-w-container-max mx-auto">
      <div class="flex flex-col items-center md:items-start gap-4">
        <div class="font-headline-sm text-headline-sm text-primary">Fani Bouquet</div>
        <p class="font-label-md text-label-md text-on-secondary-container max-w-xs text-center md:text-left">
          © 2026 Fani Bouquet. Curating nature's finest moments.
        </p>
      </div>
      <div class="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4">
        <a 
          v-for="(url, name) in socials" 
          :key="name"
          :href="url" 
          target="_blank" 
          rel="noopener noreferrer"
          class="font-label-md text-label-md text-on-secondary-container hover:text-primary transition-colors underline-offset-4 hover:underline capitalize"
        >
          {{ name }}
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
defineProps({
  socials: {
    type: Object,
    default: () => ({
      instagram: '#',
      tiktok: '#',
      whatsapp: '#'
    })
  }
});
</script>
