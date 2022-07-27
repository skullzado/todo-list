import Header from './components/Header';
import Container from './components/Container';

const App = () => {
  const app = document.createElement('div');

  app.classList.add('app');

  app.append(Header(), Container());

  return app;
};

export default App;
