fetch("chocolatier.json")
    .then((rep) => {
        return rep.json();
    })
    .then((donne) => {
        console.log(donne);
        afficher(donne);

    });

// Rôle : Insérer les code du json
// Paramètre : 
// Retour : Aucun 
function afficher(donne) {
    console.log(donne.bouton);
    console.log(donne.nomEntreprise);
    console.log(donne.slogan);
    let bout = donne.bouton;
    let nom = donne.nomEntreprise;
    let slogan = donne.slogan;





//----- titre

    let container = document.querySelector(`.Container`)
    container.innerHTML += `
                    <img src="/image/baniereChocolat.png" alt="">
                  <div>
                      <h2>${slogan}</h2>
                      <h1>${nom}</h1>
                      <a href=""></a>
                  </div>
                  `


    donne.produits.forEach(prod => {
        console.log(prod.titre);
        console.log(prod.presentation);
        console.log(prod.imageurl);

        let titre = prod.titre;
        let presen = prod.presentation;
        let image = prod.imageurl;
        


        // ------ produits

        let ContainerProduits = document.querySelector(`.ContainerProduits`)
        ContainerProduits.innerHTML += `
        <section class="section flex">
                    <div>
              <img
                src="${image}"
                alt="">
              <h3>${titre}</h3>
              <p>${presen}</p>
            </div>
            </section>
            `
     });
   



     //------ bénéfices
 let bene = donne.listeBeneficesClients;

    let listeI = "";
console.log(bene)


    bene.forEach(benef => {
       listeI+=`<li>${benef}</li>`
    });
    let Bénéfices = document.querySelector(`.Bénéfices`)
    Bénéfices.innerHTML+=`${listeI}`




    //------- avis

      donne.clients.forEach(clients => {
        console.log(clients.titre);
        console.log(clients.presentation);
        console.log(clients.imageurl);

        let nom = clients.nom;
        let presentation = clients.typePrestation;
        let commentaire = clients.commentaire;
        let note =clients.note;

        let avis  = document.querySelector(`.avis`)
        avis.innerHTML += ` <div>
            <h4>${nom}</h4>
            <p>${presentation}</p>
            <p>${commentaire}</p>
            <p>${note}</p>
          </div>
          <div>
         `
     })




};









