# Электронная система записи к врачу

Лабораторная работа №2 (МиСПИСИТ): три главные функции и страницы проекта.

## Стек

- Язык: Node.js 20
- Фреймворк: Express 4.21.2
- Шаблонизатор: EJS 3.1.10
- Данные: JSON-файл `data/appointments.json` (без отдельной БД)

## Запуск

```bash
docker pull pollinaff00/mispisit-lab1:0.0.2
docker run --rm -p 8080:8080 pollinaff00/mispisit-lab1:0.0.2
```

После запуска откройте в браузере: http://localhost:8080

### Адреса страниц

| Адрес | Назначение |
|---|---|
| `/` | Главная |
| `/appointments` | Список записей (просмотр) |
| `/appointments/new` | Форма создания записи |
| `/appointments/1` | Карточка записи |
| `/appointments/1?as=guest` | Отказ по роли |
| `/access-denied` | Страница отказа |

## Ссылки

- Образ: https://hub.docker.com/r/pollinaff00/mispisit-lab1
- Репозиторий: https://github.com/pollinaff/mispisit-lab1
