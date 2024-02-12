import {createStore, combineReducers} from 'redux'
import { v4 } from 'uuid'

let puranadata={
    shopinglist:[],
    products:[
        {
            id:v4(),
            img:"https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct1Maain.png%3Falt%3Dmedia%26token%3D57390b99-b996-41f8-a184-472b5c21bc90&w=640&q=75",
            title:'HOOPS 3.0 LOW CLASSIC VINTAGE SHOES',
            price:"250"
        },
        {
            id:v4(),
            img:"https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct2Main.png?alt=media&token=8a15e1a3-6514-4d4f-ab80-135efb35b59c",
            title:'DAILY 3.0 SHOES',
            price:"350"
        },
        {
            id:v4(),
            img:"https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct3Main.avif?alt=media&token=cfb8a965-e230-4bf1-8756-265ed419502f",
            title:'KAPTIR 3.0 SHOES',
            price:"430"
        },
        {
            id:v4(),
            img:"https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct4main.avif?alt=media&token=e7267dcd-3119-4d5b-b872-4cf9e4eefd68",
            title:'CLOUDFOAM PURE SHOES',
            price:"280"
        },
        {
            id:v4(),
            img:"https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct5main.avif?alt=media&token=76c8eb87-50d3-4493-9573-731d5fce55a2",
            title:'HOOPS 3.0 LOW CLASSIC VINTAGE SHOES',
            price:"299"
        },
        {
            id:v4(),
            img:"https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct6main.avif?alt=media&token=1926d8ed-373d-4989-9462-a9d2e1f0ccd4",
            title:'DAILY 3.0 SHOES',
            price:"180"
        },
        {
            id:v4(),
            img:"https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct7main.avif?alt=media&token=75513f13-1d32-450f-8333-fb3b66100061",
            title:'HOOPS 3.0 LOW CLASSIC VINTAGE SHOES',
            price:"199"
        },
        {
            id:v4(),
            img:"https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct8main.avif?alt=media&token=c78d67b3-02ed-4e49-924a-083889aab78b",
            title:'ADILETTE SANDALS',
            price:"380"
        },
        {
            id:v4(),
            img:"https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct9main.png?alt=media&token=cfb49f49-4ebb-4cdf-99ce-d02b9ab09655",
            title:'HOOPS 3.0 LOW CLASSIC VINTAGE SHOES',
            price:"420"
        },
         {
            id:v4(),
            img:"https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct10main.png?alt=media&token=db5ad18d-89d1-49ba-9491-9c806be947be",
            title:'RUNFALCON 2.0 SHOES',
            price:"350"
        },
    ]
}


function ProductSection(oldata=puranadata,newdata){
    oldata= {...oldata}

    if(newdata.type=="ADD-TO-CART"){
        oldata.shopinglist.push(newdata.payload)
    }




    return oldata

}


let Authpuranadata=[]


function Authsection(oldata=Authpuranadata,newdata){
    oldata= {...oldata}





    return oldata

}



let Allsection=combineReducers({ProductSection, Authsection})
export let store= createStore(Allsection)