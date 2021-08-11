import React, {useState} from 'react';
import Counter from './Counter';
import SecondCounter from './SecondCounter';
import UserProfile from './UserProfile';
import ThirdCounter from './ThirdCounter';

export const ThemeContext = React.createContext()

function App() {
  const [theme, setTheme] = useState('green')
  return (
    <ThemeContext.Provider value={{backgroundColor:theme}}>
      <Counter initialCount={0}/>
      <SecondCounter initialCount={3}/>
      <ThirdCounter initialCount={5}/>
      <UserProfile user={{firstName:'Gay', lastName:"Koriolan", profilePicture:'/url/profile_picture'}}/>
      <button onClick={()=> setTheme(prevTheme=>{
        return prevTheme === 'red' ? 'blue' : 'red'
      })}>Toggle Theme</button>
    </ThemeContext.Provider>
  )
}

export default App;
