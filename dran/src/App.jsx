import './App.css';

function App() {
    return(
        <main>
            <h1>$400<span>.00</span></h1>
            <form>
                <div>
                    <input type="text" placeholder={'+200 new samsung tv'} />
                    <input type="datetime-local" />
                </div>
                <div className='description'>
                    <input type="text" placeholder="Enter amount" />
                </div>
                <button> Add new Transsaction</button>
            </form>
            <div className='transactions'>
                <div className='transaction'>
                    <p>+200 new samsung tv</p>
                    <p>2023-01-01 12:00:00</p>
                    <p>$200.00</p>
                </div>
            </div>
        </main>
    );
}

export default App;