import { FC } from 'react';
import { TableW } from './style/TableW';
import { TableData, TableRow } from './style';
import { IPlainTableProps } from '../types';

export const PlainTable: FC<IPlainTableProps> = (props) => {
  const { tableData } = props;

  return (
    <TableW>
      <tbody>
        {tableData?.map((trow) => {
          return (
            <TableRow key={trow.id}>
              {trow.row.map(
                (tdata: { title: string; id: string; width?: string }) => {
                  return (
                    <TableData $width={tdata.width} key={tdata.id}>
                      {tdata.title}
                    </TableData>
                  );
                }
              )}
            </TableRow>
          );
        })}
      </tbody>
    </TableW>
  );
};
