"use client";
import { useState } from 'react';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { CardContent, Typography, Box, Paper, Chip, Divider, Grid } from '@mui/material';
import { ShippingItem } from '../types/shipping';

interface ShippingGridProps {
  items: ShippingItem[];
}

const columns: GridColDef[] = [
  { 
    field: 'id', 
    headerName: 'Tracking ID', 
    width: 120,
    renderCell: (params) => (
      <Typography sx={{ fontWeight: 600, color: 'primary.main' }}>
        {params.value}
      </Typography>
    )
  },
  { 
    field: 'category', 
    headerName: 'Category', 
    width: 130,
  },
  { 
    field: 'subcategory', 
    headerName: 'Subcategory', 
    width: 130 
  },
  { 
    field: 'name', 
    headerName: 'Item Name', 
    width: 200,
    flex: 1,
  },  { 
    field: 'latitude', 
    headerName: 'Latitude', 
    width: 130,
    valueFormatter: (params) => params.value != null ? params.value.toFixed(4) : 'N/A',
  },
  { 
    field: 'longitude', 
    headerName: 'Longitude', 
    width: 130,
    valueFormatter: (params) => params.value != null ? params.value.toFixed(4) : 'N/A',
  },
  { 
    field: 'quantity', 
    headerName: 'Quantity', 
    width: 110, 
    type: 'number',
    align: 'center',
    headerAlign: 'center',
  },  { 
    field: 'weight', 
    headerName: 'Weight (kg)', 
    width: 130, 
    type: 'number',
    valueFormatter: (params) => params.value != null ? params.value.toFixed(2) : 'N/A',
  },
];

export default function ShippingGrid({ items }: ShippingGridProps) {
  const [selectedItem, setSelectedItem] = useState<ShippingItem | null>(null);

  return (
    <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: 3 }}>      <Paper elevation={0} sx={{ p: 2, mb: 2, borderRadius: '8px', bgcolor: '#fff' }}>
        <Typography variant="h5" sx={{ mb: 1, color: 'primary.dark', fontWeight: 600 }}>
          Shipment Inventory
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Manage and track all items in the shipping pipeline
        </Typography>
        <Box sx={{ height: '58vh', width: '100%' }}>
          <DataGrid
            rows={items}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            slots={{
              toolbar: GridToolbar,
            }}
            slotProps={{
              toolbar: {
                showQuickFilter: true,
              },
            }}
            pageSizeOptions={[5, 10, 25]}
            checkboxSelection
            disableRowSelectionOnClick
            onRowClick={(params) => setSelectedItem(params.row as ShippingItem)}
            sx={{
              '& .MuiDataGrid-columnHeaders': {
                backgroundColor: 'rgba(13, 71, 161, 0.04)',
                fontSize: '0.9rem',
              },
              '& .MuiDataGrid-cell:focus': {
                outline: 'none',
              },
              '& .MuiDataGrid-row:hover': {
                backgroundColor: 'rgba(13, 71, 161, 0.04)',
                cursor: 'pointer',
              },
              '& .MuiDataGrid-row.Mui-selected': {
                backgroundColor: 'rgba(13, 71, 161, 0.08)',
                '&:hover': {
                  backgroundColor: 'rgba(13, 71, 161, 0.12)',
                },
              },
              border: 'none',
              borderRadius: 2,
            }}
          />
        </Box>
      </Paper>      {selectedItem && (
        <Paper elevation={0} sx={{ p: 0, borderRadius: '8px', overflow: 'hidden' }}>
          <Box sx={{ 
            p: 2, 
            backgroundColor: 'primary.main', 
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            gap: 2
          }}>
            <Box sx={{ 
              width: 48, 
              height: 48, 
              borderRadius: '50%', 
              bgcolor: 'rgba(255,255,255,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" fill="white"/>
              </svg>
            </Box>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Shipment #{selectedItem.id}
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                {selectedItem.name}
              </Typography>
            </Box>
            <Chip 
              label="Active" 
              size="small" 
              sx={{ 
                ml: 'auto', 
                bgcolor: '#4caf50', 
                color: 'white', 
                fontWeight: 600 
              }} 
            />
          </Box>
          
          <CardContent sx={{ p: 3 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                  Item Details
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  <strong>Name:</strong> {selectedItem.name}
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  <strong>Category:</strong> {selectedItem.category}
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  <strong>Subcategory:</strong> {selectedItem.subcategory}
                </Typography>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                  Shipping Information
                </Typography>                <Typography variant="body1" sx={{ mb: 1 }}>
                  <strong>Location:</strong> {selectedItem.latitude != null ? selectedItem.latitude.toFixed(4) : 'N/A'}, 
                  {selectedItem.longitude != null ? selectedItem.longitude.toFixed(4) : 'N/A'}
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  <strong>Quantity:</strong> {selectedItem.quantity || 0} units
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  <strong>Total Weight:</strong> {selectedItem.weight != null && selectedItem.quantity != null ? 
                    (selectedItem.weight * selectedItem.quantity).toFixed(2) : '0.00'} kg
                </Typography>
              </Grid>
            </Grid>
            
            <Divider sx={{ my: 2 }} />
            
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Chip 
                label="View Details" 
                color="primary" 
                variant="outlined" 
                sx={{ mr: 1, cursor: 'pointer' }} 
              />
              <Chip 
                label="Track Shipment" 
                color="secondary" 
                sx={{ cursor: 'pointer' }} 
              />
            </Box>
          </CardContent>
        </Paper>
      )}
    </Box>
  );
}
