function loadPopupForm() {
    disableBackToTopButton();
    const popupContainer = document.getElementById('popupContainer');
    popupContainer.style.display = 'flex';

    // Load the popup form content dynamically
    fetch('emailSignUp.html')
        .then(response => response.text())
        .then(html => {
            popupContainer.innerHTML = html;
        }).then(() => {
            // Now that the HTML content is set, you can call loadSchools()
            loadSchools();
        })
        .catch(error => {
            console.error('Error loading HTML:', error);
        });
}

function closePopup() {
    document.getElementById('popupContainer').style.display = 'none';
    enableBackToTopButton()
}

// JavaScript to disable the back-to-top button when the form is displayed
function disableBackToTopButton() {
    const backToTopButton = document.getElementById('backToTopButton');
    backToTopButton.classList.add('disabled');
}
  
// JavaScript to enable the back-to-top button when the form is closed
function enableBackToTopButton() {
    const backToTopButton = document.getElementById('backToTopButton');
    backToTopButton.classList.remove('disabled');
}

function loadSchools(){
    const colleges = ["Algonquin College", "Collège Boréal", "Cambrian College", "Canadore College", "Centennial College", "Conestoga College", "Confederation College", "Durham College",
                        "Fanshawe College", "Fleming College", "George Brown College", "Georgian College", "Humber College", "La Cité collégiale", "Lambton College", "Loyalist College",
                        "Mohawk College", "Niagara College", "Northern College", "St. Clair College", "St. Lawrence College", "Sault College", "Seneca College", "Sheridan College"];

    const universities = ["Algoma University", "Brock University", "Carleton University", "University of Guelph", "Université de Hearst", "Lakehead University", "Laurentian University",
                            "McMaster University", "Nipissing University", "NOSM University", "OCAD University", "Université de l’Ontario français", "Ontario Tech University", "University of Ottawa",
                            "Queen’s University", "University of Toronto", "Toronto Metropolitan University", "Trent University", "University of Waterloo", "Western University", "Wilfrid Laurier University",
                            "University of Windsor", "York University"];

    const allSchools = [...colleges, ...universities].sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

    // Populate the dropdown options
    const schoolDropdown = document.getElementById('school');
    allSchools.forEach(school => {
        const option = document.createElement('option');
        option.value = school.toLowerCase().replace(/\s+/g, '-');
        option.textContent = school;
        schoolDropdown.appendChild(option);
    });}