import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App() {
  const image = imageData();
  return (
    <div>
      <h1>Kalvium Gallery 2.0</h1>
      <div className='images'>
        {image.map(item => (
          <div key={item.id} >
            <img src={item.img} alt={`${item.id}`} />
          </div>
        ))}
      </div>
    </div>
    
  );
};


export default App;
