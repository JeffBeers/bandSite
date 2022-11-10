// NAV
const hamburger = document.querySelector('.hamburger');
const hamburger_icon = hamburger.querySelector('span');
const mobile_menu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', function () {
  this.classList.toggle('is-active');

    mobile_menu.classList.toggle('is-open');
});

//COUNDTOWN

/*
const countdown = () => {
  const countDate = new Date('April 1, 2023 00:00:00').getTime();
  const currentDate = new Date().getTime();
  const gap = countDate - currentDate;

  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

const textDays = Math.floor(gap / days); //math.floor rounds to nearest number
const textHours = Math.floor((gap % days) / hours);
const textMinutes = Math.floor((gap % hours) / minutes);
const textSeconds = Math.floor((gap % minutes) / seconds);

document.querySelector('.days').innerText = textDays;
document.querySelector('.hours').innerText = textHours;
document.querySelector('.minutes').innerText = textMinutes;
document.querySelector('.seconds').innerText = textSeconds;
};

countdown();
setInterval(countdown, 1000);

*/

//PHOTOS SLIDESHOW
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

//VIDEOS 
fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCYfyw_5yG6dWNfMiWpMo3XA&maxResults=5&order=date&key=AIzaSyCkkwFVC5lNa01jEz-WMejSqXb547LSD9o")
  .then((result)=>{
    return (result.json())
  }).then((data)=>{
    console.log(data)
    let videos = data.items
    let videoContainer = document.querySelector(".youtube-container")
    for(video of videos){
      let videoUrl = `https://www.youtube.com/watch?v=${video.id.videoId}`
      videoContainer.innerHTML += `
        <img src="${video.snippet.thumbnails.high.url}">
        <p>${video.snippet.title}</p>
      `
    }
  })


  //COUNTDOWN

  const countdown = () => {
    const releaseDate = new Date('April 1, 2023 00:00:00').getTime();
    const currentDate = new Date().getTime();
    const gap = releaseDate - currentDate;
  
    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;
  
  const textDays = Math.floor(gap / days); //math.floor rounds to nearest number
  const textHours = Math.floor((gap % days) / hours);
  const textMinutes = Math.floor((gap % hours) / minutes);
  const textSeconds = Math.floor((gap % minutes) / seconds);
  
  document.querySelector('.days').innerText = textDays;
  document.querySelector('.hours').innerText = textHours;
  document.querySelector('.minutes').innerText = textMinutes;
  document.querySelector('.seconds').innerText = textSeconds;
  };
  
  countdown();
  setInterval(countdown, 1000);