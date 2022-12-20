import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";

function App() {
  const users=[
    {
      id: 1,
      fullName:"Nigar",
      age:20,
      image: "https://images.unsplash.com/photo-1509043759401-136742328bb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1235&q=80",
      hobbies:["reading","watching","playing game"]

    },
    {
      id: 2,
      fullName:"Malahat",
      age:20,
      image: "https://images.unsplash.com/photo-1509043759401-136742328bb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1235&q=80",
      hobbies:["travel","watching","walking"]

    }
  ]
  // const users=user.map(()=>{
  //   return<Welcome name={users.fullName} id={users.id} age={users.age} hobbies={users.hobbies} image={users.image}/>
  // })
  return(
    <>
    <Navbar/>
    {users.map((user)=> {
      return <Welcome key={user.id} name={user.fullName} id={user.id} age={user.age} hobbies={user.hobbies} image={user.image}/>;
    })}
    <Footer/>
    </>
  )
  
}
export default App;