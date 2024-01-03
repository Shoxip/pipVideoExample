const video = document.getElementById('myVideo');
const pipButton = document.getElementById('pipButton');

if ('pictureInPictureEnabled' in document) {
  pipButton.addEventListener('click', () => {
    if (document.pictureInPictureElement === video) {
      document.exitPictureInPicture()
        .catch(error => {
          console.error('Ошибка при выходе из режима PiP:', error);
        });
    } else {
      video.requestPictureInPicture()
        .catch(error => {
          console.error('Ошибка при запросе PiP:', error);
        });
    }
  });

  video.addEventListener('enterpictureinpicture', () => {
    pipButton.textContent = 'Выйти из режима "Картинка в картинке"';
  });

  video.addEventListener('leavepictureinpicture', () => {
    pipButton.textContent = 'Включить режим "Картинка в картинке"';
  });
} else {
  pipButton.style.display = 'none';
}