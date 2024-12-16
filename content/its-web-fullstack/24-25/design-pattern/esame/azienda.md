---
title: 4. Azienda
tags:
  - design-pattern
  - decorator
  - its
date: 2024-12-16
---

Il pattern più adatto è il **Decorator**, che permette di aggiungere proprietà e comportamenti ad un oggetto esistente senza modificarlo. Tutti gli impiegati hanno delle attività da svolgere a prescindere dal tipo, quindi si può estendere il comportamento dell'impiegato base senza ripeterlo per gli altri.

## Struttura

- **Component**: interfaccia che definisce i metodi comuni a tutti gli oggetti.
- **Concrete Component**: implementazione del componente di base.
- **Base Decorator**: classe che estende il componente di base aggiungendo o implementando i comportamenti necessari.
- **Concrete Decorator**: aggiunge comportamenti estendendo il decoratore di base.
- **Client**: crea il componente di base e lo passa al decoratore.

## Esempio di implementazione

```ts title="azienda.ts"
interface IEmployee {
  getDailyTasks(): string[]
}

class Engineer implements IEmployee {
  tasks: string[] = ["Sviluppo codice", "Unit test"]

  getDailyTasks(): string[] {
    return this.tasks
  }
}

abstract class RoleDecorator implements IEmployee {
  employee: IEmployee

  constructor(employee: IEmployee) {
    this.employee = employee
  }

  getDailyTasks(): string[] {
    return this.employee.getDailyTasks()
  }
}

class AdministrativeManager extends RoleDecorator {
  getDailyTasks(): string[] {
    const engTasks = this.employee.getDailyTasks()
    const adminTasks = ["Gestione risorse"]
    return [...engTasks, ...adminTasks]
  }
}

class ProjectManager extends RoleDecorator {
  getDailyTasks(): string[] {
    const engTasks = this.employee.getDailyTasks()
    const pmTasks = ["Assegnazione compiti", "Verifica stato progetto"]
    return [...engTasks, ...pmTasks]
  }
}

var eng: IEmployee = new Engineer()
console.log("Engineer: ", eng.getDailyTasks())

eng = new AdministrativeManager(eng)
console.log("Amministratore: ", eng.getDailyTasks())

eng = new ProjectManager(eng)
console.log("PM: ", eng.getDailyTasks())
```
