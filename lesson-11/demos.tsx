"use client";

import { useState, type ReactNode } from "react";

/* 1. Props: родитель передаёт данные дочернему компоненту */
export function Welcome({ name }: { name: string }) {
  return <p className="text-xl font-medium">Hello, {name}!</p>;
}

export function PropsDemo() {
  const [name, setName] = useState("John");
  return (
    <div className="grid gap-3">
      <label className="grid gap-1 text-sm text-ink-soft">
        Значение prop name
        <input
          className="rounded-lg border border-current/20 bg-transparent px-3 py-2 text-base text-ink"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <Welcome name={name || "гость"} />
    </div>
  );
}

/* 2. State: компонент хранит свои данные и перерисовывается при их изменении */
export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex items-center gap-3">
      <button className="btn" onClick={() => setCount(count - 1)}>
        −
      </button>
      <span className="min-w-[3ch] text-center text-2xl font-medium tabular-nums">
        {count}
      </span>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
}

/* 3. Children: всё, что лежит между тегами компонента */
export function Card({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-xl border border-current/15 p-4">
      <p className="text-sm font-medium text-blue">{title}</p>
      <div className="mt-2">{children}</div>
    </div>
  );
}

/* 4. Composition: собираем большой компонент из маленьких */
export function ProfileDemo() {
  return (
    <Card title="Профиль">
      <Welcome name="Усон" />
      <Card title="Счётчик внутри карточки">
        <Counter />
      </Card>
    </Card>
  );
}

/* 5. Conditional rendering: показываем разное в зависимости от условия */
export function LoginDemo() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="grid justify-items-start gap-3">
      {loggedIn ? <p>Вы вошли. Добро пожаловать!</p> : <p>Пожалуйста, войдите.</p>}
      <button className="btn" onClick={() => setLoggedIn(!loggedIn)}>
        {loggedIn ? "Выйти" : "Войти"}
      </button>
    </div>
  );
}
