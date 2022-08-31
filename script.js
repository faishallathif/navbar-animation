let sidebar = document.querySelector('.sidebar')
let btnSidebar = document.querySelector('#btn-sidebar')
let btnCloseSidebar = document.querySelector('#btn-close-sidebar')

btnSidebar.addEventListener('click',()=>{
    sidebar.classList.add("active")
})
btnCloseSidebar.addEventListener('click',()=>{
    sidebar.classList.remove("active")
})
// document.body.addEventListener("click",(e)=>{
//     let el = e.target
//     let parent = el.parentElement
//     console.log(el.classList.contains("sidebar"));
//     console.log(parent);
// })