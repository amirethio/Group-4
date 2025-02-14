const  API_KEY = import.meta.env.VITE_API_KEY

const Request = {
    fetchPopuar :  `/discover/movie?api_key=${API_KEY}&include_adult=false&sort_by=popularity.desc` ,
}



export default Request