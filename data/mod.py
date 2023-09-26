table = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"]

start = table.index('A')
def trouvernote(lettre):
    index = len(lettre)-1
    num = int(lettre[index])
    lettre = lettre[:index]
    resultat = table.index(lettre)+12*num-start+1
    print(resultat,lettre,num)
    return resultat

def trouverfichier(lettre):
    if lettre.isnumeric():
        return f"data/{lettre}.wav"
    return f"data/{trouvernote(lettre)}.wav"
trouverfichier("C8")

def generertout():
    mot = ""
    nombre = 88
    rang = 0
    index = start
    while nombre:
        nombre -= 1
        mot += table[index]+str(rang)+' '
        index += 1
        if index==len(table):
            index = 0
            rang += 1
        
    print(mot, len(table))
