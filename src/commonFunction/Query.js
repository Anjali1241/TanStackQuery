import { useQuery } from "@tanstack/react-query";

const posts=[
    {id:1,title:"post1"},
    {id:2,title:"post2"},
]
export const getApi=useQuery({
    queryKey: ["api"],
    queryFn:()=>wait(1000).then(()=>[...posts])
})