export interface TodoItem {
  id: string;
  title: string;
  isComplete: boolean;
  notes: string;
  priority: number;
  dueDate: Date;
}