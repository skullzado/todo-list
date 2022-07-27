import ProjectList from './classes/ProjectList';
import { IProject, IProjectList } from './interfaces/Interfaces';

const taskListData: IProject[] = [
  { title: 'Today', taskNumber: 0 },
  { title: 'Upcoming', taskNumber: 0 },
  { title: 'Completed', taskNumber: 0 },
];

const projectListData: IProjectList = new ProjectList([]);

const sampleData = {
  taskListData,
  projectListData,
};

export default sampleData;
