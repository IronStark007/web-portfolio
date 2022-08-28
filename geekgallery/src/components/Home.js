import axios from "axios";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import ImageList from "./ImageList";

export const Home = () => {
    const [imageList,setImageList] = useState([]);
    const loadFunc = e => {
        axios.get(`https://api.unsplash.com/photos/?page=${e}&per_page=20&client_id=${process.env.REACT_APP_API_ACCESS_KEY}`)
        .then(res=>setImageList(old=>[...old,...res.data]));
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
    );
}