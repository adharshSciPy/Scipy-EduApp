import { Box, Breadcrumbs, Button, Card, CardActionArea, CardMedia, Container, Grid, MenuItem, Stack, Typography } from '@mui/material';
import * as React from 'react'
import { Link } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupsIcon from '@mui/icons-material/Groups';
import { useNavigate } from 'react-router-dom';
import { maxWidth } from '@mui/system';
import ScheduleTable from './OldClass'

function Class() {
   const navigate = useNavigate()

   const breadcrumbs = [
      { label: 'Home', to: '/student/home' },
      { label: 'Class', to: '/student/class' }
   ];

   const [classSchduled, setClassSchduled] = React.useState(true)

   return (
      <>
         <Container>
            <Breadcrumbs separator="›" aria-label="breadcrumb">
               {breadcrumbs.map((breadcrumb, index) => (
                  <Link color="inherit" to={breadcrumb.to} key={index} aria-current={index.currentPage} underline="hover">
                     <p style={{ fontSize: '12px' }}>{breadcrumb.label}</p>
                  </Link>
               ))}
            </Breadcrumbs>

            <Grid
               container
               spacing={3}
               direction="row-reverse"
               sx={{ width: '95vw' }}
            >

               <Grid item xs={12}>
                  <Box sx={{ borderBottom: `1px solid lightgrey`, pb: 1, mt: 1 }}>
                     <Typography variant="h5" color="secondary">Artificial Intellegence Python</Typography>
                     <Stack direction="row" justifyContent="space-between" sx={{ maxWidth: '23rem' }}>
                        <Typography variant='caption' color="secondary">Batch Id: 01PY01</Typography>
                        <Typography variant='caption' color="secondary">Instructor: John Doe</Typography>
                        <Typography variant='caption' color="secondary">Duration: 90hrs</Typography>
                     </Stack>
                  </Box>
               </Grid>


               <Grid container item xs={12} sm={6} md={8}>
                  <Card sx={{ height: '100%', width: '100%', pt: 3, boxShadow: "rgba(0, 0, 0, 0.12) 0px 3px 12px" }}>
                     <Container>
                        <Typography variant="h6" color="secondary">Tutorials</Typography>
                        <ScheduleTable />
                     </Container>
                  </Card>
               </Grid>

               <Grid item xs={12} sm={6} md={4}>
                  <Card sx={{ p: 3, boxShadow: "rgba(0, 0, 0, 0.12) 0px 3px 12px" }}>
                     {
                        classSchduled ?
                           <>
                              <Box>
                                 <Stack direction="row" justifyContent="space-between">
                                    <Stack direction="row" spacing={1}>
                                       <SchoolIcon color='secondary' fontSize='small' />
                                       <Typography variant="body2" color="secondary">
                                          Schedule
                                       </Typography>
                                    </Stack>

                                    <Stack direction="row" spacing={1}>
                                       <AccessTimeIcon color='primary' fontSize='small' />
                                       <Typography variant='caption' color="primary">
                                          12:00 PM - 2:00 PM
                                       </Typography>
                                    </Stack>
                                 </Stack>

                                 <Box sx={{ mt: 4 }}>
                                    <Typography variant="h6" color="secondary">
                                       Topics
                                    </Typography>
                                    <Typography variant="subtitle1" color="secondary">
                                       Python Introduction, Varaibles,
                                       Constants
                                    </Typography>
                                 </Box>


                                 <Box sx={{ mt: 3 }}>
                                    <a href="https://zoom.us/" target="_blank">
                                       <CardActionArea sx={{ backgroundColor: '#1976d222', p: 1 }}>
                                          <Stack direction="row" spacing={2}>
                                             <GroupsIcon color='primary' fontSize='small' />
                                             <Typography variant="body2" color="primary">
                                                Join Live Class in Zoom
                                             </Typography>
                                          </Stack>
                                       </CardActionArea>
                                    </a>
                                 </Box>
                              </Box>
                           </>
                           :
                           <>
                              <Stack alignItems="center">
                                 <Typography variant="body2" color="error">
                                    No classes scheduled yet
                                 </Typography>
                              </Stack>
                           </>
                     }
                  </Card>
               </Grid>
            </Grid>

            {/* </Stack> */}
         </Container>
      </ >
   )
}

export default Class