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
        <div>
       <Image src={logo} />
        </div>
       <text>SignIn</text>
        
            
       <form>
          <div> 
        <input placeholder="Name" id="name" type="text" autoComplete="name" required />
        
        <input placeholder="Password" id="name" type="text" autoComplete="name" required />
       </div>
    
       </form>

       <div>
           <text>Remember me. </text> 
           <text>Learn more</text>
       </div>
            <div>
                <text>Forgot password?</text>
            </div>
       <div>
        <Button>Continue</Button>
       </div>

       <div>
        <text>or</text>
       </div>


       <div>
        <text>Connect with</text>
        </div>

        <div>
            <Image src = {socialicon} />
        </div>


        <div>   
            <text>Don't have a Heart Token account?</text>
        </div>
        

        <div>
            <Button>Sign up</Button>
        </div>


            
        </div>
    )
}


