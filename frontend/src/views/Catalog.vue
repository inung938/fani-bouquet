<template>
  <div class="py-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
    <!-- Header/Introduction -->
    <div class="text-center max-w-3xl mx-auto mb-16">
      <span class="font-label-md text-label-md text-tertiary uppercase tracking-widest block mb-4">Our Collection</span>
      <h1 class="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6">Bouqet List</h1>
      <p class="font-body-lg text-on-surface-variant leading-relaxed">
        Pilihlah keindahan terbaik untuk perayaan Anda. Setiap rangkaian dibuat dengan keahlian artistik tingkat tinggi dan bunga paling segar.
      </p>
    </div>

    <!-- Search & Filter Controls -->
    <div class="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 pb-8 border-b border-surface-container-high/50">
      <!-- Search Input -->
      <div class="relative w-full md:max-w-md">
        <span class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-on-surface-variant/70">
          <span class="material-symbols-outlined">search</span>
        </span>
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Cari buket impian Anda..."
          class="w-full pl-12 pr-6 py-4 rounded-full border border-outline-variant bg-white text-on-surface focus:ring-2 focus:ring-primary focus:border-transparent font-body-md"
        />
      </div>

      <!-- Categories Filter -->
      <div class="flex flex-wrap gap-2 w-full md:w-auto justify-start md:justify-end">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="selectedCategory = cat"
          class="px-5 py-3 rounded-full font-label-md text-label-md transition-all whitespace-nowrap animate-hover"
          :class="selectedCategory === cat 
            ? 'bg-primary text-on-primary shadow-md' 
            : 'bg-white text-on-surface-variant hover:bg-surface-container border border-outline-variant/50'"
        >
          {{ cat }}
        </button>
      </div>
    </div>

    <!-- Loading state -->
    <div v-if="loading" class="text-center py-20">
      <div class="inline-block w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      <p class="mt-4 font-body-md text-on-surface-variant">Memuat katalog cantik kami...</p>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="text-center py-20 bg-error-container/20 rounded-3xl p-8 max-w-lg mx-auto">
      <span class="material-symbols-outlined text-error text-5xl mb-4">error</span>
      <p class="font-headline-sm text-on-surface mb-2">Gagal memuat produk</p>
      <p class="font-body-md text-on-surface-variant mb-6">{{ error }}</p>
      <button @click="fetchProducts" class="bg-primary text-on-primary px-6 py-3 rounded-full font-label-md text-label-md hover:bg-primary/95 transition-all">
        Coba Lagi
      </button>
    </div>

    <!-- Empty State -->
    <div v-else-if="filteredProducts.length === 0" class="text-center py-20 bg-surface-container-low rounded-3xl p-8 max-w-lg mx-auto">
      <span class="material-symbols-outlined text-on-surface-variant text-5xl mb-4">filter_list_off</span>
      <p class="font-headline-sm text-on-surface mb-2">Produk tidak ditemukan</p>
      <p class="font-body-md text-on-surface-variant">Kami tidak dapat menemukan buket dengan kriteria pencarian Anda. Coba kata kunci atau kategori lain.</p>
    </div>

    <!-- Product Grid -->
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div 
        v-for="product in filteredProducts" 
        :key="product.id"
        class="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col border border-outline-variant/20 hover:-translate-y-1"
      >
        <!-- Product Image -->
        <div class="aspect-square relative overflow-hidden group">
          <img 
            :src="product.image" 
            :alt="product.name" 
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <span class="absolute top-4 left-4 bg-primary-container text-on-primary-container text-label-sm font-label-sm px-3 py-1 rounded-full shadow-sm">
            {{ product.category }}
          </span>
        </div>

        <!-- Product Details -->
        <div class="p-6 flex flex-col flex-grow">
          <h3 class="font-headline-sm text-on-surface mb-2 leading-snug">
            {{ product.name }}
          </h3>
          <p class="font-body-md text-on-surface-variant line-clamp-3 mb-4 flex-grow">{{ product.description }}</p>
          
          <!-- Dropdown for Buket Uang -->
          <div v-if="product.category === 'Buket Uang'" class="mb-6 bg-surface-container-low p-3 rounded-2xl border border-outline-variant/20">
            <label class="block font-label-sm text-on-surface-variant mb-1.5">Pilih Jumlah Lembar:</label>
            <div class="relative">
              <select 
                v-model="product.selectedTier" 
                class="w-full bg-white text-on-surface border border-outline-variant/40 rounded-xl px-3 py-2 text-body-sm font-medium focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary appearance-none cursor-pointer pr-10"
              >
                <option v-for="(priceVal, tierName) in product.price" :key="tierName" :value="tierName">
                  {{ tierName }} - {{ formatPrice(priceVal) }}
                </option>
              </select>
              <span class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-lg">
                keyboard_arrow_down
              </span>
            </div>
          </div>

          <!-- Price and CTA -->
          <div class="flex items-center justify-between mt-auto pt-4 border-t border-surface-container-high/50">
            <span class="font-display-lg text-2xl text-primary font-bold">
              {{ product.category === 'Buket Uang' ? formatPrice(product.price[product.selectedTier]) : formatPrice(product.price) }}
            </span>
            <a 
              :href="getWhatsAppOrderLink(product)"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 bg-primary text-on-primary font-label-md text-label-md px-5 py-3 rounded-full hover:bg-primary/95 hover:scale-95 transition-all shadow-sm"
            >
              Pesan
              <span class="material-symbols-outlined text-lg">shopping_bag</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const props = defineProps({
  socials: {
    type: Object,
    required: true
  }
});

const products = ref([]);
const loading = ref(true);
const error = ref('');
const searchQuery = ref('');
const selectedCategory = ref('Semua');

const fetchProducts = async () => {
  loading.value = true;
  error.value = '';
  try {
    const res = await fetch('/api/products');
    if (res.ok) {
      const data = await res.json();
      products.value = data.map(p => {
        if (p.category === 'Buket Uang' && p.price && typeof p.price === 'object') {
          return {
            ...p,
            selectedTier: Object.keys(p.price)[0]
          };
        }
        return p;
      });
    } else {
      throw new Error('Gagal mengambil data produk dari server.');
    }
  } catch (err) {
    console.error('Error loading products:', err);
    error.value = err.message || 'Gagal memuat produk. Silakan coba beberapa saat lagi.';
  } finally {
    loading.value = false;
  }
};

const categories = computed(() => {
  const cats = ['Semua'];
  products.value.forEach(p => {
    if (p.category && !cats.includes(p.category)) {
      cats.push(p.category);
    }
  });
  return cats;
});

const filteredProducts = computed(() => {
  return products.value.filter(p => {
    const productName = p.name || `${p.category} #${p.id}`;
    const matchesSearch = productName.toLowerCase().includes(searchQuery.value.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchQuery.value.toLowerCase());
    const matchesCategory = selectedCategory.value === 'Semua' || p.category === selectedCategory.value;
    return matchesSearch && matchesCategory;
  });
});

const formatPrice = (price) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(price);
};

const getWhatsAppOrderLink = (product) => {
  const phoneNumber = '6282330602096';
  
  let name = product.name || `${product.category} #${product.id}`;
  let price = product.price;
  
  if (product.category === 'Buket Uang' && product.selectedTier) {
    name = `${name} (${product.selectedTier})`;
    price = product.price[product.selectedTier];
  }
  
  const text = `Halo Fani Bouquet, saya ingin memesan produk berikut:\n\n*Nama:* ${name}\n*Kategori:* ${product.category}\n*Harga:* ${formatPrice(price)}\n\nApakah produk ini tersedia?`;
  return `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(text)}`;
};

onMounted(() => {
  fetchProducts();
});
</script>
