(function() {
    'use strict';

   function animateProgressBars() {
    const progressBars = document.querySelectorAll('.skill-progress');

    progressBars.forEach((bar, index) => {
        const target = parseInt(bar.getAttribute('data-progress'));
        bar.style.width = '0%';
        bar.style.transition = "width 1s ease"; // smooth animation

        setTimeout(() => {
            bar.style.width = target + "%";  // animate to final value
        }, index * 300);
    });
}

window.addEventListener('load', () => {
    setTimeout(animateProgressBars, 300);
});
})();