/* 
    Pomodoro
    
    desc: A JavaScript Pomodoro Timer
    
    author: Rbn Ing
    license: BSD / GPL / GPL3 / Attribution 4.0 International (CC BY 4.0)
*/


/////////////////////////////////////////////////////////////////////////////
///  VARS
/////////////////////////////////////////////////////////////////////////////


// get html elements
var timeTextObject = document.querySelector('.time');
var startButton    = document.querySelector('.start-button');

// time vars
var duration = {min:25, sec:0};



/////////////////////////////////////////////////////////////////////////////
///  EVENT LISTENER
/////////////////////////////////////////////////////////////////////////////


startButton.addEventListener('click', handleStartButtonClick);




/////////////////////////////////////////////////////////////////////////////
///  FUNCTION
/////////////////////////////////////////////////////////////////////////////


function handleStartButtonClick(event){
    
    startButton.classList.add('hidden');
    
    // interval
        var timer = setInterval(handleInterval, 1000);
    
    // on click interval
    function handleInterval(){
        
        
        if(duration.min == 0 && duration.sec == 0){
            
            clearInterval(timer);
            playAlarm();
            
        } else {
            countDown();
            showDuration();
        }
        
        
        // console.log(duration); 
    }
};


/////////////////////////////////////////////////////////////////////////////
///  DECREASE TIME
/////////////////////////////////////////////////////////////////////////////


function countDown(){
    
    duration.sec--;
    
    if(duration.sec < 0) {
        duration.min--;
        duration.sec = 59;
    }
    
}



/////////////////////////////////////////////////////////////////////////////
///  SHOW REMAINING TIME
/////////////////////////////////////////////////////////////////////////////

function showDuration(){
    
    
    var min = duration.min;
    var sec = duration.sec;
    
    if(min < 10){ min = "0"+min; }
        
    if(sec < 10){ sec = "0"+sec; }
    
    if(min == 0 && sec == 0){
        startButton.textContent = "RESET";
    }
    
    timeTextObject.textContent = min +":"+ sec;
}


/////////////////////////////////////////////////////////////////////////////
///  ALERT
/////////////////////////////////////////////////////////////////////////////

function playAlarm(){
    
    timeTextObject.textContent = "DONE!";
    
    setTimeout(resetClock, 3000);
}


/////////////////////////////////////////////////////////////////////////////
///  RESET CLOCK
/////////////////////////////////////////////////////////////////////////////


function resetClock(){
    
    startButton.classList.remove('hidden');
    timeTextObject.textContent = '25:00';
    
    duration.min = 25;
}