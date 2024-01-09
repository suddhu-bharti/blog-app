import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Menu = ({cat}) => {
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
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    const fetchData = async () => {
      try{
        const res = await axios.get(`/posts/?cat=${cat}`);
        setPosts(res.data);
      }catch(err){
        console.log(err)
      }
    }

    fetchData();
  }, [cat])

  return (
    <div className='menu'>
     <h1>Other posts you may like</h1>
     {posts.map(post=>(
      <div className='post' key={post.id}>
        <img src={`../uploads/${post.img}`} alt="" />
        <h2>{post.title}</h2>
        <button>Read More</button>
      </div>
     ))}
    </div>
  )
}

export default Menu
