import React, { useEffect, useState } from "react";
import Style from "./commentsCafeterias.module.css";

export const CommentsCafeterias = () => {
  let imgTest = "https://res.cloudinary.com/dmrq9n2im/image/upload/v1683225617/El%20caf%C3%A9%20de%20la%20esquina/imgtest3_m4hqtw.jpg";

  const [data, setData] = useState([]);

  const [dataComment,setDataComment]=useState('')
  const [value,setValue]=useState([])

  const getCafeterias = async () => {
    await fetch("https://apimainejetravel.azurewebsites.net/api/Coffee/Lista")
      .then((response) => response.json())
      .then((data) => {
        const { coffeeList } = data;
        setData(coffeeList[0]);
      });
  };
  const selectCafeteria=(e)=>{
    const valor=e.target
    console.log(dataComment)

  }

  useEffect(() => {
    getCafeterias();
  }, []);



  return (
    <div className={Style.containerComments}>
      <div className={Style.flipCard}>
        <div className={Style.flipCardInner}>
          <div className={Style.flipCardFront}>
            <section className={Style.containerInfo}>
              <h2 className={Style.title}>
                Tu opinion es importante para nosotros...
              </h2>
              <div className={Style.choose}>
                <select className={Style.select}  onChange={selectCafeteria} >
                {data.map((item) => {
                  
                  return (
                  <option value={{item}} selected={()=>{setDataComment(item.image)}}>{item.name}</option>
                  );
                })}
                </select>
              </div>
              <h3 className={Style.subTitle}>{dataComment}</h3>
              <p className={Style.ubicationSite}>{dataComment}</p>
              <img src={dataComment} alt="" className={Style.imgSite} />
              <h3 className={Style.subTitle}>Califica tu experiencia</h3>
            </section>

            <section className={Style.rating}>
              <input type="radio" id="star5" name="rate" value="5" />
              <label for="star5" title="Excelente"></label>
              <input type="radio" id="star4" name="rate" value="4" />
              <label for="star4" title="Bueno"></label>
              <input type="radio" id="star3" name="rate" value="3" />
              <label for="star3" title="Regular"></label>
              <input type="radio" id="star2" name="rate" value="2" />
              <label for="star2" title="Mala"></label>
              <input type="radio" id="star1" name="rate" value="1" />
              <label for="star1" title="Muy mala"></label>
            </section>

            <section className={Style.comment}>
              <h3 className={Style.subTitle}>Tu opinion</h3>
              <textarea
                className={Style.textarea}
                name=""
                id=""
                cols="30"
                rows="10"
              />
              <button className={Style.btnSend}>Enviar</button>
            </section>
          </div>

          <div className={Style.flipCardBack}>
             <section className={Style.comments}>
              <section className={Style.comment1}>
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                  alt=""
                ></img>
                <div className={Style.commentUser}>
                  <p className={Style.text}>Juan</p>
                  <div>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>
                  <p>Sunday 21-03 at 9:30 PM</p>
                </div>
                <p className={Style.text}>
                  La comida estaba exquisita, y la gente de los cafes eran muy amables
                  con nosotros cuando necesitabamos algo.
                </p>
              </section>
            </section> 

          </div>
        </div>
      </div>



    </div>
  );
};
