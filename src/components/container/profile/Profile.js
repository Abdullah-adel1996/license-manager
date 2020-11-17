import React from 'react';
import {Form, Input,Avatar, Divider, Collapse} from 'antd';
import styles from './Profile.module.css';
import { UserOutlined } from '@ant-design/icons';

const Profile = () => {

    const onFinish = values => {
        console.log('Success:', values);
      };

    function callback(key) {
    console.log(key);
    }

    const { Panel } = Collapse;

    const text = `
        A dog is a type of domesticated animal.
        Known for its loyalty and faithfulness,
        it can be found as a welcome guest in many households across the world.
        `;


    return (
        <div style={{display:'flex', justifyContent: 'space-between', marginTop:'2rem', marginLeft:'2rem'}}>
            <div className={styles.mainContainer}>
                <div className={styles.userName}>
                    <div>
                        <Avatar shape="square" size={64} icon={<UserOutlined/>} />
                    </div>
                    <div>John Doee</div>
                </div>
                <div className={styles.personalInfo}>
                    <div className={styles.title}>Personal Information</div>
                    <Divider style={{margin:'0'}}/>
                    <div className={styles.personalInfoForm}>
                        <Form
                            name="basic"
                            onFinish={onFinish}
                            >
                            <span>Name</span>
                            <Form.Item
                                style={{marginBottom:'0'}}
                                name="name"
                                rules={[{ required: true, message: 'Please input your name!' }]}
                            >
                                <Input size='small' />
                            </Form.Item>

                            <span>Email</span>
                            <Form.Item
                                style={{marginBottom:'0'}}
                                name="email"
                                rules={[{ required: true, message: 'Please input your Email!' }]}
                            >
                                <Input size='small' />
                            </Form.Item>

                            <span>Mobile</span>
                            <Form.Item
                                style={{marginBottom:'0'}}
                                name="mobile"
                                rules={[{ required: true, message: 'Please input your mobile number!' }]}
                            >
                                <Input size='small' />
                            </Form.Item>

                            <span>Organization</span>
                            <Form.Item
                                style={{marginBottom:'0'}}
                                name="organization"
                                rules={[{ required: true, message: 'Please input your organization!' }]}
                            >
                                <Input size='small' />
                            </Form.Item>
                            <span>Country</span>
                            <Form.Item
                                style={{marginBottom:'0'}}
                                name="country"
                                rules={[{ required: true, message: 'Please input your country!' }]}
                            >
                                <Input size='small' />
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
                <div className={styles.licenseInfo}>
                    <div className={styles.title}>License Information</div>
                    <Divider style={{margin:'0'}}/>
                    <div className={styles.personalInfoForm}>
                    <Collapse defaultActiveKey={['1']} onChange={callback} style={{marginTop:'1rem'}}>
                        <Panel header="License1" key="1">
                            <p>{text}</p>
                        </Panel>
                        <Panel header="License2" key="2">
                            <p>{text}</p>
                        </Panel>
                        <Panel header="License3" key="3">
                            <p>{text}</p>
                        </Panel>
                    </Collapse>
                    </div>
                </div>
            </div>
    )
}

export default Profile
