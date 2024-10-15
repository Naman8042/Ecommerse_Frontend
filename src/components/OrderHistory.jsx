import React from 'react';
import Profile from '../assets/Profile.jpeg';

const Order = [
    {
        orderId: '1012301',
        date: '12 June 2028',
        total: 150,
        status: 'completed'
    },
    {
        orderId: '1012302',
        date: '15 June 2028',
        total: 300,
        status: 'pending'
    },
    {
        orderId: '1012303',
        date: '18 June 2028',
        total: 450,
        status: 'shipped'
    },
    {
        orderId: '1012304',
        date: '20 June 2028',
        total: 200,
        status: 'delivered'
    },
    {
        orderId: '1012305',
        date: '22 June 2028',
        total: 500,
        status: 'canceled'
    },
];

const Data = {
    imageUrl: 'https://static-files.cricket-australia.pulselive.com/headshots/288/10917-camedia.png',
    name: 'Shaurya Sharma',
    address: 'Msit Janakpuri, Delhi 110092',
    email: 'shauryasharma2408@gmail.com',
    mobileNumber: 7289055348
};

const Dashboard = () => {
    return (
        <div className="w-[80%]">
            <div className="flex md:flex-row flex-col gap-5 mb-5">
                <CustomerImage imageUrl={Data.imageUrl} name={Data.name} />
                <BillingAddress email={Data.email} address={Data.address} mobileNumber={Data.mobileNumber} name={Data.name} />
            </div>
            <div className="border-2 rounded-xl">
                <h1 className="text-lg p-4">Recent Order History</h1>
                <OrderHistoryComp orders={Order} />
            </div>
        </div>
    );
};

const CustomerImage = ({ imageUrl, name }) => {
    return (
        <div className="flex flex-col justify-center items-center gap-1 w-full md:w-[50%] border-2 rounded-xl py-4">
            <img src={Profile} alt="customerImage" priority={true} className="rounded-full w-28 h-28" />
            <div>{name}</div>
            <div className="text-sm text-gray-400">Customer</div>
        </div>
    );
};

const BillingAddress = ({ address, email, mobileNumber, name }) => {
    return (
        <div className="flex flex-col gap-3 w-full md:w-[50%] border-2 rounded-xl p-4">
            <p className="text-gray-400 text-sm">Billing Address</p>
            <p className="text-lg font-semibold">{name}</p>
            <p className="text-gray-400 text-sm">{address}</p>
            <p className="text-sm">{email}</p>
            <p className="text-sm">{mobileNumber}</p>
        </div>
    );
};

const OrderHistoryComp = ({ orders }) => {
    return (
        <table className="w-full">
            <thead>
                <tr className="bg-gray-200 text-sm font-semibold">
                    <th className="py-2 text-xs font-light">ORDER ID</th>
                    <th className="py-2 text-xs font-light">DATE</th>
                    <th className="py-2 text-xs font-light">TOTAL</th>
                    <th className="py-2 text-xs font-light">STATUS</th>
                </tr>
            </thead>
            <tbody>
                {orders.map((order) => (
                    <tr key={order.orderId}>
                        <td className="py-2 text-xs md:text-sm text-center">#{order.orderId}</td>
                        <td className="py-2 text-xs md:text-sm text-center">{order.date}</td>
                        <td className="py-2 text-xs md:text-sm text-center">Rs {order.total}</td>
                        <td className="py-2 text-xs md:text-sm text-center">{order.status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Dashboard;
