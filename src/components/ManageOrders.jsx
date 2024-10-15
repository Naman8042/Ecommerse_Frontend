export default function ManageOrders(){
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
        {
            orderId: '1012306',
            date: '25 June 2028',
            total: 275,
            status: 'completed'
        },
        {
            orderId: '1012307',
            date: '28 June 2028',
            total: 320,
            status: 'pending'
        },
        {
            orderId: '1012308',
            date: '1 July 2028',
            total: 415,
            status: 'shipped'
        },
        {
            orderId: '1012309',
            date: '3 July 2028',
            total: 510,
            status: 'delivered'
        },
        {
            orderId: '1012310',
            date: '5 July 2028',
            total: 125,
            status: 'canceled'
        },
        {
            orderId: '1012311',
            date: '7 July 2028',
            total: 290,
            status: 'completed'
        },
        {
            orderId: '1012312',
            date: '9 July 2028',
            total: 440,
            status: 'pending'
        },
        {
            orderId: '1012313',
            date: '12 July 2028',
            total: 375,
            status: 'shipped'
        },
        {
            orderId: '1012314',
            date: '15 July 2028',
            total: 650,
            status: 'delivered'
        },
        {
            orderId: '1012315',
            date: '18 July 2028',
            total: 210,
            status: 'canceled'
        },
    ];
    
    return (
        <table className="w-[80%]">
                <thead>
                    <tr className="bg-gray-200 text-sm font-semibold">
                        <th className="py-2 text-xs font-light">ORDER ID</th>
                        <th className="py-2 text-xs font-light">DATE</th>
                        <th className="py-2 text-xs font-light">TOTAL</th>
                        <th className="py-2 text-xs font-light">STATUS</th>
                    </tr>
                </thead>
                <tbody>
                    {Order.map((order) => (
                        <tr key={order.orderId}>
                            <td className="py-2 text-center">#{order.orderId}</td>
                            <td className="py-2 text-center">{order.date}</td>
                            <td className="py-2 text-center">Rs {order.total}</td>
                            <td className="py-2 text-center">{order.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
    )
}