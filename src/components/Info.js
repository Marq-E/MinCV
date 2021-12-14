import React from "react"
import { FaMobileAlt} from "react-icons/fa"
import { AiOutlineMail, AiOutlineLinkedin } from "react-icons/ai"
import { GoLocation } from "react-icons/go";

export default function Info() {
    return (
        <div className="info-div">
                <div>
                    <h3 className="info-title">KONTAKT</h3>
                    <p className="info-p">920 85 460 <FaMobileAlt className="contact-icon"/></p>
                    <p className="info-p">mario.erichsen@gmail.com <AiOutlineMail className="contact-icon"/></p>
                    <p className="info-p">Angelltrøvegen 106, 7048 Trondheim <GoLocation className="contact-icon"/></p>
                    <p className="info-p">linkedin.com/in/mario.erichsen-58a3482 <AiOutlineLinkedin className="contact-icon"/></p>
                </div>
                <div className="info-section">
                    <h3 className="info-title">UTDANNING</h3>
                    <h4 className="info-h4">MASTER I LEDELSE AV TEKNOLOGI</h4>
                    <p className="p-info-section"><em>NTNU Handelshøyskolen</em></p>
                    <p className="p-info-section">2013-2015</p>
                    <br />
                    <h4 className="info-h4">IT-BACHELOR SYSTEMUTVIKLING</h4>
                    <p className="p-info-section"><em>Høgskolen i Sør-Trøndelag</em></p>
                    <p className="p-info-section">2001-2004</p>
                </div>
                <div className="info-section">
                    <h3 className="info-title">SERTIFISERINGER</h3>
                    <h4 className="info-h4">PROSJEKTLEDELSE</h4>
                    <p className="p-info-section"><em>PRINCE2 Foundation</em></p>
                    <p className="p-info-section"><em>PRINCE2 Practitioner</em></p>
                </div>
                <div className="info-section">
                    <h3 className="info-title">KURS</h3>
                    <h4 className="info-h4">FRONTEND-UTVIKLER</h4>
                    <p className="p-info-section"><em>The Frontend Developer Career Path</em></p>
                    <p className="p-info-section"><em>Scrimba</em></p>
                    <p className="p-info-section">2019 - 2021</p>
                    <h4 className="info-h4">SYSTEMADMINISTRASJON</h4>
                    <p className="p-info-section"><em>AZ-103: Microsoft Azure Administrator</em></p>
                    <p className="p-info-section"><em>Glasspaper</em></p>
                    <p className="p-info-section">2019</p>
                </div>
                <div className="info-section">
                    <h3 className="info-title">EGENSKAPER</h3>
                    <p className="p-info-section">Løsningsorientert</p>
                    <p className="p-info-section">Selvgående</p>
                    <p className="p-info-section">Strukturert</p>
                    <p className="p-info-section">Engasjerende</p>
                    <p className="p-info-section">Motiverende</p>
                    <p className="p-info-section">Resultatorientert</p>
                    <p className="p-info-section">Kreativ</p>
                </div>
                <div className="info-section">
                    <h3 className="info-title">VERV</h3>
                    <h4 className="info-h4">STYRELEDER</h4>
                    <p className="p-info-section"><em>Borettslaget Mellomveien 20</em></p>
                    <p className="p-info-section">2010-2016</p>
                    <br />
                    <h4 className="info-h4">REPRESENTANT I FAGUTVALGET</h4>
                    <p className="p-info-section"><em>NTNU Handelshøyskolen</em></p>
                    <p className="p-info-section">2013-2014</p>
                </div>
                <div className="info-section">
                    <h3 className="info-title">INTERESSER</h3>
                    <p className="p-info-section">Informasjonsteknologi</p>
                    <p className="p-info-section">Frontend-utvikling</p>
                    <p className="p-info-section">Ledelsespsykologi</p>
                    <p className="p-info-section">Trening</p>
                    <p className="p-info-section">Musikk</p>
                </div>
                <div className="info-section">
                    <h3 className="info-title">SPRÅK</h3>
                    <h4 className="info-h4">NORSK</h4>
                    <p className="p-info-section">Flytende - skriftlig og muntlig</p>
                    <br />
                    <h4 className="info-h4">SPANSK</h4>
                    <p className="p-info-section">Flytende - skriftlig og muntlig</p>
                    <br />
                    <h4 className="info-h4">ENGELSK</h4>
                    <p className="p-info-section">Flytende - skriftlig og muntlig</p>
                </div>
            </div>
    )
}