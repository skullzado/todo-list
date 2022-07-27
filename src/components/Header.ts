import LogoIconSrc from '../assets/logo-icon.png';
import UserIconSrc from '../assets/user-icon.png';
import './Header.css';

// User
const User = () => {
  const userContainer = document.createElement('div') as HTMLDivElement;
  const userIcon = document.createElement('img') as HTMLImageElement;
  const userNameHandle = document.createElement('div') as HTMLDivElement;
  const userName = document.createElement('p') as HTMLParagraphElement;
  const userHandle = document.createElement('p') as HTMLParagraphElement;

  userContainer.classList.add('user-container');
  userIcon.classList.add('user__img');
  userNameHandle.classList.add('user__name-handle');
  userName.classList.add('user__name');
  userHandle.classList.add('user__handle');

  userIcon.src = UserIconSrc;
  userName.textContent = 'Guest';
  userHandle.textContent = '@guest';

  userNameHandle.append(userName, userHandle);
  userContainer.append(userIcon, userNameHandle);

  return userContainer;
};

// Logo
const Logo = () => {
  const logoContainer = document.createElement('div');
  const logoIcon = document.createElement('img');
  const logoTitle = document.createElement('h2');

  logoContainer.classList.add('logo-container');
  logoIcon.classList.add('logo__img');
  logoTitle.classList.add('logo__title');

  logoIcon.src = LogoIconSrc;
  logoTitle.textContent = 'ToDoMoon';
  logoContainer.append(logoIcon, logoTitle);

  return logoContainer;
};

// Header
const Header = () => {
  const header = document.createElement('header') as HTMLDivElement;

  header.classList.add('header');
  header.append(Logo(), User());

  return header;
};

export default Header;
