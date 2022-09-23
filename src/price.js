let ctx = document.getElementById("myChart").getContext('2d');
let labels = ['pizza','Taco','Hot Dog','Sushi'];
let colorHex = ['#FB3640','#EFCA08','#43AA*B','#253D58'];

let myChart = new Chart(ctx,{
    type:'pie',
    data:{
        datasets:[
        {
            data:[30,10,40,20],
            backgroundColor: colorHex
        },
    ],
    labels : labels,
},
options:{
    responsive : true,
    legend : {
        position: 'bottom',
    },
Plugins : {
    datalabels : {
    color : '#fff',
    anchor : 'end',
    align : 'start',
    offset : -10,
    borderColor : '#fff',
    borderRadius : 25,
    backgroundColor:(context)=>{
        return context.dataset.backgroundColor
    },
    font:{
        weight : "blod",
        size : '10',
    },
    formatter :(value)=>{
        return value + '%'
    },
},
},
},
})