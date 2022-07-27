import './Container.css';
import Sidebar from './Sidebar';

const Container = () => {
  const container = document.createElement('div');

  container.classList.add('container');

  container.append(Sidebar());

  return container;
};

export default Container;
