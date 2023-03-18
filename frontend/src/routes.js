import React from "react";
import {
    createBrowserRouter,
    Link,
} from "react-router-dom";
import AddDevice from "./components/addDevice";
import AddLocation from "./components/addLocation";
import AllLocations from "./components/allLocations";
import AllDevices from "./components/allDevices";

export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <AddLocation />
        ),
    },
    {
        path: "/addLocation",
        element: (
            <AddLocation />
        ),
    },
    {
        path: "/addDevice",
        element: (
            <AddDevice />
        ),
    },
    {
        path: "/allLocations",
        element: (
            <AllLocations />
        ),
    },
    {
        path: "/alldevices",
        element: (
            <AllDevices />
        ),
    },
   
]);