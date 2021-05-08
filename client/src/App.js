import "./App.css";
import AccountsPanelList from "./components/AccountsPanelList";
import BillPanelList from "./components/BillPanelList";
import MontlyTarget from "./components/MontlyTarget";
import SideNavList from "./components/SideNavList";
import TopNav from "./components/TopNav";
import GraphList from "./components/GraphList";

function App() {
  useEffect(() => {
    axios.get(`http://localhost:3000/accounts`).then((res) => {
      console.log("WE ARE PRINTING HERE ---------->", res);
    });
  });

  return (
    <h2>Welcome</h2>
    // <main className="layout">
    //   <TopNav />
    //   <section className="sidebar">
    //     <hr className="sidebar__separator sidebar--centered" />
    //     <nav className="sidebar__menu">
    //       <SideNavList />
    //     </nav>
    //   </section>
    //   <section>
    //     <GraphList />
    //   </section>
    //   <section>
    //     <BillPanelList />
    //   </section>
    //   <section>
    //     <MontlyTarget />
    //     <AccountsPanelList />
    //   </section>
    // </main>
  );
}

export default App;
