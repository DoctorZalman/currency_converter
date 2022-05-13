import { makeStyles } from '@mui/styles';
import {Theme} from "@mui/material";

export const useStyles = makeStyles((theme: Theme) => {
  const {primary} = theme.palette.text

 return {
   toolbar: {
     textAlign: 'center',
     marginBottom: 30,
   },
   button: {
     padding: 0,
     textDecoration: 'none',
     width: '100%',
     height: '100%',
     color: primary
   }
 }
});
