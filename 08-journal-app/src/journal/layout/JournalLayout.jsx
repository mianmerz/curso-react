import { Box } from "@mui/material"
import { NavBar } from "../components";

const DRAWER_WIDTH = 240;

export const JournalLayout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }}>

            {/* Navbar DRAWER_WIDTH */}
            <NavBar drawerWidth={DRAWER_WIDTH} />

            {/* Sidebar DRAWER_WIDTH */}

            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                {/* Toolbar */}
                {children}
            </Box>
        </Box>
    )
}
