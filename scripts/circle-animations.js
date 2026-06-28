(function() {
    'use strict';

    const radius = 50;
    const circumference = 2 * Math.PI * radius;

    function animateCircles() {
        const circles = document.querySelectorAll('.circle-progress');
        
        circles.forEach((circle, index) => {
            const progress = parseInt(circle.getAttribute('data-progress'));
            
            circle.style.strokeDasharray = circumference;
            circle.style.strokeDashoffset = circumference;
            
            setTimeout(() => {
                const offset = circumference - (progress / 100) * circumference;
                circle.style.strokeDashoffset = offset;
            }, index * 200);
        });
    }

    window.addEventListener('load', () => {
        setTimeout(animateCircles, 300);
    });

    const circleItems = document.querySelectorAll('.circle-item');
    
    circleItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const circle = this.querySelector('.circle-progress');
            circle.style.transition = 'filter 0.3s ease';
        });
    });

})();