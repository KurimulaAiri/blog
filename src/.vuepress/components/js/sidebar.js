const scrollBox = document.getElementById('sidebar');
let hideTimeout = null;

function showScrollbar() {
    console.log("in");
    
    scrollBox.classList.remove('hide-scrollbar');
    if (hideTimeout) clearTimeout(hideTimeout);
    hideTimeout = setTimeout(() => {
        scrollBox.classList.add('hide-scrollbar');
    }, 3000); // 停止滚动 3 秒后隐藏滚动条
}

scrollBox.addEventListener('scroll', showScrollbar);

// 初始时隐藏滚动条
scrollBox.classList.add('hide-scrollbar');  