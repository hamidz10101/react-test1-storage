// local storage management system

const fakeDb = id=>{
    const quantity = localStorage.getItem(id);
    if(quantity){
        console.log("Already exist")
        const newQuantity = quantity + 1;
        localStorage.setItem(newQuantity)
    }
    else{
        localStorage.setItem(id, 1)
        console.log('net item')
    }

}

export {fakeDb};