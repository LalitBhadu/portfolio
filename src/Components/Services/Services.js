import React from 'react'
import './Services.css'
import {BsCheck2All} from 'react-icons/bs'

function Services() {
  return (
    <section id='service'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className='container service_container'>
        <article className='service'>
          <div className='service_head'>
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service_list'>
            <li>
            <BsCheck2All className='service_list-icon'/>
            <p>this is demo this is demo this is demo</p>
            </li>
            <li>
            <BsCheck2All className='service_list-icon'/>
            <p>this is demo this is demo this is demo</p>
            </li>
            <li>
            <BsCheck2All className='service_list-icon'/>
            <p>this is demo this is demo this is demo</p>
            </li>
            <li>
            <BsCheck2All className='service_list-icon'/>
            <p>this is demo this is demo this is demo</p>
            </li>
            <li>
            <BsCheck2All className='service_list-icon'/>
            <p>this is demo this is demo this is demo</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service_head'>
            <h3>Web Development</h3>
          </div>
          <ul className='service_list'>
            <li>
            <BsCheck2All className='service_list-icon'/>
            <p>this is demo this is demo this is demo</p>
            </li>
            <li>
            <BsCheck2All className='service_list-icon'/>
            <p>this is demo this is demo this is demo</p>
            </li>
            <li>
            <BsCheck2All className='service_list-icon'/>
            <p>this is demo this is demo this is demo</p>
            </li>
            <li>
            <BsCheck2All className='service_list-icon'/>
            <p>this is demo this is demo this is demo</p>
            </li>
            <li>
            <BsCheck2All className='service_list-icon'/>
            <p>this is demo this is demo this is demo</p>
            </li>
          </ul>
        </article>
        {/* End of UI/UX */}
        <article className='service'>
          <div className='service_head'>
            <h3>App Development</h3>
          </div>
          <ul className='service_list'>
            <li>
            <BsCheck2All className='service_list-icon'/>
            <p>this is demo this is demo this is demo</p>
            </li>
            <li>
            <BsCheck2All className='service_list-icon'/>
            <p>this is demo this is demo this is demo</p>
            </li>
            <li>
            <BsCheck2All className='service_list-icon'/>
            <p>this is demo this is demo this is demo</p>
            </li>
            <li>
            <BsCheck2All className='service_list-icon'/>
            <p>this is demo this is demo this is demo</p>
            </li>
            <li>
            <BsCheck2All className='service_list-icon'/>
            <p>this is demo this is demo this is demo</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service_head'>
            <h3>Search Engine Optimization</h3>
          </div>
          <ul className='service_list'>
            <li>
            <BsCheck2All className='service_list-icon'/>
            <p>this is demo this is demo this is demo</p>
            </li>
            <li>
            <BsCheck2All className='service_list-icon'/>
            <p>this is demo this is demo this is demo</p>
            </li>
            <li>
            <BsCheck2All className='service_list-icon'/>
            <p>this is demo this is demo this is demo</p>
            </li>
            <li>
            <BsCheck2All className='service_list-icon'/>
            <p>this is demo this is demo this is demo</p>
            </li>
            <li>
            <BsCheck2All className='service_list-icon'/>
            <p>this is demo this is demo this is demo</p>
            </li>
          </ul>
        </article>
      </div>



    </section>
  )
}

export default Services