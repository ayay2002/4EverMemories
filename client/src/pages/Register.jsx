import React, { useState } from "react";
import axios from "axios";
import { toast } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    })

    const [photographer, setPhotographer] = useState({
        name: '',
        email: '',
        password: '',
    })

    const registerUser = async (e) => {
        e.preventDefault()
        const { name, email, password } = user
        try {
            const response = await axios.post('/register', {
                name, email, password
            }, {headers: {
                'Content-Type': 'text/json'
            }
                
            })
            if (response.data.error) {
                toast.error(response.data.error)
            } else {
                setUser({})
                toast.success('Registration successful!')
                navigate('/login')
            }
        } catch (error) {
            console.error(error)
        }
    }

    const registerPhotographer = async (e) => {
        e.preventDefault()
        const { name, email, password } = photographer
        try {
            const response = await axios.post('/register', {
                name, email, password
            })
            if (response.data.error) {
                toast.error(response.data.error)
            } else {
                setPhotographer({})
                toast.success('Registration successful!')
                navigate('/login')
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
            <div className="user-form">
                <h3 className="form-header">User Register</h3>
                <form onSubmit={registerUser}>
                    <label className="form-label">Name</label>
                    <input type="text" className="form-input" placeholder='Enter name...' value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} />
                    <label className="form-label">Email</label>
                    <input type="email" className="form-input" placeholder='Enter email...' value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
                    <label className="form-label">Password</label>
                    <input type="password" className="form-input" placeholder='Enter password...' value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
                    <button type='submit' className="form-button">Submit</button>
                </form>
            </div>
            <div className="photographer-form">
                <h3 className="form-header">Photographer Register</h3>
                <form onSubmit={registerPhotographer}>
                    <label className="form-label">Name</label>
                    <input type="text" className="form-input" placeholder='Enter name...' value={photographer.name} onChange={(e) => setPhotographer({ ...photographer, name: e.target.value })} />
                    <label className="form-label">Email</label>
                    <input type="email" className="form-input" placeholder='Enter email...' value={photographer.email} onChange={(e) => setPhotographer({ ...photographer, email: e.target.value })} />
                    <label className="form-label">Password</label>
                    <input type="password" className="form-input" placeholder='Enter password...' value={photographer.password} onChange={(e) => setPhotographer({ ...photographer, password: e.target.value })} />
                    <button type='submit' className="form-button">Submit</button>
                </form>
            </div>
        </div>
    )
}
