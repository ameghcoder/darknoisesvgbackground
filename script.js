const init = () => {
    const follower = document.getElementById("follower");
    window.addEventListener('mousemove', (e) => {
        follower.setAttribute("style", `top: ${e.pageY}px; left: ${e.pageX}px;`)
    })
}
if(document.readyState == "interactive"){
    init();
} else{
    document.addEventListener("DOMContentLoaded", ()=>{
        init();
    })
}