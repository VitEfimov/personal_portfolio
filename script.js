const aboutlinks = document.getElementsByClassName("about__link");
const aboutContentTab = document.getElementsByClassName("about__content-tab")

function openTab(tabName) {
    for (const tablink of aboutlinks) {
        tablink.classList.remove("active_link")
    }
    for (const tabcontent of aboutContentTab) {
        tabcontent.classList.remove("active_tab")
    }
    event.currentTarget.classList.add("active_link")
    document.getElementById(tabName).classList.add("active_tab")
}

// document.addEventListener('DOMContentLoaded', function () {
//     let seeMoreBtn = document.querySelector('.see-more');
//     let hiddenProjectList = document.querySelectorAll('.hidden');

//     let projectList = document.querySelector('.project__list');

//     function openProject() {
//         if (projectList.style.display === "grid") {
            
//             projectList.style.display = "flex";
//             projectList.style.flexDirection = "column";
//             for (let i = 0; i < hiddenProjectList.length; i++) {
//                 hiddenProjectList[i].classList.remove('hidden');
//             }
//             projectList.classList.add('column');
//             seeMoreBtn.textContent = "See less"; 
//         } else {
//             projectList.style.display = "grid";
//             for (let i = 0; i < hiddenProjectList.length; i++) {
//                 hiddenProjectList.classList.add('hidden');
// hiddenProjectList.style.display = "none";
//             }
//             projectList.classList.remove('column');
//             seeMoreBtn.textContent = "See more"; 
//         }
//     }


//     seeMoreBtn.addEventListener('click', openProject);
// });