document.addEventListener("DOMContentLoaded", function() {
    const phoneNumbers = document.querySelectorAll('.phone');
    const copyPopup = document.getElementById('copyPopup');

    phoneNumbers.forEach(number => {
        number.addEventListener('click', () => {
            const text = number.textContent.trim();

            navigator.clipboard.writeText(text).then(() => {
                // Show popup with animation
                copyPopup.classList.add('show');

                // Hide after 1.5 seconds
                setTimeout(() => {
                    copyPopup.classList.remove('show');
                }, 1500);
            }).catch(err => {
                console.error('Failed to copy!', err);
            });
        });
    });
});