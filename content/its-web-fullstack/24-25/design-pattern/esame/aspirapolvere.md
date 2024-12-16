---
title: 1. Aspirapolvere e accessori
tags:
  - design-pattern
  - factory-method
  - its
date: 2024-12-16
---

Per risolvere il problema si può utilizzare il **Factory Method**, che permette di creare oggetti attraverso un'interfaccia comune lasciando la logica dell'implementazione agli oggetti stessi. Gli oggetti verranno creati attraverso il factory method, che si occuperà di istanziare l'oggetto.

In questo caso, utilizzare il factory method permette di aggiungere facilmente nuovi modelli di aspirapolvere ognuno con un suo set di accessori; inoltre, l'applicazione client non si dovrà occupare di come recuperare i dati dei vari modelli, dato che lo farà il metodo factory.

## Struttura

- **Creator**: classe (opzionalmente astratta) che definisce il factory method, che a sua volta può essere astratto o avere un'implementazione predefinita che le sottoclassi possono sovrascrivere.
- **Concrete Creator**: sottoclasse che implementa o estende il Creator e sovrascrive il factory method.
- **Product**: interfaccia per i prodotti concreti.
- **Concrete Product**: implementazioni del Product istanziate attraverso il factory method.

## Esempio di implementazione

```ts title="aspirapolvere.ts"
interface IAccessory {
  name: string
  description: string
}

interface IVacuumCleaner {
  name: string
  accessories: IAccessory[]
}

class ModelA implements IVacuumCleaner {
  name = "Model A"
  accessories = [
    { name: "Bag", description: "Medium bag" },
    { name: "Filter", description: "Medium filter" },
    { name: "Brush", description: "Carpet Brush" },
  ]
}

class ModelB implements IVacuumCleaner {
  name = "Model B"
  accessories = [
    { name: "Bag", description: "Large bag" },
    { name: "Filter", description: "Large filter" },
    { name: "Brush", description: "Normal brush" },
  ]
}

class VacuumCleanerFactory {
  getProduct(modelName: string): IVacuumCleaner {
    if (modelName === "A") {
      return new ModelA()
    } else if (modelName === "B") {
      return new ModelB()
    } else {
      throw new Error("Model not found")
    }
  }
}

const vacuumA = new VacuumCleanerFactory().getProduct("A")
console.log("Aspirapolvere A:", vacuumA)
const vacuumB = new VacuumCleanerFactory().getProduct("A")
console.log("Aspirapolvere B:", vacuumB)
```

### Output di esempio

```ts
Aspirapolvere A: ModelA {
  name: 'Model A',
  accessories: [
    { name: 'Bag', description: 'Medium bag' },
    { name: 'Filter', description: 'Medium filter' },
    { name: 'Brush', description: 'Carpet Brush' }
  ]
}
Aspirapolvere B: ModelA {
  name: 'Model A',
  accessories: [
    { name: 'Bag', description: 'Medium bag' },
    { name: 'Filter', description: 'Medium filter' },
    { name: 'Brush', description: 'Carpet Brush' }
  ]
}
```
