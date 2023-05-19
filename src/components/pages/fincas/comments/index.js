import React from "react";
import styles from './style.module.css' 

const CommentsFicas = () => {
  return (
    <div className={styles.containerComments}>
       <h2>Tu opinion es importante para nosotros...</h2> 
       <div className={styles.container}>
           <div className={styles.cafeteriaComments}>
            <div className={styles.commentsGenerator}>
                <img alt='' src="https://www.wradio.com.co/resizer/UpUfe56rcOvclY3i88hBsDzw5nA=/650x488/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/prisaradioco/CT3V63LOOBBJBMDL22HG5LGKXI.jpg"></img>
                <div className={styles.choose}>
                    <h3>Finca El Ocaso</h3>
                    <h4>Salento Quindio</h4>
                    <select>
                        <option>Finca El Ocaso</option>
                        <option>Finca El Ocaso</option>
                        <option>Finca El Ocaso</option>
                    </select>

                </div> 
                <h3>Califica tu experiencia<span>(Obligatorio)</span></h3>
                
                
                <div className={styles.rating}>
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
                <button className={styles.btnEnviarComments}>Enviar</button>
            </div>

            
            </div> 
           <div className={styles.comments}>
            <div className={styles.comment}>
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt=''></img>
                <div className={styles.commentUser}>
                    <h3>Juan</h3>
                    <div className={styles.starsContainer}>
                    <ion-icon name="star" ></ion-icon>
                    <ion-icon name="star" ></ion-icon>
                    <ion-icon name="star" ></ion-icon>
                    <ion-icon name="star" ></ion-icon>
                    <ion-icon name="star" ></ion-icon>
                    </div>
                    <p>Sunday 21-03 at 9:30 PM</p>
                </div>
                <p>lorem ipsum dolor sit amet, consectetur adip
                </p>
            </div>
            <div className={styles.comment}>
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt=''></img>
                <div className={styles.commentUser}>
                    <h3>Juan</h3>
                    <div className={styles.starsContainer}>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    </div>
                    <p>Sunday 21-03 at 9:30 PM</p>
                </div>
                <p>lorem ipsum dolor sit amet, consectetur adip
                </p>


            </div>
            <div className={styles.comment}>
                <img src="https://img.freepik.com/vector-premium/dibujos-animados-perfil-mujer_18591-58475.jpg?w=2000" alt=''></img>
                <div className={styles.commentUser}>
                    <h3>Maria</h3>
                    <div className={styles.starsContainer}>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    </div>
                    <p>Sunday 21-03 at 9:30 PM</p>
                </div>
                <p>lorem ipsum dolor sit amet, consectetur adip
                </p>
            </div>
           </div>
       </div>
    </div>
  )
}

export {CommentsFicas}