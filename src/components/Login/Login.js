import React from 'react';
import {
    Form,
    Input,
    Tooltip,
    Cascader,
    Select,
    message,
    Checkbox,
    Button,
    Alert,
    Collapse,
  } from 'antd';
  import Footer from '../Footer/Footer'
  import { QuestionCircleOutlined,FormOutlined,CheckCircleOutlined,UserOutlined, KeyOutlined } from '@ant-design/icons';
  import './Login.css';
  import Terms from './terms.pdf';

  const {Panel}=Collapse;
  const key='updatable';
  const { Option } = Select;
  const residences = [
    {
      value: 'Hall of Residence - Boys',
      label: 'Hall of Residence - Boys',
      children: [
        {
          value: 'MV Hall of Residence',
          label: 'MV Hall of Residence',
        },
        {
          value: 'GDB Hall of Residence',
          label: 'GDB Hall of Residence',
        },
        {
          value: 'MSS Hall of Residence',
          label: 'MSS Hall of Residence',
        },
        {
          value: 'DBA Hall of Residence',
          label: 'DBA Hall of Residence',
        },
        {
          value: 'HB Hall of Residence',
          label: 'HB Hall of Residence',
        },
        {
          value: 'SD Hall of Residence',
          label: 'SD Hall of Residence',
        },
        {
          value: 'VSS Hall of Residence',
          label: 'VSS Hall of Residence',
        },
      ],
    },
    {
      value: 'Hall of Residence - Girls',
      label: 'Hall of Residence - Girls',
      children: [
        {
          value: 'KMS Hall of Residence',
          label: 'KMS Hall of Residence',
          
        },
        {
          value: 'CVR Hall of Residence',
          label: 'CVR Hall of Residence',
          
        },
      ],
    },
    {
      value: 'Hall of Residence - Married',
      label: 'Hall of Residence - Married',
      children: [
        {
          value: 'SSB Hall of Residence',
          label: 'SSB Hall of Residence',
          
        },
      ],
    },
  ];
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 20,
      },
      sm: {
        span: 10,
      },
    },
    wrapperCol: {
      lg:{
        span:15
      },
      xs: {
        span: 20,
      },
      sm: {
        span: 16,
      },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 20,
        offset: 0,
      },
      sm: {
        span: 20,
        offset: 8,
      },
    },
  };
  const Login = () => {
  const [applicationStatus,setApplicationStatus]=React.useState('Unchecked');
  const [applicationStatusColor,setApplicationStatusColor]=React.useState('info')
    const [formb] = Form.useForm();
    const [forma] = Form.useForm();

    const onFinishA = async function(values) {
      const {password}=values;
      let {email}=values;
      email=email.toLowerCase();
      const checkObject={email,password};
      // console.log(checkObject);
      // await fetch('https://8v8t5jjbd9.execute-api.us-east-1.amazonaws.com/apiv1/status',{method:'POST',body:JSON.stringify(checkObject)}).then(respone=>respone.json()).then(body=>{console.log(body.message)});
      await message.loading({content:'Checking...',key,duration:1}).then(fetch('https://8v8t5jjbd9.execute-api.us-east-1.amazonaws.com/heartbeatsapi/status',{method:'POST',body:JSON.stringify(checkObject)}).then(respone=>respone.json()).then(body=>{if(body.errorMessage){message.loading({content:'Checking...',key,duration:0.7}).then(()=>message.error({content:"Unexpected Error Occured",key}))}else{if(body.status){message.loading({content:'Checking...',key,duration:0.7}).then(()=>{setApplicationStatus(body.message);setApplicationStatusColor(body.type)})}else{message.loading({content:'Checking...',key,duration:0.7}).then(()=>{message.error({style:{paddingBottom:'2rem'},content:body.message,key});setApplicationStatus('Unchecked');setApplicationStatusColor('info')})}}}));
    };
  const onFinishB = async function(values) {
    const {password,name,prefix,phone,role,roll}=values;
    let {email,residence}=values;
    email=email.toLowerCase()
    residence=residence[0]+" / "+residence[1]
    const mobile=prefix+phone;
    const status='Pending';
    const fillObject={email,password,name,role,roll,mobile,residence,status};
    await message.loading({content:'Registering...',key,duration:1}).then(fetch('https://8v8t5jjbd9.execute-api.us-east-1.amazonaws.com/heartbeatsapi/inductions',{method:'POST',body:JSON.stringify(fillObject)}).then(respone=>respone.json()).then(body=>{if(body.errorMessage){message.loading({content:'Registering...',key,duration:0.7}).then(()=>message.error({content:"Email Already Registered!",key}))}else{message.loading({content:'Registering...',key,duration:0.7}).then(()=>message.success({content:"Registered Successfully!",key}))}},error => message.error("An Unexpected Error Occured")));
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 80,
        }}
      >
        <Option value="+91">+91</Option>
        <Option value="+92">+92</Option>
        <Option value="+94">+94</Option>
        <Option value="+86">+86</Option>
        <Option value="+973">+973</Option>
        <Option value="+971">+971</Option>
        <Option value="+977">+977</Option>
        <Option value="+975">+975</Option>
        <Option value="NA"></Option>
      </Select>
    </Form.Item>
  );
    return (
      <>
        <div className="container-fluid nav-bg">
          <div className="row">
            <div className="col-11 col-lg-10 mx-auto pt-5">
            <Collapse >
    <Panel header="Objectives of Induction" key="1">
      <p>The induction process is carried out in HeartBeats to offer the students of NITR an opportunity to join the band. A fair chance is given to each contesting participant, who are judged by a panel of experienced musicians. Each individual faces two stages of judgment, namely the first round and the second round. In the first round, the candidates can display a musical presentation of their own choice, while for the second round, they are required to prepare some fixed pieces and also answer some questions related to their craft. The judgment is made only on the basis of merit, and after qualifying the said stages, a student is inducted into the band.</p>

    </Panel>
    <Panel header="Annual Induction" key="2">
      <p>Every odd semester annual induction process is carried out to induct musicians on all possible roles. Candidates are encouraged to present their best keeping in mind the tough competition and participants' strength in this event. The induction usually takes place after the musical orientation program for the freshers is over. <br/>The roles available in this induction are:-</p>
      <ul>
        <li>Vocalist</li>
        <li>Keyboardist, Pianist</li>
        <li>Guitarist, Basist </li>
        <li>Drummer, Percussionist, Tablist</li>
        <li>Flautist, Clarinettist, Saxophonist and other Wind Instrumentalist</li>
        <li>Violinist, Cellist</li>
        <li>Other exotic instrumentalists. (Sitar, Sarangi, Harmonica etc.)</li>
      </ul>
    </Panel>
    <Panel header="Spring Induction" key="3">
      <p>Spring Induction is mostly carried out to induct instrumentalists in the even semesters. Vacancies in the role of vocalist may also be filled. Candidtaes are required to face the same process as that of the Annual Induction held in the Autumn Semester. Roles available will be specified in the induction posters each year.
      </p>
    </Panel>
    <Panel header="How it works?" key="4">
      <ul>
        <li>Submit a application by filling out the new application form below.</li>
        <li>The dates and timings of your audition will be notified to you personally.</li>
        <li>After each stage of induction keep checking your application status to stay updated.</li>
        <li>Applications automatically expire after the concerend semester is over, students are required to fill out a new application if they want to participate again.</li>
      </ul>
    </Panel>
  </Collapse>
            </div>
          </div>
            <div className="row">
                <div className="col-11 col-lg-10 mx-auto pt-5">
                <Form
      {...formItemLayout}
      form={forma}
      name="registera"
      onFinish={onFinishA}
      scrollToFirstError
    >
      <h4>Check Your Application Status! <Tooltip title="If your application is not accepted by us within 2-Days reach out to the core-team."><CheckCircleOutlined /></Tooltip></h4>
      <br/>
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input prefix={<UserOutlined/>}/>
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password prefix={<KeyOutlined/>}/>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Get My Status
        </Button>
        <span className="checkStatus ml-2"><Alert showIcon message={applicationStatus} type={applicationStatusColor}/></span>
        
      </Form.Item>
    </Form>
                </div>
                <div className='col-11 col-lg-10 mx-auto pt-5'>
                <Form
      {...formItemLayout}
      form={formb}
      name="registerb"
      onFinish={onFinishB}
      initialValues={{
        residence: ['Hall of Residence - Boys', 'MV Hall of Residence'],
        prefix: '+91',
      }}
      scrollToFirstError
    >
      <h4>Submit A New Application! <Tooltip title="Fill Out this form"><FormOutlined /></Tooltip></h4>
      <br/>
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input/>
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject('The two passwords that you entered do not match!');
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="name"
        label={
          <span>
            Full Name&nbsp;
            <Tooltip title="Full Name as on NITR Records">
              <QuestionCircleOutlined />
            </Tooltip>
          </span>
        }
        rules={[
          {
            required: true,
            message: 'Please enter your name!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="roll"
        label={
          <span>
            Roll Number&nbsp;
            <Tooltip title="Roll Number as on NITR Records">
              <QuestionCircleOutlined />
            </Tooltip>
          </span>
        }
        rules={[
          {
            required: true,
            message: 'Please enter your roll number!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="role"
        label={
          <span>
            Applying Role&nbsp;
            <Tooltip title="If instrumentalist specify instrument">
              <QuestionCircleOutlined />
            </Tooltip>
          </span>
        }
        rules={[
          {
            required: true,
            message: 'Please specify the role you wish take in the band!',
            whitespace: true,
          },
        ]}
      >
        <Input placeholder='Vocalist OR Instrumentalist-Instrument' />
      </Form.Item>

      <Form.Item
        name="residence"
        label="Hall of Residence"
        rules={[
          {
            type: 'array',
            required: true,
            message: 'Please select your Hall of Residence!',
          },
        ]}
      >
        <Cascader options={residences} />
      </Form.Item>

      <Form.Item
        name="phone"
        label={<span>
          Contact Number&nbsp;
          <Tooltip title="Preferably WhatsApp">
            <QuestionCircleOutlined />
          </Tooltip>
        </span>}
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: '100%',
          }}
        />
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject('Should accept agreement'),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I agree with the <a href={Terms} target="blank">Terms and Conditions.</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
                </div>
            </div>

        </div>
        <Footer/>
        </>
    )
}

export default Login