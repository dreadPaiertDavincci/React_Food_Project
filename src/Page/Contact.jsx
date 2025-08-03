import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "../Style/Contact.css"; 
import { useRef, useState } from "react";
function Contact(){

    const userNameRef  =  useRef(null);
    const emaliRef     =  useRef(null);
    const websiteRef   =  useRef(null);
    const messageRef   =  useRef(null);
    
    const[Date , setDate] = useState({userName: "" , Email:"" , website:"" , message :""});
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
        setDate({userName: "" , Email:"" , website:"" , message :""});
    }
    return(
           <section className="ContactSection">
            
              <h1 id="CoTitle">Contact Us</h1>
              <div className="ContactContinar">
                <div className="MpaInfoContinar">
                    <div className="MAP"> 
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12043.055030011612!2d28.82472155!3d41.00854369999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2str!4v1754131815289!5m2!1sar!2str"
                            width="600"
                            height="300"
                            style={{ border: "0" }}
                            allowFullScreen=""
                            loading="eager"
                            //أرسل معلومات المصدر (referrer) فقط إذا كان الرابط الجديد يستخدم بروتوكول آمن (HTTPS).
                            //هذا مفيد لأسباب أمنية وخصوصية، خاصة عند التعامل مع خدمات مثل خرائط Google.
                            referrerPolicy="no-referrer-when-downgrade" // إذا كان الرابط غير آمن (HTTP)، لا يتم إرسال referrer.
                        ></iframe>              
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
                                ref={userNameRef}
                                value={Date.userName} 
                                onChange={handleChang}
                                id="inputField" 
                                placeholder="UserName" />
                            </div>
                            <div className="Input-box">
                                <input type="text" 
                                ref={emaliRef}
                                name="Email" 
                                value={Date.Email}
                                onChange={handleChang}
                                id="inputField" 
                                placeholder="Email" 
                                />
                            </div>
                            <div className="Input-box">
                                <input type="text" 
                                ref={websiteRef}
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
                                ref={messageRef}
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