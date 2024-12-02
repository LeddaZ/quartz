---
title: 4. Pesci ubriachi e affamati
tags:
  - design-pattern
  - template
  - its
date: 2024-12-02
---

Abbiamo due classi di pesci: `BigFish` e `LittleFish`, ognuna con la sua implementazione.  
Entrambi i pesci si muovono in modo casuale tramite il metodo `move()`.  
`BigFish` si può muovere in una posizione occupata da un `LittleFish` (e mangiarlo).  
`LittleFish` invece non si può muovere dove si trova un `BigFish`.

Descrivere:

- Se e come mai è utile un design pattern per implementare le classi di questo problema
- Quale struttura avranno le classi alla fine (usare pseudo-codice, non ci interessa l'implementazione esatta del movimento e dei controlli)
- Il ragionamento usato per la divisione in classi

## Soluzione

Per risolvere questo problema si può utilizzare il **Template Method**, un design pattern che permette di definire una classe con un comportamento di base che potrà essere esteso o modificato in parte attraverso delle sottoclassi.

### Esempio di implementazione (pseudocodice)

```ts
class Position {
  posX: number
  posY: number
  fish: Fish
}

class Ocean {
  fishList: List<Fish>
}

abstract class Fish {
  pos: Position

  constructor(pos: Position) {
    this.pos = pos
  }

  tryMove(newPos: Position): void {
    if (this.canMoveTo(newPos)) {
      this.move(newPos)
    }
  }

  abstract canMoveTo(pos: Position): boolean

  move(newPos: Position): void {
    this.pos = newPos
  }
}

class BigFish extends Fish {
  canMoveTo(pos: Position): boolean {
    return !(pos.fish instanceof BigFish)
  }

  move(pos: Position, ocean: Ocean): void {
    if (pos.fish instanceof LittleFish) {
      ocean.fishList.remove(pos.fish)
    }

    this.pos = pos
  }
}

class LittleFish extends Fish {
  canMoveTo(pos: Position, ocean: Ocean): boolean {
    return !pos.fish || pos.fish instanceof LittleFish
  }
}
```
