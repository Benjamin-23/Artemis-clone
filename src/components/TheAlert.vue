<script setup lang="ts">
import { Notification, NotificationGroup } from "@progress/kendo-vue-notification";
import { Fade } from "@progress/kendo-vue-animation";
</script>

<template>
  <div class="z-10">
    <NotificationGroup
      style="right: 10px; buttom: 10px; flexwrap: wrap-reverse; alignitems: flex-start"
    >
      <Fade appear>
        <Notification
          :key="'success'"
          :type="{ style: 'success', icon: true }"
          :closable="true"
          @close="onClose('success')"
        >
          <span> Your have saved you Data</span>
        </Notification>
      </Fade>
    </NotificationGroup>
  </div>
</template>
<style scoped></style>
