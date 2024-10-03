function toggleActivate() {
 let loadingTime = 500;
 let button = document.querySelector("button.slideButton");
 let slider = document.querySelector("button.slideButton div.slider");

 if(button.classList.contains("off")){
  button.style.cursor = "wait";
  button.classList.add("readonly")
  slider.classList.add("readonly");

  setTimeout(()=>{
   button.classList.remove("readonly");
   slider.classList.remove("readonly");
   button.style.cursor = "pointer";

   button.classList.remove("off");
   button.classList.add("on");
 
   slider.classList.remove("off");
   slider.classList.add("on");
  },loadingTime);

  return;
 } 

 if(button.classList.contains("on")){
  button.style.cursor = "wait";
  button.classList.add("readonly");
  slider.classList.add("readonly");

  setTimeout(()=>{
   button.classList.remove("readonly");
   slider.classList.remove("readonly");
   button.style.cursor = "pointer";

   button.classList.remove("on");
   button.classList.add("off");
 
   slider.classList.remove("on");
   slider.classList.add("off");
  },loadingTime);

  return;
 }
}