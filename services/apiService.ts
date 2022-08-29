import { HttpClient } from "../apiClient/http-client";
import { TodoItems } from "../apiClient/TodoItems";

export class TodoApi {
  private client = new HttpClient({
    baseUrl: "https://localhost:7110",
  });

  public todoItems = () => new TodoItems(this.client);
}