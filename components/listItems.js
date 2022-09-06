import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BookIcon from '@mui/icons-material/Book';
import CategoryIcon from '@mui/icons-material/Category';
import Link from "next/link";


export const mainListItems = (
    <React.Fragment>

        <Link href="/">
            <ListItemButton>
                <ListItemIcon>
                    <DashboardIcon/>
                </ListItemIcon>
                <ListItemText primary="Dashboard"/>
            </ListItemButton>
        </Link>
        <Link href="/user">
        <ListItemButton>
            <ListItemIcon>
                <CategoryIcon/>
            </ListItemIcon>
            <ListItemText primary="user"/>
        </ListItemButton>
    </Link><Link href="/admin">
        <ListItemButton>
            <ListItemIcon>
                <CategoryIcon/>
            </ListItemIcon>
            <ListItemText primary="admin"/>
        </ListItemButton>
    </Link><Link href="/prof">
        <ListItemButton>
            <ListItemIcon>
                <CategoryIcon/>
            </ListItemIcon>
            <ListItemText primary="prof"/>
        </ListItemButton>
    </Link>

    </React.Fragment>
);
