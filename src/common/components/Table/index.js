import React from 'react';
import { CDataTable } from '@coreui/react';

function Table({ columnsDefs, rows, countPerPage = 20, onPageChange, rest }) {
  return (
    <CDataTable
      addTableClasses="fixed-height=table"
      items={rows}
      fields={columnsDefs}
      hover
      sorter
      striped
      bordered
      size="sm"
      itemsPerPage={countPerPage}
      onPageChange={onPageChange}
      pagination
      {...rest}
    />
  );
}

export default Table;
