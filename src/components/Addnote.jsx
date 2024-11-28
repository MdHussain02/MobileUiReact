import React from 'react'

function Addnote() {
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
            
            {/* Start content  */}

            <form action="submit">
            <input type="text" placeholder='Title' className='title-input' />
            <textarea name="" id=""   placeholder='Enter your Note here ..' className='note-input'>
            </textarea>
            <button className=' m-2 btn btn-primary'>Save</button>

            </form>
            
            </div>

            
          </div>
        </div>

    </div>
  )
}

export default Addnote