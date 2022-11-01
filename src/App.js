import { Home } from './pages/Home';
import { About } from './pages/About';
import { Features } from './pages/Features';
import { Gallery } from './pages/Gallery';
import { Footer } from './pages/Footer';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Home />
      <About />
      <Features />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
