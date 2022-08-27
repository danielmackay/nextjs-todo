import { Configuration, TodoItemsApi } from "../apiClient"

export class Api {
  private configuration: Configuration;

  constructor() {
    this.configuration = new Configuration({basePath: "https://localhost:7110"});
  }

  public todoItems(): TodoItemsApi {
    return new TodoItemsApi(this.configuration);
  }
}