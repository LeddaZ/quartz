---
title: Valutazione degli algoritmi
tags:
  - algoritmi
  - its
date: "2023-12-13"
---
## Valutazione di un algoritmo

### Efficienza

Si deve stabilire se un programma è efficiente, ossia utilizza il tempo e lo spazio a disposizione nel miglior modo possibile; quando si raggiunge il massimo livello di efficienza si trova la **soluzione ottima**. *Non tutti i problemi possono essere risolti efficientemente, alcuni non possono essere risolti in alcun modo.*

## Tempo e spazio

Non è sufficiente che l'algoritmo svolga il suo compito, ma deve farlo utilizzando lo spazio e il tempo nel miglior modo possibile.

### Tempo

L'esecuzione delle istruzioni richiede tempo, quindi bisogna trovare il modo di risolvere il problema nel minor tempo possibile e analizzare cosa influenza il tempo di esecuzione.

### Spazio

Le strutture dati occupano spazio; si deve valutare quali strutture usare e in che modo la scelta delle strutture influenza le prestazioni del programma.

La soluzione migliore **bilancia** l'utilizzo di tempo e spazio.

### Misura del tempo

Misurare il tempo con un cronometro dipende da troppi fattori, ad esempio dalla bravura del programmatore, dal linguaggio di programmazione utilizzato e dalle specifiche del sistema. Per questo si misura il tempo con le **operazioni rilevanti**: operazioni che *caratterizzano lo scopo dell'algoritmo*, ossia che portano alla soluzione.

***Esempio**: in un algoritmo che cerca il valore minimo, il numero di operazioni rilevanti sarà il numero di confronti che vengono eseguiti.*

## Correttezza

Per risolvere un problema in modo corretto si introduce l'**invariante**: una condizione sempre vera. In particolare si utilizza l'**invariante di ciclo**, una condizione sempre vera posta all'inizio dell'iterazione di un ciclo.

### Invariante di ciclo

- **Inizializzazione** (caso base): la condizione è vera alla prima iterazione di un ciclo;
- **Conservazione** (passo induttivo): se la condizione è vera prima di un’iterazione del ciclo, allora rimane vera al termine (quindi prima della successiva iterazione);
- **Conclusione**: quando il ciclo termina, l’invariante deve rappresentare la *correttezza* dell’algoritmo.

## Complessità degli algoritmi

La **complessità** è l'analisi delle **risorse impiegate** da un algoritmo per risolvere un problema in funzione della dimensione e della tipologia dell'input.

La complessità di un algoritmo si misura in base al tempo per i seguenti motivi:
- Per stimare il tempo impiegato per un input dato;
- Per stimare il più grande input gestibile in tempi ragionevoli;
- Per confrontare l’efficienza di algoritmi diversi;
- Per ottimizzare le parti più importanti.

**La complessità è una funzione in cui il tempo varia in base alla dimensione dell'input.**

### Definizione del tempo

Il tempo è il numero di **istruzioni elementari**; un'istruzione si considera elementare se può essere eseguita in un **tempo costante**.

#### Criteri di costo

- **Logaritmico**: la dimensione dell'input è il numero di bit necessari per rappresentarlo;
- **Unitario**: la dimensione dell'input è il numero di elementi di cui è costituito.

### Random Access Machine

È la rappresentazione astratta di un calcolatore e si utilizza per calcolare l'efficienza dell'algoritmo.

##### Caratteristiche

- Numero infinito di celle di memoria di dimensione finita;
- Accesso in tempo costante;
- Set di istruzioni elementari (operazioni logiche e aritmetiche e istruzioni di controllo);
- Costo unitario.

### Caso pessimo, ottimo, medio

- **Caso pessimo**: i dati sui quali l’algoritmo richiede il massimo numero di operazioni;
- **Caso ottimo**: i dati sui quali l’algoritmo richiede il minor numero di operazioni;
- **Caso medio**: i dati che richiedono un numero “medio” di operazioni.

Solitamente si analizza il **caso pessimo**, ma in alcuni casi si analizza il **caso ottimo** se si hanno informazioni particolari sull'input.

### Costo della ricerca binaria

$$
T(n)=
\begin{flalign}
  \begin{cases}
    c\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \text{se}\ n = 0\\
    T(n/2)+d\ \ \ \ \text{se}\ n \ge 1&&
  \end{cases}&&
\end{flalign}
$$

La formula si chiama **equazione di ricorrenza**.
