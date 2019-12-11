function btnpress(button){
    var inptbox = document.getElementById("inputbox");
    inptbox.value += button.value;
}
function clearall(){
    var inptbox = document.getElementById("inputbox");
    inptbox.value = "";
}
function ans(){
    var inptbox = document.getElementById("inputbox");
    if(inptbox.value){
        try{
            inptbox.value = eval(inptbox.value);
        }
        catch(err){
            clearall();
            alert("Invalid input..!!");
        }
    }
    return false;
}
function backspc(){
    var inptbox = document.getElementById("inputbox");
    inptbox.value = inptbox.value.substring(0,inptbox.value.length-1);
}