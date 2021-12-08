import { useQuery } from "react-query";
import { fetchSuperHeroes } from "../services/SuperHeroes";
export const RQSuperHeroesPage = () => {
  const { isLoading, data, isError, error, isFetching } = useQuery(
    "super-heroes",
    // function that returns a query: get request to json server
    fetchSuperHeroes,
    {
    //   cacheTime: 5000, 
    //  default stale time :0sec
      // staleTime:30000,
    // component mounts- refetch occue
    refetchOnMount:true,
    // any time tab gets missed background refetch is initiased
      refetchOnWindowFocus:true
    }
  );
console.log(isLoading, isFetching)
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      {data?.data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })}
    </>
  );
};
