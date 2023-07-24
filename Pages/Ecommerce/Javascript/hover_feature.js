let img = document.querySelectorAll(".boxes img")
let boxes = document.querySelectorAll('.boxes')
let imgSrc = {}
let img2Src = {}

for(let i = 0; i < img.length; i++){
    imgSrc[i] = img[i].src;
    console.log(imgSrc[i]);

    img2Src[i] = imgSrc[i].replace("img1", "img2");
    console.log(img2Src[i]);

    boxes[i].addEventListener('mouseenter', function(){
        img[i].src = img2Src[i];
    });

    boxes[i].addEventListener('mouseleave', function(){
        img[i].src = imgSrc[i];
    });
}


