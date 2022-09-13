function listen() {
    let inputArea = document.getElementById('input-area')
    let outputArea = document.getElementById('output-area')
  
    var recognition = new webkitSpeechRecognition();
    recognition.lang = "en-GB";
    recognition.start();
  
  
  recognition.onresult = function(event) {
    let transcript = event.results[0][0].transcript;
    if (transcript.includes("hello")) {
      outputArea.innerHTML = "Hello, Welcome to Sastiksha! <br> Sastiksha is an educational website which provide books and notebooks to the users in best possible cost .<Br>It also promotes reuseability of the books so that no one is left without the book and the need are not being compromised as. It is sasti-siksha"
    }
else if (transcript.includes("NIT Jalandhar")) {
    window.open("https://www.nitj.ac.in/")
}
else if (transcript.includes("GDG Jalandhar")) {
    window.open("https://gdg.community.dev/")
}
else if (transcript.includes("YouTube")) {
    window.open("https://www.youtube.com/") 
}
else if(transcript.includes("Shiksha")){
    outputArea.innerHTML ="Sastiksha is an educational website which provide books and notebooks to the users in best possible cost it also promotes reuseability of the books so that no one is left without the book and the need are not being compromised as. It is sasti-siksha..."
}
else if(transcript.includes("name our team")){
        outputArea.innerHTML ="Ankit  Anjali  Roshni  Deepak Sukarayam"
    }
 else {
    outputArea.innerHTML = "I don't know what you mean."
}
inputArea.innerHTML = event.results[0][0].transcript;
  }
    
  }
