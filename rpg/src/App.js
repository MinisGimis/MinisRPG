import Navbar from './Navbar'
import Inventory from './Inventory'


function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Inventory />
      </div>
    </div>
  );
}

export default App;
