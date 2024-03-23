let modifyTitle = false;

document.querySelector('h1').addEventListener('click', function() {
    if(!modifyTitle) {
        const title = document.querySelector('h1');
        const newTitle = prompt('Entrez le nouveau titre :', title.innerText);
        if(newTitle !== null && newTitle !== '') {
            title.innerText = newTitle
            modifyTitle = true;
        }
    }
})

const segondaryTitle = document.querySelectorAll('.title');

segondaryTitle.forEach(function(titre) {
    titre.addEventListener('click', function() {
        var couleur = prompt("Entrez une couleur au format hexadécimal (#RRGGBB) :");
        if (/^#([0-9A-F]{3}){1,2}$/i.test(couleur)) {
            segondaryTitle.forEach(function(titreSecondaire) {
                titreSecondaire.style.color = couleur;
            });
            document.querySelector('h1').style.color = couleur;
        } else {
            alert("Format de couleur invalide. Veuillez entrer une valeur au format hexadécimal (#RRGGBB).");
        }
    });
});

function createElements() {
    const projects = document.querySelectorAll('.technos');
    projects.forEach(function(project) {
        const label = document.createElement('label');
        label.textContent = 'Tecnologies utilisées';

        const input = document.createElement('input');
        input.type = 'text';
        input.readOnly = true;
        input.size = 15;

        const button = document.createElement('button');
        button.textContent = 'Voir';
        button.onclick = function() {
            showMe(input)
        }

        project.appendChild(label)
        project.appendChild(input)
        project.appendChild(button)

    })
}

function showMe(inputElement) {
    const projectTechnos = getTechnos();
    inputElement.value = projectTechnos;
    inputElement.parentElement.style.display = 'inline-block'
}

function getTechnos() {
    return 'HTML, CSS, JS'
}

document.addEventListener('DOMContentLoaded', createElements)

const joke = "Comment appelle-t-on un chat tombé dans un pot de peinture le jour de Noël ? Un chat-peint de Noël !";

function displayJoke() {
    alert(joke)
}

const time = 10000;

setTimeout(displayJoke, time);