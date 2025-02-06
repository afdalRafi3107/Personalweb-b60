// // synchronous

// console.log("start"); //awal proces

// function gtData(){
//     const data = 'data berhasil di ambil'
//     return data;
// }
// const result = gtData();
// console.log(result);

// console.log("end"); //akhir proces

//simulasi butuh waktu ambil data / set time ut
// console.log("start"); //awal proces

// function gtData(){
//     const data = 'data berhasil di ambil'
//     console.log(data);
    
// }

// function fectData(){
//     setTimeout(gtData,2000)
//     console.log("end"); //akhir proces

// }

// fectData()


function proses1(){
    console.log("Hi Semua");
    setTimeout(()=>{
        console.log("end");
        
    }, 5000)
}

function proses2(name){
    console.log("nama saya", name);
    setTimeout(()=>{
        console.log("START");
        
    }, 5000)


}

greeting("afdal");
sayHello()

// asynchronous
function MULTIPLEPROCES(){

}