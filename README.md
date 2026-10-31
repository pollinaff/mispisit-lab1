# Электронная система записи к врачу

Лабораторная работа №4 (МиСПИСИТ): интерфейс рабочей версии на Bootstrap.

## Стек

- Язык: Node.js 20
- Фреймворк: Express 4.21.2
- Шаблонизатор: EJS 3.1.10
- Оформление: Bootstrap 5.3.3 (файлы в образе)
- Драйвер БД: pg 8.13.1
- Хранение: PostgreSQL 16 (отдельный контейнер `db`)

## Запуск

Репозиторий: https://github.com/pollinaff/mispisit-lab1

Ветка: lab4

Pull Request: https://github.com/pollinaff/mispisit-lab1/pull/4

Образ: pollinaff00/mispisit-lab1:0.0.4

Страница образа: https://hub.docker.com/r/pollinaff00/mispisit-lab1

```text
git clone -b lab4 https://github.com/pollinaff/mispisit-lab1
cd mispisit-lab1
docker compose up -d
```

После запуска откройте в браузере: http://localhost:8080

### Адреса страниц

| Адрес | Назначение |
|---|---|
| `/` | Главная (версия 0.0.4) |
| `/appointments` | Список записей (из PostgreSQL) |
| `/appointments/new` | Форма создания записи |
| `/appointments/1` | Карточка записи |
| `/appointments/1?as=guest` | Отказ по роли |
| `/access-denied` | Страница отказа |
