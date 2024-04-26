'use client'
import { TourInfo } from "./models";
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import Overview from "./Overview";
interface Props {
  tourInfo: TourInfo;
}
const InfoTour = ({ tourInfo }: Props) => {
    // console.log(tourInfo);
    
  return (
    <section className="mt-8 container mx-auto">
      <Tabs aria-label="Default tabs" style="default">
        <Tabs.Item active title="Overview" icon={HiUserCircle}>
            
            {
                tourInfo.overview ? <Overview content={tourInfo.overview} />: <p>Overview not available</p>
            }
        </Tabs.Item>
        <Tabs.Item title="Dashboard" icon={MdDashboard}>
          
        </Tabs.Item>
        <Tabs.Item title="Settings" icon={HiAdjustments}>
          
        </Tabs.Item>
        <Tabs.Item title="Contacts" icon={HiClipboardList}>
          
        </Tabs.Item>
        <Tabs.Item title="Disabled">
        </Tabs.Item>
      </Tabs>
    </section>
  );
};

export default InfoTour;
