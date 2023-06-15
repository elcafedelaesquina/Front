import React, { useState } from 'react';
import styles from './style.module.css';

const ChatModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [message, setMessage] = useState('');

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  
  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para enviar el mensaje a través de una API o realizar cualquier acción deseada
    console.log('Mensaje enviado:', message);
    setMessage('');
  };

  return (
    <div>
      <button onClick={toggleModal}>Abrir chat</button>

      {isOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
            <h2 className={styles.titleChat}>Chat de Compras</h2>
            <button className={styles.closeBtn} onClick={toggleModal}>
              <ion-icon name="close"></ion-icon>
            </button>

            </div>
            <div className={styles.containerMessage}>
              <div className={styles.messageOne}>
                <p className={styles.message}>Hola,Cómo estás?</p> 
                <p className={styles.dateMessage}>05-06-2023</p>

              </div>
              <div className={styles.messageTwo}>
              <p className={styles.dateMessage}>05-06-2023</p>
                <p className={styles.message}>Holaaaaa</p>
                

              </div>

            </div>
            
            <form className={styles.form} onSubmit={handleSubmit}>
              <textarea
                placeholder="Escribe un mensaje..."
                value={message}
                onChange={handleChange}
                className={styles.textarea}
              />
              <button type="submit" className={styles.submitBtn}>
                 <ion-icon name="arrow-redo"></ion-icon>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export {ChatModal};