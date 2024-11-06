import React from 'react'
import './Contact.css'
import Swal from 'sweetalert2'

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "0ed2e11d-3282-45e2-bec4-79e9fdb29d19");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Succès !",
                text: "Votre message a bien été envoyer ",
                icon: "success"
              });
            window.location.reload();
        }
      };
  return (
    <section className='contact' id='target'>
        <form onSubmit={onSubmit}>
            <h2>Contactez-nous !</h2>
            <div className='input-box'>
                <label>Nom</label>
                <input type="text" className='field' placeholder='nom' required name='nom'/>
            </div>
            <div className='input-box'>
                <label >Adresse mail</label>
                <input type="email" className='field' placeholder='email' required name='email'/>
            </div>
            <div className='input-box'>
                <label>Téléphone</label>
                <input type="text" className='field' placeholder='numéro de téléphone' required name='téléphone'/>
            </div>
            <div className='input-box'>
                <label >Votre budget</label>
                <select className="fieldbudget"type="select" placeholder="Budget" name='budget' required aria-required='true' aria-expanded='true'>
                    
                    <option >Entre 1000€ et 3000€</option>
                    <option >Entre 3000€ et 6000€</option>
                    <option >Entre 6000€ et 10000€</option>
                    <option >+ de 10000€</option>
                </select>
                
            </div>
            <div className='input-box'>
                <label >Type de service</label>
                <select className="fieldbudget"type="select" placeholder="Budget" name='service' required aria-required='true' aria-expanded='true'>
                    
                    <option >Neuf</option>
                    <option >Rénovation</option>
                    <option >Agrandissement</option>
                    <option >Réparation</option>
                </select>
                
            </div>
            
            <div className='input-box'>
                <label>Détails</label>
                <textarea  className='field mess' placeholder='Donnez plus de détails sur votre projet' required name="message"></textarea>
            </div>
            <button type='submit'>Envoyer</button>
        </form>
    </section>
  )
}

export default Contact