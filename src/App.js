
import './App.css';
import FakeData from '../src/FakeData/FakeData.json'
import UserInfo from './Components/UserInfo/UserInfo';
import { useState } from 'react';
import SelectedPerson from './Components/SelectedPersonInfo/SelectedPerson';
function App() {
  const first10 = FakeData.slice(0,15)
  const [users,setUsers] = useState(first10)
  const [cart, setCart] = useState([])
 const addPerson = (user) => {
  //  console.log('click ',name.fullName)
    const newCart = [...cart,user];
    setCart(newCart)
 } 
  // setUsers(FakeData)
  return (
    <div className="Grandinformation">
      <div className="divOne">
        <div className="insideDivOne">
        {
            users.map(user => <UserInfo user={user} key={user.id} addPerson={addPerson}></UserInfo>)
        }
        </div>
      </div>
      <div className="divTwo">
            <SelectedPerson cart={cart}></SelectedPerson>
      </div>
      
    </div>
  );
}

export default App;
