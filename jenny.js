const btn = document.querySelector('.talk')
const content = document.querySelector('.content')


function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}


function wishMe(){
    var day = new Date();
    var hour = day.getHours();

    if(hour>=0 && hour<12){
        speak("Good Morning Boss...")
    }

    else if(hour>12 && hour<17){
        speak("Good Afternoon Master...")
    }

    else{
        speak("Good Evenining Sir...")
    }

}

// window.addEventListener('load', ()=>{
//     speak("Initializing JARVIS..");
//     wishMe();
// });

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition =  new SpeechRecognition();

recognition.onresult = (event)=>{
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());

}

btn.addEventListener('click', ()=>{
    content.textContent = "Listening...."
    recognition.start();
})

function takeCommand(message){
    
    if(message.includes('hey') || message.includes('hello')|| message.includes('hi')){
        wishMe();
         speak("How May I Help You?");
    }else if(message.includes('about website')){
        speak("this website is streaming, movies and web series.");
    }
    else if(message.includes('hu r u')|| message.includes('what is your name')|| message.includes('Who are you')){
        speak("I am Riyo. An Artifcial Intellgence or voice assistant of this website");
    }
    else if(message.includes('who created you') || message.includes('who invented you')){
        speak(" I am Created by Dk Star");
    }
    else if(message.includes('Good Morning') || message.includes('good morning')){
        speak("Good morning sir. How can i help you.");
    }
    else if(message.includes('Good Afternoon') || message.includes('good afternoon')){
        speak("Good afternoon sir. How can i help you.");
    }
    else if(message.includes('Good Night') || message.includes('good night')){
        speak("Good night sir. take care");
    }
    else if(message.includes('thank you') || message.includes('thanks')){
        speak("Welcome sir i will happy to help you");
    }
    else if(message.includes('are you created') || message.includes('are you invented')){
        speak("I am Invented for help you to explore this website. just give me insturctions i will do task for you.");
    }
    else if(message.includes('bye') || message.includes('good bye')){
        speak("good bye sir have a nice day");
    }
    else if (message.includes("contact")){
        
        document.getElementById('clickButton').click();
        speak("okey")
    }
   
    else if(message.includes("whatsapp web")){
        window.open(" https://web.whatsapp.com/", "_blank");
        speak("Opening Whatsapp web...")
    }
    else if(message.includes(" google")){
        window.open("https://google.com", "_blank");
        speak("Opening Google...")
    }
    else if(message.includes(" youtube")){
        window.open("https://youtube.com", "_blank");
        speak("Opening Youtube...")
    }
    else if(message.includes(" facebook")){
        window.open("https://facebook.com", "_blank");
        speak("Opening Facebook...")
    }

    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
       
	    speak("sorry i just  provide you information with in website not out side of website");
  
    }
    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speak(finalText);
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speak(finalText);
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speak(finalText);
    }

    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speak(finalText);
    }
    else if (message.includes("movies")){
        
        document.getElementById('mov').click();
        speak("okey")
    }
    else if (message.includes("web series")){
        
        document.getElementById('web').click();
        speak("okey")
    }
    else if (message.includes("TV")||message.includes("tv")){
        document.getElementById('tv').click();
        speak("okey")
    }
        else if (message.includes("jurassic world")||message.includes("play jurassic world")){
            document.getElementById('jur').click();
            speak("okey")
    }
    else if (message.includes("search")||message.includes("SEARCH")){
        document.getElementById('searchInputv').click();
        speak("okey")
    }
    else {
    
        speak("sorry i can't understand");
      }
}