const thumbnail = document.getElementsByClassName("placeholder")
const sample = document.querySelectorAll('.image-holder')
// console.dir(sample);


sample.forEach((s)=>{
  s.addEventListener("click",()=>{
    thumbnail[0].childNodes[1].src = s.children[0].src
  })
})