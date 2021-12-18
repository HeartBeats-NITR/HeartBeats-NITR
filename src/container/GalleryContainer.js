import React from 'react'
import Gallery from '../components/Gallery/Gallery';
import {SearchOutlined} from '@ant-design/icons'
import { Input } from 'antd';

const GalleryContainer = () => {
    const onSearch = event => setSearch(event.target.value);
    const [search,setSearch]=React.useState('');
    const songs=[
        {url:'https://www.youtube.com/embed/T7V_8W4EVYo',descript:'Madari | Mandira Karmakar | Ashish Pradhan | HeartBeats @ Bitotsav 15 Prelims'},
        {url:'https://www.youtube.com/embed/S7znudj9whI',descript:'Abhi Mujh Mein Kahin | Rajeshwar Mishra | Swapnil Sahoo | Sagar | Ayush | Sachin | Saswat | Sai | MAKTUB - 4 (2018)'},
        {url:'https://www.youtube.com/embed/1UeNqUg1vnY',descript:'Aas Paas Hai Khuda | Amrutha Varshini M | Sagar Bhatnagar | Ayush | Manish | Saswat | Chinmaya | Sachin | MAKTUB - 4 (2018)'},
        {url:'https://www.youtube.com/embed/hDQ3wgSfT-c',descript:'Maa | Chunar | Swapnil Sahoo | Sachin Ramesh Nambiar | Ayush | Swastik | Manish | Chintan | MAKTUB - 5 (2019)'},
        {url:'https://www.youtube.com/embed/PsrBiKUFqaM',descript:'Andheroon Mein Aaj Hui Roshni OC | Sachin Nambiar | Suchetna Chakrobarty | Subhashis | Saswat | Chinmay | MAKTUB - 4(2018)'},
        {url:'https://www.youtube.com/embed/we8aV0buJaU',descript:'A.R. Rahman Medley | Sagar Bhatnagar | Swapnil Sahoo | Ayush | Sachin | Saswat | Akasmika | Manasa | Suchetna | MAKTUB - 4 (2018)'},
        {url:'https://www.youtube.com/embed/QBlnzshi7ZI',descript:'Kahin To Hogi Woh | Ankesh Anand | Medha Rath'},
        {url:'https://www.youtube.com/embed/k6HTldWUmjs',descript:'Can\'t Take My Eyes off You | Vaisakh Vinod Kumar | Ayush Sinha | Chintan | Swastik | Manish | Abhijeet | MAKTUB - 5 (2019)'},
        {url:'https://www.youtube.com/embed/D6ovmLbOyaw',descript:'Yeh Honsla | Mausam Ki Adla Badli | Akasmika Panda | Sachin | Swapnil | Swastik | Chintan | Manasa | Dipti | Sushreema | MAKTUB - 5 (2019)'},
        {url:'https://www.youtube.com/embed/01R34QybzzI',descript:'Rozana - Sunn Raha Hai Na Tu - Medley | Manasa Pisipati | Ayush Sinha | Swapnil Sahoo | Abhijeet | Swastik | Dipti | Vaisakh | MAKTUB - 5 (2019)'},
        {url:'https://www.youtube.com/embed/YklkBUCncqs',descript:'All Of Me | Medha Rath | Ashish Pradhan | Sanjeeban Nanda'},
        {url:'https://www.youtube.com/embed/uTJglvj6Ygo',descript:'Hotel California | Vishnu Kunchur'},
        {url:'https://www.youtube.com/embed/o0fQFsoIu2s',descript:'Tu Muskura | Ankesh Anand | Springfest IIT KGP'},
        {url:'https://www.youtube.com/embed/eaSV1gusarE',descript:'Tadap Tadap Ke | Ashish Pradhan | Ankesh Anand'},
        {url:'https://www.youtube.com/embed/w_7GjTvYXSQ',descript:'Bahon Mein Chale Aao | Mandira Karmakar | Dipesh | Ankesh | Ashish | Sanjeeban | Vishal'},
        {url:'https://www.youtube.com/embed/uwip5t7k7gc',descript:'Phir Le Aaya Dil | Sachin Ramesh Nambiar | Ashish Pradhan | Sanjeeban'},
        {url:'https://www.youtube.com/embed/YNuswFUlE4Q',descript:'Fusion | Saawal | Ishq sufiana IIT KGP'},
        {url:'https://www.youtube.com/embed/hhbeixbZ2gE',descript:'Rudra'},
    ]
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-11 col-lg-10 mx-auto">
                    <div className="col-lg-4 mx-auto"><Input size="large" onChange={onSearch} allowClear style={{borderRadius:'1em'}}placeholder="Search by Song, Event or Artist" prefix={<SearchOutlined />} /></div>
                    <div className="row">
                        
                            {songs.filter(song => song.descript.toLowerCase().includes(search.toLowerCase())).map((item)=> (<Gallery url={item.url} key={item.url} descript={item.descript}/>))}
                        {/* <Gallery url="https://www.youtube.com/embed/hDQ3wgSfT-c" descript="Maa | Chunar | Swapnil Sahoo | MAKTUB - 5 (2019)"/> */}
                    </div>
                      
                </div>
            </div>
        </div>
    )
}

export default GalleryContainer
