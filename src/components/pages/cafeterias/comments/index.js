import React, { useState, useEffect, useRef } from 'react'
import './style.css'

const Comments = () => {
  const Swal = require('sweetalert2')
  const [data, setData] = useState([])
  const [valor, setValor] = useState([{
    address
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
  const [comment, setComment] = useState([
    { id_comment: 1, id_bussines: 2, comments: 'holaa', user_name: 'armandoz', date: '2012', score: 5, user_image: 'https://apimainejetravel.azurewebsites.net/Imagenes/5607f842-809f-4ef7-9319-a5d031c85195.jpg' }

  ])
  const [id_customer, setIdCustomer] = useState(null)

  useEffect(() => {
    fetch('https://apimainejetravel.azurewebsites.net/api/Coffee/Lista')
      .then(response => response.json())
      .then(data => {
        const { coffeeList } = data
        console.log(coffeeList)
        setData(coffeeList[0])
      })
    let id_customer = parseInt(localStorage.getItem('id_customer'))
    if (id_customer) {
      let id = parseInt(id_customer)
      setIdCustomer(id)

    }
    fetch(`https://apimainejetravel.azurewebsites.net/api/Comment/Lista/1/${valor[0].id_coffee}`)
      .then(response => response.json())
      .then(data => {
        const { list } = data

        setComment(list[0])
      })


  }, [valor])



  

  const changeComment = (e) => {
    let filtered = data.filter(item => item.id_coffee === parseInt(e.target.value))
    setValor(filtered)
    /* console.log(typeof data[0].id_coffee)
    console.log(data[0]) */
    fetch(`https://apimainejetravel.azurewebsites.net/api/Comment/Lista/1/${e.target.value}`)
      .then(response => response.json())
      .then(data => {
        const { list } = data

        setComment(list[0])
        
      })




  }

  var formulario = useRef(null)
  var textArea = useRef(null)
  const [rate, setRate] = useState(0)

  const sendComment = () => {
    ///organizar post no esta recibiendo la peticion
    if(id_customer){
      console.log(rate)
      let obj = {
        Comments: textArea.current.value,
        Id_bussines: valor[0].id_coffee,
        Id_user: id_customer,
        Type_business: 1,
        Score: rate
      }
      console.log(obj)
      fetch('https://apimainejetravel.azurewebsites.net/api/Comment/Guardar', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
          // Puedes agregar otros encabezados aquí si es necesario
        },
        body: JSON.stringify(obj),
      })
        .then(response => response.json())
        .then(data =>
          console.log(data))
      setTimeout(() => {
        fetch(`https://apimainejetravel.azurewebsites.net/api/Comment/Lista/1/${valor[0].id_coffee}`)
          .then(response => response.json())
          .then(data => {
            const { list } = data
            setComment(list[0])
  
          })
  
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Gracias Por Tu Comentario',
          showConfirmButton: false,
          timer: 1000
        })
      }, 1000)
    }else{
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Inicia sesión para enviar tu comentario',
        showConfirmButton: false,
        timer: 1500
      })

    }








  }
  const stars=(score)=>{
    let stars = [];

    for (let i = 1; i <= score; i++) {
      stars.push(<ion-icon key={i} name="star"></ion-icon>);
    }
  
    return <>{stars}</>;
  }





  return (
    <div className="containerComments">
      <h2>Tu opinion es importante para nosotros...</h2>
      <div className="container">
        <div className="cafeteriaComments">
          <div className="commentsGenerator" ref={formulario}>

            <img alt='' className='imgCafeteriaComment' src={valor[0].image}></img>
            <div className="choose">
              <h3 >{valor[0].name}</h3>
              <h4>{valor[0].address}</h4>
              <select onChange={changeComment} >
                {data.map(item => {
                  return (<option key={item.id_coffee}
                    value={item.id_coffee}


                  >{item.name}

                  </option>)

                })}

              </select>

            </div>
            <h3>Califica tu experiencia<span>(Obligatorio)</span></h3>


            <div className="rating">
              <input type="radio" onChange={() => setRate(5)} id="star5" name="rate" value="5" />
              <label htmlFor="star5" title="text"></label>
              <input type="radio" onChange={() => setRate(4)} id="star4" name="rate" value="4" />
              <label htmlFor="star4" title="text"></label>
              <input type="radio" onChange={() => setRate(3)} id="star3" name="rate" value="3" />
              <label htmlFor="star3" title="text"></label>
              <input type="radio" onChange={() => setRate(2)} id="star2" name="rate" value="2" />
              <label htmlFor="star2" title="text"></label>
              <input type="radio" onChange={() => setRate(1)} id="star1" name="rate" value="1" />
              <label htmlFor="star1" title="text"></label>
            </div>
            <h3>Tu opinion<span>(Obligatorio)</span></h3>

            <textarea ref={textArea}></textarea>
            <button className='btnEnviarComments' type='submit' onClick={sendComment}>Enviar</button>


          </div>





        </div>
        <div className='comments'>
          {comment.reverse().map((comment, index) => {



            return (
              <div className="comment" key={index}>
                <img src={comment.user_image} alt=''></img>
                <div className="commentUser">
                  <h3>{comment.user_name}</h3>
                  <div className='starsContainer'>
                    {/* comment.score */
        
                       stars(comment.score)
                    }

                  </div>
                  <p>{comment.date}
                  </p>
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

export { Comments }
