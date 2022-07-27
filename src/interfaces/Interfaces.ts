export interface IProject {
  id?: string;
  title: string;
  taskNumber: number;
}

export interface IProjectList {
  projectList: IProject[];
  getProjectList(): IProject[];
  addToProjectList(project: IProject): void;
  deletFromProjectList(id: string): void;
  editProject(id: string): void;
}
