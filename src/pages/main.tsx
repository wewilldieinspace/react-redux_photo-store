import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
// types
import { IItem } from '../types'
// Components
import { MainItem } from '../components '


const item: IItem = {
    "id": 1,
    "category": 0,
    "type": 0,
    "name": "Nikon",
    "model": "D5300 DSLR Camera 18-55mm", 
    "images": [
        "https://static.bhphoto.com/images/images500x500/nikon_1564ob_d5300_dslr_camera_with_1589278070_1532031.jpg",
        "https://static.bhphoto.com/images/multiple_images/images500x500/1589277670_IMG_364629.jpg",
        "https://static.bhphoto.com/images/multiple_images/images500x500/1589277670_IMG_364630.jpg",
        "https://static.bhphoto.com/images/multiple_images/images500x500/1589277670_IMG_364631.jpg",
        "https://static.bhphoto.com/images/multiple_images/images500x500/1589277670_IMG_364634.jpg"
    ],
    "price": 570,
    "features": ["24.2MP DX-Format CMOS Sensor", "EXPEED 4 Image Processor", "No Optical Low-Pass Filter", "3.2\" 1,037k-Dot Vari-Angle LCD Monitor", "Full HD 1080p Video Recording at 60 fps", "Multi-CAM 4800DX 39-Point AF Sensor", "Extended ISO 25600, 5 fps Shooting", "Built-In Wi-Fi and GPS Connectivity", "AF-P DX NIKKOR 18-55mm f/3.5-5.6G VR"],
    "shortDescription": "The black Nikon D5300 DSLR Camera features a DX-format 24.2-megapixel",
    "description": "The black Nikon D5300 DSLR Camera features a DX-format 24.2-megapixel sensor and EXPEED 4 image processor to produce high-resolution still imagery and full HD video with notable low-light sensitivity to ISO 12800 and a fast-continuous shooting rate of 5 fps. The sensor design omits the traditional optical low-pass filter in order to gain the utmost sharpness and resolution from both photos and videos. Complementing the imaging assets are both a versatile 39-point autofocus system, with nine cross-type sensors, and a 2016-pixel RGB sensor for precise exposure metering in a wide variety of lighting conditions. Additionally, 1920 x 1080p movie recording is supported, in multiple frame rates up to 60 fps, with full-time continuous auto focusing capabilities.\n\n"

}

export const Main = () => {
    return (
        <Fragment>
            <Helmet>Magic Shop</Helmet>
            
            <MainItem {...item} />
            <MainItem {...item} />
            <MainItem {...item} />
            <MainItem {...item} />
            <MainItem {...item} />
        </Fragment>
    )
}