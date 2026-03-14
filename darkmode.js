let button = document.querySelector("#modeBtn")
let mode = "light"
let body = document.body

button.addEventListener("click", function(){
    if(mode === "light"){
        body.classList.remove("light")
        body.classList.add("dark")
        button.innerText = "LightMode";
        mode = "dark"
    }
    else{
        // means th mode is dark 
        body.classList.remove("dark")
        body.classList.add("light")
        button.innerText = "DarkMode"
        mode = "light";
    }
})