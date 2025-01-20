import React from "react";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";
import OnCampus from "../components/trabajos/OnCampus.jsx";
import Externos from "../components/trabajos/Externos.jsx";

export default function TabsDefault() {
    const data = [
        {
            label: "On Campus",
            value: "onCampus",
            desc: <OnCampus />,
        },
        {
            label: "Externos",
            value: "externos",
            desc: <Externos />,
        },
    ];

    return (
        <div>
            <h3 className="text-3xl font-semibold text-gray-800 my-6 text-center">Encuentra el trabajo que estas buscando</h3>
            <Tabs value="onCampus">
                <TabsHeader>
                    {data.map(({ label, value }) => (
                        <Tab key={value} value={value}>
                            {label}
                        </Tab>
                    ))}
                </TabsHeader>

                <TabsBody>
                    {data.map(({ value, desc }) => (
                        <TabPanel key={value} value={value}>
                            {desc}
                        </TabPanel>
                    ))}
                </TabsBody>
            </Tabs>
        </div>
    );
}
