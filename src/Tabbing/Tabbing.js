import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Tabbing.css';
const Tabbing = ()=>{
		return (
			<div className="container-section">
				<h1>Live Classes</h1>
				<Tabs>
					<TabList className="round-back">
					  <Tab>5</Tab>
					  <Tab>6</Tab>
					  <Tab>7</Tab>
					  <Tab>8</Tab>
					  <Tab>9</Tab>
					</TabList>
					
					<TabPanel>
					</TabPanel>
					
					<TabPanel>
					</TabPanel>
					
					<TabPanel>
					</TabPanel>
					
					<TabPanel>
					</TabPanel>
					
					<TabPanel>
					</TabPanel>
				</Tabs>
			</div>
		)
	}
export default Tabbing;
