import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useState } from 'react';
import DataGridCustomToolbar from '../../components/DataGridCustomToolbar.jsx';
import Header from '../../components/Header';
import { useGetTransactionQuery } from '../../state/api';
const Transactions = () => {
  const [page, setPage] = useState(0);
  const [pagesize, setPagesize] = useState(20);
  const [sort, setSort] = useState({});
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState('');
  const { data, isLoading } = useGetTransactionQuery({
    page,
    pagesize,
    sort: JSON.stringify(sort),
    search
  });
  console.log(data)
  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1
    },
    {
      field: "userId",
      headerName: "User ID",
      flex: 1
    },
    {
      field: "createdAt",
      headerName: "Create AT",
      flex: 1
    },

    {
      field: "products",
      headerName: "# of Products",
      flex: 0.5,
      sortable: false,
      renderCell: (params) => params.value.length
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => `$${Number(params.value).toFixed(2)}`
    },
  ]
  return (
    <Box m={"1.5rem 2.5rem"}>
      <Header title="Transactions" subtitle={"List of transactions"} />
      <Box
        height={"80vh"}

      >
        <DataGrid
          isLoading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={(data && data.transaction) || []}
          columns={columns}
          rowCount={(data && data.total) || 0}
          rowsPerPageOptions={[20, 50, 100]}
          pagination
          page={page}
          pageSize={pagesize}
          paginationMode='server'
          sortingMode='server'
          onPageChange={(newPage) => setPage(newPage)}
          onPageSizeChange={(newPageSize) => setPagesize(newPageSize)}
          onSortModelChange={(newSortModel) => setSort(newSortModel[0]) || {}}

          slots={{
            toolbar: DataGridCustomToolbar,
          }}
          slotProps={{
            toolbar: {
              searchInput,
              setSearchInput,
              setSearch,
            }
          }}
          showToolbar
        />
      </Box>
    </Box>
  )
}

export default Transactions