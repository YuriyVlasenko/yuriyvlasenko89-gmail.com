export interface DataService<T> {
  getItems(): Promise<T[]>;
  editItem(item: T);
  deleteItem(id: string);
  createItem(item: T);
}
