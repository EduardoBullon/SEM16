import { useEffect } from "react";
import CardList from "./components/CardList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useItemStore } from "./store/useItemStore";

function App() {
  const items = useItemStore(state => state.items);
  const getItems = useItemStore(state => state.getItems);

  useEffect(() => {
    getItems();
  }, [getItems]);

  return (
    <>
      <Header />
      <main>
        <section className="py-4">
          <div className="container">
            <h2 className="text-center fw-bolder">Items del placeholder</h2>
            <CardList data={items} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App