<script lang="ts" setup>
  import { computed } from 'vue'

  const props = withDefaults(
    defineProps<{ title?: string; description?: string; headline?: string }>(),
    {
      title: 'title',
      description: 'description',
      headline: 'headline'
    }
  )

  const title = computed(() => props.title.slice(0, 60))
</script>

<template>
  <div class="w-full h-full flex flex-col justify-center bg-gray-50 border border-purple-600">
    <svg
      class="absolute right-0 top-0"
      width="1029"
      height="993"
      viewBox="0 0 629 593"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_f_199_94966)">
        <path
          d="M628.5 -578L639.334 -94.4223L806.598 -548.281L659.827 -87.387L965.396 -462.344L676.925 -74.0787L1087.69 -329.501L688.776 -55.9396L1160.22 -164.149L694.095 -34.9354L1175.13 15.7948L692.306 -13.3422L1130.8 190.83L683.602 6.50012L1032.04 341.989L668.927 22.4412L889.557 452.891L649.872 32.7537L718.78 511.519L628.5 36.32L538.22 511.519L607.128 32.7537L367.443 452.891L588.073 22.4412L224.955 341.989L573.398 6.50012L126.198 190.83L564.694 -13.3422L81.8734 15.7948L562.905 -34.9354L96.7839 -164.149L568.224 -55.9396L169.314 -329.501L580.075 -74.0787L291.604 -462.344L597.173 -87.387L450.402 -548.281L617.666 -94.4223L628.5 -578Z"
          class="fill-purple-600" />
      </g>
      <defs>
        <filter
          id="filter0_f_199_94966"
          x="0.873535"
          y="-659"
          width="1455.25"
          height="1451.52"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="40.5" result="effect1_foregroundBlur_199_94966" />
        </filter>
      </defs>
    </svg>

    <div class="w-[680px] pl-[100px]">
      <p v-if="headline" class="uppercase text-2xl font-bold text-purple-600 mb-4 font-head">
        {{ headline }}
      </p>
      <h1
        class="w-[600px] m-0 text-7xl font-head font-black mb-4 text-mirage-900 flex items-center">
        <span>{{ title }}</span>
      </h1>
      <p class="text-[32px] text-gray-900 leading-tight">
        {{ description.slice(0, 200) }}
      </p>
    </div>
    <svg
      class="absolute top-[160px] right-[140px]"
      id="favicon"
      width="180"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 184.75425 277.13247">
      <style>
        #favicon .hero__logo__icon {
          fill: #2a3850;
        }
        @media (prefers-color-scheme: dark) {
          #favicon .hero__logo__icon {
            fill: #ffffff;
          }
        }
      </style>
      <path
        class="hero__logo__icon"
        d="m131.02398,180.75167c0,14.00736-3.35277,24.79378-10.05423,32.34948-6.70554,7.56113-16.33837,11.33898-28.90665,11.33898-12.56829,0-22.10292-3.77786-28.59367-11.33899-6.49484-7.5557-9.73919-18.34212-9.73919-32.34948v-91.47656s-53.73023,0-53.73023,0v91.14437c-.00002,20.89977,3.97666,38.63179,11.94026,53.19172,7.95746,14.56427,18.79822,25.45925,32.52023,32.68276,13.7169,7.22677,29.26975,10.83853,46.65956,10.83853,17.3847,0,33.14927-3.66929,47.28859-11.0057,14.13932-7.33641,25.39637-18.22704,33.77728-32.68275,8.37477-14.4492,12.56829-32.12476,12.5683-53.02453v-91.14437s-53.73023,0-53.73023,0v91.47656Z" />
      <polygon
        fill="#6366f1"
        points="53.73003 37.34916 131.02401 37.34917 92.37703 0 53.73003 37.34916" />
    </svg>
  </div>
</template>
