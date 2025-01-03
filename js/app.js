// Bouton scroll vers haut de page

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })

})

// Changement thème couleur

let DarkMode = true;

function applyTheme() {
    const root = document.documentElement;
    if (DarkMode) {
      // Passage au thème sombre
      root.style.setProperty('--background-color', 'black');
      root.style.setProperty('--header-color', 'black');
      root.style.setProperty('--footer-color', '#333');
      root.style.setProperty('--special-text-color', 'white');
      root.style.setProperty('--page-color', 'white');
      root.style.setProperty('--btn-text-color', 'black');
      root.style.setProperty('--btn-color', '#F5CA23');
      root.style.setProperty('--btn-color-hover', '#e6b800');
      root.style.setProperty('--contact-back-color', '#2A2A2A');
      root.style.setProperty('--border-color', 'white');
    } else {
      // Passage au thème clair
      root.style.setProperty('--background-color', '#F0F0F0');
      root.style.setProperty('--header-color', '#556C96');
      root.style.setProperty('--footer-color', '#556C96');
      root.style.setProperty('--special-text-color', 'white');
      root.style.setProperty('--page-color', 'black');
      root.style.setProperty('--btn-text-color', 'black');
      root.style.setProperty('--btn-color', '#F5CA23');
      root.style.setProperty('--btn-color-hover', '#e6b800');
      root.style.setProperty('--contact-back-color', '#C3C3C3');
      root.style.setProperty('--border-color', 'black');
    }
}

function switchTheme() {
    DarkMode = !DarkMode;
    applyTheme();
}

// Envoi email

function envoyerEmail() {
    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("avis").value;

    if (nom && email && message) {
        const sujet = `Avis de ${nom}`;
        const corps = `Bonjour,\n\nVoici un avis soumis depuis votre site web :\n\nNom : ${nom}\nEmail : ${email}\nAvis :\n${avis}\n\nCordialement,`;
        const mailto = `mailto:loan.allard@gmail.com?subject=${encodeURIComponent(sujet)}&body=${encodeURIComponent(corps)}`;
        window.location.href = mailto;
    } else {
        alert("Veuillez remplir tous les champs !");
    }
}