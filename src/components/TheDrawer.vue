<script setup lang="ts">
import { Drawer, DrawerContent } from "@progress/kendo-vue-layout";
import { useRouter, useRoute } from "vue-router";
import { ref, computed } from "vue";
import { useDropZone, useLocalStorage } from "@vueuse/core";

const router = useRouter();
const route = useRoute();
const selectedId = ref(0);
const expanded = useLocalStorage("artemis-drawer", true);
const expandedIcon = computed(() =>
  expanded.value ? "k-i-arrow-chevron-left " : "k-i-arrow-chevron-right"
);

const items = computed(() =>
  [
    {
      text: "Boards",
      icon: "k-i-set-column-position",
      selected: true,
      data: {
        path: "/boards",
      },
    },

    {
      text: "Template",
      icon: "k-i-border-left",
      selected: true,
      data: {
        path: "/template",
      },
    },
    {
      text: "Settings",
      icon: "k-i-gear",
      selected: true,
      data: {
        path: "/settings",
      },
    },
    {
      text: "collapse",
      icon: expandedIcon.value,
      selected: true,
      data: {
        action: () => (expanded.value = !expanded.value),
      },
    },
  ].map((item) => ({
    ...item,
    selected: item.data.path ? route.path.startsWith(item.data.path) : false,
  }))
);

function onSelect({ itemIndex }: { itemIndex: number }) {
  const item = items.value[itemIndex];
  if (!item) return;
  if (item.data.path) router.push(item.data.path);
  if (typeof item.data.action === "function") item.data.action();
}
</script>
<template>
  <Drawer
    class="h-[90vh] warning"
    :expanded="expanded"
    :position="'start'"
    mode="push"
    :mini="true"
    :items="items"
    @select="onSelect"
  >
    <DrawerContent>
      <div class="px-5">
        <router-view />
      </div>
    </DrawerContent>
  </Drawer>
</template>

<style scoped></style>
