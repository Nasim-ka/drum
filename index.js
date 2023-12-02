for(let i=0; i< document.querySelectorAll(".drum").length; i++) {
     document.querySelectorAll('.drum')[i].addEventListener('click', function(){
        let buttonInnerHtml = this.innerHTML;
        makesound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml)

     })
  

}
function makesound(key){
    switch (key){
        case 'w':
            let tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
    
        case 'a':
            let tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
    
        case 's':
            let tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play(); 
             break;
    
        case 'd':
            let tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
    
        case 'j':
            let kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
             break;
    
        case 'k':
            let crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        
        case 'l':
            let snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
    }
}
document.addEventListener("keypress", function(event) {

    makesound(event.key);
  
    buttonAnimation(event.key);
  
  });

function buttonAnimation(animation){
    let activeButton = document.querySelector("." + animation);
    activeButton.classList.add("pressed");
    setTimeout(function(){
      activeButton.classList.remove("pressed");
    }, 100);
  }

var myVar;
function randomMusic() {
    const keyys = ['w','a','s','d','j','k','l'];
    myVar = setInterval(() => {
        const currentkey= keyys[Math.floor(Math.random()*keyys.length)];
        makesound(currentkey)
        buttonAnimation(currentkey) 
    }, 200);

}
document.getElementById('random').addEventListener("click", function() {
    randomMusic()
  
  });
  