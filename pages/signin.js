import React from 'react'
import logo from '../public/logo.png'
import Head from 'next/head'
import Image from 'next/image'
import { Button } from 'react-bootstrap'
import socialicon from '../public/social.png'


export default function signin() {
    return (
        <div>
            <Head>
           <title>Heart Token</title>
           <meta name='keywords' content='heart, token, change the world' />
       </Head>

       <Image src={logo} />

       <text>SignIn</text>
        
            
       <form>
          <div> 
        <input placeholder="Name" id="name" type="text" autoComplete="name" required />
        
        <input placeholder="Password" id="name" type="text" autoComplete="name" required />
       </div>
    
       </form>

       <div>
        <Button>Sign In</Button>
       </div>

       <div>
        <text>or</text>
       </div>


       <div>
        <text>Connect with</text>
        </div>

        <div>
            <Image src ={socialicon} />
        </div>
            
        </div>
    )
}


