---
title: 1. Oracolo
tags:
  - design-pattern
  - decorator
  - its
date: 2024-12-02
---

Una classe Oracolo espone un metodo per restituire un numero casuale (`stampaNumero`).

È richiesto di estendere il comportamento in modo da:

- Stampare un messaggio di benvenuto prima di tornare il numero;
- Stampare un messaggio di saluto alla fine;
- Dare la possibilità di invertire i messaggi a runtime.

Descrivere il design pattern utilizzato (nome e scopo generale) e la soluzione, includendo una breve descrizione del ragionamento e una eventuale rappresentazione del risultato finale.

## Soluzione

Si può risolvere questo problema con il pattern **Decorator**, che permette di estendere i comportamenti di un oggetto esistente creandone uno nuovo. In questo modo è possibile estendere le proprietà ed i comportamenti già implementati senza modificare l'oggetto originale.

Il **Decorator** è strutturato in questo modo:

- **Component**: l'interfaccia che definisce i metodi comuni a tutti gli oggetti;
- **Concrete Component**: l'implementazione del componente di base;
- **Base Decorator**: il decoratore di base ha l'oggetto da estendere tra le sue proprietà e implementa o estende il componente di base;
- **Concrete Decorator**: aggiunge comportamenti estendendo il decoratore di base;
- **Client**: si occupa di creare il componente di base e passarlo al decoratore.

### Esempio di implementazione

[`oracolo.ts`](https://github.com/LeddaZ/design-pattern-code/blob/master/src/oracolo.ts)

```ts
interface IOracolo {
  stampaNumero(): void
}

class Oracolo implements IOracolo {
  stampaNumero(): void {
    console.log(Math.random())
  }
}

abstract class OracoloDecorator implements IOracolo {
  protected oracolo: IOracolo

  constructor(oracolo: IOracolo) {
    this.oracolo = oracolo
  }

  stampaNumero(): void {
    this.oracolo.stampaNumero()
  }
}

class OracoloBenvenuto extends OracoloDecorator {
  stampaNumero(): void {
    console.log("Benvenuto!")
    super.stampaNumero()
  }
}

class OracoloArrivederci extends OracoloDecorator {
  stampaNumero(): void {
    super.stampaNumero()
    console.log("Arrivederci!")
  }
}

const oracolo = new Oracolo()
const oracoloBenvenuto = new OracoloBenvenuto(oracolo)
const oracoloArrivederci = new OracoloArrivederci(oracoloBenvenuto)
oracoloArrivederci.stampaNumero()
```

#### Output di esempio

```
Benvenuto!
0.07690864486562954
Arrivederci!
```
