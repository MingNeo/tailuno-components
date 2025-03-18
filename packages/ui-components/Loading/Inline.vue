<template>
  <div class="flex flex-col items-start gap-4">
    <!-- #region snippet -->
    <!-- Spinner -->
    <div class="size-5 animate-spin rounded-full border-[3px] border-solid border-gray-200 border-t-primary" />

    <svg class="size-6 animate-spin text-primary" xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24">
      <path fill="currentColor" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
        opacity="0.1" />
      <path fill="currentColor"
        d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z" />
    </svg>

    <svg class="text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <g>
        <rect width="2" height="5" x="11" y="1" fill="currentColor"
          opacity="0.14" />
        <rect width="2" height="5" x="11" y="1" fill="currentColor"
          opacity="0.29" transform="rotate(30 12 12)" />
        <rect width="2" height="5" x="11" y="1" fill="currentColor"
          opacity="0.43" transform="rotate(60 12 12)" />
        <rect width="2" height="5" x="11" y="1" fill="currentColor"
          opacity="0.57" transform="rotate(90 12 12)" />
        <rect width="2" height="5" x="11" y="1" fill="currentColor"
          opacity="0.71" transform="rotate(120 12 12)" />
        <rect width="2" height="5" x="11" y="1" fill="currentColor"
          opacity="0.86" transform="rotate(150 12 12)" />
        <rect width="2" height="5" x="11" y="1" fill="currentColor"
          transform="rotate(180 12 12)" />
        <animateTransform attributeName="transform" calcMode="discrete" dur="0.75s" repeatCount="indefinite"
          type="rotate"
          values="0 12 12;30 12 12;60 12 12;90 12 12;120 12 12;150 12 12;180 12 12;210 12 12;240 12 12;270 12 12;300 12 12;330 12 12;360 12 12" />
      </g>
    </svg>

    <svg class="animate-spin text-primary" xmlns="http://www.w3.org/2000/svg" width="20"
      height="20" viewBox="0 0 20 20">
      <path fill="currentColor" fill-rule="evenodd"
        d="M11 16a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-6.259-3a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m11.578.5a2 2 0 1 1 0 4a2 2 0 0 1 0-4M18.5 9.319a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3M2.5 6a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m15.286-.793a1 1 0 1 1 0 2a1 1 0 0 1 0-2M8 0a3 3 0 1 1 0 6a3 3 0 0 1 0-6m7.5 3a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1" />
    </svg>

    <!-- Dots -->
    <div class="flex space-x-2">
      <div class="size-1 animate-ping rounded-full bg-primary [animation-delay:0ms]" />
      <div class="size-1 animate-ping rounded-full bg-primary [animation-delay:250ms]" />
      <div class="size-1 animate-ping rounded-full bg-primary [animation-delay:500ms]" />
    </div>

    <svg class="text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <circle cx="4" cy="12" r="3" fill="currentColor">
        <animate id="svgSpinners3DotsScale0" attributeName="r" begin="0;svgSpinners3DotsScale1.end-0.25s" dur="1.4s"
          values="3;.2;3" />
      </circle>
      <circle cx="12" cy="12" r="3" fill="currentColor">
        <animate attributeName="r" begin="svgSpinners3DotsScale0.end-1s" dur="1.4s" values="3;.2;3" />
      </circle>
      <circle cx="20" cy="12" r="3" fill="currentColor">
        <animate id="svgSpinners3DotsScale1" attributeName="r" begin="svgSpinners3DotsScale0.end-0.8s" dur="1.4s"
          values="3;.2;3" />
      </circle>
    </svg>

    <svg class="text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <circle cx="4" cy="12" r="3" fill="currentColor">
        <animate id="svgSpinners3DotsBounce0" attributeName="cy" begin="0;svgSpinners3DotsBounce1.end+0.25s"
          calcMode="spline" dur="0.6s" keySplines=".33,.66,.66,1;.33,0,.66,.33" values="12;6;12" />
      </circle>
      <circle cx="12" cy="12" r="3" fill="currentColor">
        <animate attributeName="cy" begin="svgSpinners3DotsBounce0.begin+0.1s" calcMode="spline" dur="0.6s"
          keySplines=".33,.66,.66,1;.33,0,.66,.33" values="12;6;12" />
      </circle>
      <circle cx="20" cy="12" r="3" fill="currentColor">
        <animate id="svgSpinners3DotsBounce1" attributeName="cy" begin="svgSpinners3DotsBounce0.begin+0.2s"
          calcMode="spline" dur="0.6s" keySplines=".33,.66,.66,1;.33,0,.66,.33" values="12;6;12" />
      </circle>
    </svg>
    <!-- #endregion snippet -->
  </div>
</template>
