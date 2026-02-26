import { Outlet, NavLink } from "react-router";

function App() {
  return (
    <>
      <nav role="tablist" className="tabs bg-primary tabs-border">
        <NavLink
          role="tab"
          to="/"
          className={({ isActive }) => (isActive ? "tab tab-active" : "tab")}
        >
          ReadingQueue
        </NavLink>
        <NavLink
          role="tab"
          to="/colorPalatteBuilder"
          className={({ isActive }) => (isActive ? "tab tab-active" : "tab")}
        >
          Color Palatte Builder
        </NavLink>
        <NavLink
          role="tab"
          to="/IdeaBoard"
          className={({ isActive }) => (isActive ? "tab tab-active" : "tab")}
        >
          IdeaBoard
        </NavLink>
        <NavLink
          role="tab"
          to="/GuestList"
          className={({ isActive }) => (isActive ? "tab tab-active" : "tab")}
        >
          GuestList
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
