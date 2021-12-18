import React from 'react'
import ReactPlayer from 'react-player';
import './Gallery.css';
import {Card, Tooltip} from 'antd';
import {InfoCircleOutlined} from '@ant-design/icons'
const {Meta}=Card;
const Gallery = ({url,descript}) => {
    return (
        <div className="col-lg-6 col-12 mt-5 grow">
        <Card
            hoverable
            style={{ width: 'auto' }}
            cover={ <ReactPlayer config={{
                youtube: {
                  playerVars: { showinfo: 1,
                                controls:1,
                                origin:window.location.origin,
                                modestbranding:1,
                                loop:1 }
                }
              }}  url={url} allowFullScreen loop={true} width='auto' height='320px' style={{border:'3px solid white',borderRadius:'1rem'}}/>}
        >
            <Meta title={descript} avatar={<Tooltip title={descript}><InfoCircleOutlined /></Tooltip>} description="www.heartbeatsnitr.com" />
        </Card> 
        </div>
    )
}

export default Gallery
