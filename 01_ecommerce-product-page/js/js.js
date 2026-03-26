const thumbnail = document.getElementsByClassName("placeholder")
const sample = document.querySelectorAll('.image-holder')
const incress = document.querySelector('.incress')
const decress = document.querySelector('.decress')
const value = document.querySelector('.value')



sample.forEach((s)=>{
  s.addEventListener("click",()=>{
   const originalUrl = s.children[0].src
   const fullUrl = originalUrl.replace('-thumbnail', '');
   thumbnail[0].childNodes[1].src = fullUrl
  })
})

incress.addEventListener("click",()=>{
    value.textContent ++
})

decress.addEventListener("click",()=>{
  if(value.textContent > 0) {
    value.textContent --
  }
})
