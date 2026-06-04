import Seo from "./components/Seo";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Seo />
      <Home />
    </>
  );
}
