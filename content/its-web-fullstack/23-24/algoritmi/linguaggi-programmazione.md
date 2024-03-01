---
title: Linguaggi di programmazione
tags:
  - algoritmi
  - its
date: 2023-12-03
---
## Paradigmi

I linguaggi di programmazione si possono classificare in base al paradigma che utilizzano:
- **Imperativo (o procedurale)**: specificano come arrivare alla soluzione
- **Ad oggetti**: specificano qual è la soluzione
- Funzionale
- Dichiarativo
- Concorrente

## Operazioni sui tipi booleani

Le operazioni condizionali confrontano due condizioni, ad es. $A > 10$ e $B < 7$.
Le operazioni logiche confrontano le rappresentazioni binarie dei due oggetti.

## Funzioni

In un programma le funzioni possono risolvere problemi più semplici per arrivare alla soluzione del problema principale.

## Parametri

I parametri si dividono in **attuali** e **formali**.

### Parametri attuali

- Usati nella chiamata della funzione
- Vengono forniti alla funzione per svolgere il suo compito
- Rimangono anche al termine della funzione, ma il loro valore potrebbe essere cambiato

### Parametri formali

- Usati nella definizione della funzione
- Si utilizzano come segnaposti in attesa di avere un valore
- Non esistono più al termine della funzione

## Passaggio delle variabili

Le variabili possono essere passate ad una funzione per **valore** o per **riferimento**.

Nel **passaggio per valore** viene passato direttamente il valore della variabile, che verrà modificato separatamente all'interno della funzione; di conseguenza, eventuali modifiche del valore non si rifletteranno all'esterno.<br>
Nel **passaggio per riferimento** viene passato il riferimento alla cella di memoria che contiene la variabile; di conseguenza, se all'interno della funzione viene modificato il valore della variabile la modifica si rifletterà all'esterno.
