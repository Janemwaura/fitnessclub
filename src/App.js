import './App.css';
import Hero from '/home/janewmwaura/personalprojectportfolio/FitClub-Starter/src/components/Hero.jsx'
import Programs from '/home/janewmwaura/personalprojectportfolio/FitClub-Starter/src/components/Programs.jsx'
import Reasons from '/home/janewmwaura/personalprojectportfolio/FitClub-Starter/src/components/Reasons.jsx'
import Plans from '/home/janewmwaura/personalprojectportfolio/FitClub-Starter/src/components/Plans.jsx'
import Testimonials from '/home/janewmwaura/personalprojectportfolio/FitClub-Starter/src/components/Testimonials.jsx'
import Join from '/home/janewmwaura/personalprojectportfolio/FitClub-Starter/src/components/Join.jsx'
function App() {
  return (
    <div className="App">
          <Hero/>
          <Programs />
          <Reasons />
          <Plans />
          <Testimonials />
          <Join />
    </div>
  );
}

export default App;
