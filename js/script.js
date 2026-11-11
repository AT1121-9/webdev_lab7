
function init(){
    const input = document.getElementById("entryinput");
    const button = document.getElementById("entrybutton");
    const output = document.getElementById("textoutput");

    button.addEventListener("click", function(){
        alert("Aiden: " + input.value);
        output.textContent = input.value;
    });
}

window.addEventListener('load', init);
