import App from './App';
import eventHandlers from './functions/eventHandlers';
import './styles.css';

document.getElementById('root')?.appendChild(App());

if (document.querySelector('.sidebar')!.children.length) {
  const addProjectBtn = (document.querySelector(
    '.add-btn--project'
  ) as HTMLButtonElement)!;
  const closeProjectBtn = (document.querySelector(
    '.btn--close'
  ) as HTMLButtonElement)!;
  const form = (document.querySelector('.form--project') as HTMLFormElement)!;

  addProjectBtn.addEventListener('click', eventHandlers.showProjectForm);
  closeProjectBtn.addEventListener('click', eventHandlers.hideProjectForm);
  form.addEventListener('submit', (event: Event) =>
    eventHandlers.submitProjectHandler(event)
  );
}
