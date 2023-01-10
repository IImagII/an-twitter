import React from 'react'

import { Box, Typography, Button } from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter'
import SearchIcon from '@mui/icons-material/Search'
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline'
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined'

export interface ISign {}

export const Sign = (props: ISign) => {
   return (
      <>
         <Box
            sx={{
               display: 'flex',
               height: '90vh',
            }}
         >
            <Box
               sx={{
                  backgroundColor: '#71C9F8',
                  flex: '0 0 50%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  overflow: 'hidden',
               }}
            >
               <Box
                  sx={{
                     textAlign: 'left',
                     width: '380px',
                     '& h6': {
                        display: 'flex',
                        color: '#fff',
                        fontWeight: 600,
                        fontSize: 20,
                        marginBottom: '40px',
                     },
                  }}
               >
                  <Typography variant='h6'>
                     <SearchIcon sx={{ fontSize: 35, mr: '15px' }} />
                     Читайте о том, что вам <br /> интересно.
                  </Typography>

                  <Typography variant='h6'>
                     <PeopleOutlineIcon sx={{ fontSize: 35, mr: '15px' }} />
                     Узнайте, о чем говорят в мире.
                  </Typography>

                  <Typography variant='h6'>
                     <ModeCommentOutlinedIcon
                        sx={{ fontSize: 35, mr: '15px' }}
                     />
                     Присоединяйтесь к общению.
                  </Typography>
               </Box>

               {/* <ul sx={{ listStyle: 'none' }}>
                  <li>
                     <Typography variant='h6' sx={{ color: '#fff' }}>
                        Читайте о том, что вас интересно.
                     </Typography>
                  </li>
                  <li>
                     <Typography variant='h6'>
                        Узнайте, о чем говорят в мире.
                     </Typography>
                  </li>
                  <li>
                     <Typography variant='h6'>
                        Присоединяйтесь к общению.
                     </Typography>
                  </li>
               </ul> */}
            </Box>
            <Box
               sx={{
                  flex: '0 0 50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  overflow: 'hidden',
               }}
            >
               <Box sx={{ width: '370px', textAlign: 'left' }}>
                  <Box>
                     <TwitterIcon
                        color='primary'
                        sx={{ mb: '7px', fontSize: 50 }}
                     />
                  </Box>

                  <Typography
                     variant='h5'
                     sx={{
                        fontSize: '30px',
                        marginBottom: '43px',
                        fontWeight: '800',
                     }}
                  >
                     Узнайте, что <br />
                     происходит в мире прямо сейчас.
                  </Typography>
                  <Typography
                     sx={{
                        marginBottom: '15px',
                        textAlign: 'center',
                        fontWeight: '600',
                     }}
                  >
                     Присоединяйтесь к Твитеру прямо сейчас!
                  </Typography>
                  <Button
                     variant='contained'
                     color='primary'
                     fullWidth
                     sx={{ marginBottom: '15px' }}
                  >
                     Зарегестрироваться
                  </Button>
                  <Button variant='outlined' color='primary' fullWidth>
                     Войти
                  </Button>
               </Box>
            </Box>
         </Box>
      </>
   )
}
