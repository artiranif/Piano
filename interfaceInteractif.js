
let toucheactuelle = 0;

let bouttonmarquee = ()=>{
    for(let touchechercher in dicotouche){
        if(dicotouche[touchechercher]===trouvernote(objectif[toucheactuelle])){
            return touchechercher
        }
            
    } 
        
    throw "le bouton "+objectif[toucheactuelle]+" pour la touche n'existe pas =>"+toucheactuelle
}
let signe = ()=>document.getElementById(bouttonmarquee())

let affichenote = ()=>{document.getElementById('noteobjectif').innerHTML = `${nompartion.toUpperCase()}     : ${objectif[toucheactuelle]}`;}
let marquee = ()=>{
    signe().className += " cible"
    affichenote();
}
let demarquee = ()=>{
    let marquage = signe();
    marquage.className = marquage.className.replace(" cible","");
}
let next = ()=>{
    demarquee();
    toucheactuelle = (toucheactuelle+1)%objectif.length;
    marquee();
    
}
