import LogoIcon from './icon.png';
import UserIcon from './user.png';
import './Header.css';

const Header = () => {
  const header = document.createElement('header');

  header.classList.add('header');
  header.append(LogoContainer(), UserContainer());

  return header;
};

const LogoContainer = () => {
  const logoContainer = document.createElement('div');
  const title = document.createElement('h2');

  const icon = new Image();

  title.classList.add('logo__title');
  icon.classList.add('logo__icon');
  logoContainer.classList.add('logo-container');

  title.textContent = 'TodoMoon';
  icon.src = LogoIcon;

  logoContainer.append(icon, title);

  return logoContainer;
};

const UserContainer = () => {
  const userContainer = document.createElement('div');
  const nameHandleContainer = document.createElement('div');
  const userName = document.createElement('p');
  const userHandle = document.createElement('p');
  const icon = new Image();

  userContainer.classList.add('user-container');
  nameHandleContainer.classList.add('user__name-handle');
  userName.classList.add('user__name');
  userHandle.classList.add('user__handle');
  icon.classList.add('user__icon');

  icon.src = UserIcon;
  userName.textContent = 'Todo List - TOP';
  userHandle.textContent = '© Paul Calzado';

  nameHandleContainer.append(userName, userHandle);
  userContainer.append(icon, nameHandleContainer);
  return userContainer;
};

export default Header;
