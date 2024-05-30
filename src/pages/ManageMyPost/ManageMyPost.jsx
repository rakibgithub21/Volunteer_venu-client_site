import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MyPost from './MyPost';
import MyRequest from './MyRequest';
import MyHonour from './MyHonour';
const ManageMyPost = () => {
    return (
        <Tabs>
           
            <div className='container mx-auto mt-20'>
                
                <div className='flex items-center justify-center'>
                    <TabList>
                        <Tab>My Need Volunteer Post</Tab>
                        <Tab>My Volunteer Request</Tab>
                        <Tab>Achivement</Tab>
                    </TabList>
                </div>
               
                <TabPanel>
                    <MyPost></MyPost>
                </TabPanel>
                <TabPanel>
                    <MyRequest></MyRequest>
                </TabPanel>
                <TabPanel>
                    <MyHonour></MyHonour>
                </TabPanel>
           </div>
        </Tabs>
    );
};

export default ManageMyPost;