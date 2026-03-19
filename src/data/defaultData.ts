import { storeDB } from '../core/Store';

export const createDefaultData = (): void => {
  const cat_personal = storeDB.createCategory('Personal');
  const proj_sport = storeDB.createProject('Sport', cat_personal.id);
  const sec_sport = storeDB.createSection('Chestday', proj_sport.id);
  storeDB.createSectionTask('Dumbell Bench Press', proj_sport.id, sec_sport.id);
  storeDB.createProjectTask('160g protein', proj_sport.id);

  const cat_education = storeDB.createCategory('Education');
  const proj_typeScript = storeDB.createProject('TypeScript', cat_education.id);
  const sec_basics = storeDB.createSection('Grundlagen', proj_typeScript.id);
  storeDB.createSectionTask('Build your own project', proj_typeScript.id, sec_basics.id);
  storeDB.createProjectTask('Utility Types lernen', proj_typeScript.id);

  const cat_job = storeDB.createCategory('Job');
  const proj_portfolio = storeDB.createProject('Portfolio', cat_job.id);
  const sec_gitHub = storeDB.createSection('GitHub', proj_portfolio.id);
  storeDB.createSectionTask('Write README', proj_portfolio.id, sec_gitHub.id);
  storeDB.createProjectTask('Write CV', proj_portfolio.id);
};
