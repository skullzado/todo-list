import './Sidebar.css';

const Sidebar = () => {
  const sidebar = document.createElement('aside');
  const addProjectBtn = document.createElement('button');

  sidebar.classList.add('sidebar');
  addProjectBtn.classList.add('project__btn');

  addProjectBtn.textContent = '+ Add Project';

  sidebar.append(addProjectBtn);
  return sidebar;
};

export default Sidebar;
