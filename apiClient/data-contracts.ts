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

export interface CreateTodoItemCommand {
  title?: string | null;
}

export interface TodoItemDto {
  /** @format int32 */
  todoItemId?: number;

  /** @format int32 */
  todoListId?: number | null;
  title?: string | null;
  done?: boolean;
}

export interface TodoItemDtoPaginatedList {
  items?: TodoItemDto[] | null;

  /** @format int32 */
  pageNumber?: number;

  /** @format int32 */
  totalPages?: number;

  /** @format int32 */
  totalCount?: number;
  hasPreviousPage?: boolean;
  hasNextPage?: boolean;
}

export interface UpdateTodoItemCommand {
  done?: boolean;
}
