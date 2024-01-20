import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import Coreconcepts from "./components/CoreConcepts.jsx";
import { CORE_CONCEPTS } from "./data.js";
import TabButton from "./components/TabButton.jsx";
import { EXAMPLES } from "./data.js";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  function clickHandler(selectedbtn) {
    setSelectedTopic(selectedbtn);
    console.log(selectedbtn);
    console.log(setSelectedTopic);
    console.log(selectedTopic);
  }
  console.log("APP component execution check");
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concept</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptitems) => (
              <Coreconcepts key={conceptitems.title} {...conceptitems} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === "html"}
              onSelect={() => clickHandler("html")}
            >
              HTML
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "css"}
              onSelect={() => clickHandler("css")}
            >
              CSS
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "javascript"}
              onSelect={() => clickHandler("javascript")}
            >
              JavaScript
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "responsiveDesign"}
              onSelect={() => clickHandler("responsiveDesign")}
            >
              Responsive Design
            </TabButton>
          </menu>
          {selectedTopic ? (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          ) : (
            <p>Please select a topic</p>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
