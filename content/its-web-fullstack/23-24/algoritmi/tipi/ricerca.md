---
title: Algoritmi di ricerca
tags:
  - algoritmi
  - its
date: "2023-12-13"
---
Un **algoritmo di ricerca** è un algoritmo che, data una sequenza di elementi, restituisce la **posizione di un elemento cercato**, se presente, o un valore nullo (tipicamente `-1`) se non è presente.

### Ricerca sequenziale

La ricerca sequenziale scorre ogni elemento e verifica se corrisponde o meno a quello cercato. È un approccio sempre possibile, quindi si può utilizzare in mancanza di altre informazioni.

### Ricerca binaria o dicotomica

Se la lista di elementi è ordinata è possibile iniziare la ricerca da un punto più vicino all'elemento desiderato.
- Si controlla l'elemento a metà della sequenza;
- Se è l'elemento cercato si termina; se l'elemento è maggiore si cerca nella metà superiore, altrimenti in quella inferiore;
- Si continua dimezzando la sequenza fino a trovare l'elemento.