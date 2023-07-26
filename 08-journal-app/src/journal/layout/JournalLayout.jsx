import { Box, Toolbar } from "@mui/material"
import { NavBar, SideBar } from "../components";

const DRAWER_WIDTH = 240;

export const JournalLayout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }}>

            {/* Navbar DRAWER_WIDTH */}
            <NavBar drawerWidth={DRAWER_WIDTH} />

            {/* Sidebar DRAWER_WIDTH */}
            <SideBar draweWidth={DRAWER_WIDTH} />

            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                {children}
            </Box>
        </Box>
    )
}
