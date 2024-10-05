import { useQuery } from "@tanstack/react-query"; 

const posts = [
  { id: 1, title: "post1" },
  { id: 2, title: "post2" },
];
const wait = (duration) =>
  new Promise((resolve) => setTimeout(resolve, duration));
function App() {
  const {
    data: postData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["api"],
    queryFn: () => wait(1000).then(() => [...posts]),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>{JSON.stringify(error)}</div>;
  }
  if (postData) {
    console.log("sdsds", postData);
  }
  return (
    <>
      <p>TanStack Query</p>
      {postData?.map((ele) => (
        <p key={ele.id}>{ele.title}</p>
      ))}
    </>
  );
}

export default App;
