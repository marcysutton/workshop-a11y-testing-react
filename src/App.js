// import Modal from "react-modal"
import { useState } from "react"
import './App.css'
import Menu from "./components/menu/menu"
import Dropdown from './components/dropdown'
import SignupForm from './components/signup-form'

function App() {
  const [state, setState] = useState({ modalOpen: false, menuOpen: false })

  return (
    <div className="App">
      <header className="App-header">
        <Menu
          className="App-menu"
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
      <main>
        <section className="App-col-primary">
          <SignupForm />
        </section>
        <section className="App-col-secondary">
          <Dropdown activatorText = 'Year' items={[{
            text: '2020',
            url: '#'
          },{
            text: '2019',
            url: '#'
          }, {
            text: '2018',
            url: '#'
          }]} />
        </section>
      </main>
    </div>
  );
}

export default App;
