---
title: Algoritmi di ordinamento
tags:
  - algoritmi
  - its
date: 2024-01-09
---

## Proprietà

- **Stabilità**: un algoritmo di ordinamento è stabile se preserva l'ordine iniziale tra due elementi con la stessa chiave (_esempio: ordinamento per nome_);
- **Ordinamento sul posto (in place)**: non crea copie dell'input per generare la sequenza ordinata;
- **Adattività**: trae vantaggio dagli elementi già ordinati.

## Selection sort

L'algoritmo seleziona di volta in volta il numero minore nella
sequenza ancora da ordinare e lo sposta nella sequenza
ordinata.

La sequenza viene quindi divisa in **due parti**: la sottosequenza
ordinata, che occupa le prime posizioni dell'array, e la
sottosequenza da ordinare, che costituisce la parte restante
dell'array su cui ri-applicare l’algoritmo.

Il selection sort scorre sempre tutta la sequenza $O(n^2)$ volte.

### Pseudocodice

```java
SelectionSort(item A[], int n) {
    for i = 1 to n - 1 do
        int min = min(A, i, n)
        A[i] <-> A[min]
}

int min(item A[], int i, int n) {
    for j = i + 1 to n do
        if A[j] < A[min] then
            min = j
    return min
}
```

## Insertion sort

È un algoritmo efficiente per ordinare piccoli insiemi di elementi
e si basa sul principio di ordinamento di una mano di carte da
gioco: ogni carta viene presa dalla posizione in cui si trova per
essere spostata dove sarà maggiore di tutte le carte precedenti
(o all’inizio).

### Pseudocodice

```java
InsertionSort(item A[], int n) {
    for i = 2 to n do
        item temp = A[i]
        int j = i
        while j > 1 and A[j - 1] > temp do
            A[j] = A[j - 1]
            j = j - 1
        A[j] = temp
}

int min(item A[], int i, int n) {
    for j = i + 1 to n do
        if A[j] < A[min] then
            min = j
    return min
}
```

Per ogni elemento si memorizza il valore `A[i]` e, se necessario, si spostano tutti valori maggiori di `A[i]` verso destra, creando uno spazio per inserire `A[i]` nella posizione corretta.

Dal punto di vista della complessità l'insertion sort è migliore del selection sort nel caso ottimo e uguale nel caso pessimo.

## Merge sort

Il merge sort, come la [ricerca binaria](./ricerca.md#Ricerca-binaria-o-dicotomica), si basa sulla tecnica **divide-et-impera**, ossia la scomposizione del problema in problemi più piccoli:

- **Divide**: spezza virtualmente il vettore di n elementi in due **sottovettori** di n/2 elementi;
- **Impera**: esegue il merge sort ricorsivamente sui due sottovettori;
- **Combina**: unisce le due sequenze ordinate.
  L’idea di base dell’algoritmo è di dividere la collezione in piccoli gruppi finché ogni gruppo è formato da un solo elemento (che è per definizione ordinato).<br>
  I gruppi sono quindi riuniti in modo tale che i loro elementi siano
  in ordine.

### Pseudocodice

```java
MergeSort(item A[], int first, int last) {
    if first < last then
	    int mid = [(first+last)/2]
	    MergeSort(A, first, mid)
	    MergeSort(A, mid+1, last)
	    Merge(A, first, last, mid)
}

Merge(item A[], int first, int last, int mid) {
	int i, j, k, h
	i = first
	j = mid+1
	k = first
	while i <= mid and j <= last do
		if A[i] <= A[j] then
			B[k] = A[i]
			i = i+1
		else
			B[k] = A[j]
			j = j+1
		k = k+1
		j = last
		for h = mid downto i do
			A[j] = A[h]
			j = j-1
		for j = first to k-1 do
			A[j] = B[j]
}
```

- La funzione MergeSort viene chiamata ricorsivamente sulle metà sinistra e destra dell’array (i valori first, mid e last sono indici);
- La parte importante dell’algoritmo è nella funzione Merge, che riunisce le metà ordinate dell’array attraverso un array di appoggio.

#### Costo

Il costo della funzione Merge è $O(n)$; il costo del merge sort è $O(n\ log\ n)$.

## Quick sort

L'algoritmo seleziona un elemento `p` di un vettore, chiamato **pivot** (di
solito il primo, l’ultimo o quello in mezzo). La scelta di `p` non è necessariamente casuale. I valori inferiori al pivot vengono spostati a sinistra e quelli maggiori a destra.<br>
I due sottovettori vengono ordinati chiamando ricorsivamente l'algoritmo, in modo che le due metà possano essere unite in quanto già ordinate al termine dell'esecuzione.

### Pseudocodice

```java
QuickSort(item A[], int lo, int hi) {
	if lo < hi then
		int j = pivot(A, lo,hi)
		QuickSort(A,lo,j -1)
		QuickSort(A,j+1,hi)
}
```

#### Scelta del pivot

```java
int pivot(item A[], int lo, int hi) {
	item pivot = A[lo]
	int j = lo
	for i = lo + 1 to hi do
		if A[i] < pivot then
			j=j+1
			swap(A,i,j)
	A[lo] = A[j]
	A[j] = pivot
	return j
}
```

#### Costo

- **Caso pessimo**: scelgo un brutto pivot; il vettore viene diviso in due sottovettori di dimensione $0$ e $(n-1)$ --> $O(n^2)$;
- **Caso ottimo**: scelgo un pivot ben posizionato; il vettore viene sempre diviso in due sottoproblemi di dimensione $(n/2)$ --> $O(n\ log\ n)$.
