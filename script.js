let panel = document.getElementById("panel")
function insert(input){
    panel.innerHTML+=input;
}
function clean(){
    panel.innerHTML=""
}
function del(){
    content = panel.innerHTML
    panel.innerHTML= content.substring(0, content.length - 1)
}
function calc(){
    result = panel.innerHTML
    panel.innerHTML = eval(result)
}