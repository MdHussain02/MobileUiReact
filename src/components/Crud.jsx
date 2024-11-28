import React from 'react'
import './App.css'
import { useNavigate } from 'react-router-dom';
function Crud() {
// use navigate
const navigate = useNavigate();

const handleRedirect = () => {
  navigate('/add'); // Redirect to the About page
};
  const data =[
    {
      "title": "note 1",
      "content_sample": "John is tall",
      },
      {
        "title": "note 2" ,
        "content_sample": "Anna is very cute"
      },
      {
        "title": "Sample note" ,
        "content_sample": "Anna is very cutde"
      },
      {
        "title": "note 2" ,
        "content_sample": "Anna is very cute"
      },
      {
        "title": "note 2" ,
        "content_sample": "Anna is very cute"
      },
      {
        "title": "note 2" ,
        "content_sample": "Anna is very cute"
      },
      {
        "title": "note 2" ,
        "content_sample": "Anna is very cute"
      },
  ]
  return (
    <div className='d-flex justify-content-center'>

        <div className='box-div d-flex justify-content-center'>
          <div className='box-inner'>

            {/* Navbar Start */}

            <div className='navbarc'>
            <h4 className='text-i'>12:30 AM</h4>
            <h4 className='text-2'>4G</h4>

            <div className='range3'></div>
            <div className='range2'></div>
            <div className='range1'></div>
            <div className='range'></div>
            <div className='battery'>
              <div className='battery-p'>
              <h4 className='battery-t'>30%</h4>
              </div>
            </div>
            <div className='positive'></div>
            </div>
            
            {/* Navbar end */}


            <div className='content-screen'>
            <div className='top-bar'>  


           {/* dash start */}
              <div className='dash-cnt'>
              <div className='dash'></div>
              <div className='dash'></div>
              <div className='dash'></div>
              </div>
              {/* dash end */}

              <h2 className='topbar-text'>Search your notes</h2>


            </div >

            <div className='note-div' style={{
            maxHeight: '700px',    // Set the maximum height for the container
            overflowY: 'auto',     // Enables vertical scrollbar when content overflows
            overflowX: 'hidden',   // Prevents horizontal scrollbar
            padding: '10px',
            marginTop: '10px',
            width: '410px',        // Optional: Set a fixed width if needed
      }}>
              {data.map(i=> 
              
                  <div className='main-content'>
                  <h1 className='title'>{i.title}</h1>
                  <p className='content'>{i.content_sample}</p>
                   </div>
                
              )}
            </div>

              <button className='button' onClick={handleRedirect}>
              <div className='btn-bg-red'>
                <div className='btn-bg-green'>
                <h5 className='button-text-content'>+</h5>
                </div>
              </div>
                
              </button>
            </div>
          
          </div>
        </div>

    </div>
  )
}

export default Crud