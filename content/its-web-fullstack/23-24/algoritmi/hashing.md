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

Quando l’insieme $U$ è già un sottoinsieme di $Z+$ (i numeri interi positivi) è più semplice utilizzare la funzione hash identità $h(k) = k$, con dimensione $m$ pari al numero di valori in $U$.

Problemi:

- Se $U$ è molto grande, l’approccio non è praticabile (creeremmo un vettore enorme);
- Se $U$ non è grande ma il numero di chiavi effettivamente registrate è molto minore di $U$, si spreca memoria.

## Considerazioni sull’hash

Una funzione hash $h$ si dice **perfetta** se non dà origine a [collisioni](./hashing#collisioni), ma spesso l’insieme delle chiavi è sparso e molto più grande del numero, inoltre non conosciamo tutte le sue caratteristiche (ad es. l’insieme dei nomi e cognomi); è quindi generalmente impossibile ottenere una funzione hash realmente perfetta.  

## Probabilità

Un insieme di eventi $E = {e1, e2, …, ek}$ si dice **distribuito uniformemente** se la probabilità $P$ che uno degli eventi si verifichi è pari a $1/k$, ossia se *ogni evento ha la stessa probabilità degli altri di verificarsi*. La somma delle probabilità di tutti gli eventi in $E$ è $1$.

Ad esempio, in un dado non truccato ogni faccia ha probabilità di uscire pari ad **1/6**.

## Uniformità semplice

Dato che non possiamo evitare le collisioni, cerchiamo di minimizzare il loro numero attraverso funzioni che **distribuiscono uniformemente** le chiavi negli indici $[1...m]$ della tabella hash, ossia che ogni indice $[1...m]$ abbia la stessa probabilità degli altri di uscire come risultato della funzione hash.

> [!Nota]
> Una funzione $h$ gode dell’uniformità semplice se vale che $∀i ∈ [1,...,m] : P(i) = 1/m$, dove $P(i)$ è la probabilità che $h(k) = i$.

## Problema

Per poter ottenere una funzione hash con uniformità semplice, bisogna conoscere la distribuzione delle probabilità di uscita delle chiavi, ossia si deve sapere quanto è probabile che una certa chiave esista.

Tuttavia, per insiemi $U$ molto grandi essa non è nota, dunque si applicano tecniche di approssimazione, ossia manipolazioni che diano una distribuzione sufficientemente uniforme.

## L’idea generale

L’idea di una funzione hash è dunque quella di *spezzettare* la chiave (o meglio, la sua rappresentazione binaria) in frammenti che, manipolati in qualche modo, permettano di ottenere un valore quanto più possibile uniformemente distribuito nell’intervallo $[1...m]$.  

Non è così semplice creare funzioni hash, ed esistono dei test per valutare la bontà delle funzioni:

- **Avalanche effect** (effetto valanga): se si cambia un bit nella chiave, deve cambiare almeno la metà dei bit del valore hash.
- **Test statistici**: verificano quanto i risultati della funzione si discostano da quelli attesi ($1/m$).

## Complessità della funzione hash

Il costo computazionale della funzione hash è $O(1)$:

- Possiamo rappresentare le chiavi in una *forma standard*, ad esempio una sequenza binaria con un numero di bit comodo, come una potenza di 2;
- Le operazioni di calcolo effettuate dalle funzioni hash possono quindi essere effettuate attraverso istruzioni in codice macchina.

## Hash e crittografia

Il principio delle funzioni hash è usato anche nella crittografia, ma in quel caso la funzione deve essere **non invertibile**, cioè deve essere molto difficile o quasi impossibile:

- Risalire al testo che ha portato ad un certo valore hash;
- Generare un testo che produca un valore hash specifico.

## Collisioni

Una collisione avviene quando due o più chiavi nel dizionario hanno lo **stesso hash**. Dato che è impossibile evitarle si deve trovare un modo per gestire le collisioni in modo efficiente.

### Gestire le collisioni

Quando la posizione che dovrebbe occupare una chiave è già occupata da un valore (*diverso*) precedente, dobbiamo trovare una posizione alternativa.

Inoltre, se una chiave non si trova nella posizione attesa, bisogna cercarla nelle posizioni alternative. Questa ricerca dovrebbe costare $O(1)$ nel caso medio, ma può arrivare a costare **O(n)** nel caso pessimo.

## Liste/vettori di trabocco

Con questo metodo le chiavi con lo stesso valore hash vengono memorizzate in una **lista monodirezionale** (o un **vettore dinamico**). Si memorizza un puntatore alla testa della lista (o al vettore) nello slot $H(k)$-esimo della tabella hash.

### Operazioni

| Operazione | Descrizione                                     |
| ---------- | ----------------------------------------------- |
| `insert()` | Inserisce il nuovo elemento in testa o in coda. |
| `lookup()` | Cerca una chiave nella lista.                   |
| `remove()` | Rimuove una chiave dalla lista.                 |

### Indirizzamento aperto

Le liste di trabocco sono strutture dati complesse, con liste, puntatori, ecc. La soluzione alternativa è l’**indirizzamento aperto**, dove si memorizzano tutte le chiavi direttamente nel vettore stesso senza ulteriori puntatori, risparmiando memoria). Ogni slot del vettore contiene una chiave oppure il valore `nil`.

- Inserimento: se lo slot prescelto è utilizzato, si cerca uno slot alternativo;
- Ricerca: si cerca nello slot prescelto e poi negli slot alternativi fino a quando non si trova la chiave oppure `nil`.

#### Tecniche di ispezione

- **Ispezione lineare**: si trova una casella di partenza e ci si sposta di un numero fisso di caselle, ad esempio: $h(k)+0$, $h(k)+1$, $h(k)+2$, $h(k)+3$;
- **Ispezione quadratica**: si trova una casella di partenza, poi ci si sposta di un numero di caselle proporzionale ai salti, ad esempio: $h(k)+0$, $h(k)+1$, $h(k)+4$, $h(k)+9$. Se due chiavi hanno lo stesso hash, le loro sequenze sono identiche. Inoltre, alcune caselle potrebbero essere ripetute (non si prova ogni casella solo una volta);
- **Doppio hashing**: si trova la casella di partenza, poi ci si sposta di un numero di caselle pari al valore di una seconda funzione di hash: $h1(k)+0 * h2 (k)$, $h1 (k)+1 * h2 (k)$, $h1 (k)+2 * h2 (k)$, $h1 (k)+3 * h2 (k)$. Si usano due funzioni ausiliarie: $h1$ fornisce la prima ispezione e $h2$ fornisce l’offset delle successive.

#### Cancellazione nell’indirizzamento aperto

Non possiamo semplicemente sostituire la chiave che vogliamo cancellare con un `nil` perché potremmo rompere una catena di ispezione, facendo risultare mancante un elemento che in realtà è presente. Utilizziamo un valore speciale (`del`) al posto di `nil` per marcare uno slot come vuoto dopo la cancellazione.

- Ricerca: `del` trattati come slot pieni;
- Inserimento: `del` trattati come slot vuoti.

## Conclusioni

### Problemi delle tabelle di hash

- Scarsa *locality of reference*: continuando a saltare da un punto all’altro della tabella, possono verificarsi molti **cache miss**.
- Non è possibile ottenere le chiavi in ordine, vengono disperse nello sminuzzamento fatto dalla funzione.

### Applicazioni delle funzioni di hash

- Protezioni dati con hash crittografici;
- Data deduplication.
