// My Global variables
const navBar_menu = document.getElementsByClassName('navbar__menu');
const navBar_ul = document.getElementById('navbar__list');
let sections = document.querySelectorAll('section');


//adding the list items dynamically
function addingList_item() {
    
  for (let section of sections) {

    sectionName = section.getAttribute('data-nav');
    sectionId = section.getAttribute('id');
    let List_item = document.createElement('li');
    let anchor_tag = document.createElement('a');
    anchor_tag.innerHTML = sectionName;
    anchor_tag.setAttribute('href','#'+sectionId)
    List_item.appendChild(anchor_tag);
    navBar_ul.appendChild(List_item);
   }

}

//The addition of the list items is done on page loading
document.addEventListener('DOMContentLoaded', addingList_item());
    

//I added here an scroll event listener to fire the change in the element which is in the view port
document.addEventListener('scroll', () => {
  for (let section of sections) {
  
  const rect = section.getBoundingClientRect();
    if (rect.bottom < window.innerHeight) { section.style.backgroundColor = '#C0C0C0'; }
    else{section.style.backgroundColor = 'rgba(255, 255, 255, 0.187)'; }
 
}})













