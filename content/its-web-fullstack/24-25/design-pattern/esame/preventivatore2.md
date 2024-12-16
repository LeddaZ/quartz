---
title: 6. Ancora Preventivatore
tags:
  - design-pattern
  - facade
  - template
  - its
date: 2024-12-16
---

Per risolvere questo problema si può utilizzare il **Template Method**, un design pattern che permette di definire una classe con un comportamento di base e alcune parti specifiche che verranno implementate dalle sottoclassi.

In questo caso le operazioni su Drive condivideranno gran parte della logica ed avranno alcune differenze, per esempio il punto del file in cui scrivere. Con il Template Method si può definire la logica comune e lasciare le operazioni specifiche su Drive alle sottoclassi.
