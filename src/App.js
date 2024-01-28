
import './App.css';
import HeaderComponent from './header';
import MainComponent from './main';
import FooterComponent from './footer';

function App() {

  let title = "Fullstack Course";
  let navitems = ["home","projects","courses","contactus","demoformik","demoreacthookform"];


  return (
    <div >
      <HeaderComponent mytitle={title} mynavitems= {navitems}/>
      <MainComponent/>
      <FooterComponent/>
    </div>
  );
}

export default App;
