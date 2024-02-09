import { useState } from "react";
import axios from "axios";
import { toast } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate()
    const [data1, setData1] = useState({
        name: '',
        email: '',
        password: '',
    })

    const [data2, setData2] = useState({
        name: '',
        email: '',
        password: '',
    })



    const registerUser = async (e) => {
        e.preventDefault()
        const { name, email, password } = data1
        try {
            const { data1 } = await axios.post('/register', {
                name, email, password
            })
            if (data1.error) {
                if (data.error) {
                    toast.error(data.error)
                } else {
                    setData1({})
                    toast.success('Login successful, Welcome!')
                    navigate('/login')
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    const registerPhotographer = async (e) => {
        e.preventDefault()
        const { name, email, password } = data2
        try {
            const { data2 } = await axios.post('/register', {
                name, email, password
            })
            if (data2.error) {
                toast.error(data.error)
            } else {
                setData2({})
                toast.success('Login successful, Welcome!')
                navigate('/login')
            }
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <div>
            <div className="user-form">
                <h3>User Register</h3>
                <form onSubmit={registerUser}>
                    <label>Name</label>
                    <input type="text" placeholder='enter name...' value={data1.name} onChange={(e) => setData1({ ...data1, name: e.target.value })} />
                    <label>Email</label>
                    <input type="email" placeholder='enter email...' value={data1.email} onChange={(e) => setData1({ ...data1, email: e.target.value })} />
                    <label>Password</label>
                    <input type="password" placeholder='enter password...' value={data1.password} onChange={(e) => setData1({ ...data1, password: e.target.value })} />
                    <button type='submit'>Submit</button>
                </form>
            </div>
            <div className="photographer-form">
                <h3>Photographer Register</h3>
                <form onSubmit={registerPhotographer}>
                    <label>Name</label>
                    <input type="text" placeholder='enter name...' value={data2.name} onChange={(e) => setData2({ ...data2, name: e.target.value })} />
                    <label>Email</label>
                    <input type="email" placeholder='enter email...' value={data2.email} onChange={(e) => setData2({ ...data2, email: e.target.value })} />
                    <label>Password</label>
                    <input type="password" placeholder='enter password...' value={data2.password} onChange={(e) => setData2({ ...data2, password: e.target.value })} />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}
