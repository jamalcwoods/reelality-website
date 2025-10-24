document.getElementById("hamburger_icon").addEventListener("click", (e) => {
    var displayStatus = document.getElementById("hamburger_options").style.display;
    if(displayStatus == "flex"){
        document.getElementById("hamburger_icon").style.backgroundColor = "rgb(0,0,0)"
        document.getElementById("hamburger_options").style.display = "none"
    } else {
        document.getElementById("hamburger_icon").style.backgroundColor = "rgb(128,128,128,128)"
        document.getElementById("hamburger_options").style.display = "flex"
    }
    
})