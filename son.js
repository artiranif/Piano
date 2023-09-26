Audio.prototype.jouer = function(){if(!this.attente){
    this.play()
    this.attente = true
    }
}

let jouer = (note)=>{
    
    presser(note);
    let son = document.getElementById("song-"+note);
    console.log("song-"*3+note)
    if(son && !son.attente){
        console.log("comparaison",trouvernote(objectif[toucheactuelle]),dicotouche[note])
        if(trouvernote(objectif[toucheactuelle]) == dicotouche[note])
            next();
        son.currentTime = 0
        son.jouer();
    }
    
}