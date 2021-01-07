import React from 'react'

import { GiEarthAmerica } from 'react-icons/gi'
import { MdAirplanemodeActive, MdTimer } from 'react-icons/md'
import { FaMoneyCheck } from 'react-icons/fa'

export const StatsData = [
    {
        icon: (<GiEarthAmerica css={`
            color: #047bf1;
        `}/>),
        title: "Customize Asset Solutions",
        desc: "Plan for Customize Asset Solutions",
    },
    {
        icon: (<MdTimer css={`
        color: #f34f2e;
    `}/>),
        title: "Fastest Support",
        desc: "Access our support team 24/7",
    },
    {
        icon: (<MdAirplanemodeActive css={`
        color: red;
    `}/>),
        title: "International Teams",
        desc: "We are international based team",
    },
    {
        icon: (<FaMoneyCheck css={`
        color: #3af576;
    `}/>),
        title: "Best Deals",
        desc: "We offer the best plans",
    }
]