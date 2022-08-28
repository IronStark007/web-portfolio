import axios from "axios";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { useSearchParams } from "react-router-dom"
import ImageList from "./ImageList";

export const Search = () => {
    const [searchParams] = useSearchParams();
    const [imageList,setImageList] = useState([]);
    useEffect(()=>{
        setImageList([]);
    },[searchParams])
    const loadFunc = pageNo => {
        axios.get(`https://api.unsplash.com/search/photos/?query=${searchParams.get("q")}&page=${pageNo}&per_page=20&client_id=${process.env.REACT_APP_API_ACCESS_KEY}`)
        .then(response => setImageList(list => [...list, ...response.data.results] ));
      }

    return (
        <InfiniteScroll
        pageStart={0}
        loadMore={loadFunc}
        hasMore={true || false}
        loader={<div className="loader" key={0}>Loading ...</div>}
        >
        <ImageList images={imageList} />
        </InfiniteScroll>

    )
}