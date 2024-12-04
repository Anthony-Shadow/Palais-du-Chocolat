fetch("chocolatier.json")
.then((rep) => {
    return rep.json
})
.then((donne) =>{
    console.log(donne);
    donne.forEach(element => {
        afficher(element);
    });
});
// ** Fonction : afficher **
// Rôle : Insérer les code du json
// Paramètre : 
// Retour : Aucun (la fonction manipule directement le DOM)
function afficher(recetteActuelle) {
    let img = recetteActuelle.img; 
    let portions = recetteActuelle.portions; 
    let tpsPreparation = recetteActuelle.tempPreparation; 
    let tpsCuisson = recetteActuelle.tempCuisson; 
    let difficulte = recetteActuelle.difficulte;
    let nomRecette = recetteActuelle.nom; 
}

document.querySelector("#container").innerHTML +=`
<div class="Container">
<header class="flex  spaceBetween alignCenter">
    <img src="/image/logo-chocolat-1.png" alt="">
    <nav class="navheader">
        <ul class="flex spaceBetween bold">
            <li>
                <a href="">Acceuil</a>
            </li>
            <li>
                <a href="">Produits</a>
            </li>
            <li>
                <a href="">Benefices</a>
            </li>
            <li>
                <a href="">Avis</a>
            </li>
        </ul>
    </nav>
 

</header>
<main>
    <!-- le slogan et le nom (accueil)-->
    <section>
        <img src="" alt="">
        <div>
            <h2></h2>
            <h1></h1>
            <a href=""></a>
        </div>
    </section>

        <!--produits-->
    <section>
        <h2></h2>
        <div><img src="" alt="">
            <h3></h3>
            <p></p>
        </div>
        <div><img src="" alt="">
            <h3></h3>
            <p></p>
        </div>
        <div><img src="" alt="">
            <h3></h3>
            <p></p>
        </div>
        <div><img src="" alt="">
            <h3></h3>
            <p></p>
        </div>
        <div><img src="" alt="">
            <h3></h3>
            <p></p>
        </div>
        <div><img src="" alt="">
            <h3></h3>
            <p></p>
        </div>
    </section>
    <!--benefices-->
<section>
        <h2></h2>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <img src="/image/ogo-chocolat-2.png" alt="">
    </section>
    <!--avis-->
<section>
        <h2></h2>
        <div>
            <h4></h4>
            <p></p>
            <div></div>
        </div>
        <div>
            <h4></h4>
            <p></p>
            <div></div>
        </div>
        <div>
            <h4></h4>
            <p></p>
            <div></div>
        </div>
    </section>
</main>

<footer></footer>
</div>
`