import AccountsPanelList from "./components/AccountsPanelList";
import BillPanelList from "./components/BillPanelList";
import MontlyTarget from "./components/MontlyTarget";
import SideNavList from "./components/SideNavList";
import TopNav from "./components/TopNav";
import GraphList from "./components/GraphList";
import "./App.scss";

function App() {
  function App() {
    useEffect(() => {
      axios.get(`http://localhost:3000/accounts`).then((res) => {
        console.log("WE ARE PRINTING HERE ---------->", res);
      });
    });

    return (
      <main className="layout">
        <section className="sidebar">
          <nav className="sidebar__menu">
            <SideNavList />
          </nav>
        </section>

        <section className="content">
          <section className="top_nav">
            <TopNav />
          </section>
          <GraphList />
          <AccountsPanelList />
          <MontlyTarget />
          <BillPanelList />
        </section>
      </main>
    );
  }
}
export default App;
