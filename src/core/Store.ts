import type { IStore, UUID } from '../types/_store';
import { Category } from './Category';
import { Project } from './Project';
import { Section } from './Section';
import { Task } from './Task';
import { saveToStorage } from '../utils/storage';

class Store implements IStore {
  private static instance: Store;
  categorys: Category[] = [];
  unassignedTasks: Task[] = [];

  private constructor() {}

  public static getInstance(): Store {
    if (!Store.instance) {
      Store.instance = new Store();
    }
    return Store.instance;
  }

  // #region Create Methods

  createCategory(title: string): Category {
    const newCategory = new Category(title);
    this.categorys.push(newCategory);
    this.save();
    return newCategory;
  }

  createProject(title: string, categoryID: UUID): Project {
    let foundCategory = this.findCategory(categoryID);
    const newProject = new Project(title);
    foundCategory.projects.push(newProject);
    this.save();
    return newProject;
  }

  createSection(title: string, projectID: UUID): Section {
    let foundProject = this.findProject(projectID);
    const newSection = new Section(title);
    foundProject.sections.push(newSection);
    this.save();
    return newSection;
  }

  createUnassignedTask(title: string): Task {
    const newTask = new Task(title);
    this.unassignedTasks.push(newTask);
    this.save();
    return newTask;
  }

  createProjectTask(title: string, projectID: UUID): Task {
    let foundProject = this.findProject(projectID);
    const newTask = new Task(title);
    foundProject.tasks.push(newTask);
    this.save();
    return newTask;
  }

  createSectionTask(title: string, projectID: UUID, sectionID: UUID): Task {
    let foundSection = this.findSection(projectID, sectionID);
    const newTask = new Task(title);
    foundSection.tasks.push(newTask);
    this.save();
    return newTask;
  }

  // #endregion Create Methods

  // #region Remove Methods

  removeCategory(categoryID: UUID): boolean {
    let isRemoved = false;
    const newArray = this.categorys.filter(category => category.id !== categoryID);

    if (newArray.length < this.categorys.length) {
      this.categorys = newArray;
      isRemoved = true;
    }
    this.save();
    return isRemoved;
  }

  removeProject(projectID: UUID): boolean {
    let isRemoved = false;
    for (const catg of this.categorys) {
      const newArray = catg.projects.filter(project => project.id !== projectID);

      if (newArray.length !== catg.projects.length) {
        catg.projects = newArray;
        isRemoved = true;
      }
    }
    this.save();
    return isRemoved;
  }

  removeSection(projectID: UUID, sectionID: UUID): boolean {
    let isRemoved = false;

    const foundProject = this.findProject(projectID);

    const newProjectList = foundProject.sections.filter(section => section.id !== sectionID);

    if (foundProject.sections.length !== newProjectList.length) {
      foundProject.sections = newProjectList;
      isRemoved = true;
    }
    this.save();
    return isRemoved;
  }

  removeUnassignedTask(taskID: UUID): boolean {
    let isRemoved = false;
    const newTasksList = this.unassignedTasks.filter(task => task.id !== taskID);

    if (newTasksList.length < this.unassignedTasks.length) {
      this.unassignedTasks = newTasksList;
      isRemoved = true;
    }
    this.save();
    return isRemoved;
  }

  removeProjectTask(projectID: UUID, taskID: UUID): boolean {
    let isRemoved = false;

    const foundProject = this.findProject(projectID);

    const newProjectTasksList = foundProject.tasks.filter(task => task.id !== taskID);

    if (newProjectTasksList.length !== foundProject.tasks.length) {
      foundProject.tasks = newProjectTasksList;
      isRemoved = true;
    }
    this.save();
    return isRemoved;
  }

  removeSectionTask(projectID: UUID, sectionID: UUID, taskID: UUID): boolean {
    let isRemoved = false;

    const foundSection = this.findSection(projectID, sectionID);

    const newSectionList = foundSection.tasks.filter(task => task.id !== taskID);

    if (newSectionList.length !== foundSection.tasks.length) {
      foundSection.tasks = newSectionList;
      isRemoved = true;
    }
    this.save();
    return isRemoved;
  }

  // #endregion Remove Methods

  assignUnassignedTaskToProject(taskID: string, projectID: string): boolean {
    let unassignedTask = this.unassignedTasks.find(task => task.id === taskID);

    if (!unassignedTask) throw new Error('Task not found.');

    const foundProject = this.findProject(projectID);
    foundProject.tasks.push(unassignedTask);

    const newUnassignedTasksList = this.unassignedTasks.filter(task => task.id !== taskID);
    this.unassignedTasks = newUnassignedTasksList;
    this.save();
    return true;
  }

  assignProjectTaskToSection(taskID: string, projectID: UUID, sectionID: string): boolean {
    const projectTask = this.findProject(projectID).tasks.find(task => task.id === taskID);
    if (!projectTask) throw new Error('Task not found.');

    const foundSection = this.findSection(projectID, sectionID);
    foundSection.tasks.push(projectTask);

    const projectTaskIsRemoved = this.removeProjectTask(projectID, taskID);
    if (!projectTaskIsRemoved) throw new Error('Project-Task not removed.');
    this.save();
    return true;
  }

  // #region Private Methods

  private findCategory(categoryID: string): Category {
    const foundCategory = this.categorys.find(category => category.id === categoryID);
    if (!foundCategory) throw new Error('Category not found.');
    return foundCategory;
  }

  private findProject(projectID: string): Project {
    let foundProject;
    for (const catg of this.categorys) {
      foundProject = catg.projects.find(project => project.id === projectID);

      if (foundProject) {
        break;
      }
    }
    if (!foundProject) throw new Error('Project not found.');
    this.save();
    return foundProject;
  }

  private findSection(projectID: UUID, sectionID: UUID): Section {
    const foundProject = this.findProject(projectID);
    const foundSection = foundProject.sections.find(section => section.id === sectionID);
    if (!foundSection) throw new Error('Section not found.');
    this.save();
    return foundSection;
  }

  private save(): void {
    saveToStorage({ categorys: this.categorys, unassignedTasks: this.unassignedTasks });
  }

  // #endregion Private Methods
}

export const storeDB = Store.getInstance();
