<script setup>
import { ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

const open = ref(false);

const toggleMenu = () => {
  open.value = !open.value;
};

const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
};
</script>

<template>
  <nav class="bg-green-700 border-b border-green-500 w-full fixed z-10">
    <div class="mx-auto  max-w-7xl px-4 md:px-6 lg:px-8 ">
      
      <div class="flex h-20 items-center justify-between ">
       
        <div>
          <RouterLink class="flex items-center" to="/">
          <span class="text-white text-2xl font-bold">My Jobs</span>
        </RouterLink>
        
        <div @click="toggleMenu" class="text-3xl absolute right-6 top-6 text-white cursor-pointer lg:hidden">
          <i :class="open ? 'pi pi-times' : 'pi pi-bars'"></i>
        </div>
        </div>

        <div>


          <div
  :class="[
    'flex flex-col  md:items-center pt-6 lg:mt-0 mt-10 lg:pt-0 bg-green-700 select-none absolute lg:static md:z-auto left-0  md:w-auto  px-4 duration-75 ease-in',
    open ? 'block' : 'hidden', 
    'lg:flex' 
  ]"
>
  
    <div class=" flex flex-col lg:flex-row space-y-4 w-screen mr-6 lg:w-full lg:space-y-0 text-white font-semibold lg:space-x-4 pb-6 lg:pb-0">
    <RouterLink
      to="/"
      :class="[
        isActiveLink('/') ? 'active' : '',
        'rounded-md', 'px-3', 'py-2',  'active1', 'navHover',
      ]"
      @click="toggleMenu"
    >
      Home
    </RouterLink>
    <RouterLink
      to="/jobs"
      :class="[
        isActiveLink('/jobs') ? 'active' : '',
        'rounded-md', 'px-3', 'py-2',  'active1', 'navHover',
      ]"
       @click="toggleMenu"
    >
      Jobs
    </RouterLink>
    <RouterLink
      to="/jobs/add"
      :class="[
        isActiveLink('/jobs/add') ? 'active' : '',
        'rounded-md', 'px-3', 'py-2',  'active1', 'navHover',
      ]"
       @click="toggleMenu"
    >
      Add Job
    </RouterLink>
  </div>
  </div>
</div>


        
</div>

      </div>
  </nav>
</template>
