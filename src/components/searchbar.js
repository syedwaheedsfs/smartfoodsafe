import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import HighlightOffOutlinedIcon from "@material-ui/icons/HighlightOffOutlined";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  searchbar: {
    backgroundColor: "#fff",
    color: "#000",
    boxShadow: "none",
  },
  searchInput: {
    width: "100%",
  },
  cancelbtn: {
    cursor: "pointer",
  },
}));


export default function Searchbar({ searchTerm, setSearchTerm }) {
  const classes = useStyles();
  return (
    <React.Fragment>
      {/* ——— SEARCH BAR ——— */}
      <AppBar position="static" className={classes.searchbar}>
        <Container maxWidth="md">
          <Toolbar disableGutters>
            {" "}
            {/*Removes the default left and right padding from the toolbar   */}
            <TextField
              variant="outlined"
              size="medium"
              placeholder="Search…"
              className={classes.searchInput}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                endAdornment: searchTerm && (
                  <InputAdornment position="end">
                    <HighlightOffOutlinedIcon
                      onClick={() => setSearchTerm("")}
                      className={classes.cancelbtn}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </Toolbar>
        </Container>
      </AppBar>
    </React.Fragment>
  );
}
