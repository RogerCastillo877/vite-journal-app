import { useMemo } from 'react';
import { useDispatch } from 'react-redux';

import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';

import { setActiveNote } from '../../store/journal';

export const SidebarItem = ({ title = '', body, id, date, imageUrls = [] }) => {

  const dispatch = useDispatch();

  const onClickNote = () => {
    dispatch( setActiveNote({ title, body, id, date, imageUrls }) );
    console.log(title);
  };

  const newTitle = useMemo( () => {
    return title.length > 17
      ? title.substring(0, 17) + '...'
      : title;
  }, [ title] )

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={ onClickNote }>
        <ListItemIcon>
          <TurnedInNotOutlinedIcon />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={ newTitle } />
          <ListItemText secondary={ body } />
        </Grid>
      </ListItemButton>
    </ListItem>
  )
}
