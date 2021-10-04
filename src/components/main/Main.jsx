import './Main.css'

function Main() {

    return (
        <main>
            <div className='search-container'>
                <input
                    type="text"
                    placeholder='Enter city name'
                />
                <button>Enter</button>
            </div>
        </main>
    );
}

export default Main;