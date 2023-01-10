import React from 'react'

import { Box, List, ListItemText, Typography, Button } from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter'

export interface ISign {}

export const Sign = (props: ISign) => {
   return (
      <>
         <Box
            sx={{
               display: 'flex',
               height: '100vh',
            }}
         >
            <Box
               sx={{
                  backgroundColor: '#1DA1F2',
                  flex: '0 0 50%',
               }}
            >
               <List>
                  <ListItemText>Читайте о том, что вас интересно.</ListItemText>
                  <ListItemText>Узнайте, о чем говорят в мире.</ListItemText>
                  <ListItemText>Присоединяйтесь к общению.</ListItemText>
               </List>
               {/* <ul>
                  <li>
                     <Typography>Читайте о том, что вас интересно.</Typography>
                  </li>
                  <li>
                     <Typography>Узнайте, о чем говорят в мире.</Typography>
                  </li>
                  <li>
                     <Typography>Присоединяйтесь к общению.</Typography>
                  </li>
               </ul> */}
            </Box>
            <Box
               sx={{
                  flex: '0 0 50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
               }}
            >
               <Box>
                  <TwitterIcon color='primary' />
                  <Typography
                     sx={{
                        size: '16px',
                     }}
                  >
                     Узнайте, о чем говорят в мире.
                  </Typography>
                  <Typography variant='subtitle1'>
                     Присоединяйтесь к Твитеру прямо сейчас!
                  </Typography>
                  <Button variant='contained' color='primary' fullWidth>
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
