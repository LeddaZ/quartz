---
title: Lista collegata (Linked List)
tags:
  - algoritmi
  - its
  - strutture-dati
date: 2024-03-02
---

È una sequenza di nodi contenenti dati arbitrari e 1 o 2 puntatori all'elemento successivo e/o precedente, a differenza delle liste semplici.

## Caratteristiche

- Contiguità nella lista $\neq$ contiguità nella memoria;
- Tutte le operazioni tranne la ricerca (trovare il precedente, il successivo, il primo e l'ultimo) hanno costo $O(1)$.

## Possibili implementazioni

- Bidirezionale o monodirezionale;
- Con o senza sentinella;
- Circolare o non circolare.

## Esempi di implementazioni della lista collegata

### Pila (stack)

È una struttura dati dinamica e lineare in cui l’elemento rimosso dall’operazione di cancellazione è predeterminato: quello che per meno tempo è rimasto nell’insieme (**LIFO**: Last-in, First-out). Nei linguaggi con procedure può essere utilizzata per la gestione dei record di attivazione.

### Coda (queue)

È una struttura dati dinamica e lineare in cui l’elemento rimosso dall’operazione di cancellazione è predeterminato: quello che per più tempo è rimasto nell’insieme (**FIFO**: First-in, First-out). Nei sistemi operativi, i processi in attesa di utilizzare una risorsa vengono gestiti tramite una coda.
