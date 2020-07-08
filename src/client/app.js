import { checkForInfo } from './js/infoChecker'
import { handleSubmit } from './js/formHandler'
import { openModal } from './js/openModal'
import { updateUI } from './js/updateUI'

import './styles/main.scss'
import './styles/footer.scss'
import './styles/header.scss'
import './styles/modal.scss'

import plannerImg from './images/planner.jpg'
import cloudsImg from './images/clouds.jpeg'
import { stringify } from 'querystring'


async function performSearch() {
    const submitBtn = document.getElementById('search_btn');
    submitBtn.setAttribute('value', 'Searching...' );
    submitBtn.disabled = true;

    Client.handleSubmit(event);

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
})


//need to be edited
window.addEventListener('scroll', function () {
    // let fromTop = window.scrollY;
    let position = window.pageYOffset;

    const allLinks = document.querySelectorAll('.nav-link');
    console.log("allLinks: " + allLinks.length);


    allLinks.forEach((link) => {
        var sectionId = link.hash;
        sectionId = sectionId.substring(1);
        console.log("sectionId: " + sectionId);

        const sections = document.getElementById(sectionId);
        console.log("sctionss: "+ stringify(sections));


        // did not reach to any yet
        if (!sections) {
            return;
        }

        // Add active class
        if (sections.offsetTop <= position + 100) {
            performActiveNavItem(sections);
        }
    
    });
});




export {
    handleSubmit,
    checkForInfo,
    openModal,
    updateUI
}