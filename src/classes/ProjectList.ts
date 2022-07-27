import { IProject, IProjectList } from '../interfaces/Interfaces';

export default class ProjectList implements IProjectList {
  projectList: IProject[];

  constructor(projectList: IProject[]) {
    this.projectList = projectList;
  }

  getProjectList(): IProject[] {
    return this.projectList;
  }

  addToProjectList(project: IProject): void {
    this.projectList.push(project);
  }

  deletFromProjectList(id: string): void {
    this.projectList = this.projectList.filter((project) => project.id !== id);
  }

  editProject(id: string): void {
    const editProject = this.projectList.find((project) => project.id === id)!;

    this.projectList = [...this.projectList, editProject];
  }
}
