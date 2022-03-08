//1) For the given JSON iterate over all for loops (for, for in, for of, forEach)


var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
    console.log(data);


    // For Loop 
        for(var i=0;i<data.length;i++){
        console.log(data[i].name)
    }

    // for in loop 
        for(var x in data){
            console.log(x+": "+data[x].capital);
        }

    // for of loop 
        // for(var key of object.keys(data)){
        //     console.log(key+" : "+data[key]);
        // }

    // for each 
        data.forEach((ele)=>{
            console.log(ele,data[ele]);
        });

    
}
