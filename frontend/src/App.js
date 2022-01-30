import { Container } from 'react-bootstrap';
import { HashRouter as Router,Routes,Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import ProductsScreen from './screens/ProductsScreen';


function App() {
  return (
    <Router>
      <Header/>
        <main className='py-3'>
          <Container>    
            <Routes>
              <Route path='/' element={<HomeScreen />} exact />
              <Route path='/categories/:id' element={<ProductsScreen />} />
              <Route path='/product/:id' element={<ProductScreen />} />
            </Routes>        
          </Container>
        </main>
      <Footer/>
    </Router>
  );
}

export default App;
