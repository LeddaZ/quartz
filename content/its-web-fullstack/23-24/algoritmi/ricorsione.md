---
title: Ricorsione
tags:
  - algoritmi
  - its
date: 2023-12-03
---

Una definizione si dice **ricorsiva** se include una o più istanze del concetto stesso.
_Esempio: **PHP** (**PHP** Hypertext Processor)_

Una funzione ricorsiva deve avere una **condizione di uscita**.

## Esempio: fattoriale

Il **fattoriale** di un numero naturale $n$, indicato con $n$!, è il prodotto di $n$ e di tutti i numeri che lo precedono fino a 1.

## Elementi di un algoritmo ricorsivo

### Decomposizione

Consiste nel dividere un problema in uno più piccolo ma identico, in modo che la soluzione del problema più piccolo contribuisca alla risoluzione del problema più grande.

### Caso base o passo ricorsivo

Il **passo ricorsivo** è la chiamata alla funzione stessa con un input più piccolo; il **caso base** è l'input più piccolo possibile, che non può essere diviso ulteriormente.

### Composizione

Una volta risolti tutti i sottoproblemi, le soluzioni vengono **ricomposte** per risolvere il problema principale.
