document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.info-section');
    const menuItems = document.querySelectorAll('#menu ul li a');

    menuItems.forEach(item => {
        item.addEventListener('click', function (event) {
            event.preventDefault();

            const targetSectionId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetSectionId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });

            highlightMenuItem(targetSectionId);
        });
    });

    function highlightMenuItem(selectedId) {
        sections.forEach(section => {
            const menuItem = document.querySelector(`#menu ul li a[href="#${section.id}"]`);

            if (section.id === selectedId) {
                menuItem.classList.add('selected');
            } else {
                menuItem.classList.remove('selected');
            }
        });
    }
});
