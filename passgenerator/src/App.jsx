import { useState , useCallback ,useEffect,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [num, setNum] = useState(false);
   const [char, setChar] = useState(false);
   const[pass,setPass]=useState("");


    // useRef hook 

    const passwordRef = useRef(null);


   const generatePassword = useCallback(() =>{
    let pass="";
    let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(num){
      str+="0123456789";
    }
    if(char){
      str+="!@#$%^&*()_+";
    }

    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1);
       pass+=str.charAt(char)
    }
    setPass(pass)

    // setPass(generatePassword);
  }, [length, num, char ,setPass]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 99999); 

    window.navigator.clipboard.writeText(pass); 
    alert("Copied the password: " + pass);

  },[pass]);
  useEffect(() => {
    generatePassword();
  }, [length, num, char, generatePassword]);

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 
     py-3 my-8  text-orange-500 bg-gray-600'>
      <h1 className='text-white text-center my-3'>Password Generatator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        {/* <input
         type="text"
        value={pass} 
        className='outline-none w-full px-3 py-1 '
        placeholder='pass'
        readonly
        /> */}
        <input
  type="text"
  value={pass}
  placeholder="Password"
  readOnly
  className="outline-none w-full px-3 py-2 bg-white"
  ref={passwordRef}
  
/>
<button
onClick={ copyPasswordToClipboard }

className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">copy</button>
          
       

      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-2'>
          <input 
              type="range"
              min="4" 
              max="100" 
              value={length} 
              
              className='cursor-pointer '
              onChange={(e) => {setLength(e.target.value)}}
            />
            <label >
              Length: {length}
            </label>

        </div>
        <div className='flex items-center gap-x-2'>
          <input
               type="checkbox"
               defaultChecked={num}
               id="numberInput"
                onChange={() =>{
                  setNum((prev) => !prev);

                }
                }/>
                <label htmlFor="numberInput">Numbers</label>

          
      </div>

      <div className='flex items-center gap-x-2'>
        <input
        type="checkbox"
        defaultChecked={char}
        id="characterInput"
        onChange={() =>{
          setChar((prev) => !prev);
        }}
        />
        <label htmlFor="characterInput">Characters</label>
      </div>
      </div>


    </div>
    </>
  );
}

export default App
