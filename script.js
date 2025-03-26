function Solve(val){
    var result = document.getElementById("result");
    result.value+=val;
}

function Calculate(){
    var num1=document.getElementById("result").value;
    try{
        var num2=eval(num1.replace("x","*"));
        document.getElementById("result").value=num2;
    }catch{
        document.getElementById("result").value="Invalid Input";
    }
}

function Clear(){
    var clear=document.getElementById("result");
    clear.value="";
}

function Back(){
    var back=document.getElementById("result");
    back.value=back.value.slice(0,-1);
}

document.addEventListener("keydown", function(event){
    const key = event.key;
    const validKeys = '0123456789+-*/.%';
    if(validKeys.includes(key)){
        Solve(key==='*'?'*':key);
    }
    else if(key==='Enter'){
        Calculate();
    }
    else if(key==='Backspace'){
        Back();
    }
    else if(key.toLowerCase()==='c'){
        Clear();
    }
});

function myFunction() {
    var toggleSwitch = document.getElementById("toggle-switch");
    var body = document.body;

    if (toggleSwitch.checked) {
        body.classList.add("dark-mode");
        body.classList.remove("light-mode"); // Ensure light mode is removed
        localStorage.setItem("darkMode", "enabled"); // Save state
    } else {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode"); // Ensure light mode is added
        localStorage.setItem("darkMode", "disabled"); // Save state
    }
}

// Ensure dark mode persists on reload
document.addEventListener("DOMContentLoaded", function() {
    var toggleSwitch = document.getElementById("toggle-switch");

    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        document.body.classList.remove("light-mode");
        toggleSwitch.checked = true;
    }
    
    // Attach event listener to the toggle switch
    toggleSwitch.addEventListener("change", myFunction);
});



