let api = "https://fakestoreapi.com/products";

async function data(){
    try{
        let res = await axios.get(api);
        console.log(res.data)
    }catch(e){
        console.log("naveen error hai yha pr " + e)
    }
}
data()
