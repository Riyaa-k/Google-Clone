import React,{createContext,useContext,useState} from 'react';

const  ResultContext=createContext();
const baseUrl='https://google-api31.p.rapidapi.com';

export const ResultContextProvider=({children})=>{
        const [results,setResults]=useState([]);
        const [isLoading,setIsLoading]=useState(false);
        const [searchTerm,setSearchTerm]=useState('');

        const getResults=async(url)=>{
            setIsLoading(true);
            const response=await fetch(`${baseUrl}${type}`,{
                method:'GET',
                headers:{
                    'content-type': 'application/json',
                    'X-RapidAPI-Key': '6bacc1ca5dmsh6711665f6d75203p1d75abjsn59237c09b218',
                    'X-RapidAPI-Host': 'google-api31.p.rapidapi.com',
                }
            });
           const data=await response.json(); 
           console.log(data);
           setResults(data);
           setIsLoading(false);
        }
return(
    <ResultContext.Provider value={{getResults,results,searchTerm,setSearchTerm,isLoading}}>
        {children}
    </ResultContext.Provider>
)
}
export const useResultContext=()=>{
    useContext(ResultContext);
}