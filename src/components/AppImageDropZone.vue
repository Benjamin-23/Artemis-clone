<script setup lang="ts">
import { ref } from "vue";
import { useBase64, useDropZone } from "@vueuse/core";

const file = ref();
const { base64: url } = useBase64(file);

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
        class="flex"
        style="width: 300px; height: 200px; position: relative; background: #3331"
      >
        <input
          class="absolute z-1 top-0 bottom-0 left-0 right-0 opacity-0"
          type="file"
          @input="onFileChange"
          accept="image/*"
        />
        <div class="m-auto opacity-40">Drag your image here</div>
        <img v-if="url" :src="url" alt="" />
      </div>
    </div>
    <button @click="reset">Reset</button>
  </div>
</template>
