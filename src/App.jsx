import { useLanguage } from "./exercise-15/LanguageContext";

function App() {
  const { texts, toggleLanguage } = useLanguage();

  return (
    <div>
      <button onClick={toggleLanguage}>
        {texts.button}
      </button>

      <h1>{texts.greeting}</h1>
    </div>
  );
}

export default App;