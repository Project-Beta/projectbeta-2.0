window.addEventListener('load', () => {

    console.log('check')

    const tabs = document.querySelectorAll('#stage1 .tabs .tab');
    const requestForm = document.querySelector('#request-form');
    const confirmForm = document.querySelector('#confirm-form');

    const toggleDisplay = () => {
        requestForm.classList.toggle('nodisplay');
        confirmForm.classList.toggle('nodisplay');
        [...tabs].map(el => {
            el.classList.toggle('active');
            el.classList.toggle('inactive');
        })
    };

    [...tabs].map(el => {
        el.addEventListener('click', () => {
            if (el.classList.contains('inactive')) {
                toggleDisplay();
            } else {
            }
        })
    });

})