import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcepts.jsx";
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";

function App() {
  const [selectedTopic, setSelectedTopic] = useState('Please select a core concept');
  function selectHandler(msg) {
    setSelectedTopic(msg);
    console.log(`${msg} selectedTopic`);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <h2>Time to get started!</h2>
        <menu>
          <TabButton onSelect={() => selectHandler("component")}>
            Component
          </TabButton>
          <TabButton onSelect={() => selectHandler("jsx")}>JSX</TabButton>
          <TabButton onSelect={() => selectHandler("props")}>Props</TabButton>
          <TabButton onSelect={() => selectHandler("state")}>State</TabButton>
        </menu>
        {selectedTopic}
      </main>
    </div>
  );
}

export default App;
