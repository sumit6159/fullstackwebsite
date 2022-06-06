import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <>
      <footer>
          <div>
              <ul className='listItem'>
                  <li>About Us</li>
                  <li>Careers</li>
                  <li>Gift a Smile</li>
                  <li>Press Release</li>
              </ul>
          </div>
          <div>
              <ul className='listItem'>
                  <li>Facebook</li>
                  <li>Twitter</li>
                  <li>Instagram</li>
              </ul>
          </div>
          <div>
              <ul className='listItem'>
                  <li>Covid-19 Guidelines</li>
                  <li>Return Centre</li>
                  <li>Help</li>
              </ul>
          </div>
      </footer>
    </>
  )
}

export default Footer