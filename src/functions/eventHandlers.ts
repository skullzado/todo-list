import { List } from '../components/Sidebar';
import sampleData from '../sampleData';
import Utils from '../Utils';

function showProjectForm() {
  const form = document.querySelector('.form--project') as HTMLFormElement;
  const button = document.querySelector(
    '.add-btn--project'
  ) as HTMLButtonElement;
  if (!form && !button) return;
  form.classList.add('show');
  button.classList.add('hide');
}

function hideProjectForm() {
  const form = document.querySelector('.form--project') as HTMLFormElement;
  const button = document.querySelector(
    '.add-btn--project'
  ) as HTMLButtonElement;
  if (!form && !button) return;
  form.classList.remove('show');
  button.classList.remove('hide');
}

function submitProjectHandler(event: Event) {
  event.preventDefault();
  event.stopImmediatePropagation();
  const form = document.querySelector('.form--project') as HTMLFormElement;
  const input = document.querySelector('.input__text') as HTMLInputElement;
  const projectList = document.querySelector(
    '.list--project'
  ) as HTMLUListElement;
  if (!form && !input && !projectList) return;
  sampleData.projectListData.push({ title: input.value, taskNumber: 0 });
  if (projectList.children.length) {
    Utils.removeChildren(projectList);
  }
  projectList.appendChild(List(sampleData.projectListData, 'project'));
  console.log(sampleData.projectListData);
  form.reset();
  hideProjectForm();
}

const eventHandlers = {
  showProjectForm,
  hideProjectForm,
  submitProjectHandler,
};

export default eventHandlers;
