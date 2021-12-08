import { useQuery } from "react-query";
import { fetchSuperHeroes } from "../services/SuperHeroes";
export const RQSuperHeroesPage = () => {
  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    "super-heroes",
    fetchSuperHeroes,
    {
      /*
       cacheTime: 5000, 
      default stale time :0sec
       staleTime:30000,
     refetchOnMount:true,
      refetchOnWindowFocus:true
*/
      // fetching data incase of user-event, not on component mount
      enabled: false,
      // sucess and error callbacks
      onSuccess: (data) => {
        console.log("side effect after data fetching", data)
      },
      onError: (data) => {
        console.log("error during data fetching", data)
      },
      // automatically recieves api data as an arugument
      // filter and data transformation concept applies here
      select: (data) => {
        const result = data?.data.map(hero => hero.name)
        return result
      }
    }
  );
  console.log(isLoading, isFetching)
  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      {data?.map((heroName) => {
        return <div key={heroName}>{heroName}</div>;
      })}
      <button onClick={refetch}>Fetch Heroes</button>
    </>
  );
};
