import { Drawer, Carousel, Image } from 'antd'
import React from 'react'
import Footer from '../Footer/Footer';
import './Events.css';
import Maktub1 from './maktub8.jpg'
import Maktub2 from './maktub2.jpg'
import Maktub3 from './maktub3.jpg'
import Maktub4 from './maktub4.jpeg'
import Maktub5 from './maktub5.jpeg'
import Maktub6 from './maktub9.jpg'
import Dhwani1 from './dhwani1.jpg'
import Dhwani2 from './dhwani2.jpg'
import Dhwani3 from './dhwani3.jpg'
import Dhwani4 from './dhwani4.jpeg'
import Dhwani5 from './dhwani5.jpeg'
import Dhwani6 from './dhwani6.jpeg'
import Jashn1 from './jashn1.jpg'
import Jashn2 from './jashn2.jpg'
import Jashn3 from './jashn3.jpg'
import Freshers1 from './freshers1.jpg'
import Freshers2 from './freshers2.jpg'
import Freshers3 from './freshers3.jpg'
import Freshers4 from './freshers4.jpeg'
import Freshers5 from './freshers5.jpeg'
import Orientation1 from './orientation1.jpeg'
import Orientation2 from './orientation2.jpeg'
import {FileTextOutlined} from '@ant-design/icons';
function onChange() {
    console.log();
}
  


const Events = () => {
    const eventNames=['About MAKTUB','About Dhwani','About Jashn','About Orientation','About Freshers'];
    const eventDates=['13th March','24th October','28th March','7th August','30th August'];
    const eventDescription=['Music pushes one close to the infinite. Nothing among man’s utterances can ever be made to feel so divine, as a soulful piece does. Heartbeats, the contemporary fusion band of NITR, which believes in music as the vernacular of the human soul, has always redefined the standards of music that this institute needs and deserves with another stellar version of their unplugged musical event, Maktub, with soulful songs carefully knit with the exceptional work of instruments by the musically trained engineers-to-be.',
                            "Indian Classical Music has a charm and charisma of its own that provides a serene and splendid experience to both the artist and the listener. With the growing popularity of pop culture and western styles of art, this generation's youth has somehow been aloof from the precious treasure of Indian Classical Music. Heartbeats, the Fusion Band of the Institute, organizes the musical evening “Dhwani”  showcasing all Indian Classical Music forms, including Hindustani, Carnatic, Odissi, Ghazals, Qawalis, and Bhajans.",
                            'Jashn is not just a tribute to the final year students; it is an ode to all those beautiful memories weaved during the golden years at college. We celebrate their frienship and the journey so far.',
                            'The idea behind the orientation is to familiarize freshers with the musical culture in NITR. They get a brief idea about what musical form the club bears, and the songs with drizzle make the air musically ecstatic.',
                            'The special day for freshers where they start a new and fresh journey of their life, full of new challenges, milestones, and achievements. The day of nostalgia, with many new mixed feelings of happiness, confusion, fear, and excitement. So, we welcome them with the style and energy that would make this experience everlasting for them.']
    const [visible, setVisible] = React.useState(false);
    const [description,setDescription]=React.useState(0);
  const showDrawer = (x) => {
    setDescription(x);
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  
    return (
        <>
        <Drawer
        title={eventNames[description]}
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <p class="text-dark">{eventDescription[description]}</p>
      <b class="text-dark">Expected Date - {eventDates[description]}</b>
      </Drawer>
        <div className="container-fluid pb-4">
            
            <div className="row mt-2">
                <div className='col-11 col-lg-10 mx-auto'>
                    <Carousel autoplay afterChange={onChange} effect="fade">
                        <div className="row d-flex align-items-center">
                            <Image src={Maktub4} className="mx-auto" style={{width:'110vmin',height:'80vmin',objectFit:'cover',border:'4px solid white'}}/>
                        </div>
                        <div className="row d-flex align-items-center">
                            <Image src={Maktub2} className="mx-auto" style={{width:'110vmin',height:'80vmin',objectFit:'cover',border:'4px solid white'}}/>
                        </div>
                        <div className="row d-flex align-items-center">
                            <Image src={Maktub3} className="mx-auto" style={{width:'110vmin',height:'80vmin',objectFit:'cover',border:'4px solid white'}}/>
                        </div>
                        <div className="row d-flex align-items-center">
                            <Image src={Maktub1} className="mx-auto" style={{width:'110vmin',height:'80vmin',objectFit:'cover',border:'4px solid white'}}/>
                        </div>
                        <div className="row d-flex align-items-center">
                            <Image src={Maktub5} className="mx-auto" style={{width:'110vmin',height:'80vmin',objectFit:'cover',border:'4px solid white'}}/>
                        </div>
                        <div className="row d-flex align-items-center">
                            <Image src={Maktub6} className="mx-auto" style={{width:'110vmin',height:'80vmin',objectFit:'cover',border:'4px solid white'}}/>
                        </div>
                    </Carousel>
                    <h1 className="mx-auto mt-2 white text-center text-white"><i>Maktub </i></h1><h5 className="text-white des text-center">Celebrating the emotions of college life! <FileTextOutlined className="describe" style={{fontSize:'20px'}} onClick={()=>{showDrawer(0)}}/></h5>
                </div>
                <div className='col-11 col-lg-10 mx-auto mt-5'>
                    <Carousel autoplay afterChange={onChange} effect="fade">
                        <div className="row d-flex align-items-center">
                            <Image src={Dhwani2} className="mx-auto" style={{width:'110vmin',height:'80vmin',objectFit:'cover',border:'4px solid white'}}/>
                        </div>
                        <div className="row d-flex align-items-center">
                            <Image src={Dhwani6} className="mx-auto" style={{width:'110vmin',height:'80vmin',objectFit:'cover',border:'4px solid white'}}/>
                        </div>
                        <div className="row d-flex align-items-center">
                            <Image src={Dhwani3} className="mx-auto" style={{width:'110vmin',height:'80vmin',objectFit:'cover',border:'4px solid white'}}/>
                        </div>
                        <div className="row d-flex align-items-center">
                            <Image src={Dhwani1} className="mx-auto" style={{width:'110vmin',height:'80vmin',objectFit:'cover',border:'4px solid white'}}/>
                        </div>
                        <div className="row d-flex align-items-center">
                            <Image src={Dhwani5} className="mx-auto" style={{width:'110vmin',height:'80vmin',objectFit:'cover',border:'4px solid white'}}/>
                        </div>
                        <div className="row d-flex align-items-center">
                            <Image src={Dhwani4} className="mx-auto" style={{width:'110vmin',height:'80vmin',objectFit:'cover',border:'4px solid white'}}/>
                        </div>
                    </Carousel>
                    <h1 className="mx-auto mt-2 white text-center text-white"><i>Dhwani </i></h1><h5 className="text-white des text-center">A night to Indian classical and semi-classical music! <FileTextOutlined className="describe" style={{fontSize:'20px'}} onClick={()=>{showDrawer(1)}}/></h5>
                </div>
                <div className='col-11 col-lg-10 mx-auto mt-5'>
                    <Carousel autoplay afterChange={onChange} effect="fade">
                        <div className="row d-flex align-items-center">
                            <Image src={Jashn1} className="mx-auto" style={{width:'110vmin',height:'80vmin',objectFit:'cover',border:'4px solid white'}}/>
                        </div>
                        <div className="row d-flex align-items-center">
                            <Image src={Jashn2} className="mx-auto" style={{width:'110vmin',height:'80vmin',objectFit:'cover',border:'4px solid white'}}/>
                        </div>
                        <div className="row d-flex align-items-center">
                            <Image src={Jashn3} className="mx-auto" style={{width:'110vmin',height:'80vmin',objectFit:'cover',border:'4px solid white'}}/>
                        </div>
                    </Carousel>
                    <h1 className="mx-auto mt-2 white text-center text-white"><i>Jashn </i></h1><h5 className="text-white des text-center">An ode to final years saluting their journey! <FileTextOutlined className="describe" style={{fontSize:'20px'}} onClick={()=>{showDrawer(2)}}/></h5>
                </div>
                <div className='col-11 col-lg-10 mx-auto mt-5'>
                    <Carousel autoplay afterChange={onChange} effect="fade">
                        <div className="row d-flex align-items-center">
                            <Image src={Freshers1} className="mx-auto" style={{width:'110vmin',height:'80vmin',objectFit:'cover',border:'4px solid white'}}/>
                        </div>
                        <div className="row d-flex align-items-center">
                            <Image src={Freshers5} className="mx-auto" style={{width:'110vmin',height:'80vmin',objectFit:'cover',border:'4px solid white'}}/>
                        </div>
                        <div className="row d-flex align-items-center">
                            <Image src={Freshers2} className="mx-auto" style={{width:'110vmin',height:'80vmin',objectFit:'cover',border:'4px solid white'}}/>
                        </div>
                        <div className="row d-flex align-items-center">
                            <Image src={Freshers3} className="mx-auto" style={{width:'110vmin',height:'80vmin',objectFit:'cover',border:'4px solid white'}}/>
                        </div>
                        <div className="row d-flex align-items-center">
                            <Image src={Freshers4} className="mx-auto" style={{width:'110vmin',height:'80vmin',objectFit:'cover',border:'4px solid white'}}/>
                        </div>
                    </Carousel>
                    <h1 className="mx-auto mt-2 white text-center text-white"><i>Freshers </i></h1><h5 className="text-white des text-center">A hearty warm welcome with style and versatility! <FileTextOutlined className="describe" style={{fontSize:'20px'}} onClick={()=>{showDrawer(4)}}/></h5>
                </div>
                <div className='col-11 col-lg-10 mx-auto mt-5'>
                    <Carousel autoplay afterChange={onChange} effect="fade">
                        <div className="row d-flex align-items-center">
                            <Image src={Orientation1} className="mx-auto" style={{width:'110vmin',height:'80vmin',objectFit:'cover',border:'4px solid white'}}/>
                        </div>
                        <div className="row d-flex align-items-center">
                            <Image src={Orientation2} className="mx-auto" style={{width:'110vmin',height:'80vmin',objectFit:'cover',border:'4px solid white'}}/>
                        </div>
                        
                    </Carousel>
                    <h1 className="mx-auto mt-2 white text-center text-white"><i>Orientation </i></h1><h5 className="text-white des text-center"> Amazing the newbies with powerpacked performances! <FileTextOutlined className="describe" style={{fontSize:'20px'}} onClick={()=>{showDrawer(3)}}/></h5>
                </div>
            </div>
        </div>
        <Footer />
        </>        
    )
}

export default Events
