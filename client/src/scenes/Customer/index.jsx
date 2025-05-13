import { Box, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import Header from '../../components/Header';
import { useGetCustomerQuery } from '../../state/api';

const Customer = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetCustomerQuery();
  // console.log(data);
  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1
    },
    {
      field: "name",
      headerName: "Name",
      flex: 0.5
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1
    },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      flex: 0.4,
      renderCall: (params) => {
        return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1)-$2-$3")
      }
    },
    {
      field: "country",
      headerName: "Country",
      flex: 0.4
    },
    {
      field: "occupation",
      headerName: "Occupation",
      flex: 1
    },
    {
      field: "role",
      headerName: "Role",
      flex: 0.5
    }
  ]
  return (
    <Box
      m={'1rem 1.7rem'}
      height={'75vh'}
    >
      <Header title={"Customer"} subtitle={"Customers List"} />
      <DataGrid
        rows={data || []}
        columns={columns}
        getRowId={(row) => row._id}
        loading={isLoading || !data}
      />
    </Box>
  )
}

export default Customer