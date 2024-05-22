import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  // Define the styles as JavaScript objects
  const headerStyle = {
    backgroundColor: "#333",
    color: "#fff",
    padding: "1em 0",
    textAlign: "center",
  };

  const navStyle = {
    display: "flex",
    justifyContent: "center",
    margin: "0",
  };

  const navItemStyle = {
    margin: "0 1em",
    listStyle: "none",
  };

  const mainStyle = {
    padding: "2em",
    backgroundColor: "#fff",
  };

  const sectionStyle = {
    marginBottom: "2em",
  };

  const articleStyle = {
    marginBottom: "2em",
  };

  const asideStyle = {
    backgroundColor: "#f9f9f9",
    padding: "1em",
    borderLeft: "4px solid #ccc",
  };

  const footerStyle = {
    backgroundColor: "#333",
    color: "#fff",
    textAlign: "center",
    padding: "1em 0",
    position: "fixed",
    bottom: "0",
    width: "100%",
  };
  return (
    <div>
      <header style={headerStyle}>
        <h1>My Website</h1>
        <nav>
          <ul style={navStyle}>
            <li style={navItemStyle}>
              <a href="#home" style={{ color: "#fff" }}>
                Home
              </a>
            </li>
            <li style={navItemStyle}>
              <a href="#about" style={{ color: "#fff" }}>
                About
              </a>
            </li>
            <li style={navItemStyle}>
              <a href="#contact" style={{ color: "#fff" }}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main style={mainStyle}>
        <section style={sectionStyle}>
          <h2>About Us</h2>
          <p>
            Apple Inc. is an American multinational technology company
            headquartered in Cupertino, California. It is one of the Big Tech
            companies, alongside Amazon, Google, Microsoft, and Facebook. Apple
            is renowned for its innovative products and services, which have had
            a significant impact on the technology industry and consumer
            electronics market.
          </p>
        </section>

        <article style={articleStyle}>
          <h2>Latest News</h2>
          <p>
            Apple has announced that its annual Worldwide Developers Conference
            (WWDC) will take place from June 10-14, 2024. This event will
            highlight advancements in iOS, iPadOS, macOS, watchOS, tvOS, and
            visionOS. It will include both an online conference and an in-person
            event at Apple Park on June 10
          </p>
        </article>

        <aside style={asideStyle}>
          <h3>Related Links</h3>
          <ul>
            <li>
              <a href="#link1">Link 1</a>
            </li>
            <li>
              <a href="#link2">Link 2</a>
            </li>
          </ul>
        </aside>
      </main>

      <footer style={footerStyle}>
        <p>&copy; 2024 My Website</p>
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
