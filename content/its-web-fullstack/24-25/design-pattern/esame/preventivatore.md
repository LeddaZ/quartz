---
title: 3. Preventivatore
tags:
  - design-pattern
  - composite
  - its
date: 2024-12-16
---

Dato che gli elementi di questo software hanno una struttura ad albero, si può usare il **Composite**. Questo pattern permette di creare delle strutture composte da più oggetti e considerarle come uno singolo, senza preoccuparsi di cosa siano effettivamente. Gli oggetti ai livelli più alti delegano il lavoro ai livelli inferiori, fino ad arrivare alle "foglie" dell'albero.

Questo semplifica il client dato che deve solo specificare un nome, prezzo, quantità e sconto per tutti gli oggetti, tutti i calcoli verranno eseguiti dai vari componenti.

## Struttura

- **Component**: contiene i comportamenti comuni a tutti gli oggetti.
- **Leaf**: l'elemento base della struttura che esegue le operazioni
- **Container**: elemento composto da sottoelementi di cui non conosce il tipo. Ottiene i risultati dai sottoelementi e li manda al client.
- **Client**: si interfaccia allo stesso modo con tutti gli elementi della struttura.

## Esempio di implementazione

```ts title="preventivi.ts"
interface IComponent {
  getPrice(): number
  getDiscountedPrice(): number
}

class Item implements IComponent {
  name: string
  price: number
  discount: number
  quantity: number

  constructor(name: string, price: number, quantity: number, discount: number) {
    this.name = name
    this.price = price
    this.quantity = quantity
    this.discount = discount
  }

  getPrice(): number {
    return this.price * this.quantity
  }

  getDiscountedPrice(): number {
    const price = this.getPrice()
    return price - (price * this.discount) / 100
  }
}

class Section implements IComponent {
  name: string
  items: IComponent[] = []
  discount: number

  constructor(name: string, discount = 0) {
    this.name = name
    this.discount = discount
  }

  getPrice(): number {
    var totalPrice = 0
    for (const item of this.items) {
      totalPrice += item.getPrice()
    }
    return totalPrice
  }

  add(item: IComponent): void {
    this.items.push(item)
  }

  getDiscountedPrice(): number {
    var totalPrice = 0
    for (const item of this.items) {
      totalPrice += item.getDiscountedPrice()
    }
    return totalPrice - (totalPrice * this.discount) / 100
  }
}

const macchina = new Item("Macchina", 10000, 1, 10)
const sedili = new Item("Sedili riscaldati", 500, 2, 5)
const vetri = new Item("Vetri oscurati", 1000, 1, 0)
const estGaranzia = new Item("Estensione garanzia", 300, 1, 15)

const confBase = new Section("Configurazione di base", 5)
confBase.add(macchina)
confBase.add(sedili)
confBase.add(vetri)

const garanzieAggiuntive = new Section("Garanzie aggiuntive", 10)
garanzieAggiuntive.add(estGaranzia)

const preventivo = new Section("Preventivo")
preventivo.add(confBase)
preventivo.add(garanzieAggiuntive)

console.log("Prezzo totale:", preventivo.getPrice())
console.log("Prezzo scontato totale:", preventivo.getDiscountedPrice())
```
