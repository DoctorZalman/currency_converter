import { makeStyles } from '@mui/styles';
import {Theme} from "@mui/material";

export const useStyles = makeStyles((theme: Theme) => {
  const {secondary} = theme.palette.text

 return {
   toolbar: {
     display: 'flex',
     justifyContent: "space-around",
     marginBottom: 25,
     maxWidth: '350px',
     width: '100%',

   },
   button: {
     padding: '0 !important',
     margin: '10px !important',
     boxShadow: '-10px 12px 10px rgba(0, 0, 0, 0.24)',
   },
   menu_button_link: {
     display: 'flex',
     alignItems: 'center',
     justifyContent: 'center',
     textDecoration: 'none',
     width: '100%',
     height: '100%',
     color: secondary,
     minWidth: '150px',
     minHeight: '40px',
     textAlign: 'center',
     verticalAlign: 'middle'
   }
 }
});
