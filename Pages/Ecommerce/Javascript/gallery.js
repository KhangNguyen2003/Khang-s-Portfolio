let sideIMGs = document.querySelectorAll('.sideIMG img')
let mainIMG = document.getElementById('mainIMG')
let sideIMGs_src = []


sideIMGs.forEach((img) => {
  sideIMGs_src.push(img.src)
});

console.log(sideIMGs_src);
console.log(mainIMG)

for(let i = 0;i<sideIMGs.length;i++){
    sideIMGs[i].addEventListener('click',function(){
        console.log("clicked")
        mainIMG.src=sideIMGs_src[i]

        for(let i = 0;i<sideIMGs.length;i++){
            sideIMGs[i].classList.remove("active")  
        }
          sideIMGs[i].classList.add("active")        
    })
}