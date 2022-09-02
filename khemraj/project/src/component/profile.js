import React, {useState} from 'react'
import  '../component/style/profile.css'
// import PK from '../component/IMG.jpg'

const Profile = () => {

  const key= localStorage.getItem('key')

  

  const [ user] = useState({});
  


  return key ? (
    <div>
        <form>
            <div className='kppp'>
            <div classname ="box2">
            <img className='img555' src={user.picture} alt="Jane"></img>
                <form classname ="form2" action="Pk" method="POST" enctype="multipart/form-data" id="pic">             
                <label className='lbb' for="image2">Choose file to upload</label>
                <input type="file" name="uploadfile" id="image"></input>
                <p></p>
                      <button classname="bthh" type="submit" name="submit" id="submit" form="pic">
                        EDIT PIC
                      </button>
                </form>
                <div className='khemraj'>
                <input type="text" name="" placeholder="User Name" ></input>
                <input type="email" name="" placeholder="Email ID" ></input>
                <input type="text" name="" placeholder="Phone Number" ></input>
                <form classname ="form2" action="pswupdate.php?id=<?php echo $id?>" method="POST" id="psw">
                    <input type="text" name="newpsw" placeholder="new password"></input>
                    <input type="text" name="confnewpsw" placeholder="conf password"></input>
                <div classname="bthh" >
                <button classname="bthh" type="submit" form="psw">change</button>
                </div>
                </form>
                </div>
            </div>
            </div>
            
        </form>
    </div>
  ) : (
    <div>
    <form>
        <div className='kppp'>
        <div classname ="box2">
        <img className='img555' src='no picture' alt="Jane"></img>
            <form classname ="form2" action="Pk" method="POST" enctype="multipart/form-data" id="pic">             
            <label className='lbb' for="image2">Choose file to upload</label>
            <input type="file" name="uploadfile" id="image"></input>
            <p></p>
                  <button classname="bthh" type="submit" name="submit" id="submit" form="pic">
                    EDIT PIC
                  </button>
            </form>
            <div className='khemraj'>
            <input type="text" name="" placeholder="User Name" ></input>
            <input type="email" name="" placeholder="Email ID" ></input>
            <input type="text" name="" placeholder="Phone Number" ></input>
            <form classname ="form2" action="pswupdate.php?id=<?php echo $id?>" method="POST" id="psw">
                <input type="text" name="newpsw" placeholder="new password"></input>
                <input type="text" name="confnewpsw" placeholder="conf password"></input>
            <div classname="bthh" >
            <button classname="bthh" type="submit" form="psw">change</button>
            </div>
            </form>
            </div>
        </div>
        </div>
        
    </form>
</div>
  )
}

export default Profile
