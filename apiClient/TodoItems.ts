/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import {
  CreateTodoItemCommand,
  TodoItemBriefDtoPaginatedList,
  TodoItemDto,
  UpdateTodoItemCommand,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class TodoItems<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags TodoItems
   * @name TodoItemsList
   * @request GET:/api/todo-items
   * @response `200` `TodoItemBriefDtoPaginatedList` Success
   */
  todoItemsList = (query?: { PageNumber?: number; PageSize?: number }, params: RequestParams = {}) =>
    this.http.request<TodoItemBriefDtoPaginatedList, any>({
      path: `/api/todo-items`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags TodoItems
   * @name TodoItemsCreate
   * @request POST:/api/todo-items
   * @response `200` `number` Success
   */
  todoItemsCreate = (data: CreateTodoItemCommand, params: RequestParams = {}) =>
    this.http.request<number, any>({
      path: `/api/todo-items`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags TodoItems
   * @name TodoItemsUpdate
   * @request PUT:/api/todo-items/{todoItemId}
   * @response `200` `void` Success
   */
  todoItemsUpdate = (todoItemId: number, data: UpdateTodoItemCommand, params: RequestParams = {}) =>
    this.http.request<void, any>({
      path: `/api/todo-items/${todoItemId}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags TodoItems
   * @name TodoItemsDelete
   * @request DELETE:/api/todo-items/{todoItemId}
   * @response `200` `void` Success
   */
  todoItemsDelete = (todoItemId: number, params: RequestParams = {}) =>
    this.http.request<void, any>({
      path: `/api/todo-items/${todoItemId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @tags TodoItems
   * @name TodoItemsDetail
   * @request GET:/api/todo-items/{todoItemId}
   * @response `200` `TodoItemDto` Success
   */
  todoItemsDetail = (todoItemId: number, params: RequestParams = {}) =>
    this.http.request<TodoItemDto, any>({
      path: `/api/todo-items/${todoItemId}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
