# Электронная система записи к врачу

Лабораторная работа №1 (МиСПИСИТ): первая страница проекта в Docker-контейнере.

## Стек

- Язык: Node.js 20
- Фреймворк: Express 4.21.2

## Ссылка на образ

https://hub.docker.com/r/pollinaff00/mispisit-lab1

## Запуск образа (для преподавателя)

```bash
docker pull pollinaff00/mispisit-lab1
docker run --rm -p 8080:8080 pollinaff00/mispisit-lab1
```

После запуска откройте в браузере: http://localhost:8080

## Локальная сборка

```bash
docker build -t mispisit-lab1 .
docker run --rm -p 8080:8080 mispisit-lab1
```
