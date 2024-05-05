import useData from "./useData";


export interface Platform {
    id: number;
    name: string;
    slug: string;
}


const usePlatforms = () =>  useData<Platform>("/parent_platforms/lists/parents");

export default usePlatforms;