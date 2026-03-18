import type { IStore, UUID } from '../types/_store';
import { Category } from './Category';
import { Project } from './Project';
import { Section } from './Section';
import { Task } from './Task';

export class Store implements IStore {
  categorys: Category[] = [];
  unassignedTasks: Task[] = [];

  createCategory(title: string): Category {
    const newCategory = new Category(title);
    this.categorys.push(newCategory);
    return newCategory;
  }

  createProject(title: string, categoryID: UUID): Project {
    const foundCategory = this.categorys.find(
      category => category.id === categoryID,
    );
    if (!foundCategory) throw new Error('Category not found.');
    const newProject = new Project(title);
    foundCategory.projects.push(newProject);
    return newProject;
  }

  createSection(title: string, projectID: UUID): Section {
    let foundProject;
    for (const catg of this.categorys) {
      foundProject = catg.projects.find(project => project.id === projectID);
      break;
    }
    if (!foundProject) throw new Error('Project not found.');
    const newSection = new Section(title);
    foundProject.sections.push(newSection);
    return newSection;
  }

  // TODO Task kann entweder ohne zuweisung erstellt werden oder
  // einer Section hinzugefügt werden. (Wie definiere ich das im Paramter?)
  createUnassignedTask(title: string): Task {
    const newTask = new Task(title);
    this.unassignedTasks.push(newTask);
    return newTask;
  }
  createProjectTask(title: string, projectID: UUID): Task {
    let foundProject;
    for (const catg of this.categorys) {
      foundProject = catg.projects.find(project => project.id === projectID);
      break;
    }
    if (!foundProject) throw new Error('Project not found.');
    const newTask = new Task(title);
    foundProject.tasks.push(newTask);
    return newTask;
  }
  createSectionTask(title: string, projectID: UUID, sectionID: UUID): Task {
    let foundSection;
    for (const catg of this.categorys) {
      foundSection = catg.projects
        .find(project => project.id === projectID)
        ?.sections.find(section => section.id === sectionID);

      if (foundSection) {
        break;
      }
    }
    if (!foundSection) throw new Error('Section not found.');
    const newTask = new Task(title);
    foundSection.tasks.push(newTask);
    return newTask;
  }
  removeCategory: (categoryID: string) => boolean;
  removeProject: (projectID: string) => boolean;
  removeSection: (sectionID: string) => boolean;
  removeTask: (taskID: string) => boolean;
  assignUnassignedTaskToProject: (taskID: string, projectID: string) => boolean;
  assignTaskToSection: (taskID: string, sectionID: string) => boolean;
}
