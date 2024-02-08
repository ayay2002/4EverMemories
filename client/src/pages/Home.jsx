import React from 'react'
import { camera } from '../assets/index.js';
import { cove } from '../assets/index.js';
import { family } from '../assets/index.js';
import { wall } from '../assets/index.js';
import { shore } from '../assets/index.js';
import { desert } from '../assets/index.js';

export default function Home() {
  return (
    <div>
      <header>
        <h3><b>4EverMemories</b></h3>
      </header>
      <main>
        <img src={camera}></img>
        <div>
          <h4>Capturing Life's Moments</h4>
          <h2>Professional photography for weddings, families and events</h2>
          <button type='button'>Book a Session</button>
        </div>
        <div>
          <h3>Capturing Life: 4EverMemories Photography Gallery</h3>
          <div>

          </div>
        </div>
        <div>
          <h2>Keep Up to Date!</h2>
          <h4>Sign up to hear about newly released prints and upcoming events!</h4>
          <form>
            <input type='email' placeholder='Email Address'></input>
            <button type='button'>Sign Up</button>
          </form>
        </div>
      </main>
      <footer>
        <h5>Copyright © 2024 4EverMemories - All Rights Reserved.</h5>
      </footer>
    </div>
  )
}
