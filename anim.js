/* Animation Transition */

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
const hiddenElementsX = document.querySelectorAll('.hiddenX');
const hiddenElementsXRight = document.querySelectorAll('.hiddenXRight');
const hiddenElementsY = document.querySelectorAll('.hiddenY');
hiddenElements.forEach((el) => observer.observe(el));
hiddenElementsX.forEach((el) => observer.observe(el));
hiddenElementsXRight.forEach((el) => observer.observe(el));
hiddenElementsY.forEach((el) => observer.observe(el));