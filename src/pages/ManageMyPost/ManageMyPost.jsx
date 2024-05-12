import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MyPost from './MyPost';
import MyRequest from './MyRequest';
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
                    <MyRequest></MyRequest>
                </TabPanel>
           </div>
        </Tabs>
    );
};

export default ManageMyPost;