---
title: Hashing
tags:
  - algoritmi
  - its
date: 2024-03-02
---
Una **funzione hash** è definita come $h: U → {1, ..., m}$, dove $U$ è l’insieme delle chiavi possibili. In una **coppia chiave-valore** ($k$, $v$) il valore $v$ viene memorizzato in una cella indirizzata da un puntatore nella posizione $h(k)$.  

Quando due o più chiavi nel dizionario hanno lo stesso valore hash, diciamo che è avvenuta una **collisione**. Idealmente, vogliamo funzioni hash senza collisioni.

## Tabelle ad accesso diretto
