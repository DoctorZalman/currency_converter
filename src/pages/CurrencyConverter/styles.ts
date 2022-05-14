import { makeStyles } from '@mui/styles';
import {Theme} from "@mui/material";

export const useStyles = makeStyles((theme: Theme) => {
  const {secondary} = theme.palette.text

  return {
    main: {
      display: 'flex',
      alignItems: 'center',
      width: '75%',
      minHeight: '130px',
      height: '100%',
      color: secondary
    },
    mainInput: {
      maxWidth: 275,
      width: '100%',
      marginBottom: 20,
      color: secondary,
      boxShadow: '-10px 12px 10px rgba(0, 0, 0, 0.24)',
    },
    secondaryInput: {
      maxWidth: 275,
      width: '100%',
      color: secondary,
      boxShadow: '-10px 12px 10px rgba(0, 0, 0, 0.24)',
    }
  }
});
