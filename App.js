// This is component in which we are doing the changes that are going to show on react app
// import logo from './logo.svg';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import './App.css';
function App() {
  return (
    <>
      {/* just rendered the Navbar component here rather than adding messy code of that so that it would be easy to re use that code and for better readibility and understanding..*/}
      {/* here what we are doing is passing props means we can change the title and other info whenever we want by passing the title or anyinfo as props from any component so that we dodn't neended to add the Navbar Code in every component and with just one Line of rendering to the Navbar with title as props we got our navbar so here where props were used. */}
      <Navbar title="Rajput Harshvardhan Singh" aboutText="About Me"/>
      {/* <Navbar/>here as we didn't passes any props so it will take default props first and if we haven't passed them also then we will show error on console. */}


      <div className="container my-3">{/*the container class in bootstrap:It ensures that your content remains centered and properly aligned within the container. and my-3 gives the margin on y-axis and it's max value is 5.*/}
        {/* <TextForm heading="Enter the text to analyze"/> */}
        <About/>
      </div>
    </>
  );
}

export default App;
