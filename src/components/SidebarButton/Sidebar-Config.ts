import type { AppActionKeys, SidebarButtonProps } from './SidebarButton';

// FACTORY
const createBtn = (
  label: string,
  icon: string,
  key: AppActionKeys,
  count?: number,
): SidebarButtonProps => ({
  label,
  iconName: icon,
  viewKey: key,
  contentNumber: count,
  onClick: () => key,
});

// FINAL EXPORT
export const SIDEBAR_BUTTONS: SidebarButtonProps[] = [
  createBtn('Add task', 'icon-home', 'MODAL_ADD_TASK'),
  createBtn('Inbox', 'icon-home', 'VIEW_Inbox'),
  createBtn('Today', 'icon-calendar', 'VIEW_TODAY'),
  createBtn('Upcoming', 'icon-calendar', 'VIEW_UPCOMING'),
  createBtn('Search', 'icon-search', 'MODAL_SEARCH'),
  createBtn('New Project', 'icon-plus', 'MODAL_ADD_PROJECT'),
];
