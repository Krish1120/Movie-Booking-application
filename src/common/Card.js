import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
export default function ImgMediaCard(props) {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#42a5f5',
      },
    },
  });
  const [genreName, setGenreName] = React.useState([]);
  const [artistName, setArtistName] = React.useState([]);

  const handleChangeGenre = (event) => {
    const {
      target: { value },
    } = event;
    setGenreName(
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  const handleChangeArtist = (event) => {
    const {
      target: { value },
    } = event;
    setArtistName(
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  console.log("")
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
      <ThemeProvider theme={theme}>
      <Typography gutterBottom variant="subtitle2" color="primary" component="div">
          FIND MOVIES BY:
        </Typography>
    </ThemeProvider>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 250 }}>
      <TextField id="standard-basic" label="Movie Name" variant="standard" />
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 250 }}>
        <InputLabel id="simple-select-standard-label">Genres</InputLabel>
        <Select
          labelId="simple-select-standard-label"
          id="simple-select-standard"
          value={genreName}
          onChange={handleChangeGenre}
          label="Genre"
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {props.genres.map((genre) => (
            <MenuItem key={genre.id} value={genre.name}>
              <Checkbox checked={genreName.indexOf(genre.name) > -1} />
              <ListItemText primary={genre.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 250 }}>
        <InputLabel id="simple-select-standard-label">Artists</InputLabel>
        <Select
          labelId="simple-select-standard-label"
          id="simple-select-standard"
          value={artistName}
          onChange={handleChangeArtist}
          label="Artist"
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {props.artists.map((artist) => (
            <MenuItem key={artist.id} value={artist.first_name +" "+artist.last_name}>
              <Checkbox checked={artistName.indexOf(artist.first_name +" "+artist.last_name) > -1} />
              <ListItemText primary={artist.first_name +" "+artist.last_name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 250 }}>
      <TextField
        id="date"
        label="Release Date Start"
        type="date"
        variant="standard"
        InputLabelProps={{
          shrink: true,
        }}
      />
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 250 }}>
      <TextField
        id="date"
        label="Release Date End"
        type="date"
        variant="standard"
        InputLabelProps={{
          shrink: true,
        }}
      />
      </FormControl>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary" sx={{ m: 1, minWidth: 265 }}>APPLY</Button>
      </CardActions>
    </Card>
  );
}
