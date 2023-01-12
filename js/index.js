
const imgs = [
    './images/background_01.jpg',
    './images/background_02.jpg',
    './images/background_03.jpg',
    './images/background_04.jpg'

]

let index = 0;

const max = imgs.length


const containerImg = document.querySelector(".container__information")

const slidePrev = document.querySelector(".slidePrev")

const slideNext = document.querySelector(".slideNext")


slidePrev.addEventListener("click",()=>{
    index--
    setImageIndex();
    backgroundImgs(imgs[index],containerImg)
})

slideNext.addEventListener("click",()=>{
    index++
    setImageIndex();
    backgroundImgs(imgs[index],containerImg )
})



function setImageIndex(){
    if(index < 0){
        index = max-1;
    }

    if(index === max){
        index =0;
    }
}

function backgroundImgs(backgroundImage, element){
    element.style.backgroundImage = `url(${backgroundImage})`
}




