// NAV
const hamburger = document.querySelector('.hamburger');
const hamburger_icon = hamburger.querySelector('span');
const mobile_menu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', function () {
  this.classList.toggle('is-active');

    mobile_menu.classList.toggle('is-open');
});

//GALLERY SLIDESHOW
let i = 0; // 0-based index. start point.
let images = ['imgGallery/olrb1.JPG', 
              'imgGallery/olrb2.JPG', 
              'imgGallery/olrb3.jpg',
              'imgGallery/olrb4.JPG',
              'imgGallery/olrb5.JPEG',
              'imgGallery/olrb6.jpg',
              'imgGallery/olrb7.JPG',
              'imgGallery/olrb8.jpg',
              'imgGallery/olrb9.png',
              'imgGallery/olrb10.png',
              'imgGallery/olrb11.JPG',
              'imgGallery/olrb12.jpg']
let time = 3000;

    // to change images
function changeImg() {
  document.slide.src = images[i]; //html img has name attribute of slide. image[i] sets it to first image.


  if (i < images.length - 1){   //checks if it is last image.
    i++;
  } else {
      i = 0; //if it is at last index, then it resets to 0.
    }

    setTimeout("changeImg()", time); //runs function every so many seconds set above.
  } 

window.onload = changeImg; //this runs the changeImg unction as soon as page loads (onload).
