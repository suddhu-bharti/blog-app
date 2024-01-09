import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const cat = useLocation().search

  useEffect(()=>{
    const fetchData = async () => {
      try{
        const res = await axios.get(`/posts${cat}`);
        setPosts(res.data);
      }catch(err){
        console.log(err)
      }
    }

    fetchData();
  }, [cat])

  // const posts = [
  //   {
  //     id: 1,
  //     title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, quaerat.",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus minus debitis facilis cumque sint? Fugiat omnis unde laboriosam perferendis, cum neque quod deleniti placeat cupiditate magnam, tempore, sequi repellendus exercitationem!",
  //     img: "https://wallpapercave.com/wp/wp5213632.jpg",
  //   },
  //   {
  //     id: 2,
  //     title: "Lorem2 ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, quaerat.",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus minus debitis facilis cumque sint? Fugiat omnis unde laboriosam perferendis, cum neque quod deleniti placeat cupiditate magnam, tempore, sequi repellendus exercitationem!",
  //     img: "https://wallpapercave.com/wp/wp5213632.jpg",
  //   },
  //   {
  //     id: 3,
  //     title: "Lorem3 ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, quaerat.",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus minus debitis facilis cumque sint? Fugiat omnis unde laboriosam perferendis, cum neque quod deleniti placeat cupiditate magnam, tempore, sequi repellendus exercitationem!",
  //     img: "https://wallpapercave.com/wp/wp5213632.jpg",
  //   },
  //   {
  //     id: 4,
  //     title: "Lorem4 ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, quaerat.",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus minus debitis facilis cumque sint? Fugiat omnis unde laboriosam perferendis, cum neque quod deleniti placeat cupiditate magnam, tempore, sequi repellendus exercitationem!",
  //     img: "https://wallpapercave.com/wp/wp5213632.jpg",
  //   },
  //   {
  //     id: 5,
  //     title: "Lorem5 ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, quaerat.",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus minus debitis facilis cumque sint? Fugiat omnis unde laboriosam perferendis, cum neque quod deleniti placeat cupiditate magnam, tempore, sequi repellendus exercitationem!",
  //     img: "https://wallpapercave.com/wp/wp5213632.jpg",
  //   },
  // ]

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html,"text/html");
    return doc.body.textContent;
  }

  return (
    <div className='home'>
      <div className="posts">
        {posts.map(post=>(
          <div className='post' key={post.id}>
            <div className="img">
              <img src={`../uploads/${post.img}`} alt="" />
            </div>
            <div className="content">
              <h1>{post.title}</h1>
              <p>{getText(post.desc)}</p>
              <Link className='link' to={`/post/${post.id}`}>
              <button>Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
