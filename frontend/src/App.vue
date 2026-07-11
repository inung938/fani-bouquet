<template>
  <div class="min-h-screen flex flex-col bg-background text-on-surface">
    <Header />
    <main class="flex-grow">
      <router-view :socials="socials" />
    </main>
    <Footer :socials="socials" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

const socials = ref({
  instagram: 'https://instagram.com',
  whatsapp: 'https://wa.me/6282330602096'
});

const fetchConfig = async () => {
  try {
    const res = await fetch('/api/config');
    if (res.ok) {
      const data = await res.json();
      if (data.socials) {
        socials.value = data.socials;
      }
    }
  } catch (error) {
    console.error('Error fetching social media configuration:', error);
  }
};

onMounted(() => {
  fetchConfig();
});
</script>
