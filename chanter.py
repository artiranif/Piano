from tkinter import * #Importation du module tkinter
import pygame #Importation du module pygame
from data.mod import *


pygame.init()
pygame.mixer.init()
 
#Frenetre principal
Fenetre = Tk()
Fenetre.title("Clavier Piano Numerique")#Definition du nom de la fenetre
def creercadre():
    return Frame(Fenetre, relief = "sunken")

#Importation du cadren
cadren = creercadre()
cadren.grid(sticky = "ns")
#creation du frame dans cadren
frame=Frame(cadren)
frame.grid()
#Defition des bouttons cadre noir dans la frame
colonebouton = 1
def boutonnoir(i):
    bouton = Button(frame,state = DISABLED,padx=0,pady=0, height=15,bg="black", width=13,relief=RIDGE).grid(row = 0, column = i,sticky = "ns")
    
for i in range(8):
    boutonnoir(i)
colonebouton = 1
def boutonaction(lettre):
    global colonebouton
    Button(frame,padx=0, height=1,width=12, pady=0,bd=0,text=lettre, bg="white",fg="black", command=lambda: jouerNote(lettre)).grid(row = 0, column = colonebouton,padx=5,pady=5,sticky = "ns")
    colonebouton += 1
#Bouton noteTEST

def sonnote(signe):
    return pygame.mixer.Sound(trouverfichier(signe))
listeson = "CDEFGAB"
listefrancais ="DO,RE,MI,FA,SOL,LA,SI".split(",") 
notes = {   
}
for i in range(7):
    notes[listefrancais[i]] = sonnote(f"{listeson[i]}4")
notes["DO2"] = sonnote("C5")
def jouerNote(note):
    s = notes[note]
    s.play()
for lettre in notes.keys():
    boutonaction(lettre)
mainloop()