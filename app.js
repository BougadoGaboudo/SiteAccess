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

const hiddenElementsX = document.querySelectorAll('.hiddenX');
const hiddenElementsY = document.querySelectorAll('.hiddenY');
hiddenElementsX.forEach((el) => observer.observe(el));
hiddenElementsY.forEach((el) => observer.observe(el));