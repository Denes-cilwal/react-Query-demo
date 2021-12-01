import { useQuery } from "react-query";
import { fetchSuperHeroes } from "../services/SuperHeroes";
export const RQSuperHeroesPage = () => {
  
  const { isLoading, data } = useQuery("super-heroes",fetchSuperHeroes);

  if (isLoading) {
    return <h2>Loading...</h2>;
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
