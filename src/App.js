import Api from './apipage/Api';
import Contact from './contact/Contact';
import Home from './home/Home';
import Nav from './navbar/Nav';
import Privacy from './privacy/Privacy';
import Reportpage from './report/Reportpage';
import Term from './terms/Term';
import Footerpage from './footer/Footerpage';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Api/>
      <Home/>
      <Privacy/>
      <Term/>
      <Reportpage/>
      <Contact/>
      <Footerpage/>
    </div>
  );
}

export default App;
