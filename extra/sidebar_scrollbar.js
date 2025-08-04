let scrollBox = document.getElementById('sidebar');
let hideTimeout = null;

function showScrollbar() {
    scrollBox.classList.remove('hide-scrollbar');
    if (hideTimeout) clearTimeout(hideTimeout);
    hideTimeout = setTimeout(() => {
        scrollBox.classList.add('hide-scrollbar');
    }, 1000); // 停止滚动 2 秒后隐藏滚动条
}

scrollBox.addEventListener('scroll', showScrollbar);

// 初始时隐藏滚动条
scrollBox.classList.add('hide-scrollbar');  