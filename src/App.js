import './App.css';
import Header from './components/header';
import Dropdown from './components/dropdown';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
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
      </main>
    </div>
  );
}

export default App;
