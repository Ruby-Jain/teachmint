import { useFetch } from "../hooks/useFetch";
import UserCard from "./UserCard";

export default function Home() {
  const { data, isLoading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <>
      <h1>Home</h1>

      {isLoading && <h2>Loading ...</h2>}

      {error && <h2>Something went wrong ...</h2>}

      {data && data.map((i) => <UserCard key={i.id} user={i} />)}
    </>
  );
}
