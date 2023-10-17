export interface IColumn {
    id: string;
    ordinalNo: number;
    title: string;
    type: string;
    width?: number;
    tree?:boolean;
    hide?:boolean;
  }
export interface IrowData {
   id: string;
   [columnId: string]: any
}


  export interface IAppState {
    columns:IColumn[];
    hiddenColumns: string[];
    rowsData:IrowData[];
    searchValue:string; 
  }
