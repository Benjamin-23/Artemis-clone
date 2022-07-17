<script setup lang="ts">
import { useBase64, useDropZone } from "@vueuse/core";
import { ref } from "vue";

const file = ref();
const { base64: url } = useBase64(file);
const dropzoneE1 = ref<HTMLElement | null>(null);
const { isOverDropZone } = useDropZone(dropzoneE1, (files) => {
  if (!files) return;
  file.value = files[0];
  console.log(file.value);
});
function onFileChange(e: any) {
  file.value = e.target.files[0];
  console.log(file.value);
}
// reset image
function reset() {
  file.value = null;
}
</script>
<template>
  <div>
    <div>AppImageDropZone</div>

    <div>
      <div
        ref="dropzoneE1"
        class="flex"
        :class="{ border: isOverDropZone, 'border-orange-400': isOverDropZone }"
        style="width: 300px; height: 200px; position: relative; background: #3331"
      >
        <input
          class="absolute z-1 top-0 bottom-0 left-0 right-0 opacity-0"
          type="file"
          @input="onFileChange"
          accept="image/*"
        />
        <img v-if="url" :src="url" alt="loading" />
        <div class="m-auto opacity-40">Drag your image here</div>
      </div>
    </div>
    <button @click="reset">Reset</button>
  </div>
</template>
