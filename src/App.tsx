import { Outlet } from "react-router";

function App() {
return(
    <>
    <nav role="tablist" className="tabs bg-primary tabs-border">
        <a role="tab" href="/" className="tab tab-active">ReadingQueue</a>
    </nav>
    <Outlet/>
    </>
)
}
export default App;