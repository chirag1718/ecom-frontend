import React from "react";
import AppBar from "@mui/material/AppBar";
import { Button, Stack, Toolbar, Typography } from "@mui/material";

const Navigation = () => {
  return (
    <div>
      <AppBar className="bg-stone-800">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Elaichi kitchen
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button color="inherit">Categories</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Contact</Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navigation;
