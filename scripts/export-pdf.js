(function () {
    'use strict';

    const exportBtn = document.getElementById('export-pdf');
    if (!exportBtn) return;

    exportBtn.addEventListener('click', function () {

        const btn = exportBtn;
        btn.disabled = true;
        btn.querySelector('.pdf-label').textContent = 'Exporting...';

        const controls = document.querySelector('.floating-controls');
        controls.style.display = 'none';

        const element = document.getElementById('cv-to-export');

        // detect language
        const lang = element.getAttribute('data-lang') || 'en';

        const fileName =
            lang === 'ge'
                ? 'Nato_Japaridze_CV_GE.pdf'
                : 'Nato_Japaridze_CV_EN.pdf';

        const opt = {
            margin: 0,
            filename: fileName,
            image: { type: 'jpeg', quality: 1 },
            html2canvas: {
                scale: 2,
                useCORS: true,
                logging: false
            },
            jsPDF: {
                unit: 'mm',
                format: 'a4',
                orientation: 'landscape'
            }
        };

        html2pdf().set(opt).from(element).save().then(function () {
            controls.style.display = '';
            btn.disabled = false;
            btn.querySelector('.pdf-label').textContent = 'PDF';
        });

    });
})();