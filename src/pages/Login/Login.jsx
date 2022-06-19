import React, { useContext, useState } from 'react'

import { AuthContext } from '../../context/AuthContext'

export const Login = () => {


    const [loginCreds, setLoginCreds] = useState({})
    const { login } = useContext(AuthContext)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginCreds({
            ...loginCreds,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        login()


    }



    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "auto",
            marginRight: "auto",
            width: "400px",
            height: "400px",
            gap: "20px",
            border: "1px solid red",
            borderRadius: "10px",
            backgroundColor: "teal",
            marginTop: "20px",
            padding: "20px",
        }}>


            <form onSubmit={handleSubmit}>
                <input style={{
                    width: "300px",
                    height: "30px",
                    border: "none",
                    borderRadius: "10px"
                }} name='email' type="email" placeholder='Enter Email' onChange={handleChange} />
                <br />

                <br />
                <br />
                <input style={{
                    width: "300px",
                    height: "30px",
                    border: "none",
                    borderRadius: "10px"
                }} name='password' type="password" placeholder='Enter password' onChange={handleChange} />
                <br />
                <br />
                <br />
                <button style={{
                    width: "100px",
                    height: "30px",
                    border: "none",
                    borderRadius: "10px",
                    fontSize: "20px",
                }} type='submit'>Login</button>
            </form>
        </div>
    )
}
