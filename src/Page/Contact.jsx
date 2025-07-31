import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "../Style/Contact.css"; 
import { useRef, useState } from "react";
function Contact(){
    const userNameRef = useRef(null);
    const emaliRef = useRef(null);
    const websiteRef = useRef(null);
    const messageRef = useRef(null);
    const[Date , setDate] = useState(
        {userName: "" , Email:"" , website:"" , message :""},  
    );
    const handleChang = (e) => {
        const{name, value} = e.target; 
        setDate({...Date , [name]: value});
    }
    const handleSubmit = (e) => { 
        e.preventDefault();
        const{userName , Email , website, message} = Date;
        if(!userName.trim() || !Email.trim() || !website.trim() || !message.trim()) { 
            alert("Error");
            return; 
        }
        if(userNameRef.current) userNameRef.current = ""; 
        if(emaliRef.current)    emaliRef.current = "";
        if(websiteRef.current)  websiteRef.current = "";
        if(messageRef.current)  messageRef.current = "";
        setDate({userName: "" , Email:"" , website:"" , message :""})  ;
    }
    return(
           <section className="ContactSection">
              <h1 id="CoTitle">Contact Us</h1>
              <div className="ContactContinar">
                <div className="MpaInfoContinar">
                    <div className="MAP"> 
                        <div className="overlay-text">Our Site</div>               
                    </div>
                    <div className="Info">         
                        <div className="LineFONT">
                            <div className="FONTICON">
                                <IoLocation />
                            </div>
                            <p id="LINEPARAGRAPHP">john Doe. 123 Main St istanbul , IL 30323</p>
                        </div>      
                        <div className="LineFONT">
                            <div className="FONTICON">
                                <FaPhoneAlt />
                            </div>
                            <a href="#" id="LINEPARAGRAPH">+94478554555</a>
                        </div>

                         <div className="LineFONT">
                            <div className="FONTICON">
                                <MdEmail />
                            </div>
                            <a href="#" id="LINEPARAGRAPH">example@gmail.com</a>
                        </div>
                     </div>
                </div>
                    <div className="ContactFields">
                        <h1 id="FieldsTitle">GET IN TOUCH</h1>
                        <p id="FieldParagraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Ratione necessitatibus,</p>
                        <div className="InputBoxContinar">
                            <form onSubmit={handleSubmit}>
                            <div className="Input-box">
                                <input type="text" 
                                name="userName"
                                value={Date.userName} 
                                onChange={handleChang}
                                id="inputField" 
                                placeholder="UserName" />
                            </div>
                            <div className="Input-box">
                                <input type="text" 
                                name="Email" 
                                value={Date.Email}
                                onChange={handleChang}
                                id="inputField" 
                                placeholder="Email" 
                                />
                            </div>
                            <div className="Input-box">
                                <input type="text" 
                                name="website"
                                value={Date.website} 
                                onChange={handleChang}
                                id="inputField" 
                                placeholder="Website" />
                            </div>
                            <div className="textArea-box">
                                <textarea name="message" 
                                value={Date.message} 
                                id="AreaFiled" 
                                placeholder="Message"
                                onChange={handleChang} 
                                ></textarea>
                            </div>
                            <div className="SubmitButtonBox">
                                <button type="submit" 
                                 className="subbtn">Submit</button>
                            </div>
                            </form>
                        </div>
                    </div>
              </div>
           </section>
    );
}

export default Contact; 