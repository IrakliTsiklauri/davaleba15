import "./App.css";
import useDetectDevice from "./hooks/useDetectDevice";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [isDark, toggle] = useLocalStorage("darkTheme", true);
  const device = useDetectDevice();
  const dark = device === "Mobile" ? false : isDark;
  return (
    <div
      style={{
        backgroundColor: dark ? "#262647" : "white",
        color: dark ? "white" : "black",
        height: "100vh",
      }}
    >
      {device == "Desktop" && (
        <button onClick={() => toggle((prevState) => !prevState)}>
          Toggle Dark
        </button>
      )}
      {dark ? <h1>Hello Dark Mode</h1> : <h1>Hello Light Mode</h1>}
    </div>
  );
}

export default App;
