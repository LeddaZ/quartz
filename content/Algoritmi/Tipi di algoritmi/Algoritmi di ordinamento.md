## Proprietà
- **Stabilità**: un algoritmo di ordinamento è stabile se preserva l'ordine iniziale tra due elementi con la stessa chiave (*esempio: ordinamento per nome*);
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
```
SelectionSort(item[] A, int n) {
    for i = 1 to n - 1 do
        int min = min(A, i, n)
        A[i] <-> A[min]
}

int min(item[] A, int i, int n) {
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
```
InsertionSort(item[] A, int n) {
    for i = 2 to n do
        item temp = A[i]
        int j = i
        while j > 1 and A[j - 1] > temp do
            A[j] = A[j - 1]
            j = j - 1
        A[j] = temp
}

int min(item[] A, int i, int n) {
    for j = i + 1 to n do
        if A[j] < A[min] then
            min = j
    return min
}
```
Per ogni elemento si memorizza il valore `A[i]` e, se necessario, si spostano tutti valori maggiori di `A[i]` verso destra, creando uno spazio per inserire `A[i]` nella posizione corretta.

Dal punto di vista della complessità l'insertion sort è migliore del selection sort nel caso ottimo e uguale nel caso pessimo.

## Merge sort
