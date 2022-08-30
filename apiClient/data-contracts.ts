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

/**
 * @format int32
 */
export type Priority = 1 | 2 | 3;

export interface TodoItemBriefDto {
  /** @format int32 */
  todoItemId?: number;
  title?: string | null;
  done?: boolean;
}

export interface TodoItemBriefDtoPaginatedList {
  items?: TodoItemBriefDto[] | null;

  /** @format int32 */
  pageNumber?: number;

  /** @format int32 */
  totalPages?: number;

  /** @format int32 */
  totalCount?: number;
  hasPreviousPage?: boolean;
  hasNextPage?: boolean;
}

export interface TodoItemDto {
  /** @format int32 */
  todoItemId?: number;
  title?: string | null;
  note?: string | null;
  done?: boolean;
  priority?: Priority;

  /** @format date-time */
  dueDate?: string | null;
}

export interface UpdateTodoItemCommand {
  title?: string | null;
  note?: string | null;
  done?: boolean | null;
  priority?: Priority;
}
