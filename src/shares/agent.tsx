import axios from "axios"
const URL = "https://youtube.googleapis.com/youtube/v3/";

const Requests = axios.create({
    baseURL:URL,
    params:{
        key:"AIzaSyAikMbB9g9o5S7OvxXicn6is0RBNIWuPNw",
        part:"snippet",
        maxResults:25
    },
    headers: {

    },
})


const requestResult =  (
  callback :any, 
  keyword : string = "js" , 
  filterRequest:any = false) => {

  return async(dispatch)=>{

    const optionF = () => {
      if(filterRequest){
        return  {
            q: keyword,
            type : filterRequest.typeF,
            order:"date",
            publishedAfter: new Date(filterRequest.dateF).toISOString(),
        }
      }else{
        return {
            q: keyword,
            type: [
              "channel",
              "playlist",
              "video"
            ],
          }
        
      }
    
    }
  
    const res = await Requests.get("/search", {
      params: optionF(),
    }).catch((err) => {
      console.log(err);
    });
    
    dispatch(callback(res?.data.items))
  }
};

  

export default requestResult;

