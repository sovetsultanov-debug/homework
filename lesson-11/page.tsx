import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Card, Counter, LoginDemo, ProfileDemo, PropsDemo } from "@/components/lesson/demos";

export const metadata: Metadata = { title: "Урок 11: компоненты React" };

const sections: { title: string; text: string; code: string; demo: ReactNode }[] = [
  {
    title: "1. Props",
    text: "Props — аргументы компонента. Родитель передаёт данные, дочерний компонент их показывает. Внутри компонента props менять нельзя.",
    code: `function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return <Welcome name="John" />;
}`,
    demo: <PropsDemo />,
  },
  {
    title: "2. State",
    text: "State — данные, которые компонент хранит сам. Меняешь state через setter, и React перерисовывает компонент.",
    code: `const [count, setCount] = useState(0);

<button onClick={() => setCount(count + 1)}>+</button>`,
    demo: <Counter />,
  },
  {
    title: "3. Children",
    text: "Children — всё, что положили между открывающим и закрывающим тегом компонента.",
    code: `function Card({ title, children }) {
  return <div><p>{title}</p>{children}</div>;
}

<Card title="Привет">любой JSX внутри</Card>`,
    demo: <Card title="Привет">Этот текст пришёл через children.</Card>,
  },
  {
    title: "4. Component Composition",
    text: "Композиция — большой интерфейс собирается из маленьких компонентов, как из кубиков.",
    code: `<Card title="Профиль">
  <Welcome name="Усон" />
  <Card title="Счётчик"><Counter /></Card>
</Card>`,
    demo: <ProfileDemo />,
  },
  {
    title: "5. Conditional Rendering",
    text: "Условный рендер — показываем разный JSX в зависимости от условия: тернарный оператор или &&.",
    code: `{loggedIn ? <p>Вы вошли</p> : <p>Войдите</p>}
{isAdmin && <AdminPanel />}`,
    demo: <LoginDemo />,
  },
];

export default function LessonPage() {
  return (
    <main className="shell py-12">
      <p className="text-sm text-ink-soft">Практика к уроку · Lesson 11 Components</p>
      <h1 className="mt-2 text-[2rem] font-medium leading-tight tracking-[-0.03em]">
        Компоненты React
      </h1>
      <div className="mt-10 grid gap-10">
        {sections.map((s) => (
          <section key={s.title} className="grid gap-4 md:grid-cols-2 md:items-start">
            <div>
              <h2 className="text-xl font-medium">{s.title}</h2>
              <p className="mt-2 leading-relaxed text-ink-soft">{s.text}</p>
              <pre className="mt-4 overflow-x-auto rounded-xl bg-[#0f1440] p-4 text-sm leading-relaxed text-[#e6e8ff]">
                <code>{s.code}</code>
              </pre>
            </div>
            <div className="rounded-xl border border-current/15 p-5">
              <p className="mb-3 text-xs uppercase tracking-wider text-ink-soft">Попробуй</p>
              {s.demo}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
