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
                    <input type="text" placeholder="Description" />
                </div>
                <button> Add new Transsaction</button>
            </form>
            <div className='transactions'>
                <div className='transaction'>
                    <div>
                        <div className='left'>
                            <div className='name'>New Samsung TV</div>
                            <div className='description'>It was time for a new TV</div>
                        </div>
                        <div className='right'>
                            <div className='price'>$500.00</div>
                            <div className='datetime'>2022-12-18 15:45</div>
                        </div>
                    </div>
                </div>
            </div>
                <div className='transaction'>
                    <div>
                        <div className='left'>
                            <div className='name'>New Samsung TV</div>
                            <div className='description'>It was time for a new TV</div>
                        </div>
                        <div className='right'>
                            <div className='price'>$500.00</div>
                            <div className='datetime'>2022-12-18 15:45</div>
                        </div>
                </div>
            </div>
                <div className='transaction'>
                    <div>
                        <div className='left'>
                            <div className='name'>New Samsung TV</div>
                            <div className='description'>It was time for a new TV</div>
                        </div>
                        <div className='right'>
                            <div className='price'>$500.00</div>
                            <div className='datetime'>2022-12-18 15:45</div>
                        </div>
                </div>        
            </div>
                <div className='transaction'>
                    <div>
                        <div className='left'>
                            <div className='name'>New Samsung TV</div>
                            <div className='description'>It was time for a new TV</div>
                        </div>
                        <div className='right'>
                            <div className='price'>$500.00</div>
                            <div className='datetime'>2022-12-18 15:45</div>
                        </div>
                </div>
            </div>
                <div className='transaction'>
                    <div>
                        <div className='left'>
                            <div className='name'>New Samsung TV</div>
                            <div className='description'>It was time for a new TV</div>
                        </div>
                        <div className='right'>
                            <div className='price'>$500.00</div>
                            <div className='datetime'>2022-12-18 15:45</div>
                        </div>
            </div>
            </div>
        </main>
    );
}

export default App;