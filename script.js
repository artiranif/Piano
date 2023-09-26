
const uppertouche = "WERTYUIOP[]";
const touche = "ASDFGHJKL;'\\";



var selectionpartition = document.getElementById('partition');

for(let notepartion in partition){
    selectionpartition.innerHTML += `<option value="${notepartion}">${notepartion}</option>`
}

selectionpartition.onchange = ()=>{
    demarquee()
    choixpartition()
    toucheactuelle = 0;
    marquee();
}

let nompartion;
let objectif;

let choixpartition = ()=>{
    nompartion = selectionpartition.value
    console.log("partition "+nompartion)
    objectif = partition[nompartion]

    let listecopie= objectif;
    objectif=[];
    for (let index = 0; index < listecopie.length; index+=2) {
        objectif.push(listecopie[index]+listecopie[index+1]);
    }
    
}
choixpartition()


console.log(objectif)







let listenote, listesuperieur;
let liste = listesansdiezenombre("C4",touche.length);
listenote = liste[0]
listesuperieur = liste[1]
console.log("taille",liste[0].length, touche.length)


let conteneur = document.querySelector(".container");
let rep =document.querySelector("#audio");
for(let index = 0; index < touche.length; index++){
    rep.innerHTML += `<audio id="song-${touche[index]}" src=${trouverfichier(listenote[index])}></audio>`;
}
for(let index = 0; index < listesuperieur.length; index++){
    
}



// creation touche
let iterator, dicotouche={};
let indextouche = 0;
for (const index in touche) {
    iterator = touche[index];
    dicotouche[iterator]=listenote[index];
    conteneur.innerHTML += `<div id="${iterator}" onmouseup=souris("${iterator}") class="key white black untouched" ><h3>${versionlettre(listenote[index])}</h3></div>`
    
    let notesup = listesuperieur[indextouche];
    if(listenote[index]+1 == notesup){
        let subiterator =uppertouche[index]; 
        dicotouche[subiterator]=notesup;
        console.log(listenote[index], notesup)
        conteneur.innerHTML += `<div id="${subiterator}" onmouseup=souris("${subiterator}") class="dieze untouched" ><h3>${versionlettre(notesup)}</h3></div>`
        rep.innerHTML += `<audio id="song-${subiterator}" src=${trouverfichier(listesuperieur[indextouche])}></audio>`;
        indextouche++
    }
    
}
console.log(dicotouche)
