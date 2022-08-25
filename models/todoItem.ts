export interface TodoItem {
  id: number;
  title: string;
  isComplete: boolean;
  notes: string;
  priority?: number;
  dueDate?: Date;
}