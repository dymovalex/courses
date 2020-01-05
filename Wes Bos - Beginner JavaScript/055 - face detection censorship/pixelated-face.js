const VIDEO_WIDTH = 640;
const VIDEO_HEIGHT = 360;
const options = {
    SIZE: 10,
    SCALE: 1.35
}

//Select elements
const video = document.querySelector('.webcam'); // Video from user's webcam

const canvas = document.querySelector('.video'); // Rectangle around face
const ctx = canvas.getContext('2d');


const faceCanvas = document.querySelector('.face'); // Pixelated frame
const faceCtx = faceCanvas.getContext('2d');

const optionsInputs = document.querySelectorAll('.controls input[type="range"]');

const faceDetector = new window.FaceDetector();
//console.log(faceDetector);

function handleOption (e) {
    const { value, name } = e.currentTarget;
    options[name] = parseFloat(value);
}


optionsInputs.forEach(input => input.addEventListener('input', handleOption));

//Write a function that will populate the user's video
async function populateVideo() {
    const stream = await navigator.mediaDevices.getUserMedia({
        video: {width: VIDEO_WIDTH, height: VIDEO_HEIGHT} // options. video can be just true
    });
    //console.log(stream);
    video.srcObject = stream; // put stream on video element
    video.play(); 

    //size the canvases to be the same size as the video
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    faceCanvas.width = video.videoWidth;
    faceCanvas.height = video.videoHeight;
}

//face detection function
async function detect() {
    const faces = await faceDetector.detect(video);
    //console.log(faces);
    //ask the browser when the next animation frame is, and tell it to run detect()
    faces.forEach(drawFace);
    faces.forEach(censor);
    requestAnimationFrame(detect); // it is avaible to put just a calling detect(). But requestAnimationFrame() is better because of performance reasons
}

function drawFace (face) {
    const { width, height, top, left} = face.boundingBox;
    ctx.clearRect(0, 0, canvas.width, canvas.height); //clearing the canvas
    ctx.strokeStyle = '#ffc600'; // drawing style of rectangle
    ctx.lineWidth = 2;
    ctx.strokeRect(top, left, width, height); //drawing a rectangle
}

function censor ({boundingBox: face}) { //destricturing and renamed it as face
    faceCtx.imageSmoothingEnabled = false; // remove default blurring
    faceCtx.clearRect(0, 0, faceCanvas.width, faceCanvas.height);
    //draw the small face
    faceCtx.drawImage(
        // 5 source args
        video, // from what image would be done (where does the source come from)
        face.x, // where to start X (where do we start the source pull from)
        face.y, // where to start Y (where do we start the source pull from)
        face.width,
        face.height,
        // 4 draw args
        face.x, // where should we start drawing the X
        face.y, // where should we start drawing the Y
        options.SIZE, // size of image
        options.SIZE
    )
    //draw the small face back on, but scale up
    const width = face.width * options.SCALE;
    const height = face.height * options.SCALE;
    faceCtx.drawImage(
        faceCanvas,
        face.x,
        face.y,
        options.SIZE,
        options.SIZE,
        face.x - (width - face.width) / 2,
        face.y - (height - face.height) / 2,
        width,
        height
    )
    

    //take that face back out and draw it back at normal size
}

populateVideo().then(detect); // launch detect function right after populateVideo