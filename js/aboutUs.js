const container = document.querySelector('.snap-container');
const sections = document.querySelectorAll('.section');

var circle1 = document.getElementById("circle1");
var circle2 = document.getElementById("circle2");
var circle3 = document.getElementById("circle3");

var line1 = document.getElementById("line1");
var line2 = document.getElementById("line2");


container.addEventListener('scroll', () => {
    let currentSectionId = '';

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        // Adjust for container's offset relative to viewport
        const containerRect = container.getBoundingClientRect();
        const sectionRect = {
            top: rect.top - containerRect.top,
            bottom: rect.bottom - containerRect.top
        };

        if (sectionRect.top <= window.innerHeight / 2 && sectionRect.bottom >= window.innerHeight / 2) {
            currentSectionId = section.id;
        }
    });

    if(currentSectionId == 'section1') {
        circle1.style.backgroundColor = 'rgba(1, 112, 184, 1)';
        
        circle2.style.backgroundColor = 'white';
        circle3.style.backgroundColor = 'white';
        line1.style.backgroundColor = 'black'
        line2.style.backgroundColor = 'black'
    }
    else if(currentSectionId == 'section2') {
        circle1.style.backgroundColor = 'rgba(1, 112, 184, 1)';
        
        circle2.style.backgroundColor = 'rgba(1, 112, 184, 1)';
        circle3.style.backgroundColor = 'white';
        line1.style.backgroundColor = 'rgba(1, 112, 184, 1)'
        line2.style.backgroundColor = 'black'
    }
    else if(currentSectionId == 'section3') {
        circle1.style.backgroundColor = 'rgba(1, 112, 184, 1)';
        
        circle2.style.backgroundColor = 'rgba(1, 112, 184, 1)';
        circle3.style.backgroundColor = 'rgba(1, 112, 184, 1)';
        line2.style.backgroundColor = 'rgba(1, 112, 184, 1)'
    }

    // sections.forEach(section => {
    //     if (section.id === currentSectionId) {
    //         console.log(section.id)
    //         console.log(currentSectionId)
    //         section.classList.add('active');
    //     } else {
    //         section.classList.remove('active');
    //     }
    // });

    // console.log('Current Section:', currentSectionId);
});