import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';



function Home() {
  const breadcrumbs = [
    { label: 'Home', to: '/admin/home' }
  ]
  return (
    <div style={{marginTop: '3px'}}>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs.map((breadcrumb, index) => (
          <Link color="inherit" to={breadcrumb.to} key={index} underline="hover">
            <p style={{ fontSize: '12px' }}>{breadcrumb.label}</p>
          </Link>
        ))}
      </Breadcrumbs>
    </div>
  )
}

export default Home