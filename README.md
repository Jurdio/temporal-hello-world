# Temporal Hello World (Node.js)

Цей проєкт демонструє простий Temporal workflow на Node.js.

## Швидкий старт

### 1. Запустіть Temporal Server (через docker-compose)

1. Запустіть сервіси Temporal:
   ```sh
   docker compose up
   # або якщо у вас стара версія Docker:
   # docker-compose up
   ```
   Це підніме Temporal Server, базу даних та Web UI (http://localhost:8080).

### 2. Встановіть залежності

```sh
npm install
```

### 3. Запустіть worker

```sh
npm run worker
```

### 4. Запустіть client (в іншому терміналі)

```sh
npm run client
```

## Файли
- `worker.js` — запускає Temporal worker
- `workflows.js` — опис workflow
- `activities.js` — activity для workflow
- `client.js` — стартує workflow

---

**Порядок запуску:**
1. Temporal Server через docker-compose
2. npm run worker
3. npm run client
