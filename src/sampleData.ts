import { ISidebarList } from './interfaces/Interfaces';

const taskListData: ISidebarList[] = [
  { title: 'Today', taskNumber: 0 },
  { title: 'Upcoming', taskNumber: 0 },
  { title: 'Completed', taskNumber: 0 },
];

const projectListData: ISidebarList[] = [];

const sampleData = {
  taskListData,
  projectListData,
};

export default sampleData;
