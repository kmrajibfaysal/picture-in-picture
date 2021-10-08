/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// if ('pictureInPictureEnabled' in document) {
//     pipButton.classList.remove('hidden');
//     pipButton.disabled = false;

//     pipButton.addEventListener('click', () => {
//         video.requestPictureInPicture();
//     });
// }
const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream, pass to video element, then play

const selectMediaStream = async () => {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        };
    } catch (err) {
        // Catch Error here
        console.log('whoops, error here: ', err);
    }
};

button.addEventListener('click', async () => {
    // Disable Button
    button.disabled = true;
    // Start Picture in Picture
    await videoElement.requestPictureInPicture();
    // reset Button
    button.disabled = false;
});
// On Load
selectMediaStream();
