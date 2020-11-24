const OrderNumbers=async(req, res)=>{
const {listNumbers}=req.body;
if (!listNumbers || !Array.isArray(listNumbers)) return res.status(400).json({
    msg:'Datos invalidos'
})
//input array numbers []
//get lista numbers
//create hash table value key of array will be organize
//return array of key hashtable
const hashTable={}
listNumbers.forEach(element => {
        if (typeof hashTable.element==='undefined'){
            hashTable[element]=element;
        } 
     });
    const result= Object.keys(hashTable)
res.status(200).json({
    msg:'Recibido',
    result
})

}


module.exports={
    OrderNumbers
}