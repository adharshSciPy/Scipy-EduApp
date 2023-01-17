import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useParams } from 'react-router-dom';

function Batch() {

  const { batches } = useParams()
  console.log(batches)

  const breadcrumbs = [
    { label: 'Home', to: '/admin/home' },
    { label: 'Batches', to: '/admin/batches' },
    { label: 'Batch Details', currentPage: 'page' },
  ];


  return (
    <Breadcrumbs separator="›" aria-label="breadcrumb">
    {breadcrumbs.map((breadcrumb, index) => (
      <Link color="inherit" href={breadcrumb.to} key={index} aria-current={index.currentPage} underline="hover">
        <p style={{ fontSize: '12px' }}>{breadcrumb.label}</p>
      </Link>
    ))}
  </Breadcrumbs>
  )
}

export default Batch