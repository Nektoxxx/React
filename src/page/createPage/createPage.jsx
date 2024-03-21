import { useState } from 'react'

export default function CreatePage() {

    const [message, setMessage] = useState()

    function createForm(event) {
        event.preventDefault()
        const formData = new FormData(event.target)
        fetch(' https://jsonplaceholder.typicode.com/posts ', {
            method: 'POST',
            body: formData
        })
        event.target.reset()
        setMessage('Форма отпралена')
    }
    return (
        <>
            <main className="main__body mrtop">
                <div className="container">
                    <h1>Добавление</h1>
                    <form onSubmit={createForm}>
                        <label className='modal__text'>title</label>
                        <input className='modal__input' type="text" name="title" />
                        <label className='modal__text'>body</label>
                        <textarea className='modal__input' name="body"></textarea>
                        <button className='btn' type="submit">Добавить</button>
                        {message}
                    </form>
                </div>
            </main>
        </>
    )
}