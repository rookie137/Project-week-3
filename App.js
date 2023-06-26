import './App.css';
let name = "Hi I'm Vivian";

function App() {
  return (
    <>
     <nav>
                <li>Home</li>
                <li>About</li>
                <li>Contact us</li>
            </nav>
            <img src=" "  alt="" />
            <div className="container">
              {/* we use curly brackets since we're concerting Html to js */}
              <h1>Hello {name}</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero perspiciatis aut assumenda, dignissimos architecto quo!
                </p>
            
    
        
    </div>
    </>
  );
}

export default App;

