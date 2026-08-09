# Руководство по разработке (DEVELOPMENT.md)

Добро пожаловать в руководство по локальной разработке и развертыванию проекта **Цитадель Духа** (`citadel-spirit`).

## ✝️ Миссия и Наследие
Проект создан для **Shekinah Mission Kazakhstan & The School of Christ International** (Школа Христа).
- **Назначение**: Оснащение и подготовка миссионеров, пастырей и христианских лидеров на основании Евангелия Иисуса Христа.
- **Преемственность**: Служение продолжается в духе и принципах, заложенных Преподобным Бертом Кленденненом (Rev. B. H. Clendennen, 1922–2009) — основателем [The School of Christ International](https://schoolofchrist.org/history/).
- **Документация и Материалы**: Все учебные материалы и статьи в `docs/` и `blog/` формируются с учетом принципов глубокой молитвенной жизни, верности Слову Божьему и практического миссионерства.

---

## 📍 Сведения о репозитории
- **Официальный GitHub**: `https://github.com/webarystan-lev/citadel-spirit`
- **Владелец / Аккаунт**: `webarystan-lev`
- **Email**: `webarystan@gmail.com`

---

## 🛠 Подготовка окружения

### Требования:
- **Node.js**: `v20.0.0` или выше (протестировано на Node.js `v26.5.1`)
- **npm**: `v10.0.0` или выше (протестировано на npm `v12.0.2`)

---

## 📥 Установка и первый запуск

1. **Клонирование репозитория**:
   ```bash
   git clone https://github.com/webarystan-lev/citadel-spirit.git
   cd citadel-spirit
   ```

2. **Установка зависимостей**:
   > ⚠️ **ВАЖНО**: Проект использует React 19 совместно с Docusaurus 3. Обычная команда `npm install` завершится ошибкой peer dependencies. Обязательно используйте флаг `--legacy-peer-deps`.

   ```bash
   npm install --legacy-peer-deps
   ```

3. **Запуск локального сервера разработки**:
   ```bash
   npm run start
   ```
   После этого откройте в браузере: [http://localhost:3000](http://localhost:3000)

---

## 🏗 Сборка и Продакшн

Для локальной проверки финальной сборки сайта:

```bash
# 1. Сборка статических файлов
npm run build

# 2. Локальный запуск собраного сайта
npm run serve
```
Собраный проект помещается в директорию `./build`.

---

## ❓ Частые вопросы и решение проблем (Troubleshooting)

### Q: Ошибка `ERESOLVE unable to resolve dependency tree` при `npm install`
**Причина**: Конфликт указания `react@^19.0.0` и заявленных Docusaurus 3 требований `react@^18.0.0`.
**Решение**: Всегда запускайте `npm install --legacy-peer-deps`.

### Q: Изменение URL в `docusaurus.config.ts`
При редактировании ссылок на репозиторий проверяйте, чтобы поля `editUrl` вели на официальный аккаунт: `https://github.com/webarystan-lev/citadel-spirit/tree/main/`.


