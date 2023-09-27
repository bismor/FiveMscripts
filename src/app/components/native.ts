export interface Native {
  hash: number | string;
  apiset: string;
  name: string;
  arguments: Argument[];
  comment: string;
}

export interface Argument {
  namearg: string;
  type: string;
  description: string;
}
