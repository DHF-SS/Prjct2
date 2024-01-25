window.addEventListener("load", function(){
    window.addEventListener("DOMContentLoaded", (event) => {
    
 console.log("hello")

 document.getElementById('Button-skill1').addEventListener('OnClick', function() {
    this.innerText = 'unlocked';

});

document.getElementById('Button-skill2').addEventListener('click', function() {
    this.innerText = 'unlocked';
});

document.getElementById('Button-skill3').addEventListener('click', function() {
    this.innerText = 'unlocked';
});

document.getElementById('Button-skill4').addEventListener('click', function() {
    this.innerText = 'unlocked';
});

document.getElementById('Button-skill5').addEventListener('click', function() {
    this.innerText = 'unlocked';
   
});

//
function Choice () {
    var Unlockbutton = document.getElementsByClassName("box");
   
    if (Unlockbutton.clicked == true) {
        box.style.backgroundColor = "Blue";
    } else if (no.clicked == true) {
        box.style.backgroundColor = "red";
    };
};
})
})
