
from tkinter import * #Importation du module tkinter

import pygame #Importation du module pygame

import sys #Importation du module sys

from pygame.locals import *

#Frenetre principal

Fenetre = Tk()

Fenetre.title("Clavier Piano Numerique")#Definition du nom de la fenetre

Fenetre.columnconfigure(0, weight = 1)#position colonne

Fenetre.rowconfigure(0, weight = 5)#position ligne

Fenetre.rowconfigure(1, weight = 5)#position ligne

Fenetre.rowconfigure(2, weight = 1)#position ligne

#Importation du cadre 1

cadre1 = Frame(Fenetre, borderwidth = 3, relief = "sunken")

cadre1.grid(row = 0, column = 0, pady = 5, padx = 5, sticky = "ewns")

cadre1.columnconfigure(0, weight = 1)

cadre1.columnconfigure(2, weight = 1)

cadre1.rowconfigure(0, weight = 1)

#Importation du cadren 

cadren = Frame(Fenetre, borderwidth = 3, relief = "sunken")

cadren.grid(row = 1, column = 0, sticky = "ns")

cadren.rowconfigure(0, weight = 1)

cadren.columnconfigure(0, weight = 1)

#Importation du cadre 2

cadre2 = Frame(Fenetre, borderwidth = 3, relief = "sunken")

cadre2.grid(row = 2, column = 0, pady = 5, padx = 5, sticky = "ewns")

cadre2.rowconfigure(0, weight =5)

cadre2.rowconfigure(1,weight = 1)

#creation du frame dans cadren

frame=Frame(cadren)

frame.grid()

#Defition des bouttons cadre noir dans la frame

tdo= Button(frame,state = DISABLED,padx=0,pady=0, height=15,bg="black", width=13,relief=RIDGE)

tdo.grid(row = 0, column = 1,sticky = "ns")

tre= Button(frame,state = DISABLED,padx=0,pady=0, height=15,bg="black", width=13,relief=RIDGE)

tre.grid(row = 0, column = 2, sticky = "ns")

tmi= Button(frame,state = DISABLED,padx=0,pady=0, height=15,bg="black", width=13,relief=RIDGE)

tmi.grid(row = 0, column = 3, sticky = "ns")

tfa= Button(frame,state = DISABLED,padx=0,pady=0, height=15,bg="black", width=13,relief=RIDGE)

tfa.grid(row = 0, column = 4, sticky = "ns")

tsol= Button(frame,state = DISABLED,padx=0,pady=0, height=15,bg="black", width=13,relief=RIDGE)

tsol.grid(row = 0, column = 5, sticky = "ns")

tsol= Button(frame,state = DISABLED,padx=0,pady=0, height=15,bg="black", width=13,relief=RIDGE)

tsol.grid(row = 0, column = 6, sticky = "ns")

tsi= Button(frame,state = DISABLED,padx=0,pady=0, height=15,bg="black", width=13,relief=RIDGE)

tsi.grid(row = 0, column = 7, sticky = "ns")

tdo= Button(frame,state = DISABLED,padx=0,pady=0, height=15,bg="black", width=13,relief=RIDGE)

tdo.grid(row = 0, column = 8, sticky = "ns")

#Bouton noteTEST

buttondo = Button(frame,padx=0, height=1,width=12, pady=0,bd=0,text="DO", bg="white",fg="black" )

buttondo.grid(row = 0, column = 1,padx=5,pady=5,sticky = "ns")

buttonre = Button(frame,padx=0, height=1,width=12, pady=0,bd=0,text="RE", bg="white",fg="black" )

buttonre.grid(row = 0, column = 2,padx=5,pady=5,sticky = "ns")

buttondmi = Button(frame,padx=0, height=1,width=12, pady=0,bd=0,text="MI", bg="white",fg="black" )

buttondmi.grid(row = 0, column = 3,padx=5,pady=5,sticky = "ns")

buttondfa = Button(frame,padx=0, height=1,width=12, pady=0,bd=0,text="FA", bg="white",fg="black" )

buttondfa.grid(row = 0, column = 4, padx=5,pady=5,sticky = "ns")

buttondsol = Button(frame,padx=0, height=1,width=12, pady=0,bd=0,text="SOL", bg="white",fg="black" )

buttondsol.grid(row = 0, column = 5,padx=5,pady=5, sticky = "ns")

buttondla = Button(frame,padx=0, height=1,width=12, pady=0,bd=0,text="LA", bg="white",fg="black" )

buttondla.grid(row = 0, column = 6,padx=5,pady=5, sticky = "ns")

buttondsi = Button(frame,padx=0, height=1,width=12, pady=0,bd=0,text="SI", bg="white",fg="black" )

buttondsi.grid(row = 0, column = 7,padx=5,pady=5, sticky = "ns")

buttondo1 = Button(frame,padx=0, height=1,width=12, pady=0,bd=0,text="DO", bg="white",fg="black" )

buttondo1.grid(row = 0, column = 8,padx=5,pady=5, sticky = "ns")

mainloop()