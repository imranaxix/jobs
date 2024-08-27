<script setup>
import JobListing from './JobListing.vue';
import { ref,defineProps, onMounted } from 'vue';
import { getJobs } from '@/API/api'; 
import { RouterLink } from 'vue-router';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
const jobs = ref([]);
const loading = ref(true);

defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false,
  },
  isLoading: {
    type: Boolean,
    default: true,
  }
})

onMounted(async () => {
  try {
    const response = await getJobs();
    jobs.value = response.data;
  } catch (error) {
    console.error("Error fetching data", error);
    // Optionally set some error state or show a message to the user
  } finally {
    loading.value = false;
  }
});



</script>


<template>
 
<section class="bg-blue-50 px-4 py-10">

  <div class="container m-auto">
    <h2 class="text-3xl font-bold text-green-500 text-center mb-6">Browse Jobs</h2>

    <div v-if="loading" class="text-center text-gray-500 py-6">
      <PulseLoader/>
    </div>

    <div v-if="!loading" class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <JobListing v-for="job in jobs.slice(0 , limit || jobs.length)" :key="job.id" :job="job"/>
    </div>
  </div>

</section>


<section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
      <RouterLink
        to="/jobs"
        class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs
      </RouterLink>
    </section>

</template>