<!-- banner -->
<p align="center">
  <img src="https://i.imgur.com/gEfY4aI.png" alt="Users App Banner" />
</p>

# 👨‍💻 Тестовое задание: Список пользователей (Next.js + TypeScript + Redux)

Приложение с использованием **Next.js 15 (App Router)**, **TypeScript**, **Redux Toolkit** и **TailwindCSS**.

## 🚀 Стек
- Next.js (App Router)
- TypeScript
- Redux Toolkit
- Axios
- TailwindCSS

## 📂 Страницы

| Адрес             | Описание                                |
|-------------------|-----------------------------------------|
| `/users`          | Список пользователей с API              |
| `/users/1`        | Детальная страница пользователя         |
| `/users/99999`    | Обработка ошибки (пользователь не найден)|

## ✅ Функциональность
- Получение списка пользователей с API
- Переход к детальной странице по ID
- Кнопка "Назад"
- Обработка ошибок
- Работа с `Redux` и асинхронным `thunk`
- Tailwind стилизация

## 📁 Структура
- `src/features` — Redux слайсы
- `src/store` — store Redux
- `src/lib/axios.ts` — кастомный Axios
- `src/components/ReduxProvider.tsx` — обёртка Provider

## 🛠️ Установка
```bash
npm install
npm run dev

```
## 🌐 Демо
- В процессе — скоро залью на Vercel

- 👤 Автор
- 🧑‍💻 Tim Isakeev

- 🏠 Бишкек, Кыргызстан

- 📧 Email: isakeevtimur@gmail.com

- 📬 Telegram: @mlb_triv

- 🐙 GitHub: Tim-Isakeev

- 💬 Проект создан в рамках тестового задания.
- Покрывает основные навыки работы с React, Next.js, TypeScript и Redux.
