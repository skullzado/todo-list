import './Container.css';
import Main from './Main';
import Sidebar from './Sidebar';

const Container = () => {
  const container = document.createElement('div');

  container.classList.add('container');
  container.append(Sidebar(), Main());

  return container;
};

export default Container;
