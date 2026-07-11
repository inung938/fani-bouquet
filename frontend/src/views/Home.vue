<template>
  <div>
    <!-- Hero Section -->
    <section class="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 hero-gradient z-10"></div>
        <img alt="Fani Bouquet Floral Shop" class="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsub9dD1gtWlcs-Sdsbpehj8VI-k2-IBrAYiAZYBUCJBrDBatunRVp9L-yxu_qgt5xi8E-Nj9IeZ_UnKVpdyzDeOcwCWi0OlJdM1UAmmSj6qQf0I7VvEDQjV35rzNIidjzckORz5wWWAy506C3uqF_aO_cPTG4ax4CcL-ZM1msEV0D9-oodwVD4QCncjVbzVwbyM3g78yywP3xhvzfgxN9XUC6Ui-3B0LzEBbYlr-i_ags6KMzh00HUlMYNl1bOqnsJLi6RT4tlec" />
      </div>
      <!-- Content -->
      <div class="relative z-20 text-center px-margin-mobile max-w-4xl mx-auto flex flex-col items-center">
        <h1 class="font-display-lg text-[44px] md:text-[80px] leading-tight text-white drop-shadow-lg mb-4">
          Fani Bouquet
        </h1>
        <p class="font-headline-md text-white/90 italic mb-6">
          Sentuhan Keindahan dalam Setiap Ikatan
        </p>
        <p class="font-body-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Kami mengkurasi momen-momen terbaik alam ke dalam buket bunga yang elegan untuk setiap perayaan spesial Anda.
        </p>
        <router-link to="/catalog" class="inline-flex items-center gap-2 bg-white text-primary font-label-md text-label-md px-10 py-5 rounded-full hover:bg-secondary-container transition-all hover:scale-105 shadow-xl group">
          Lihat Katalog
          <span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </router-link>
      </div>
    </section>

    <!-- Aesthetic Stats/Features Section (Asymmetric) -->
    <section id="story" class="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto overflow-hidden">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
        <div class="md:col-span-5 relative">
          <div class="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl relative">
            <img class="w-full h-full object-cover"
              alt="A beautiful bouquet with peonies and eucalyptus leaves"
              src="/gallery-0.png" />
          </div>
          <!-- Overlapping Decorative Element -->
          <div class="absolute -bottom-8 -right-8 w-48 h-48 bg-tertiary-container rounded-full mix-blend-multiply opacity-30 blur-3xl"></div>
        </div>
        <div class="md:col-span-7 md:pl-16 space-y-8 mt-12 md:mt-0">
          <span class="font-label-md text-label-md uppercase tracking-[0.2em] text-primary">Filosofi Kami</span>
          <h2 class="font-headline-md text-[40px] leading-tight text-on-surface">Kualitas yang Berakar pada Kesempurnaan Alam</h2>
          <p class="font-body-lg text-on-surface-variant">Setiap tangkai dipilih secara manual oleh perangkai bunga ahli kami, memastikan hanya mahkota bunga paling segar yang masuk ke dalam koleksi Anda.</p>
          <div class="grid grid-cols-2 gap-8 pt-6">
            <div class="space-y-2">
              <h4 class="font-display-lg text-4xl text-primary">100+</h4>
              <p class="font-label-sm text-on-surface-variant">Varian Bunga Eksotis</p>
            </div>
            <div class="space-y-2">
              <h4 class="font-display-lg text-4xl text-primary">15k</h4>
              <p class="font-label-sm text-on-surface-variant">Momen Berbahagia</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Social Media Section -->
    <section class="py-24 bg-surface-container-low">
      <div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
        <span class="font-label-md text-label-md text-tertiary uppercase tracking-widest block mb-6">Let's Connect</span>
        <h2 class="font-headline-md text-on-surface mb-12">Temukan Kami di Media Sosial</h2>
        <div class="flex flex-wrap justify-center gap-6 md:gap-12">
          <!-- Instagram -->
          <a :href="socials.instagram" target="_blank" rel="noopener noreferrer" class="group flex flex-col items-center gap-4 transition-all hover:-translate-y-2">
            <div class="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:bg-primary group-hover:text-white transition-colors duration-500">
              <BrandIcon name="instagram" className="w-10 h-10" />
            </div>
            <span class="font-label-md text-label-md text-on-surface-variant group-hover:text-primary">
              Instagram<br />
              <span class="text-label-sm opacity-70">@fani_bouquet</span>
            </span>
          </a>
          <!-- TikTok -->
          <!-- <a :href="socials.tiktok" target="_blank" rel="noopener noreferrer" class="group flex flex-col items-center gap-4 transition-all hover:-translate-y-2">
            <div class="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:bg-primary group-hover:text-white transition-colors duration-500">
              <BrandIcon name="tiktok" className="w-10 h-10" />
            </div>
            <span class="font-label-md text-label-md text-on-surface-variant group-hover:text-primary">
              TikTok<br />
              <span class="text-label-sm opacity-70">@fani_bouquet</span>
            </span>
          </a> -->
          <!-- WhatsApp -->
          <a :href="socials.whatsapp" target="_blank" rel="noopener noreferrer" class="group flex flex-col items-center gap-4 transition-all hover:-translate-y-2">
            <div class="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:bg-primary group-hover:text-white transition-colors duration-500">
              <BrandIcon name="whatsapp" className="w-10 h-10" />
            </div>
            <span class="font-label-md text-label-md text-on-surface-variant group-hover:text-primary">
              WhatsApp<br />
              <span class="text-label-sm opacity-70">Chat with us</span>
            </span>
          </a>
        </div>

        <!-- Live Feed Suggestion (Bento Grid) -->
        <div id="gallery" class="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div class="aspect-square rounded-2xl overflow-hidden shadow-sm group">
            <img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              alt="Buket bunga cantik 1"
              src="/gallery-1.jpeg" />
          </div>
          <div class="aspect-square rounded-2xl overflow-hidden shadow-sm group md:mt-8">
            <img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              alt="Buket bunga cantik 2"
              src="/gallery-2.jpeg" />
          </div>
          <div class="aspect-square rounded-2xl overflow-hidden shadow-sm group">
            <img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              alt="Buket bunga cantik 3"
              src="/gallery-3.png" />
          </div>
          <div class="aspect-square rounded-2xl overflow-hidden shadow-sm group md:mt-8">
            <img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              alt="Buket bunga cantik 4"
              src="/gallery-4.jpeg" />
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter / CTA Section -->
    <!-- <section id="reviews" class="py-24 px-margin-mobile">
      <div class="max-w-4xl mx-auto rounded-[48px] bg-primary-container p-12 md:p-20 text-center relative overflow-hidden">
        Background texture/pattern simulation
        <div class="absolute inset-0 opacity-10 pointer-events-none" style="background-image: radial-gradient(circle at 2px 2px, #fff 1px, transparent 0); background-size: 24px 24px;"></div>
        <h3 class="font-headline-md text-on-primary-container mb-6 relative z-10">Dapatkan Inspirasi Setiap Pekan</h3>
        <p class="font-body-md text-on-primary-container/80 mb-10 relative z-10 max-w-md mx-auto">Daftarkan email Anda untuk mendapatkan tips perawatan bunga dan penawaran eksklusif setiap bulannya.</p>
        
        <form @submit.prevent="handleSubscribe" class="flex flex-col md:flex-row gap-4 max-w-lg mx-auto relative z-10">
          <input
            v-model="email"
            class="flex-grow px-6 py-4 rounded-full border-none bg-white focus:ring-2 focus:ring-primary shadow-inner font-body-md text-on-surface"
            placeholder="Email Anda" type="email" required
            :disabled="loading"
          />
          <button
            class="bg-primary text-on-primary px-10 py-4 rounded-full font-label-md text-label-md hover:bg-on-primary-fixed transition-colors disabled:opacity-50"
            type="submit"
            :disabled="loading"
          >
            {{ loading ? 'Mengirim...' : 'Daftar' }}
          </button>
        </form>
        <p v-if="subscribeMessage" class="mt-4 font-body-md text-on-primary-container z-10 relative font-medium">
          {{ subscribeMessage }}
        </p>
      </div>
    </section> -->
  </div>
</template>

<script setup>
import { ref } from 'vue';
import BrandIcon from '../components/BrandIcon.vue';

defineProps({
  socials: {
    type: Object,
    required: true
  }
});

const email = ref('');
const loading = ref(false);
const subscribeMessage = ref('');

const handleSubscribe = async () => {
  loading.value = true;
  subscribeMessage.value = '';
  try {
    const res = await fetch('/api/newsletter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email.value }),
    });
    const data = await res.json();
    if (res.ok) {
      subscribeMessage.value = data.message;
      email.value = '';
    } else {
      subscribeMessage.value = data.error || 'Terjadi kesalahan. Silakan coba lagi.';
    }
  } catch (error) {
    console.error('Error subscribing:', error);
    subscribeMessage.value = 'Gagal mendaftar. Periksa koneksi internet Anda.';
  } finally {
    loading.value = false;
  }
};
</script>
