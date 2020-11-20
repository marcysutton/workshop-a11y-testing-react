import Menu from "./menu/menu";

function Header() {
  return (
    <header className="App-header">
      <Menu
        isOpen={state.menuOpen}>
        <ul>
            <li><a href="#">
                <i className="fa fa-fw fa-home" />
                <span>Home</span>
            </a></li>
            <li><a href="#">
                <i className="fa fa-fw fa-star" />
                <span>Dog Videos</span>
            </a></li>
            <li><a href="#">
                <i className="fa fa-fw fa-suitcase" />
                <span>Cat Videos</span>
            </a></li>
            <li><a href="#">
                <i className="fa fa-fw fa-question-circle" />
                <span>Mini Horse Videos</span>
            </a></li>
          </ul>
        </Menu>
        <div className="App-header-title">
          <h1>Accessibility Testing Sandbox</h1>
        </div>
    </header>
  );
}

export default Header;
