import './Sidebar.css';

interface ISidebar {
  text: string;
  color?: string;
}

const sidebarProps: ISidebar[] = [
  { text: 'Today' },
  { text: 'Tomorrow' },
  { text: 'Upcoming' },
];

const projectListProps: ISidebar[] = [
  { text: 'Personal', color: '#e6b0aa' },
  { text: 'Work', color: '#d7bde2' },
  { text: 'General', color: '#a9cce3' },
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
    SidebarList(sidebarProps),
    SidebarListSeparator(),
    SidebarTitle('Project List'),
    SidebarListSeparator(),
    SidebarList(projectListProps),
    SidebarListSeparator(),
    addProjectBtn
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

  arr.forEach(({ text, color }) => {
    sidebarList.appendChild(SidebarListItem(text, color));
  });

  return sidebarList;
};

const SidebarListItem = (text: string, color: string | null) => {
  const sidebarListItem = document.createElement('li');
  const button = document.createElement('button');

  if (color) {
    const sidebarListItemColor = document.createElement('span');
    sidebarListItemColor.classList.add('sidebar-list__item-color');
    sidebarListItemColor.style.backgroundColor = color;
    sidebarListItem.appendChild(sidebarListItemColor);
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

export default Sidebar;
