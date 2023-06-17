import React, {useState} from 'react'
import Style from './chat.module.css'

export const Chat = () => {

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
        <div className={Style.chat}>
            <button onClick={toggleModal}>Abrir chat</button>

            {isOpen && (
                <div className={Style.modal}>
                    <div className={Style.modalContent}>
                        <div className={Style.modalHeader}>
                            <h2 className={Style.titleChat}>Chat de Compras</h2>
                            <button className={Style.closeBtn} onClick={toggleModal}>
                            <ion-icon name="close"></ion-icon>
                            </button>
                        </div>

                        <div className={Style.containerMessage}>
                            <div className={Style.messageOne}>
                                <p className={Style.message}>Hola,Cómo estás?</p> 
                                <p className={Style.dateMessage}>05-06-2023</p>
                            </div>

                            <div className={Style.messageTwo}>
                                <p className={Style.dateMessage}>05-06-2023</p>
                                <p className={Style.message}>Holaaaaa</p>                       
                            </div>
                        </div>
                        
                        <form className={Style.form} onSubmit={handleSubmit}>
                            <textarea
                                placeholder="Escribe un mensaje..."
                                value={message}
                                onChange={handleChange}
                                className={Style.textarea}
                            />
                            <button type="submit" className={Style.submitBtn}>
                                <ion-icon name="arrow-redo"></ion-icon>
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
