function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML='<img id+"captured_image" src="'+data_uri+'"/>';
    });
    }
    console.log('ml5 version: ', ml5.version);
    classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/0-yscdh8B/model.json', modelLoaded);

function modelLoaded(){
    console.log('Model Loaded!');

}
function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The first predition is"+ prediction_1;
    speak_data_2="And the second prediction is"+ predction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 = speak_data_2);
    utterThis.rate = 0.5;
    synth.speak(utterThis);
}
function check()
{
    img=document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
      console.error(error);
    } else {
      console.log(results);
      
      document.getElementById("result_object_name").innerHTML = results[0].label;
  
      gesture = results[0].label;
      
      toSpeak = "";
      
      if(gesture == "amazing")
      {
        toSpeak = "This is looking amazing";
        document.getElementById("result_object_gesture_icon").innerHTML = "&#128076;";
      }
      else if(gesture == "best")
      {
        toSpeak = "All the best";
        document.getElementById("result_object_gesture_icon").innerHTML = "&#128077;";
      }
      else if(gesture == "victory")
      {
        toSpeak = "That was the marvelous victory";
        document.getElementById("result_object_gesture_icon").innerHTML = "&#9996;";
      }
  
      speak();
    }
  }
  