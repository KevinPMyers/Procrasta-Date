import React, { useState } from 'react';
import { Button, Drawer } from 'antd';




function SideDrawer() {

    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <div>
            <Button type="primary" onClick={showDrawer}>
                Saved Dates
            </Button>
            <Drawer title="Basic Drawer" placement="left" visible={visible} onClose={onClose} >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </div>
    )
}

export default SideDrawer;