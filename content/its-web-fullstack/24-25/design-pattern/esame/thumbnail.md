---
title: 2. Ottimizzazione thumbnail
tags:
  - design-pattern
  - proxy
  - its
date: 2024-12-16
---

Per ottimizzare l'applicazione si può utilizzare un **Proxy**, che permette di creare un passaggio intermedio tra l'applicazione e la risorsa a cui si vuole accedere. In questo modo il client non si interfaccerà direttamente con il servizio, ma comunica con i proxy che si occupano di creare o ritornare le thumbnail e gestire la cache. Questo permette di semplificare la struttura del client che dovrà solo istanziare il servizio e i proxy necessari.

## Struttura

- **Service interface**: interfaccia che il proxy deve utilizzare per interagire con il servizio e identificarsi come tale.
- **Service**: classe con la logica che il proxy deve gestire.
- **Proxy**: il proxy ha un riferimento al servizio ed esegue tutte le operazioni necessarie prima di interfacciarsi.
- **Client**: il client è compatibile sia con il proxy che con il servizio, in modo da poter lavorare con entrambi.

## Pseudocodice

```ts
interface IImageService {
  getImage(): string
}

class S3Service implements IImageService {
  getImage(userId: string): string {
    // Logica che recupera l'immagine dallo storage S3
  }
}

class ThumbnailProxy implements IImageService {
  private imageService: S3Service

  constructor(imageService: S3Service) {
    this.imageService = imageService
  }

  getImage(userId: string): string {
    if (thumbnailExists) {
      return thumbnailUrl
    } else {
      createThumbnail()
    }
  }

  createThumbnail() {
    // Logica per creare la thumbnail e salvarla su S3
  }
}

class CacheProxy implements IImageService {
  private imageService: IImageService

  constructor(imageService: IImageService) {
    this.imageService = imageService;
  }

  getImage(userId: string): string {
    if (imageInCache) {
      return imageUrl
    } else {
      // Recupera l'immagine da S3, la salva e la invia
    }
}

const s3 = new S3Service()
const thumbnailProxy = new ThumbnailProxy(s3)
const cacheProxy = new CacheProxy(thumbnailProxy)

const imageService = cacheProxy

imageService.getImage(userId)
```
