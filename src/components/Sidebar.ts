import { ISidebarList } from '../interfaces/Interfaces';
import sampleData from '../sampleData';
import './Sidebar.css';

const Credits = () => {
  const creditsContainer = document.createElement('div');
  const projectName = document.createElement('h3');
  const projectAuthor = document.createElement('p');
  creditsContainer.classList.add('credits');
  projectName.classList.add('credits__title');
  projectAuthor.classList.add('credits__author');
  projectName.textContent = 'The Odin Project - Todo List';
  projectAuthor.textContent = 'Paul Calzado';
  creditsContainer.append(projectName, projectAuthor);
  return creditsContainer;
};

const AddProjectForm = () => {
  const form = document.createElement('form');
  const inputContainer = document.createElement('div');
  const input = document.createElement('input');
  const label = document.createElement('label');
  const btnContainer = document.createElement('div');
  const addBtn = document.createElement('button');
  const cancelBtn = document.createElement('button');

  form.classList.add('form--project');
  inputContainer.classList.add('input-container');
  input.classList.add('input__text');
  input.id = 'input__text';
  input.placeholder = ' ';
  input.type = 'text';
  input.minLength = 4;
  input.maxLength = 20;
  input.autocomplete = 'off';
  input.autocapitalize = 'on';
  label.classList.add('input__label');
  label.htmlFor = 'input__text';
  label.textContent = 'Project Title';
  btnContainer.classList.add('btn-container');
  addBtn.className = 'btn btn--add';
  addBtn.textContent = 'Add';
  addBtn.type = 'submit';
  cancelBtn.className = 'btn btn--close';
  cancelBtn.textContent = 'Cancel';
  cancelBtn.type = 'button';

  inputContainer.append(input, label);
  btnContainer.append(addBtn, cancelBtn);
  form.append(inputContainer, btnContainer);

  return form;
};

const AddProjectButton = () => {
  const button = document.createElement('button');

  button.className = 'btn add-btn--project';
  button.textContent = 'Add Project';

  return button;
};

const ListItem = ({ title, taskNumber }: ISidebarList, type: string) => {
  const listItem = document.createElement('li');
  const listItemBtn = document.createElement('button');
  const listItemBadge = document.createElement('p');

  listItem.className = `list__item list__item--${type}`;
  listItemBtn.className = `list__item-btn list__item-btn--${type}`;
  listItemBadge.className = `list__item-badge list__item-badge--${type}`;

  listItemBtn.textContent = title;
  listItemBadge.textContent = taskNumber.toString();

  listItemBtn.appendChild(listItemBadge);
  listItem.appendChild(listItemBtn);

  return listItem;
};

export const List = (data: ISidebarList[], type: string) => {
  const list = document.createElement('ul');

  switch (type) {
    case 'task':
      list.className = `list list--${type}`;
      data.forEach(({ title, taskNumber }) => {
        list.appendChild(ListItem({ title, taskNumber }, type));
      });
      break;
    case 'project':
      list.className = `list list--${type}`;
      data.forEach(({ title, taskNumber }) => {
        list.appendChild(ListItem({ title, taskNumber }, type));
      });
      break;
    default:
      break;
  }

  return list;
};

const ListSeparator = () => {
  const listSeparator = document.createElement('div');

  listSeparator.classList.add('list-separator');

  return listSeparator;
};

const ListTitle = (title: string) => {
  const listTitle = document.createElement('h2');

  listTitle.classList.add('list-title');
  listTitle.textContent = title;

  return listTitle;
};

const ListContainer = (title: string, data: ISidebarList[], type: string) => {
  const listContainer = document.createElement('div');

  listContainer.classList.add('list-container');
  listContainer.append(ListTitle(title), ListSeparator(), List(data, type));

  return listContainer;
};

const Sidebar = () => {
  const sidebar = document.createElement('aside');

  sidebar.classList.add('sidebar');
  sidebar.append(
    ListContainer('Task List', sampleData.taskListData, 'task'),
    ListContainer('Project List', sampleData.projectListData, 'project'),
    AddProjectForm(),
    AddProjectButton(),
    Credits()
  );

  return sidebar;
};

export default Sidebar;
