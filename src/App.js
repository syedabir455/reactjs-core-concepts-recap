import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadPosts></LoadPosts>
      <District name="Narsingdi" famous="Banana"></District>
      <District name="Dhaka" famous="Biriyani"></District>
      <District name="Cumilla" famous="Rashmalai"></District>
        
    </div>
  );
}
function LoadPosts(){
  const[posts,setPosts]=useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json()
    .then(data=>setPosts(data))
    )
  },[])
  return(
    <div>
      <h2>Posts: {posts.length}</h2>
      {/* console.log(posts) */}
      {
        posts.map(post=><Post title={post.title} body={post.body}></Post>)
      }
    </div>
  )  
}
function Post(props){
  return (
    <div  style={{backgroundColor:'slateblue',border:'2px solid salmon',margin:'20px'}}>
      <h3>Title: {props.title}</h3>
      <p>Body: {props.body}</p>
    </div>
  )
}
const districtStyle={
  backgroundColor:'lightGreen',
  margin:'20px',
  borderRadius:'15px',
  padding:'15px'
}
function District(props){
  const [power, setPower]= useState(1)

  const boostPower=()=>{
    const newPower = power*2;
    setPower(newPower)
  }
  return (
    <div style={districtStyle}>
      <h2>Name: {props.name}</h2>
      <h4>Specialty:{props.famous}</h4>
      <h4>Power :{power}</h4>
      <button onClick={boostPower}>Boost Power</button>
    </div>
  )
}

export default App;
