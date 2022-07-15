<script setup lang="ts">
import { Button as KButton } from "@progress/kendo-vue-buttons";
import { Popup as KPopup } from "@progress/kendo-vue-popup";
import { ref } from "vue";

const showTeams = ref(false);
</script>
<template>
  <div class="p-4 flex justify-between border-bottom border-2" style="margin: 1px">
    <img src="@/assets/images/logo.svg" alt="" />

    <div class="flex">
      <button ref="button" class="mr-5 text-[#ff6358]" @click="showTeams = !showTeams">
        <span class="k-icon k-i-ungroup"></span>My Team
      </button>
      <KPopup :anchor="'button'" :show="showTeams" class="mt-5 primay-color">
        <ul>
          <li class="px-5 px-2" @click="showTeams = false">Team 1</li>
          <li class="px-5 px-2" @click="showTeams = false">Team 2</li>
        </ul>
      </KPopup>
      <k-button
        theme-color="primary"
        :rounded="'full'"
        :icon="'logout'"
        :shape="'rectangle'"
        :themeColor="'warning'"
        >Logout</k-button
      >
    </div>
  </div>
</template>
<style scoped></style>
