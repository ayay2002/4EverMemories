import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate()
    const [data1, setData1] = useState({
        email: '',
        password: '',
    })
    const [data2, setData2] = useState({
        email: '',
        password: '',
    })


    const loginUser = async (e) => {
        e.preventDefault()
        const { email, password } = data1
        try {
            const { data1 } = await axios.post('/login', {
                email,
                password
            })
            if (data1.error) {
                toast.error(data1.error)
            } else {
                setData1({});

                navigate('/dashboard/user')

            }
        } catch (error) {

        }
    }

    const loginPhotographer = async (e) => {
        e.preventDefault()
        const { email, password } = data2
        try {
            const { data2 } = await axios.post('/login', {
                email,
                password
            })
            if (data2.error) {
                toast.error(data2.error)
            } else {
                setData2({});

                navigate('/dashboard/photographer')

            }
        } catch (error) {

        }
    }

    return (
        <div>
            <div>
                <form onSubmit={loginUser}>
                    <label>Email</label>
                    <input type="email" placeholder='enter email...' value={data1.email} onChange={(e) => setData1({ ...data1, email: e.target.value })} />
                    <label>Password</label>
                    <input type="password" placeholder='enter password...' value={data1.password} onChange={(e) => setData1({ ...data1, password: e.target.value })} />
                    <button type='submit'>Login</button>
                </form>
            </div>
            <div>
                <form onSubmit={loginPhotographer}>
                    <label>Email</label>
                    <input type="email" placeholder='enter email...' value={data2.email} onChange={(e) => setData2({ ...data2, email: e.target.value })} />
                    <label>Password</label>
                    <input type="password" placeholder='enter password...' value={data2.password} onChange={(e) => setData2({ ...data2, password: e.target.value })} />
                    <button type='submit'>Login</button>
                </form>
            </div>
        </div>
    )
}
