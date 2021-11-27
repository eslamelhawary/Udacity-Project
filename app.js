// My Global variables
const navBar_menu = document.getElementsByClassName('navbar__menu');
const navBarUl = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');
const topButton = document.getElementById('btn');
const section1 = document.getElementById('section1');


function addingList_item() {
    for (let section of sections) {
        let sectionName = section.getAttribute('data-nav');
        let ListItems = document.createElement('li');
        let anchorTag = document.createElement('button');
        anchorTag.innerHTML = sectionName;
        ListItems.appendChild(anchorTag);
        navBarUl.appendChild(ListItems);
        anchorTag.addEventListener ('click', () => {
            section.scrollIntoView({
                behavior: "smooth",
                block: "end"
            })
        })

    }
    topButton.addEventListener('click', () => {
        section1.scrollIntoView({
            behavior: "smooth",
        block:'end'})
    })
}
//The addition of the list items is done on page loading

    function getElementsPosition() { 
      for (let section of sections) {
          let sectionPosition = section.getBoundingClientRect();
          if (sectionPosition.top <= window.innerHeight && sectionPosition.bottom >= window.innerHeight)
              {section.classList.add('my_class')}
          else { section.classList.remove('my_class'); }
}
    }
 document.addEventListener('DOMContentLoaded', addingList_item());
document.addEventListener('scroll', getElementsPosition);