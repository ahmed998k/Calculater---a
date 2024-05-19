var name = prompt(' Enter a name to open');
if(name == 'name'){
    confirm('welcome')

}else{
    window.location.href = 'index.html';
}


const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value)
        
        }
        catch(erorr){
            display.value = "Erorr 404"
           
        }
    
}
