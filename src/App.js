
import './App.css';
import Countries from './conponents/Countries/Countries';
import Country from './conponents/Country/Country';
import Footer from './conponents/Footer/Footer';
import Header from './conponents/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>
      {/* <Country></Country> */}
      <Footer></Footer>
    </div>
  );
}


export default App;
