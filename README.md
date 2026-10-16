# Электронная система записи к врачу

Лабораторная работа №3 (МиСПИСИТ): постоянное хранение данных в PostgreSQL.

## Стек

- Язык: Node.js 20
- Фреймворк: Express 4.21.2
- Шаблонизатор: EJS 3.1.10
- Драйвер БД: pg 8.13.1
- Хранение: PostgreSQL 16 (отдельный контейнер `db`)

## Запуск

Репозиторий: https://github.com/pollinaff/mispisit-lab1
Ветка: lab3
Pull Request: https://github.com/pollinaff/mispisit-lab1/pull/2
Образ: pollinaff00/mispisit-lab1:0.0.3
Страница образа: https://hub.docker.com/r/pollinaff00/mispisit-lab1

```text
git clone -b lab3 https://github.com/pollinaff/mispisit-lab1
cd mispisit-lab1
docker compose up -d
```

После запуска откройте в браузере: http://localhost:8080

Проверка сохранности записи:

```text
docker compose down
docker compose up -d
```

### Адреса страниц

| Адрес | Назначение |
|---|---|
| `/` | Главная (версия 0.0.3) |
| `/appointments` | Список записей (из PostgreSQL) |
| `/appointments/new` | Форма создания записи |
| `/appointments/1` | Карточка записи |
| `/appointments/1?as=guest` | Отказ по роли |
| `/access-denied` | Страница отказа |
