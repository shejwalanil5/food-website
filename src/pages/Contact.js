import React from 'react'
import Layout from '../components/Layout/Layout'
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import { Box,
   Table,
   Paper,
   TableCell,
   TableContainer,
   TableHead, 
   TableRow, 
   Typography, 
   TableBody} from '@mui/material'
   import SupportAgentIcon from '@mui/icons-material/SupportAgent';

function Contact() {
  return (
    <Layout>
        <Box sx={{ my : 5, ml : 10, mr:5,"@ h4":{fontWeight:'bold', mb:2}}}>
          <Typography variant='h4'>Contact My Resturant</Typography>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem odio
          beatae ducimus magni nobis culpa praesentium velit expedita quae,
          corrupti, pariatur inventore laboriosam consectetur modi impedit
          error, repudiandae obcaecati doloribus.</p>
        </Box>
        <Box sx={{m : 3, width:'600px', ml:10, "@media (max-width:600px)":{
          width:'300px',m:5,
          
        }}}>
          <TableContainer component={Paper}>
            <Table aria-label='contact table'>
              <TableHead>
                <TableRow>
                  <TableCell sx={{bgcolor:'black', color:'white',}} align='center'>Contact Details</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <SupportAgentIcon sx={{color:'red', pt:1}}/> 1800-00-0000 (tolfree)
                  </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <EmailIcon sx={{color:'skyblue', pt:1}}/> help@myrest.com
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <CallIcon sx={{color:'green', pt:1}}/> 1234567890
                    </TableCell>
                  </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
    </Layout>
  )
}

export default Contact