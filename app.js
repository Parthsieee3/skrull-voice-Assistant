const btn = document.querySelector('.talk')
const content = document.querySelector('.content')


function speak(text){
    const text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate=1;
    text_speak.pitch=1;
    text_speak.volume=1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe(){
    var day= new Date();
    var hour =day.getHours();

   if(hour>=0 &&  hour<12){
    speak("Good Morning Boss...")
   }

   if(hour >= 12 && hour < 17){
    speak("Good Afternoon master how are you chuchu")
   }

   else{
    speak("Good Evening...")
   }

}

window.addEventListener( 'load', () => {
    speak("intializing SKRULL...");
    wishMe();
});


const SpeechRecognition = window.SpeechRecognition|| window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onresult = (event) =>{
    const currentIndex = event.resultIndex;
    const transcript = event.results[ currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
}

btn.addEventListener('click', () => {
    content.textContent = "Listening....."
    recognition.start();
})

function takeCommand(message){
        if(message.includes('hey') || message.includes('hello')){
            speak("Hello Sir How May I Help You?");
        }
        else if(message.includes("open google")){
            window.open("https://google.com", "_blank");
            speak("Opening Google...")
        }
        else if(message.includes("open youtube")){
            window.open("https://youtube.com", "_blank");
            speak("Opening Youtube...")
        }
        else if(message.includes("open facebook")){
            window.open("https://facebook.com", "_blank");
            speak("Opening facebook...")
        }
        else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
            window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
            const finalText = "This is what i found on internet regarding " + message;
            speak(finalText);
      
        }
        else if(message.includes("open twitter")){
            window.open("https://twitter.com", "_blank");
            speak("Opening Twitter...");
        }
        else if(message.includes("open instagram")){
            window.open("https://instagram.com", "_blank");
            speak("Opening Instagram...");
        }
        else if(message.includes("open github")){
            window.open("https://github.com", "_blank");
            speak("Opening GitHub...");
        }
        else if(message.includes("open linkedin")){
            window.open("https://linkedin.com", "_blank");
            speak("Opening LinkedIn...");
        }
        else if(message.includes("open pinterest")){
            window.open("https://pinterest.com", "_blank");
            speak("Opening Pinterest...");
        }
        else if(message.includes("open snapchat")){
            window.open("https://www.snapchat.com", "_blank");
            speak("Opening Snapchat...");
        }
        else if(message.includes("open tiktok")){
            window.open("https://tiktok.com", "_blank");
            speak("Opening TikTok...");
        }
        else if(message.includes('wikipedia')) {
            window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
            const finalText = "This is what i found on wikipedia regarding " + message;
            speak(finalText);
        }
        else if(message.includes('weather')) {
    window.open(`https://www.accuweather.com/${message.replace("weather", "")}`, "_blank");
    const finalText = "This is what i found on accuweather.com regarding " + message;
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
        else {
            window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
            const finalText = "I found some information for " + message + " on google";
            speak(finalText);
        } 
        
}