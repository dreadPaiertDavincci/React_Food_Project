import "../Style/FAQ.css";
import According from "../../Componant/According";
function PFAQ(){ 
    return(
      
            <section className="FAQSection">
                <div className="ImageFaq">
                    <h1 id="FAQTITLEID">FAQ</h1>
                </div>
                <div className="HiddenButton">
                     HOME // FAQ
                </div>

                <div className="FAQContinar">
                 <div className="ImageTitle">
                    <h1 id="FAQTI">Frequently Asked <br />Questions</h1>
                    <div className="FAQImage"> 
                        <img src="../../public/FAQ.png" alt="Tahiyati" />
                    </div>
                </div>
                <div className="FAQ">
                    <According />
                </div>
            </div>
               
            </section>
        
    );
}

export default PFAQ; 