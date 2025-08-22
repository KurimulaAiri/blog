<!-- 自定义侧边栏组件，反编译自 "vuepress-theme-hope/lib/client/components/sidebar/Sidebar.js" 如后续更新框架版本，需要重新进行反编译并自行添加对应功能 -->
 
<!-- 本文件侧边栏组件增加侧边栏滚动条 1 秒后自动隐藏的功能，并对滚动条进行美化 -->
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
import { onMounted, shallowRef, useSlots, nextTick } from "vue";
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
// 隐藏滚动条的定时器
let hideTimeout = null;

// 显示滚动条并设置自动隐藏
function showScrollbar() {
  if (!sidebar.value) return;
  
  // 移除隐藏类，显示滚动条
  sidebar.value.classList.remove('hide-scrollbar');
  
  // 清除之前的定时器
  if (hideTimeout) clearTimeout(hideTimeout);
  
  // 设置新的定时器，1秒后隐藏滚动条
  hideTimeout = setTimeout(() => {
    if (sidebar.value) {
      sidebar.value.classList.add('hide-scrollbar');
    }
  }, 1000);
}

// 组件挂载后执行
onMounted(() => {
  // 等待DOM更新完成
  nextTick(() => {
    if (sidebar.value) {
      // 初始时隐藏滚动条
      sidebar.value.classList.add('hide-scrollbar');
      
      // 添加滚动事件监听
      sidebar.value.addEventListener('scroll', showScrollbar);
    }
  });
  
  // 监听路由哈希变化，处理激活项滚动
  watchImmediate(() => route.hash, (hash) => {
    if (!sidebar.value) return;
    
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
/* 滚动条样式及隐藏效果 */
.vp-sidebar {
  /* 确保侧边栏可以滚动 */
  overflow-y: auto;
  /* 隐藏默认滚动条，但保留滚动功能 */
  scrollbar-width: thin;
  scrollbar-color: var(--vp-sidebar-scrollbar-thumb-color) transparent;
  transition: all 0.5s ease;
}

/* WebKit浏览器滚动条样式 (Chrome, Safari) */
.vp-sidebar::-webkit-scrollbar {
  width: 3px;
}

.vp-sidebar::-webkit-scrollbar-track {
  background: unset;
}

.vp-sidebar::-webkit-scrollbar-thumb {
  background-color: rgba(150, 150, 150, 0.5);
  border-radius: 2px;
  transition: background-color 0.3s ease;
}

.vp-sidebar::-webkit-scrollbar-thumb:hover {
  background-color: rgba(100, 100, 100, 0.7);
}

/* 滚动条隐藏类 */
.vp-sidebar.hide-scrollbar {
  scrollbar-color: transparent transparent;
}

.vp-sidebar.hide-scrollbar::-webkit-scrollbar-thumb {
  background-color: transparent;
}
</style>
    