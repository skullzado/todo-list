import { IProject } from '../interfaces/Interfaces';

export default class Project implements IProject {
  id: string;
  title: string;
  taskNumber: number;

  constructor(title: string, taskNumber: number) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.taskNumber = taskNumber;
  }
}
