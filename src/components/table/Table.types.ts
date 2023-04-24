export enum SortOrder {
  ASC = 'asc',
  DESC = 'desc',
}

export interface SortColumn {
  path: string;
  order: SortOrder;
}
