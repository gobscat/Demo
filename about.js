let prevBbtn = document.getElementById("prev-btn");
let nextBbtn = document.getElementById("next-btn")
let slider = document.getElementById("image-style");
let text = document.getElementById("text")

const client_id ="zOTsy4hAQlrtBMLR3UCM3m_W3blUZLmE4_BiM7C379c"
const query = 'phone';
const orientation = "landscape";


fetch(`https://api.unsplash.com/search/photos?client_id=${client_id}&query=${query}&orientation=${orientation}`)
.then(res=> res.json())
.then((data)=>{
  console.log(data.results);
  
  let index = 0;
  slider.src = `${data.results[0].urls.regular}` ;


  // prevBbtn.addEventListener("click", () => {
    // index--;
    // if(index < 0) {
        // index = data.results.length-1;
    // }
    // slider.src = `${data.results[index].urls.regular}`;

  // })  


  // nextBbtn.addEventListener("click", () => {

    // index++;
    // if(index >= data.results.length) {
        // index = 0;
    // }
    
    // slider.src = `${data.results[index].urls.regular}` ;

  // })

  const interval = setInterval(function() {
    start();
  }, 3000);

  start = () => {

    slider.src = `${data.results[index++].urls.regular}`;
    if(index > data.results.length-1 ){
    index = 0;
  }

}

}).catch(err => {console.log(err)});





const menuIcon=document.querySelector('.hamburger-menu');
console.log(menuIcon)
const menuDropDown= document.querySelector('.hamburger-items');
console.log(menuDropDown)


menuIcon.addEventListener('click',function(){
  menuDropDown.classList.toggle('d-none')
})





 
  // toggle script




