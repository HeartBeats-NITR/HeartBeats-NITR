import React from 'react';
import { Card, Image } from 'antd';
import './Members.css';
import {FacebookOutlined,InstagramOutlined } from '@ant-design/icons';
import Icon from '@ant-design/icons';
import Footer from '../Footer/Footer'
import currentMembers from "../../container/CurrentMembersContainer"
import alumniMembers from "../../container/AlumniMembersContainer"


const { Meta } = Card;

const Members= () =>{

  const current= currentMembers;
  const alumni =alumniMembers;
  return (
    <>
    <div className="container-fluid">
            
            <div className="row">
                <div className='col-11 col-lg-10 mx-auto'>
        <div className="title">
        <h1>Current Members</h1>
        </div>
        <div class="row">
        {current.map(function(member,index){
          return (
          <div class="card-col col-lg-4 col-md-6 col-sm-12">         
                      <Card
                        key={index}
                        hoverable
                        className="card"
                        style={{ width: 'auto'}}
                        cover={
                        <Image
                        className="image"
                        style={{height:'320px',objectFit:'cover'}}
                          src={member.pic}
                        />
                        }
                      actions={[
                        <a href={member.fb} style={{fontSize:'20px'}} target='blank'><FacebookOutlined/></a>,
                        <a href={member.insta} style={{fontSize:'20px'}} target='blank'><InstagramOutlined/></a>,
                      ]}
                      >
                      <Meta
                        title={member.name}
                        description={member.des}
                      />
                      {/* <p className="fw-light pt-3">Known For: {member.kf}</p> */}
                      </Card>   
          </div>  );
           })}     
        </div>   

        <div className="title">
        <h1>Alumni Members</h1>
        </div>
        <div class="row">
        {alumni.map(function(member,index){
          return (
          <div class="card-col col-lg-4 col-md-6 col-sm-12">         
                      <Card
                      key={index}
                        hoverable
                        className="card"
                        style={{ width: 'auto'  }}
                        cover={
                        <Image
                        
                        style={{height:'320px',objectFit:'cover'}}
                        src={member.pic}
                        />
                        }
                      actions={[
                        <a href={member.fb} style={{fontSize:'20px'}} target='blank'><FacebookOutlined /></a>,
                        <a href={member.insta} style={{fontSize:'20px'}} target='blank'><InstagramOutlined /></a>,
                      ]}
                      >
                      <Meta
                        title={member.name}
                        description={member.des}
                      />
                      
                      <p className="fw-light pt-3"> {member.kf}</p>
                      </Card>   
          </div>  );
           })}     
        </div> 
        </div>      
      </div>
      
    </div>
    <Footer />
    </>
  );
}
export default Members;