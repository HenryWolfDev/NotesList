export type AppActionKeys =
  | 'VIEW_Inbox'
  | 'VIEW_TODAY'
  | 'VIEW_UPCOMING'
  | 'MODAL_ADD_TASK'
  | 'MODAL_SEARCH'
  | 'MODAL_ADD_PROJECT';

export interface SidebarButtonProps {
  iconName: string; // Name des Icons
  label: string; // Text (z.B. "Suchen")
  contentNumber?: number; // Zeigt Anzahl der Inhalte anhand einer Nummer an (optional - falls Inhalte vorhanden)
  viewKey: AppActionKeys; // Key zum öffnen der Ansicht
  onClick: () => AppActionKeys;
}
