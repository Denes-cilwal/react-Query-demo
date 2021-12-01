import { useQuery } from "react-query";
import { fetchSuperHeroes } from "../services/SuperHeroes";
export const RQSuperHeroesPage = () => {
  
  const { isLoading, data, isError, error, isFetching } = useQuery("super-heroes",fetchSuperHeroes,{
      cacheTime:5000
  });

  console.log(isLoading, "11---->")
  console.log(isFetching, "22222---->")
  if (isLoading) {
    return <h2>Loading...</h2>;
  }


  if(isError){
      return <h2>{error.message}</h2>
  }
  return (
    <>
      <h2>React Query Super Heroes Page</h2>
    {
        data?.data.map((hero)=>{
            return <div key={hero.name}>{hero.name}</div>
        })
    }
    </>
  );
};
