import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ListTask from "./components/ListTask";

export default function App() {
  return (
    <div className="App">
      <Header />
      <ListTask />
      <Footer />
    </div>
  );
};
