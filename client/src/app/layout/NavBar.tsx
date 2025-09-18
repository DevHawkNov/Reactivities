import { Group } from "@mui/icons-material";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  MenuItem,
} from "@mui/material";
import { NavLink } from "react-router";
import MenuItemLink from "../shared/components/MenuItemLink";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundImage:
            "linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <MenuItem sx={{ display: "flex", gap: 2 }}>
              <Group fontSize="large" />
              <Typography
                sx={{ position: "relative" }}
                variant="h4"
                fontWeight="bold"
              >
                Reactivities
              </Typography>
            </MenuItem>
          </Box>
          <Box sx={{ display: "flex" }}>
            <MenuItemLink to="/activities">Activities</MenuItemLink>
            <MenuItemLink to="/createActivity">Create Activity</MenuItemLink>
          </Box>
          <Button
            onClick={() => {}}
            size="large"
            variant="contained"
            color="warning"
          >
            Create activity
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
