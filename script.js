const body = document.querySelector("body"),
    nav = document.querySelector("nav"),
    mtoggle = document.querySelector(".darklight"),
    sidebarOpen = document.querySelector(".sidebarOpen"),
    sidebarClose = document.querySelector(".sidebarClose");

mtoggle.addEventListener("click", ()=>{
    mtoggle.classList.toggle("active");
    body.classList.toggle("dark");

    if(!body.classList.contains("dark")){
        localStorage.setItem("mode", "light-mode");
    }
    else{
        localStorage.setItem("mode", "dark-mode");
    }
});

sidebarOpen.addEventListener("click", ()=>{
    nav.classList.add("active");
    sidebarClose.classList.toggle("active");
    sidebarOpen.classList.remove("active");
});

sidebarClose.addEventListener("click", e=>{
    let clickedelm = e.target;
    if(!clickedelm.classList.contains("sidebarOpen") && !clickedelm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});

// add event listener to body
body.addEventListener('click', (event) => {
    // check if navigation bar is currently open
    if (nav.classList.contains('active')) {
      // check if clicked element is not part of the navigation bar
      if (!event.target.closest('.nav-bar')) {
        // close the navigation bar by triggering a click on the close button
        sidebarClose.click();
      }
    }
  });
  