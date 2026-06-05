/* E-commerce Ordering System = Rest Parameters */
//Order PROCESSING system

function processOrder(orderId, customerName, ...items) {
    console.log(`Order ID : ${orderId}`);
    console.log(`Customer Name : ${customerName}`);
    console.log(`Total number of Items : ${items.length}`);

    //items is a real Array - we can use all array methods
    const total = items.reduce((sum, item) => {
        sum += item.price * item.qty;
        return sum;
    }, 0);
    const itemsName = items.map(item => {
        return item.name;
    });
    console.log(`Items Ordered : ${itemsName.join(",  ")}`);
    console.log(`Total Amount : $${total.toFixed(2)}`);
    
    const heavyItems = items.filter((item) => {
        return item.weight > 4;
    });
    if (heavyItems.length > 0) {
        console.log(`Heavy Items (Extra shipping) : ${heavyItems.map(i => i.name).join(",  ")}`);
    }
    return { orderId, customerName, items, total};
}
/*processOrder(101, 'Raushan Bhai Patel',
    { name: "Laptop", price: 39999, qty: 1, weight: 3 },
    { name: "Monitor", price: 9999, qty: 2, weight: 8 },
    { name: "Keyboard", price: 499, qty: 1, weight: 1 },
    { name: "Mouse", price: 299, qty: 1, weight: 0.2 },
    { name: "Cable", price: 9, qty: 12, weight: 0.1 },
)*/

const laptopOrder = { name: "Laptop", price: 39999, qty: 1, weight: 3 };
const extraItems = [
    { name: "Bag", price: 99, qty: 1, weight: 2 },
    { name: "Table", price: 79, qty: 1, weight: 3 },
];

processOrder(102, "Adrina Patel", laptopOrder, ...extraItems);