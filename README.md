# Как это работает

В корне проекта лежит файл string-generator.js, который после запуска генерирует json файл с необходимым колличеством строк и их размерностью из массива переданных символов. В корне проекта уже имеется сгенерированный файл на 100 000 строк с длинной строк 100.

## Старт
Для установки зависимостей проекта необходимо выполнить команду ```npm install```. После этого выполните ```npm run start``` для запуска json-server'a и Vue приложения. Приложение обращается к серверу только лишь для синхронизации его данных с локальным Vuex хранилищем, все запросы по поиску совпадений запроса и начала строк, осуществляется через state во Vuex.

## Алгоритм
Поиск совпадений осуществлен с помощью регулярного выражения ```const regExp = new RegExp(`^${query}`);```, который генерируется из запроса и благодаря флагу ```^``` и методу ```match()``` позволяет без разбиения первых символов строки (равных колл-ву символов в запросе) на отдельные символы для последующего сравнения, сразу записывать совпадающие правилу строки в массив ```const matches = [];```. После выполнения поиска, длинна массива ```matches``` берется за результат выполнения операции.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
