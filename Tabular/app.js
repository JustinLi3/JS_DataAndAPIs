
async function fetchTable(){
    try{
        const response = await fetch('zonAn.csv'); 
        const data = await response.text(); 
        //console.log(data); print data in case
        const rows = data.split('\n').slice(1); // .split('character that serves as a splitter'); .slice(from which first element, to last element)
        rows.forEach(row=>{  
            const ele = row.split(',');
            const year = ele[0];
            const temp = ele[1];
            console.log("Year: " + year + "\nGlobal Temp: " + temp);
        }); 
        //^^^ for each row I want to split it by commas and grab year and temperature by element indexing
    }  
    catch(error){
        console.error("ERROR: " + error);
    }
} 

fetchTable().then(()=>console.log("Method has ran successfully")).catch(()=>console.error("Method did not run as expected")); 

//NOTE, use .blob() for binary data such as images, videos, audio 
//.text() for texual data for HTML, JSON, CSV, plain text