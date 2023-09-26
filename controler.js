let souris = (key)=>{
    jouer(key)
    setTimeout(()=>{
        depresser(key)
        console.log('hey')
    
    },300)
    
    let son = document.getElementById("song-"+key);
    son.attente = false;
}

let terminer = (note)=>{
    depresser(note)
    let son = document.getElementById("song-"+note);
    if(son)
    son.attente = false;
}
//eventlistener for key press using keydown
var touchepresser = []
document.addEventListener('keydown',e=>{
let key=e.key.toUpperCase();
console.log(key, uppertouche.indexOf(key))
let index = (touche.indexOf(key)+1)||(uppertouche.indexOf(key)+1)
if(index && touchepresser.indexOf(key)==-1){
    touchepresser.push(key)
    console.log(touchepresser);
    jouer(key)
}

});

let remove = (tableau=[], valeur)=>tableau.filter((element)=>valeur!=element);

document.addEventListener('keyup',e=>{
    let key=e.key.toUpperCase();
    let index = (touche.indexOf(key)+1)||(uppertouche.indexOf(key)+1)
    if(index){
        touchepresser = remove(touchepresser, key)
        console.log("depresser",key, touchepresser);
        terminer(key)
    }
});

// this function will play audio
const pastouche = " untouched"
const esttouche = " touched"
let presser = (key)=>{
    key = document.getElementById(key);
    if(key && key.className.indexOf(pastouche)!= -1)
        key.className = key.className.replace(pastouche, esttouche)
}
let depresser = (key)=>{
    key = document.getElementById(key);
    if(key && key.className.indexOf(esttouche)!= -1){
        key.className = key.className.replace(esttouche, pastouche)
    }
        
}