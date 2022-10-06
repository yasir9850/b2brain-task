
import './Screen.css'
import search from '../Images/search.png'
import hero from '../Images/hero-image.png'
import sreenshot from '../Images/Screenshot 2022-07-01 at 1.46.png'
import sreenshot1 from '../Images/Screenshot 2022-07-01 at 1.47.png'
import Logo from '../Images/Logo.png'
import bell from '../Images/bell.png'
import Logo1 from '../Images/Logo1.png'
import Rectangle from '../Images/Rectangle 12.png'
import times from '../Images/times.png'
import { useEffect, useState } from 'react'
import axios from 'axios'
import complogo from '../Images/complogo.png'


const Screen = () => {
  const [data, setData] = useState('')
  const [mydata, setMyData] = useState([])
  const [back, setBack] = useState('')
  const [filter, setFilter] = useState([]);

  

  const handleChange = (e) => {
    const getsearch = e.target.value

    if (getsearch!=='') {

      const searchdata = mydata.filter((item) => item.company.toLowerCase().includes(getsearch))
      setMyData(searchdata)
    }
    else {
      setMyData(filter)
    }
    setData(getsearch)
  }

 

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://staging.staging.b2brain.com/search/autocomplete_org_all/',
      params: { q: 'get' }
    };

    axios.request(options).then(function (response) {
      console.log(response.data);
      setMyData(response.data)
      setFilter(response.data)
    }).catch(function (error) {
      console.error(error);
    });

  }, [])
  return (

    <div className='search-p-wrap'>
      {back ? <div>{<Screen />}</div> :
        <div>

          {data ? <button onClick={() => { setBack(!back) }}><img src={times} alt='times' className='search-icon' /></button> :
            <img src={search} alt='search' className='search-icon' />}
          <input className='input-search' type='search' name='search' id='search' value={data} onChange={handleChange} placeholder='Search by account name or website' />

          <div className='logo-w'>
            <img className='Logo-img' alt='logo' src={Logo} />
            <img className='bell-img' alt='bell' src={bell} />
          </div>
          <img className='Rectangle-img' alt='Rectangle' src={Rectangle} />
          <img className='Logo1-img' alt='sreenshot' src={Logo1} />

          {data ? <div><span className='similar-text'>Similar Accounts</span> <span className='quick-text'>Quick Actions</span>
            <p className='track-text'>Track new account</p>
            <p className='bulk-text'>Bulk track accounts</p>
            <p className='manage-text'>Manage accounts</p>
          </div> : <div></div>
          }


          {data ?
            mydata.map((item, index) => {
              return (<tbody key={index}>

                <tr>
                  <td className='comp-img'><img src={complogo} alt='complogo' /></td>
                  <td><p className='comp-name'>{item.company}</p><br></br><p className='comp-web'>{item.website}</p></td>
                   
                  <td ><div className='track-btn-w'><div className='track-btn'>Track</div></div></td>
                
                </tr>
              </tbody>

              )
            })



            : <div> <img className='hero-img' alt='hero' src={hero} />
              <img className='sreenshot-img' alt='sreenshot' src={sreenshot} />
              <img className='sreenshot1-img' alt='sreenshot' src={sreenshot1} />
            </div>}
        </div>}
    </div>

  )
}

export default Screen