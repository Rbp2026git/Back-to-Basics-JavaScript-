// function safeQuery (strings, ...values){
//     let query = "";
//     strings.forEach((strings, i) => {
//        query += strings;
//        if(i < values.length){
//         query += "?";
//        } 
//     });
//     return{ query, params: values};

// }

// const userId = req.body.userId;
// const { query, params} = safeQuery`SELECT * FROM accounts WHERE id = ${userId}`;
// db.run(query, params);

// ── Tagged Template: sanitize HTML injection
function safe(strings, ...values){
    let result = strings[0];
    values.forEach((value, i)=>{
        const escaped = String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');

        result += escaped + strings[i + 1];
    });
    return result;
}
// let name = "<script>alert('Hack')</script>";
// console.log(
//     safe`Hello ${name}`
// );

// ── Tagged Template: currency formatter
function currency (strings, ...values){
    let result = strings[0];
    values.forEach((value, i)=>{
        const formatted = (typeof value === 'number')? `₹${value.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`: (value ?? '');
        result += formatted + strings[i + 1];
    });
    return result;
}
// let price = 999;
// console.log(currency`Amount = ${price}`);

// ── Tagged Template: invoice row builder
function row(strings, ...values){
    let result = `<tr><td>${strings.reduce((o, s, i) => o + (vals[i - 1] ?? '') + s)}</td></tr>`;
    return result;
}

const items =[
    { desc: 'UI/UX Design', qty: 1, rate: 45000 },
    { desc: 'Frontend Dev', qty: 3, rate: 18000 }
];

function renderItems(){
    document.querySelector('#items-container').innerHtml = items.map((item, i)=>{
        return `<div class="item-row">
        <div>
            <label>Description: </label>
            <input value="${item.desc}" oninput="items[${i}].desc=this.value" >
        </div>`
    })
}