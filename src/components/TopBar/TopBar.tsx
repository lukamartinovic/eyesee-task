import {AppBar, Toolbar, Typography} from "@material-ui/core";
import React, {FC} from "react";

const TopBar: FC = () => <AppBar>
    <Toolbar>
        <Typography variant="h6">
            EyeSee Number Game
        </Typography>
    </Toolbar>
</AppBar>

export default TopBar;
