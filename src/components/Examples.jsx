import TabButton from "./TabButton.jsx";
import { useState } from "react";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";
export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState(
    "Please select a core concept"
  );
  function selectHandler(msg) {
    setSelectedTopic(msg);
    console.log(`${msg} selectedTopic`);
  }

  return (
    <>
      <Section id="examples">
        <h2>Examples</h2>
        <Tabs
          buttons={
            <>
              <TabButton
                isSelected={selectedTopic === "component"}
                onClick={() => selectHandler("component")}
              >
                Component
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "jsx"}
                onClick={() => selectHandler("jsx")}
              >
                JSX
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "props"}
                onClick={() => selectHandler("props")}
              >
                Props
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "state"}
                onClick={() => selectHandler("state")}
              >
                State
              </TabButton>
            </>
          }
        >
          {selectedTopic}
        </Tabs>
      </Section>
    </>
  );
}
