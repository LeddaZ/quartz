---
title: Strutture elementari
tags:
  - algoritmi
  - its
  - strutture-dati
date: 2024-02-05
---

## Sequenza

Una sequenza è una struttura dati **dinamica** e **lineare** che rappresenta una serie ordinata (nel senso di _prima_ e _dopo_) di valori, dove un valore può comparire più di una volta. **L’ordine** all’interno della sequenza **è importante**. Un esempio di implementazione della sequenza è la [Linked List](./linked-list.md).

### Operazioni ammesse

- Data la posizione, è possibile aggiungere o rimuovere elementi;
- È possibile accedere direttamente alla testa e alla coda;
- È possibile accedere sequenzialmente a tutti gli altri elementi.

### Specifica

| Metodo                      | Descrizione                                                                                                                                        |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `boolean isEmpty()`         | Restituisce `true` se la sequenza è vuota.                                                                                                         |
| `boolean finished(Pos p)`   | Restituisce `true` se `p` è uguale a pos<sub>0</sub> oppure a pos<sub>n+1</sub>.                                                                   |
| `Pos head()`                | Restituisce la posizione del primo elemento.                                                                                                       |
| `Pos tail()`                | Restituisce la posizione dell’ultimo elemento.                                                                                                     |
| `Pos next(Pos p)`           | Restituisce la posizione dell’elemento che segue `p`.                                                                                              |
| `Pos prev(Pos p)`           | Restituisce la posizione dell’elemento che precede `p`.                                                                                            |
| `Pos insert(Pos p, Item v)` | Inserisce l’elemento `v`di tipo `Item` nella posizione `p` e restituisce la posizione del nuovo elemento, che diviene il predecessore di `p`.      |
| `Pos remove (Pos p)`        | Rimuove l’elemento contenuto nella posizione `p` e restituisce la posizione del successore di `p`, che diviene successore del predecessore di `p`. |
| `Item read(Pos p)`          | Legge l’elemento di tipo `Item` contenuto nella posizione `p`.                                                                                     |
| `write(Pos p, Item v)`      | Scrive l’elemento `v` di tipo `Item` nella posizione `p`.                                                                                          |

## Insieme

Un insieme è una struttura dati **dinamica** e non **lineare** che memorizza una collezione non ordinata di elementi **senza valori ripetuti**.<br>
L’ordinamento fra elementi è dato dall’eventuale relazione d’ordine definita sul tipo degli elementi stessi (ad esempio alfabetico o numerico), non dalla struttura.

### Operazioni ammesse

- **Operazioni base**: inserimento, cancellazione, verifica se l'elemento è presente;
- **Operazioni di ordinamento**: massimo, minimo;
- **Operazioni insiemistiche**: unione, intersezione, differenza;
- **Iteratori**: esegui per ogni x ∈ S.

### Specifica

| Metodo                            | Descrizione                                                     |
| --------------------------------- | --------------------------------------------------------------- |
| `int size`                        | Restituisce la cardinalità dell’insieme.                        |
| `boolean contains (Item x)`       | Restituisce `true` se `x` è contenuto nell’insieme.             |
| `insert (Item x)`                 | Inserisce `x` nell’insieme, se non già presente.                |
| `remove (Item x)`                 | Rimuove `x` dall’insieme, se presente.                          |
| `Set union (Set A, Set B)`        | Restituisce un nuovo insieme che è l’unione di `A` e `B`.       |
| `Set intersection (Set A, Set B)` | Restituisce un nuovo insieme che è l’intersezione di `A` e `B`. |
| `Set difference (Set A, Set B)`   | Restituisce un nuovo insieme che è la differenza di `A` e `B`.  |

## Dizionario

Un dizionario è una struttura dati che rappresenta il concetto matematico di **relazione univoca** $R: D → C$, detta anche **associazione chiave-valore**.

- L’insieme $D$ è detto **dominio** (gli elementi sono detti **chiavi**);
- L’insieme $C$ è detto **codominio** (gli elementi sono detti **valori**).

### Operazioni ammesse

- Ottenere il valore associato ad una particolare chiave (se presente), o il valore nil se assente;
- Inserire una nuova associazione chiave-valore, cancellando eventuali associazioni precedenti per la stessa chiave;
- Rimuovere un’associazione chiave-valore esistente.

### Specifica

| Metodo                    | Descrizione                                                                    |
| ------------------------- | ------------------------------------------------------------------------------ |
| `Item lookup (Item k)`    | Restituisce il valore associato alla chiave `k` se presente, `nil` altrimenti. |
| `insert (Item k, Item v)` | Associa il valore `v` alla chiave `k`.                                         |
| `remove (Item k)`         | Rimuove l’associazione della chiave `k`.                                       |
|                           |                                                                                |
