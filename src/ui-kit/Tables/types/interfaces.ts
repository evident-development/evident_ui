export interface ITableDataCol {
  title: string;
  id: string;
}
export interface ITableDataRow {
  row: ITableDataCol[];
  id: '1';
}
export interface IPlainTableProps {
  tableData?: ITableDataRow[];
}
