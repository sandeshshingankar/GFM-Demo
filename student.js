document.addEventListener('DOMContentLoaded', function () {

    const buttons = document.querySelectorAll('.expand-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function () {

            const isExpanded = this.getAttribute('aria-expanded') === 'true';

            // Close all
            buttons.forEach(btn => {
                btn.setAttribute('aria-expanded', 'false');
            });

            // Open clicked
            if (!isExpanded) {
                this.setAttribute('aria-expanded', 'true');
            }
        });
    });

});

