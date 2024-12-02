---
title: 3. Pizza
tags:
  - design-pattern
  - adapter
  - its
date: 2024-12-02
---

Stai sviluppando un software per il menù di una pizzeria. Ogni pizza ha un prezzo base e una serie di aggiunte disponibili che l'utente può scegliere. Ogni aggiunta ha un prezzo opzionale diverso e le scelte sono molte e potenzialmente variabili nel tempo.

Descrivi quale design pattern useresti per risolvere il problema motivando la risposta. Fornisci anche una rappresentazione in codice, pseudo-codice o diagramma delle classi della soluzione proposta.

## Soluzione

Come per l'[oracolo](./oracolo), si può risolvere questo problema usando il **Decorator**. In questo modo è possibile aggiungere un numero illimitato di ingredienti senza modificare la classe base `Pizza`.

### Esempio di implementazione

```ts [title="pizza.ts"]
interface IPizza {
  name: string
  price: number
}

class Pizza implements IPizza {
  name: string
  price: number

  constructor(name: string, price: number) {
    this.name = name
    this.price = price
  }
}

abstract class PizzaDecorator implements IPizza {
  protected pizza: IPizza

  constructor(pizza: IPizza) {
    this.pizza = pizza
  }

  get name(): string {
    return this.pizza.name
  }

  get price(): number {
    return this.pizza.price
  }
}

class PizzaWithMushrooms extends PizzaDecorator {
  get name(): string {
    return `${this.pizza.name} + mushrooms`
  }

  get price(): number {
    return this.pizza.price + 1.5
  }
}

class PizzaWithWholeWheat extends PizzaDecorator {
  get name(): string {
    return `${this.pizza.name} + whole wheat`
  }

  get price(): number {
    return this.pizza.price + 2
  }
}

const pizza = new Pizza("Margherita", 5)
console.log("Base pizza: " + pizza.name + " - €" + pizza.price)

const pizza2 = new PizzaWithMushrooms(pizza)
console.log("Pizza with additions: " + pizza2.name + " - €" + pizza2.price)

const pizza3 = new PizzaWithWholeWheat(pizza2)
console.log("Pizza with additions: " + pizza3.name + " - €" + pizza3.price)
```

#### Output di esempio

```
Base pizza: Margherita - €5
Pizza with additions: Margherita + mushrooms - €6.5
Pizza with additions: Margherita + mushrooms + whole wheat - €8.5
```
