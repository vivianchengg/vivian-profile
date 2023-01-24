import { useState, useEffect } from 'react';
import '../App.css';
import { Navbar } from './navbar';
import { AboutMe } from './aboutMe';
import { MySkill } from './skill';
import { Connect } from './connect';

export const StartPage = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      }, []);

    return (
        <div>
            {loading ? (
                <div>
                    <iframe title="startGif" src="https://giphy.com/embed/xT9DPldJHzZKtOnEn6" frameBorder="0" width="480" height="500" className="loadingGif" allowFullScreen></iframe>
                </div>
            ) : ( 
                <div className='profile-page'>
                    <div className='topSection'>
                    <div className='welcome-message'>
                        <h1>Welcome to Vivian's Profile!</h1>
                    </div>
                    <div>
                        <Navbar />
                    </div>
                    <br />
                    </div>
                    <div className='aboutSection'>
                        <h1 id='aboutMe'>About Me!</h1>
                        <AboutMe /> 
                    </div>                                   
                    <div className='skillSection'>
                        <h1 id='mySkill'>Skills and Experience</h1>
                        <MySkill />
                    </div>                   
                    <div className='connectSection'>
                        <h1 id='connectMe'>Let's Connect!</h1>
                        <Connect />
                    </div>
                    
                </div>
            )
            }
        </div>
    );          
}

export{};