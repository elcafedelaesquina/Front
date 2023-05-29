import React,{useState,useEffect} from 'react'
import'./style.css'

const Comments = () => {
    const [data,setData]=useState([])

    useEffect(()=>{
      fetch('https://apimainejetravel.azurewebsites.net/api/Coffee/Lista')
      .then(response => response.json())
      .then(data => {
        const {coffeeList}=data
        setData(coffeeList[0])})
        
    },[])
    const [valor,setValor]=useState([{id_coffee: 2, name: 'cafe la esquina', email: 'cafe@gmail.com', password: '123', description: 'EL mejor cafe Salento',image
    : 
    "https://apimainejetravel.azurewebsites.net/Imagenes/8b2f52ca-b32a-48be-9896-83a1451f92b1.jpeg"}])

    const changeComment=(e)=>{
        let filtered=data.filter( item=>item.id_coffee===parseInt(e.target.value)) 
        setValor(filtered)
        console.log(typeof data[0].id_coffee)
        console.log(data[0])

        
         
    }
  return (
    <div className="containerComments">
       <h2>Tu opinion es importante para nosotros...</h2> 
       <div className="container">
           <div className="cafeteriaComments">
            <div className="commentsGenerator">
                <img alt='' src={valor[0].image}></img>
                <div className="choose">
                    <h3>{valor[0].name}</h3>
                    <h4>{valor[0].address}</h4>
                    <select onChange={changeComment}>
                        {data.map(item=>{
                            return (<option 
                                value={item.id_coffee}

                            >{item.name}

                            </option>)

                        })}
                        
                    </select>

                </div> 
                <h3>Califica tu experiencia<span>(Obligatorio)</span></h3>
                
                
                <div className="rating">
                  <input type="radio" id="star5" name="rate" value="5"/>
                  <label htmlFor="star5" title="text"></label>
                  <input type="radio" id="star4" name="rate" value="4"/>
                  <label htmlFor="star4" title="text"></label>
                  <input type="radio" id="star3" name="rate" value="3"/>
                  <label htmlFor="star3" title="text"></label>
                  <input type="radio" id="star2" name="rate" value="2"/>
                  <label htmlFor="star2" title="text"></label>
                  <input type="radio" id="star1" name="rate" value="1"/>
                  <label htmlFor="star1" title="text"></label>
                </div>
                <h3>Tu opinion<span>(Obligatorio)</span></h3>
                
                <textarea></textarea>
                <button className='btnEnviarComments'>Enviar</button>
            </div>

            
            </div> 
           <div className='comments'>
            <div className="comment">
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt=''></img>
                <div className="commentUser">
                    <h3>Juan</h3>
                    <div className='starsContainer'>
                    <ion-icon name="star" ></ion-icon>
                    <ion-icon name="star" ></ion-icon>
                    <ion-icon name="star" ></ion-icon>
                    <ion-icon name="star" ></ion-icon>
                    <ion-icon name="star" ></ion-icon>
                    </div>
                    <p>Sunday 21-03 at 9:30 PM</p>
                </div>
                <p>La comida estaba 
                    exquisita, y la gente de los 
                    cafes eran muy amables con 
                    nosotros cuando necesitabamos 
                    algo.
                </p>
            </div>
            <div className="comment">
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt=''></img>
                <div className="commentUser">
                    <h3>Juan</h3>
                    <div className='starsContainer'>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    </div>
                    <p>Sunday 21-03 at 9:30 PM</p>
                </div>
                <p>La comida estaba 
                    exquisita, y la gente de los 
                    cafes eran muy amables con 
                    nosotros cuando necesitabamos 
                    algo.
                </p>


            </div>
            <div className="comment">
                <img src="https://img.freepik.com/vector-premium/dibujos-animados-perfil-mujer_18591-58475.jpg?w=2000" alt=''></img>
                <div className="commentUser">
                    <h3>Maria</h3>
                    <div className='starsContainer'>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    </div>
                    <p>Sunday 21-03 at 9:30 PM</p>
                </div>
                <p>La comida estaba 
                    exquisita, y la gente de los 
                    cafes eran muy amables con 
                    nosotros cuando necesitabamos 
                    algo.
                </p>


            </div>
           </div>
       </div>

      
    </div>
  )
}

export {Comments}
