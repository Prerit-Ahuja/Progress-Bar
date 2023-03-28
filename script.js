
const all__pictures = document.querySelectorAll('.picture__content');
const design__pics = document.querySelectorAll('.design__pictures');
const brand__pics = document.querySelectorAll('.brand__pictures');
const photos = document.querySelectorAll('.photos__pictures');

const designType = document.querySelector('.design__type');
const allType = document.querySelector('.all__type');
const brandType = document.querySelector('.brand__type');
const photosType = document.querySelector('.photos__type');

const my__icon = document.querySelector('.icon');

my__icon.addEventListener('click', ()=>{
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
})

function all(){
  for(let i=0; i<all__pictures.length; i++){
      all__pictures[i].classList.remove('show');
      all__pictures[i].classList.add('hide');
  }
}

function design(){
  for(let i=0; i<design__pics.length; i++){
    
      design__pics[i].classList.remove('show');
      design__pics[i].classList.add('hide');
    
  }
}

function brand(){
  for(let i=0; i<brand__pics.length; i++){
    design__pics[i].classList.remove('show');
    design__pics[i].classList.add('hide');
}
}

function photosFunc(){
    for(let i=0; i<photos.length; i++){
    photos[i].classList.remove('show');
    photos[i].classList.add('hide');
    }
}


// all pics

  allType.addEventListener('click', ()=>{
    designType.classList.remove('active');
    brandType.classList.remove('active');
    photosType.classList.remove('active');
    allType.classList.add('active');
    for(let i=0; i<all__pictures.length; i++){
    design();
    brand();
    photosFunc();
    all__pictures[i].classList.remove('hide');
    all__pictures[i].classList.add('show');
  }
})

// design pics

  designType.addEventListener('click', ()=>{
    allType.classList.remove('active');
    photosType.classList.remove('active');
    brandType.classList.remove('active');
    designType.classList.add('active');
    for(let i=0; i<design__pics.length; i++){
    all();
    brand();
    photosFunc();
    design__pics[i].classList.remove('hide');
    design__pics[i].classList.add('show');
    }
  })


// brand pics

  brandType.addEventListener('click', ()=>{
    allType.classList.remove('active');
    designType.classList.remove('active');
    photosType.classList.remove('active');
    brandType.classList.add('active');
    for(let i=0; i<brand__pics.length; i++){
    all();
    design();
    photosFunc();
    brand__pics[i].classList.remove('hide');
    brand__pics[i].classList.add('show');
  }
})

//photos pics

  photosType.addEventListener('click', ()=>{
    allType.classList.remove('active');
    designType.classList.remove('active');
    brandType.classList.remove('active');
    photosType.classList.add('active');
    for(let i=0; i<photos.length; i++){
    all();
    design();
    brand();
    photos[i].classList.remove('hide');
    photos[i].classList.add('show');
  }
})


// script for loop text:
var type = new Typed(".my__intro", {
    strings:["", "I'm Prerit Ahuja.", "I'm a Web Developer.", "I'm a Frontend Developer.", "I'm a Designer" ],
    typeSpeed: 150,
    BackSpeed: 80,
    loop: true,
});


// top scroll
const scrollBar = document.querySelector(".scroll__bar");
let olddist = 500;

const progressFunction = ()=>{
  // height of the whole HTML document
  const webPageHeight = document.body.scrollHeight;
  // distance of scroll from top
  const scrollDistance = document.documentElement.scrollTop;
  // height of the content that is viewable on the screen
  const windowHeight = document.documentElement.clientHeight;

  //  console.log(webPageHeight);
  //  console.log(scrollDistance);
  //  console.log(windowHeight); 

  const percentage = (scrollDistance / (webPageHeight - windowHeight)) *100;
  
  // console.log(Math.round(percentage));
  console.log(scrollDistance);

  if(scrollDistance - olddist >= 500 || scrollDistance - olddist <= -500){
    olddist = scrollDistance;
    scrollBar.classList.add("trans");
    randomColor();
  }
  scrollBar.style.width = Math.round(percentage) + '%';
}

document.addEventListener("scroll", progressFunction);
// Random color scroll
const randomColor = ()=>{
  var array = [];
  for(let i=0; i<3; i++){
    var value = Math.floor(Math.random() * 256);
    array.push(value);
  }
  var RGBvalue = 'rgb(' + array[0] + ',' + array[1] + ',' + array[2] + ')';
  scrollBar.style.backgroundColor = RGBvalue;
  // console.log(RGBvalue);
}

// script for swipper:
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    centeredSlides: false,
    slidesPerGroupSkip: 2,
    spaceBetween: 30,
    grabCursor: true,
    breakpoints: {
      769: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      0:{
        slidesPerView: 1,
        slidesPerGroup: 1,
      }


    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });




