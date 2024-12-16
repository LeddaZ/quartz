---
title: 5. TypeORM
tags:
  - design-pattern
  - factory-method
  - strategy
  - its
date: 2024-12-16
---

Per implementare questa libreria si possono usare la **Strategy** e il **Factory Method**.

## Strategy

Consente di definire una classe separata per ogni comportamento, che sarà intercambiabile con un altro. Questo permette di cambiare il comportamento di un oggetto senza modificarlo, delegando la logica ad una strategia specifica.

### Struttura

- **Context**: comunica con l'oggetto attraverso la strategy, che può essere modificata a runtime.
- **Strategy**: l'interfaccia comune a tutti gli oggetti.
- **Concrete Strategy**: implementa la logica specifica di un algoritmo.
- **Context**: ha un riferimento alla strategy da utilizzare e chiama il metodo della strategy specifica, senza sapere qual è.
- **Client**: crea l'oggetto della strategy necessaria e lo passa al context.

Per questo progetto la strategy permette di creare un'implementazione per ogni database mantenendo i metodi comuni `find` e `create` e decidere a runtime quale utilizzare.

## Factory Method

Permette di creare oggetti attraverso un'interfaccia comune lasciando la logica dell'implementazione agli oggetti stessi. Gli oggetti verranno creati attraverso il factory method, che si occuperà di istanziare l'oggetto.

In questo caso, utilizzare il factory method permette di aggiungere facilmente nuovi modelli di aspirapolvere ognuno con un suo set di accessori; inoltre, l'applicazione client non si dovrà occupare di come recuperare i dati dei vari modelli, dato che lo farà il metodo factory.

### Struttura

- **Creator**: classe (opzionalmente astratta) che definisce il factory method, che a sua volta può essere astratto o avere un'implementazione predefinita che le sottoclassi possono sovrascrivere.
- **Concrete Creator**: sottoclasse che implementa o estende il Creator e sovrascrive il factory method.
- **Product**: interfaccia per i prodotti concreti.
- **Concrete Product**: implementazioni del Product istanziate attraverso il factory method.

Creando la connessione al database attraverso un factory method permette di istanziare le librerie senza conoscere o specificare il nome delle classi.

## Flusso delle operazioni

- L'utente crea l'istanza corretta del database con il factory method
- La libreria espone i metodi find e create necessari per le query al database.
- I metodi delegano l'esecuzione alla strategia specifica
