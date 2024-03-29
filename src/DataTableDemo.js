import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import {DataTable, TableRow,TableHeader, TableBody, TableColumn, TablePagination} from 'react-md'

const headers =Array.from(Array(8)).map((_,i) =>`Column ${i +1}`);
const data = Array.from(Array(600)).map((_,i) => ({
  key:i,
  cell1: "Test" +i+ "Test Test1",
  cell2: "Test Test Test2",
  cell3: " Test Test Test3 ",
  cell4: "Test Test Test4",
  cell5: "Test Test Test5",
  cell6: "Test Test Test6",
  cell7: "Test Test Test7",
  cell8: "Test Test Test8",
}));
const rows = data.length;

export default class DataTableDemo extends PureComponent {

  static propTypes = {
    mobile: PropTypes.bool.isRequired,
  };


  // static PropTypes ={
  //   mobile: PropTypes.bool.isRequired,
  // };

  state ={
    slicedData: data.slice(0, 10)
  };

  handlePagination = (start, rowsPerPage) => {
    this.setState({slicedData: data.slice(start, start + rowsPerPage)});
  };

  render() {
    const {slicedData} = this.state;
    const rowsPerPageLabel = this.props.mobile ? 'Rows' : 'Rows per Page'
    return (
      <DataTable baseId="simple-pagination">
        <TableHeader >
          <TableRow selectable={false}>
    {headers.map(header => <TableColumn key={header}>{header}</TableColumn>)}
    </TableRow>
</TableHeader>
<TableBody>
  {slicedData.map(({key, cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8}) => (
   <TableRow key={key} selectable={false}>
     <TableColumn >{cell1}</TableColumn>
  <TableColumn>{cell2}</TableColumn>
  <TableColumn >{cell3}</TableColumn>
  <TableColumn>{cell4}</TableColumn>
  <TableColumn >{cell5}</TableColumn>
  <TableColumn>{cell6}</TableColumn>
  <TableColumn >{cell7}</TableColumn>
  <TableColumn>{cell8}</TableColumn>
   </TableRow> 
  ))}
</TableBody>
<TablePagination rows={rows} rowsPerPageLabel={rowsPerPageLabel} onPagination={this.handlePagination} />
      </DataTable>
    );
  }
}