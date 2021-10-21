import React from 'react';
import { Card } from 'antd';

function SpotifyCard() {


    return (
        <div>
            <Card title="Spotify" className="Spotify" hoverable={true} style={{ width: 700 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>

        </div>
    )
}

export default SpotifyCard