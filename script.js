// Grab the sidebar_close_btn
let sidebar_close_btn = document.querySelector('.sidebar_btn_container');
// Grab the Sidebar
let sidebar = document.querySelector('.sidebar');

sidebar_close_btn.addEventListener('click', function (event) {
    sidebar.classList.toggle('close');
})