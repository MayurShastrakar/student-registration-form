import {useState} from 'react';
import styles from './studentstyle.css';
export const StudentForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [website, setWebsite] = useState('');
    const [image, setImage] = useState();
    const [gender,setGender] = useState();
    const[skill,setSkill] = useState();
    const [allEntry, setAllEntry] = useState([]);
    const Submit =(event) =>{
        event.preventDefault();
        const newEntry = {name: name, email: email, website: website, image: image,gender:gender,skill:skill};
        setAllEntry([...allEntry, newEntry]);
        console.log(allEntry);

        
    }
    const Clear = (e) =>{
        e.preventDefault();
        setName('');
        setEmail('');
        setWebsite('');
        setImage('');

    }

    return (
        <>
        
        <form onSubmit={Submit}>
        <h1>Student Enrollment Form</h1>
        <div className="container">
       
            <div className={styles.divLeft} id="left">
                <form>
                    <div className={styles.row}>
                        <div className={styles.col}>
                            <label>Name</label>
                        </div>
                        <div className={styles.col}>
                        <input type="text" placeholder='Enter Your Name'value={name} onChange={(e)=>setName(e.target.value)}/>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.col}>
                            <label>Email</label>
                        </div>
                        <div className={styles.col}>
                        <input type="email" placeholder='Enter Your Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.col}>
                            <label>Website</label>
                        </div>
                        <div className={styles.col}>
                        <input type="text" placeholder='Enter Your Website' value={website} onChange={(e)=>setWebsite(e.target.value)}/>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.col}>
                            <label>Image Url</label>
                        </div>
                        <div className={styles.col}>
                        <input type="text" placeholder='Enter Image Url' value={image} onChange={(e)=>setImage(e.target.value)}/>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.col}>
                            <label>Gender</label>
                        </div>
                        <div className={styles.col}>
                        
                        <label>
                        <input type="radio" value='Male' onChecked={(e)=>setGender(e.target.value)} onChange={(e)=>setGender(e.target.value)}/>Male</label>
                        
                        <label>
                        <input type="radio" value='Female' onChecked={(e)=>setGender(e.target.value)} onChange={(e)=>setGender(e.target.value)}/>
                            Female</label>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.col}>
                            <label>Skills</label>
                        </div>
                        <div className={styles.col}>
                        <input type="checkbox" value='Web Development'onChecked={(e)=>setSkill(e.target.value)} onChange={(e)=>setSkill(e.target.value)}/>
                        <label>Java</label>
                        <input type="checkbox" value='App Development'onChecked={(e)=>setSkill(e.target.value)} onChange={(e)=>setSkill(e.target.value)}/>
                        <label>html</label>
                        <input type="checkbox" value='Software Development'onChecked={(e)=>setSkill(e.target.value)} onChange={(e)=>setSkill(e.target.value)}/>
                        <label>c++</label>         
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.col}>
                            <input type="submit" value="Submit"onClick={Submit}/>
                            </div>
                            <input type="submit" value="Clear" onClick={Clear}/>

                    </div>
                </form>
            </div>
            <div className={styles.divRight} id="card">
                {
                    allEntry.map((curElem) => {
                        return (
                            <div className={styles.container}>
                                <div className={styles.rowright}>
                                <p><img alt='Profile Pic' src={curElem.image} className={styles.img}></img></p>
                                <p>Full Name:{curElem.name}</p>
                                <p>Email:{curElem.email}</p>
                                <p>Website:{curElem.website}</p>
                                <p>Gender:{curElem.gender}</p>
                                <p>Skill:{curElem.skill}</p>
                            </div>
                            </div>
                        );
                    }
                    )
                }
            </div>
        </div>
        </form>
        </>
        
    );
};