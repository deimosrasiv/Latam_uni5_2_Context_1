import Galeria from '../Components/Galeria'

export default function home() {
    return (
      <div className="py-3">
         <h3>Home</h3>

        <div className="container">
          <div className='row'>
          <Galeria/>
          </div>
        </div>
      </div>
    );
  }
  