import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MyPost from './MyPost';
import { useState } from 'react';
const ManageMyPost = () => {

   
    




    return (
        <Tabs>
            <div className='container mx-auto'>
                
                <div className='flex items-center justify-center'>
                    <TabList>
                        <Tab>My Need Volunteer Post</Tab>
                        <Tab>My Volunteer Request</Tab>
                    </TabList>
                </div>
               
                <TabPanel>
                    <MyPost></MyPost>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
           </div>
        </Tabs>
    );
};

export default ManageMyPost;