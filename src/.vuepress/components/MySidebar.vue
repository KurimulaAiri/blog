<template>
  <aside
    ref="sidebar"
    key="sidebar"
    id="sidebar"
    class="vp-sidebar"
    vp-sidebar
  >
    <!-- 侧边栏顶部插槽 -->
    <slot name="sidebarTop"></slot>
    
    <!-- 侧边栏项目区域 -->
    <template v-if="slots.sidebarItems">
      <slot name="sidebarItems" :config="sidebarItems"></slot>
    </template>
    <template v-else>
      <SidebarLinks :config="sidebarItems" />
    </template>
    
    <!-- 侧边栏底部插槽 -->
    <slot name="sidebarBottom"></slot>
  </aside>
</template>

<script setup>
import { watchImmediate } from "@vueuse/core";
import { onMounted, shallowRef, useSlots } from "vue";
import { useRoute } from "vuepress/client";
import SidebarLinks from "@theme-hope/components/sidebar/SidebarLinks";
import { useSidebarItems } from "@theme-hope/composables/sidebar/useSidebarItems";
import "@theme-hope/styles/sidebar/sidebar.scss";

// 获取路由信息
const route = useRoute();
// 获取侧边栏项目数据
const sidebarItems = useSidebarItems();
// 获取插槽内容
const slots = useSlots();
// 侧边栏DOM引用
const sidebar = shallowRef();

// 组件挂载后执行
onMounted(() => {
  // 监听路由哈希变化，立即执行一次
  watchImmediate(() => route.hash, (hash) => {
    // 查找当前激活的侧边栏链接
    const activeSidebarItem = document.querySelector(
      `.vp-sidebar a.vp-sidebar-link[href="${route.path}${hash}"]`
    );
    
    if (!activeSidebarItem) return;
    
    // 获取侧边栏的位置和高度信息
    const { top: sidebarTop, height: sidebarHeight } = sidebar.value.getBoundingClientRect();
    // 获取激活项的位置和高度信息
    const { top: activeSidebarItemTop, height: activeSidebarItemHeight } = activeSidebarItem.getBoundingClientRect();
    
    // 当激活项超出侧边栏顶部时，滚动到顶部对齐
    if (activeSidebarItemTop < sidebarTop) {
      activeSidebarItem.scrollIntoView(true);
    }
    // 当激活项超出侧边栏底部时，滚动到底部对齐
    else if (activeSidebarItemTop + activeSidebarItemHeight > sidebarTop + sidebarHeight) {
      activeSidebarItem.scrollIntoView(false);
    }
  });
});
</script>

<style scoped>
/* 这里可以添加组件的额外样式，原样式已通过.scss文件导入 */
</style>
