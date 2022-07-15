import './Sidebar.css';

interface ISidebar {
  text: string;
  color?: string;
  taskNumber?: string;
}

const taskDueProps: ISidebar[] = [
  { text: 'Today', taskNumber: '2' },
  { text: 'Tomorrow', taskNumber: '5' },
  { text: 'Upcoming', taskNumber: '6' },
  { text: 'Completed', taskNumber: '36' },
];

const projectListProps: ISidebar[] = [
  { text: 'Personal', color: '#e74c3c', taskNumber: '3' },
  { text: 'Work', color: ' #8e44ad', taskNumber: '4' },
  { text: 'General', color: '#3498db', taskNumber: '6' },
  { text: 'Uncategorized', color: '#95a5a6', taskNumber: '12' },
];

const Sidebar = () => {
  const sidebar = document.createElement('aside');
  const addProjectBtn = document.createElement('button');

  sidebar.classList.add('sidebar');
  addProjectBtn.classList.add('project__btn');
  addProjectBtn.textContent = '+ Add Project';

  sidebar.append(
    SidebarTitle('Task Due'),
    SidebarListSeparator(),
    SidebarList(taskDueProps),
    SidebarListSeparator(),
    SidebarTitle('Project List'),
    SidebarListSeparator(),
    SidebarList(projectListProps),
    SidebarListSeparator(),
    addProjectBtn,
    Credits()
  );
  return sidebar;
};

const SidebarTitle = (text: string) => {
  const title = document.createElement('h3');
  title.classList.add('sidebar__title');
  title.textContent = text;
  return title;
};

const SidebarList = (arr: ISidebar[]) => {
  const sidebarList = document.createElement('ul');
  sidebarList.classList.add('sidebar-list');
  arr.forEach(({ text, color, taskNumber }) => {
    sidebarList.appendChild(SidebarListItem(text, color, taskNumber));
  });
  return sidebarList;
};

const SidebarListItem = (text: string, color?: string, taskNumber?: string) => {
  const sidebarListItem = document.createElement('li');
  const button = document.createElement('button');
  if (color) {
    const sidebarListItemColor = document.createElement('span');
    sidebarListItemColor.classList.add('sidebar-list__item-color');
    sidebarListItemColor.style.backgroundColor = color;
    sidebarListItem.appendChild(sidebarListItemColor);
  }
  if (taskNumber) {
    sidebarListItem.appendChild(Badge(taskNumber));
  }
  sidebarListItem.classList.add('sidebar-list__item');
  button.classList.add('sidebar-list__item-btn');
  button.textContent = text;
  sidebarListItem.appendChild(button);
  return sidebarListItem;
};

const SidebarListSeparator = () => {
  const sidebarListSeparator = document.createElement('div');
  sidebarListSeparator.classList.add('sidebar-list__separator');
  return sidebarListSeparator;
};

const Badge = (taskNumber: string) => {
  const badge = document.createElement('p');
  badge.classList.add('sidebar-list__item-badge');
  badge.textContent = taskNumber;
  return badge;
};

const Credits = () => {
  const creditsContainer = document.createElement('div');
  const title = document.createElement('h2');
  const vanityCard = document.createElement('p');
  creditsContainer.classList.add('credits');
  title.classList.add('credits__title');
  vanityCard.classList.add('credits__vanity');
  title.textContent = 'The Odin Project - Todo List';
  vanityCard.textContent = '© Paul Calzado';
  creditsContainer.append(title, vanityCard);
  return creditsContainer;
};

export default Sidebar;
