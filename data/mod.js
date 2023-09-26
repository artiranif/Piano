var table = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];
let start = table.indexOf("A");

let isnumeric = (lettre)=>{
    return typeof(lettre)=="number"
}
let trouvernote = (lettre)=>{
    console.log("lettre",lettre);
    if(isnumeric(lettre)) return lettre;
    
    let index = lettre.length-1;

    let num = lettre[index];
    
    
    lettre = lettre.substring(0,index);
    let resultat = table.indexOf(lettre)+12*num-start+1
    console.log("resultat",resultat)
    return resultat;
};
let versionlettre=(chiffre)=>{
    chiffre = chiffre-1+start

    let lettre = chiffre%12
    chiffre = (chiffre-lettre)/12
    lettre = table[lettre]

    return lettre+chiffre
}
console.log(versionlettre(4))
let trouverfichier = (lettre)=>{
    return `data/${trouvernote(lettre)}.wav`
}
let listetouche = (debut, fin)=>{
    let liste = []
    for (let index = debut; index < fin; index++) {
        const element = array[index];
        liste.push(trouverfichier(index))    
    }
    return listetouche;
}

let estdieze = (chiffre)=>{
    chiffre = (chiffre)%12;
    return [0,2,5,7,10].indexOf(chiffre)!=-1
}

let listesansdieze= function(debut, fin){
    let liste = [[],[]];
    debut = trouvernote(debut);
    fin = trouvernote(fin);
    let tab;
    for(let index = debut; index<fin;index++) {
        tab = liste[0];
        if(estdieze(index)){
            tab = liste[1];
        }
        tab.push(index)
    }
    return liste;
}

let listesansdiezenombre = function(debut, nombre){
    let liste = [[],[]];
    debut = trouvernote(debut);
    let tab;
    for(let index = debut; 0<nombre;) {
        if(estdieze(index)){
            tab = liste[1];
        }
        else{
            tab = liste[0];
            nombre--;
        }
        tab.push(index)
        index++;
    }
    return liste;
}
let testdieze = ()=>{
    let reponse = []
for(let lettre of "ABCDFEG"){

    for(let index = 0;index<9;index++){
        var valeur = trouvernote(lettre+index)
        reponse.push(estdieze(valeur));
    }
        
    
    console.log(lettre,reponse);
}

}
