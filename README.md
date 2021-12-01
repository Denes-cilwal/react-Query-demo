# Getting Started with React Query

- A library for fetching data in React Application.

# Requirement of React-Query:
- Since,React is UI library, there is no specific pattern for data fetching.
- We normally use useEffect for data fetching and useState hook to maintain component state like loading error or resulting data.
- if data is needed throughout the app, we tend to use state management libraries
- Most of the state management libraries are good for working with client state
- State management libraries are not great for working with asynchronous or server state.

Need of React-query Over useEffect:
-  https://blog.bitsrc.io/how-to-start-using-react-query-4869e3d5680d


Covered topics

- ✅ [Basic Queries](https://react-query.tanstack.com/overview)
- ✅ [Poll data](https://react-query.tanstack.com/overview)
- ✅ [RQ dev tools](https://react-query.tanstack.com/overview)
- ✅ [Create resuable query hooks](https://react-query.tanstack.com/overview)
- ✅ [Query by ID](https://react-query.tanstack.com/overview)
- ✅ [Parallel queries](https://react-query.tanstack.com/overview)
- ✅ [Dynamic queries](https://react-query.tanstack.com/overview)
- ✅ [Dependent Queries](https://react-query.tanstack.com/overview)
- ✅ [Infinite and paginated queries](https://react-query.tanstack.com/overview)
- ✅ [optmistic updates](https://react-query.tanstack.com/overview)
- ✅ [Invalidate queries](https://react-query.tanstack.com/overview)
- ✅ [optimistic updates](https://react-query.tanstack.com/overview)
- ✅ [Axios Interceptor](https://react-query.tanstack.com/overview)

# Query Cache :
- Query Cache,We go Home to Traditional SUperHeroes,every time we see loading text but incase of useQuery 
first time usequery is fired for super heroes keys, isLoading is set to true and network request is sent 
to fetch the data.
- When request is completed it is cached using he query key and the fetch superheroes function as the unique identfiers.
- When we visit from Home page to RQ superoes Heroes react query will check if data for this query exists in 
cache, since it exist, cache data is sent imediately without setting [isLoading  - true]
- Every query result is cached for 5 minutes and react-query relies on cache for subsquent request.

- Case is react query knows that the server data might have updated and cache mightnot contain latest data 
  so background refetch is trigerred for same query and if fetch is sucessful the new data is updated in the ui 
- IF isloading is not changed does use query provide another flag to indicate the background refetching of the query, the answer is yes and the flag is called  "isfetching"
