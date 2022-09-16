import './style.css';

// wow, that looks perfect!

type User = {
  // required data
  id: number,
  username: string,
  email: string,
  // optional data
  age: number | null,
  isStudent: boolean | null,
  github: string | null,
  vk: string | null,
  // user settings
  showEmail: boolean,
  showFriends: boolean,
  showProjects: boolean,
}

type Temp = {
  enterTime: number,
  // user may close the site by closing browser,
  // so all acts on page causes lastTime param to update
  lastTime: number,
  ip: string,
  operationSystem: string,
}

type state = {
  userInfo: User,
  tempInfo: Temp,
}