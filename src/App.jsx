import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const posts = [
  { id: 1, title: "post1" },
  { id: 2, title: "post2" },
];
const wait = (duration) =>
  new Promise((resolve) => setTimeout(resolve, duration));
function App() {
  console.log(posts);
  const queryClient = useQueryClient();

  const {
    data: postData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["api"],
    queryFn: () => wait(1000).then(() => [...posts]),
  });

  const newPostMutation = useMutation({
    mutationFn: (title) => {
      posts.push({ id: Math.random(), title });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["api"]);
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>{JSON.stringify(error)}</div>;
  }
  // if (postData) {
  //   console.log("sdsds", postData);
  // }
  return (
    <>
      <p>TanStack Query</p>
      {postData?.map((ele) => (
        <p key={ele.id}>{ele.title}</p>
      ))}
      <button
        disabled={newPostMutation?.isLoading}
        onClick={() => newPostMutation.mutate("Post 3")}
      >
        Add New
      </button>
    </>
  );
}

export default App;
