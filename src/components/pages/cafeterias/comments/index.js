import React,{useState,useEffect, useRef} from 'react'
import'./style.css'

const Comments = () => {
    const [data,setData]=useState([])
    const [comment,setComment]=useState([ 
        {id_comment: 1, id_bussines: 2, comments: 'holaa', user_name: 'armandoz', user_image: 'https://apimainejetravel.azurewebsites.net/Imagenes/5607f842-809f-4ef7-9319-a5d031c85195.jpg'}
       
        ])
    const [id_customer,setIdCustomer]=useState(null)

    useEffect(()=>{
      fetch('https://apimainejetravel.azurewebsites.net/api/Coffee/Lista')
      .then(response => response.json())
      .then(data => {
        const {coffeeList}=data
        console.log(coffeeList)
        setData(coffeeList[0])})
        let id_customer=parseInt(localStorage.getItem('id_customer'))
        if(id_customer){
            let id=parseInt(id_customer)
            setIdCustomer(id)

        }
        
        
    },[])
    const [valor,setValor]=useState([{address
        : 
        "Salento Carrera 6a 6a 14",
        id_coffee
        : 
        2,
        image
        : 
        "https://apimainejetravel.azurewebsites.net/Imagenes/69407558-9820-4cda-b362-358332bf8b79.jpg",
        name
        : 
        "Café Jesús Martin"
       }])

    const changeComment=(e)=>{
        let filtered=data.filter( item=>item.id_coffee===parseInt(e.target.value)) 
        setValor(filtered)
        /* console.log(typeof data[0].id_coffee)
        console.log(data[0]) */
        fetch(`https://apimainejetravel.azurewebsites.net/api/Comment/Lista/1/${e.target.value}`)
      .then(response => response.json())
      .then(data => {
        const {list}=data
        console.log(list[0])
        setComment(list[0])})

        
         
    }
    
    var formulario=useRef(null)
    var textArea=useRef(null)
    const sendComment=()=>{
        ///organizar post no esta recibiendo la peticion
        
            
            let obj={
                Comments: textArea.current.value,
                Id_bussines: valor[0].id_coffee,
                Id_user:id_customer,
                Type_business:1
                }
                console.log(obj)
            
       
            
            fetch('https://apimainejetravel.azurewebsites.net/api/Comment/Guardar', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                    // Puedes agregar otros encabezados aquí si es necesario
                  },
                body:JSON.stringify(obj),
              })
              .then(response => response.json())
              .then(data=>
                console.log(data)
                ) 

      
       

    }
  return (
    <div className="containerComments">
       <h2>Tu opinion es importante para nosotros...</h2> 
       <div className="container">
           <div className="cafeteriaComments">
            <div className="commentsGenerator" ref={formulario}>
                
                <img alt='' src={valor[0].image}></img>
                <div className="choose">
                    <h3 >{valor[0].name}</h3>
                    <h4>{valor[0].address}</h4>
                    <select onChange={changeComment} >
                        {data.map(item=>{
                            return (<option key={item.id_coffee}
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
                
                <textarea ref={textArea}></textarea>
                <button className='btnEnviarComments' type='submit' onClick={sendComment}>Enviar</button>
        
                
            </div>
            
            
            

            
            </div> 
           <div className='comments'>
            {comment.map(comment=>{
                return(
                    <div className="comment">
                        <img src={comment.user_image} alt=''></img>
                        <div className="commentUser">
                            <h3>{comment.user_name}</h3>
                            <div className='starsContainer'>
                            <ion-icon name="star" ></ion-icon>
                            <ion-icon name="star" ></ion-icon>
                            <ion-icon name="star" ></ion-icon>
                            <ion-icon name="star" ></ion-icon>
                            <ion-icon name="star" ></ion-icon>
                            </div>
                            <p>Sunday 21-03 at 9:30 PM</p>
                        </div>
                        <p>{comment.comments}
                        </p>
                    </div>
                )
            })
                        }

           </div>
       </div>

      
    </div>
  )
}

export {Comments}
