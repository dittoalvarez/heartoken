import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styles from '../styles/Layout.module.css'
import { Button } from 'react-bootstrap'
import { Carousel } from 'react-bootstrap'
import profilePic1 from '../public/image1.png'
import profilePic2 from '../public/image2.png'
import logo from '../public/logo.png'

export default function login() {
  return (
    <div >
       <Head>
           <title>Heart Token</title>
           <meta name='keywords' content='heart, token, change the world' />
       </Head>
      <div>
       <Image src={logo} />
      </div>
       <Carousel>
        <Carousel.Item>
          <Image
            className="d-block w-100 "
            src={profilePic1} />       
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src={profilePic2}
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src={profilePic2}
          />


        </Carousel.Item>
      </Carousel>
      <div>
      <h3> Never miss a work opportunity.</h3>
      <h4>Easily find work, chat and collaborate on the go.</h4>
        </div>

        <div>
      <Button color="secondary" size="lg">Sign up</Button>
        </div>
        <div>
      <Button color="secondary" size="lg">Login</Button>
        </div>

      <div>
        <text>New to Heart Token? Sign up</text>
        </div> 

    </div>
  )
}
