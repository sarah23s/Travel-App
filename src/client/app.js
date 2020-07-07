import { checkForInfo } from './js/infoChecker'
import { handleSubmit } from './js/formHandler'

import './styles/main.scss'
import './styles/footer.scss'
import './styles/header.scss'

import plannerImg from './images/planner.jpg'
import cloudsImg from './images/clouds.jpeg'



async function performSearch() {
    // console.log("IN SEARCHHHH");
    const submitBtn = document.getElementById('search_btn');

    submitBtn.textContent = 'Searching...';
    submitBtn.disabled = true;

    handleSubmit(event);

    submitBtn.textContent = 'Search';
    submitBtn.disabled = false;
}

function performDelete(target) {
    // console.log("IN DELEETTEEEE");
    let confirmation = confirm("Do you really want to delete this trip?")
    if (confirmation) {
        const deleteDiv = target.parentElement.parentElement;
        deleteDiv.remove();
    }
}

function performActiveNavItem(target) {
    // console.log("IN ACTIVE NAV ITEM");

    const activeSecLi = document.querySelector('.active_nav');
    if (!(activeSecLi === null)) {
        activeSecLi.classList.remove('active_nav');
    }

    target.classList.add('active_nav');
}

function performSave() {
    console.log("IN SAVEEEE");
}




document.addEventListener('click', function (e) {
    if (e.target.className === 'delete_trip_btn') {
        performDelete(e.target);
    }
    if (e.target.className === 'nav-item' || e.target.className === 'nav-link') {
        if (e.target.className === 'nav-link') {
            performActiveNavItem(e.target.parentElement);
        }
        else {
            performActiveNavItem(e.target);
        }
    }
    else if (e.target.id === 'search_btn') {
        performSearch();
    }
    else if (e.target.id === 'save_btn') {
        performSave();
    }
})



export {
    handleSubmit,
    checkForInfo,

    // updateUI
}