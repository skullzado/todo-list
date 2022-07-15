import './App.css';
import Container from './components/Container';
import Header from './components/Header';

const App = () => {
  const app = document.createElement('div');

  app.classList.add('app');
  app.append(Header(), Container());

  return app;
};

export default App;
