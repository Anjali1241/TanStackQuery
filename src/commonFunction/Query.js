import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const posts=[
    {id:1,title:"post1"},
    {id:2,title:"post2"},
]
// export const getApi=useQuery({
//     queryKey: ["api"],
//     queryFn:()=>wait(1000).then(()=>[...posts])
// })

// Function to fetch data
const getDataFunc = async () => {
  const response = await axios.get("https://freetestapi.com/api/v1/countries?sort=name&order=dec");
  return response.data; // Return the data
};

// Using useQuery to fetch data
export const useGetData = () => {
  return useQuery({
    queryKey: ["data"],
    queryFn: getDataFunc,
  });
};

// show data when dropdown is selected
const fetchData = async (selectedValue) => {
    const response = await axios.get('https://freetestapi.com/api/v1/countries?sort=name&order=dec', {
      params: { value: selectedValue },
    });
    return response.data;
  };
  
  export const useFetchData = (selectedValue) => {
    return useQuery({
      queryKey: ['dropdownData', selectedValue],
      queryFn: () => fetchData(selectedValue),
      enabled: selectedValue !== '', // Prevent the query from running on initial render
    });
  };

  export const usePostData = () => {
    const queryClient = useQueryClient();
  
    return useMutation({
      mutationFn: (title) => {
        // Simulating an API call by pushing to the array
        const newPost = { id: Math.random(), title };
        posts.push(newPost); // Add the new post
        return newPost; // Return the new post (optional)
      },
      onSuccess: () => {
        // Invalidate the queries to refresh data
        queryClient.invalidateQueries(['api']);
      },
    });
  };