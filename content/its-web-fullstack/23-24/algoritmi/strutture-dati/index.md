---
title: Strutture dati
tags:
  - algoritmi
  - its
  - strutture-dati
date: "2024-02-05"
---
## Introduzione

### Definizioni di base

- **Dato**: in un linguaggio di programmazione, un dato è un valore che una variabile può assumere;
- **Tipo di dato astratto**: un modello matematico, dato da una collezione di valori e un insieme di operazioni ammesse su questi valori;
- **Tipi di dato primitivi**: forniti direttamente dal linguaggio, ad esempio `int` e `boolean`.

### Specifica e implementazione

- **Specifica**: l’insieme di funzionalità di un tipo di dato astratto, che nasconde i dettagli implementativi all’utilizzatore;
- **Implementazione**: la realizzazione vera e propria.

Ad esempio, la specifica di una *coda* è l’insieme dei suoi metodi, mentre l’implementazione potrebbe essere *coda basata su vettore circolare* o *coda basata su puntatori*.

### Collezione

Una collezione è una struttura dati che permette di **raggruppare elementi in un’unica raccolta**.<br>
Gli **array** (mono o multi-dimensionali) sono un particolare tipo di
collezione, dove i dati sono **tutti dello stesso tipo**.

Altri tipi di collezione notevoli sono: liste, dizionari, tabelle hash.

### Strutture di dati

Le strutture di dati sono **collezioni di dati**, delle quali ci interessa più **l’organizzazione dei dati stessi** nella collezione piuttosto che il tipo dei dati in essa contenuti. Esse sono caratterizzate da un insieme di **operatori** che permettono di manipolare la struttura e da un modo sistematico di organizzare l’insieme dei dati.

Alcune tipologie di strutture di dati:
- Lineari / Non lineari (presenza di una sequenza)
- Statiche / Dinamiche (variazione di dimensione, contenuto)
- Omogenee / Disomogenee (dati contenuti)
