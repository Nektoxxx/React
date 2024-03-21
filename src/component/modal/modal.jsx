import { useState } from "react"
import CreatePage from "../../page/createPage/createPage"
import Modal from "react-modal"

export default function ModalItem() {
    const [ModalIsOpen, setModalIsOpen] = useState(false)

    function showModal() {
        setModalIsOpen(true)
    }
    function closeModal() {
        setModalIsOpen(false)
    }

    return (
        <>
            <button onClick={showModal} className="btn">Добавить</button>
            <Modal isOpen={ModalIsOpen}>
                <div className="reate">
                <CreatePage setModalIsOpen={setModalIsOpen}/>
                <button onClick={closeModal} className="btn">Закрыть</button>
                </div>
            </Modal>
        </>
    )
}