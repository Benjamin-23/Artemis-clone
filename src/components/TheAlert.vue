<script setup lang="ts">
import { Notification, NotificationGroup } from "@progress/kendo-vue-notification";
import { Fade } from "@progress/kendo-vue-animation";
import { useAlerts } from "@/store/alert";
import { ref } from "vue";
import { storeToRefs } from "pinia";

const store = useAlerts();
const { items } = storeToRefs(store);
</script>

<template>
  <div class="z-10">
    <NotificationGroup
      style="right: 10px; buttom: 10px; flexwrap: wrap-reverse; alignitems: flex-start"
    >
      <Fade v-for="alert in items" :key="alert.id" appear>
        <Notification
          :key="'success'"
          :type="{ style: 'success', icon: true }"
          :closable="alert.closable"
          @close="() => {}"
        >
          <div v-if="alert.html" v-html="alert.message"></div>
          <span v-else>{{ alert.message }} </span>
        </Notification>
      </Fade>
    </NotificationGroup>
  </div>
</template>
<style scoped></style>
