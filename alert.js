let monBouton = document.querySelector('#bouton');
        monBouton.addEventListener('click', afficherAlerte);

        function afficherAlerte() {
            let monAlerte = document.querySelector('#alert');
            let contenuAlerte = document.querySelector('#alert-template').innerHTML;

            monAlerte.innerHTML = contenuAlerte;
        }

let boutonCache = document.querySelector('#alert');
    boutonCache.addEventListener('click', cacherAlerte);

    function cacherAlerte (){
            let remove = document.querySelector('#alert-template').innerHTML.remove();
    };

