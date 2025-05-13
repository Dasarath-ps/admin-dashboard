import { useTheme } from '@emotion/react';
import { Search } from '@mui/icons-material';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { GridToolbarColumnsButton, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport } from '@mui/x-data-grid';
import React from 'react';
import Flexbetween from './Flexbetween.jsx';
const DataGridCustomToolbar = ({ searchInput, setSearchInput, setSearch }) => {
  const theme = useTheme();
  return (
    <GridToolbarContainer>
      <Flexbetween width={"100%"}>
        <Flexbetween>
          <GridToolbarColumnsButton />
          <GridToolbarDensitySelector />
          <GridToolbarExport />


        </Flexbetween>
        <TextField
          label="Search..."
          sx={{ mb: "0.5rem", width: "15rem" }}
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
          variant='standard'
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton onClick={() => {
                  setSearch(searchInput);
                  setSearchInput('')
                }}>
                  <Search />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Flexbetween>
    </GridToolbarContainer>
  )
}

export default DataGridCustomToolbar