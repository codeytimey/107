function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kPDyVbq4N/model.json', modelReady);
}

function modelReady(){
classifier.classify(gotResults);
}

function gotResults(error, results) {
console.log('Got Results');
}