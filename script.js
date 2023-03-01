let colors = document.querySelectorAll(".color");

function changeColor(){
    let color = document.getElementById("colorInput").value;
    if(color) {
        document.body.style.backgroundColor = color;
    } else {
        for(let i = 0; i < colors.length; i++){
            colors[i].style.color = colors[i].innerText;
        }
    }
}
