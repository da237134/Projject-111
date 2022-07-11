camera = document.getElementById("camera");

webcam.attach( '#camera' );

Webcam.set({
    width: 350,
    height: 310,
    image_format: 'jpeg',
    jpeg_quality: 90
});


classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/aSL2Mgo8U/model.json', modelLoaded);