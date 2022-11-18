// NAV
const hamburger = document.querySelector('.hamburger');
const hamburger_icon = hamburger.querySelector('span');
const mobile_menu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', function () {
  this.classList.toggle('is-active');

    mobile_menu.classList.toggle('is-open');
});

// CONTACT

let nameError = document.getElementById('name-error');
let phoneError = document.getElementById('phone-error');
let emailError = document.getElementById('email-error');
let messageError = document.getElementById('message-error');
let submitError = document.getElementById('submit-error');

function validateName(){
  let name = document.getElementById('contact-name').value;

    // if no values, then error
    if(name.length == 0){
      nameError.innerHTML = 'Name is required';
      return false;
    }
    //if not 2 names with a space, then error. 
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
      nameError.innerHTML = 'Write full name';
      return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-square-check"></i>';
    return true;
}

function validatePhone(){
  let phone = document.getElementById('contact-phone').value;

  if(phone.length == 0){
    phoneError.innerHTML = 'Phone No. is required';
    return false;
  }

  if(phone.length !== 10){
    phoneError.innerHTML = 'Phone No. should be 10 digits';
    return false;
  }

  //should be digits 0-9 for 10 characters
  if(!phone.match(/^[0-9]{10}$/)){ 
    phoneError.innerHTML = 'phone No. should be digits only';
    return false;
  }

  phoneError.innerHTML = '<i class="fa-solid fa-square-check"></i>';
  return true;
}

function validateEmail(){
  let email = document.getElementById('contact-email').value;

  if(email.length == 0){
    emailError.innerHTML = 'Email is required'
    return false;
  }

  //  contain letters, can contain special characters or numbers, contains an @, and after that 2-4 more letters
  if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][A-Za-z]{2,4}$/)){
    emailError.innerHTML = 'Email is invalid'
    return false;
  }

  emailError.innerHTML = '<i class="fa-solid fa-square-check"></i>';
  return true;
}

function validateMessage(){
  let message = document.getElementById('contact-message').value;
  let required = 30;
  let remaining = required - message.length;

  if(remaining > 0){
    messageError.innerHTML = remaining + " more characters required";
    return false;
  }

  messageError.innerHTML = '<i class="fa-solid fa-square-check"></i>';
  return true;
}

function validateForm(){
  if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
    submitError.style.display = 'block';
    submitError.innerHTML = 'Please fix error to submit';
    setTimeout(function(){submitError.style.display = 'none';}, 3000);
    //after 3 seconds the message will time out and be hidden.
    return false;
  }
}


  
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

/*
fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCYfyw_5yG6dWNfMiWpMo3XA&maxResults=5&order=date&key=AIzaSyCPWe2EhTL0CIZ_JM5J2T8-iq1ktY3vi-w")
  .then((result)=>{
    return result.json()
  }).then((data)=>{
    console.log(data)
    let videos = data.items
    let videosContainer = document.querySelector(".youtubeContainer")
    for(video of videos){
        videosContainer.innerHTML += `
        <img src="${video.snippet.thumbnails.high.url}">
        <p>${video.snippet.title}</p>
      `
    }
  })
*/

  // COUNTDOWN
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
