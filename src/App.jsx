import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import Select from "react-dropdown-select";
import {  useGetData, usePostData } from "./commonFunction/Query";
import DropdownComponent from "./components/DropdownComponent";

const posts = [
  { id: 1, title: "post1" },
  { id: 2, title: "post2" },
];
const wait = (duration) =>
  new Promise((resolve) => setTimeout(resolve, duration));

function App() {
  const queryClient = useQueryClient();
  const [selectedValues, setSelectedValues] = useState([]);

  const {
    data: postData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["api"],
    queryFn: () => wait(1000).then(() => [...posts]),
  });
  const newPostMutation = usePostData()

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>{JSON.stringify(error)}</div>;
  }

  const options = [
    { value: 1, label: "Leanne Graham" },
    { value: 2, label: "Ervin Howell" },
  ];

  const handleChange = (selectedOptions) => {
    setSelectedValues(selectedOptions); // Update state with the new selected options
    console.log(selectedOptions); // Log the selected options
  };

  return (
    <>
      <p>TanStack Query</p>
      {postData?.map((ele) => (
        <p key={ele.id}>{ele.title}</p>
      ))}
       <button
      disabled={newPostMutation.isLoading}
      onClick={() => newPostMutation.mutate("Post 3")}
    >
      Add New
    </button>
      <Select
        options={options}
        labelField="label" // Corrected to 'label'
        valueField="value" // Corrected to 'value'
        isMulti // Enable multiple selections
        values={selectedValues} // Use 'values' prop for the selected options
        onChange={handleChange}
      />
      <DropdownComponent/>
    </>
  );
}

export default App;
