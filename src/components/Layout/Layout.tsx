import React, {FC} from "react";
import {CurrentNumber, DifficultyPicker, Input, Numbers} from "components";
import './Layout.scss';

const Layout: FC = () => {
    return (
        <div className="layout">
            <DifficultyPicker/>
            <CurrentNumber />
            <Input />
            <Numbers />
        </div>
    )
}

export default Layout;
