import { Box, useTheme } from '@mui/material';
// import { DataGrid } from '@mui/x-data-grid';
import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/Header';
import { useGetUserPerformanceQuery } from '../../state/api';
const Performance = () => {
  const theme = useTheme();
  const UserId = useSelector((state) => state.global.UserId);
  console.log(UserId)
  const { data, isLoading } = useGetUserPerformanceQuery(UserId);
  console.log(data);
  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1
    },
    {
      field: "userId",
      headerName: "User Id",
      flex: 1
    },
    {
      field: "createdAt",
      headerName: "CreatedAt",
      flex: 1
    },
    {
      field: "products",
      headerName: "Products",
      flex: 0.5,
      sortable: false,
      renderCell: (params) =>
        params.value.length
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
      <Header title={"Performance"} subtitle={"Track your Affiliate Sales Performance Here"} />
      <Box height={"75vh"}>
        <DataGrid
          rows={(data && data.sales) || []}
          columns={columns}
          getRowId={(row) => row._id}
          loading={isLoading || !data}
        />
      </Box>
    </Box>
  )
}

export default Performance