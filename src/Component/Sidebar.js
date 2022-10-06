import './Sidebar.css'
import home from '../Images/home.png'
import star from '../Images/star.png'
import user from '../Images/user.png'
import shape from '../Images/Shape.png'
import building from '../Images/building.png'
import chevron from '../Images/chevron-down.png'
import cog from '../Images/cog.png'
import link from '../Images/link.png'
import users from '../Images/users.png'
import comments from '../Images/comments-alt.png'
import chevronup from '../Images/chevron-up.png'
import { useState } from 'react'





const Sidebar = () => {
const [toggle,setToggle]=useState(true)
const [toggle1,setToggle1]=useState(true)
    return (
        <div className='mainccont'>
            {/* side bar */}

            <div className='side-bar-cont'>
                <div className='path-img-cont'>
                    <img className='path-img' alt='path' src={shape} />
                </div>
                <div className='brain-h'>B2Brain</div>
                <div className='home-img-cont'>
                    <img src={home} alt='home' className='home-img' />
                </div>
                <div className='dashborad-h-cont'>
                    <p className='dashboard-h'>Dashboard</p>
                </div>
                <div className='star-img-cont'>
                    <img className='star-img' alt='star' src={star} />
                </div>
                <div className='intes-cont'>
                    <p className='intes-h'>Intels</p>
                </div>
                <div className='user-img-cont'>
                    <img className='user-img' alt='user' src={user} />
                </div>
                <div className='unread1'>
                    <p className='unreadtext1'>4 unread</p>
                </div>
                <div className='leads-cont'>
                    <p className='leads-h'>Leads</p>
                </div>
                <div className='unread2'>
                    <p className='unreadtext2'>4 unread</p>
                </div>
                <div className='build-img-cont'>
                    <img className='build-img' alt='building' src={building} />
                </div>
                <div className='account-h-cont'>
                    <p className='account-h'>Account</p>
                </div>
                <div className='chevron-img-cont'>
                {toggle ? 
                   <button  className='chevron-img' onClick={()=>{setToggle(!toggle)}}> <img alt='chebvron' src={chevron} /></button>:
                    <button  className='chevron-img' onClick={()=>{setToggle(!toggle)}}><img alt='chebvron' src={chevronup} /></button>}                  
                </div>
              {toggle ?
                <div>
                    <div className='v-line1'></div>
                    <div className='accountsub-cont'>
                        Manage all<br></br>
                        Track new accounts
                        Bulk Impor
                    </div>
                </div> :<div></div>}  
                


                    <div className={toggle ? '':'yaa'}>
                <div className='cog-img-cont'>
                    <img className='cog-img' alt='cog' src={cog} />
                </div>
                <div className='prefrence-h-cont'>
                    <p className='prefrence-h'>prefrence</p>
                </div>
                <div className='chevron-img2-cont'>
                {toggle1 ?
                  <button className='chevron-img2' onClick={()=>{setToggle1(!toggle1)}}> <img  alt='chebvron' src={chevron} /></button>:
                   <button className='chevron-img2' onClick={()=>{setToggle1(!toggle1)}}> <img  alt='chebvron' src={chevronup} /></button>}
                </div>
                {toggle1 ?
                <div>
                <div className='v-line2'></div>
                <div className='prefrencesub-cont'>
                    Product Focus
                    Intel Preferences
                    Lead Persona
                </div>
                </div>:<div></div>}

                <div className={toggle1 ? '':'bbb'}>
                <div className='link-img-cont'>
                    <img className='link-img' alt='user' src={link} />
                </div>
                <div className='integeration-cont'>
                    <p className='integeration--h'>Integrations</p>
                </div>
                <div className='users-img-cont'>
                    <img className='users-img' alt='user' src={users} />
                </div>
                <div className='teams-cont'>
                    <p className='teams--h'>Teams</p>
                </div>
                <div className='comments-img-cont'>
                    <img className='comments-img' alt='user' src={comments} />
                </div>
                <div className='help-cont'>
                    <p className='help-h'>Help / Support</p>
                </div>
                </div>
                </div>
                </div>
        </div>
    )
}

export default Sidebar