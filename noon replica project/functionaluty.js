
const toggle=(event)=>{
     setTimeout(() => {
     
  if (event.target.nextElementSibling.classList.contains("show")) {
      
  
    const ww= event.target.nextElementSibling.firstElementChild.lastElementChild.getBoundingClientRect()
    console.log(ww) 
    const width=ww.width+300
    event.target.nextElementSibling.style.width=`${width}px`
  }
},10)}