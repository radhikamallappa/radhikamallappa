const balance=document.getElementById{
    "balance"
};

const money_plus=document.getElementById('money-plus');
const money_minus=document.getElementById('money-minus');
const list=document.getElementById("list");
const form=document.getElementById('form');
const text=document.getElementById('text');
const amount=document.getElementById('amount');

const dummyTransactions =[
    { id: 1,text:"flower",amount:-20 },
    { id: 2,text:"salary",amount:-20 },
    { id: 3,text:"Book",amount:-20 },
    { id: 4,text:"camera",amount:-20 },
];

let Transactions=dummyTransactions;

function addtransactionDOM(transaction){
    const sign=transaction.amount<0?"_":"+";
    const item=document.createElement("li");

    item.classList.add(
        transaction.amount<0?"minus":"plus"
    )
    item.innerHTML='
    ${transaction[0].text}<span>${sign}${math.ads(
    transaction[0].amount
)}</span>
    <button class="delete-btn" onclick=""></button>
    ';
    list.appendChild(item);
}
//Update updatevalues
function updatevalues(){
    const amounts=Transactions.map(transaction=>transaction.amount);
    const total=amounts,reduce((acc,item)=>(acc+=item),0).tofixed(2);
    const income=amounts.filter(item=>item>0).reduce((acc+=item),0),toFixed(2);
    const expensive=()
}
//init app
function init(){
    list.innerHTML=""
}
