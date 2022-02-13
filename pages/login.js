import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import Head from 'next/head'
import Image from 'next/image';
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "/styles/login.module.css"
import gimg from "../components/SignInWithGoogle.png"

export default function LoginPage() {
    return(
        <div className="bg-hp_blue">
            <Header />
            <Head>
                <title>Login</title>
            </Head>
            <main className="flex flex-col items-center justify-center w-full flex-1 p-20">
                <div className="bg-hp_blue text-text_yellow relative flex w-2/3">
                    <div className="w-3/5 p-6">
                        <h1 className="text-4xl mb-3 ml-4">Join Us</h1>

                        <div className="flex-col ml-7">
                            <label className="flex" for="name"><b>Name</b></label>
                            <input className ="mb-3" type="text" placeholder="" name="name" required></input>
                        </div>
                        <div className="flex-col ml-7">
                            <label className="flex" for="uname"><b>Username</b></label>
                            <input className ="mb-3" type="text" placeholder="" name="uname" required></input>
                        </div>
                        <div className="flex-col ml-7">
                            <label className="flex" for="psw"><b>Password</b></label>
                            <input className ="mb-3" type="password" placeholder="" name="psw" required></input>
                        </div>
                        <div className="flex-col ml-7">
                            <label className="flex" for="dob"><b>Date of birth</b></label>
                            <input className ="mb-3" type="date" placeholder="" name="dob" required></input>
                        </div>

                        <button className="bg-text_yellow text-hp_blue px-2 py-1 rounded-md ml-20">Sign Up</button>   
                    </div>
<h2 className={styles.verticalline}></h2>
                    <div className="w-2/5 p-6">
                        <h2 className="text-3xl mb-3 ml-4">Already have an account?</h2>

                        <div className="flex-col ml-7">
                            <label className="flex" for="uname"><b>Username</b></label>
                            <input className ="mb-3" type="text" placeholder="" name="uname" required></input>
                        </div>
                        <div className="flex-col ml-7">
                            <label className="flex" for="psw"><b>Password</b></label>
                            <input className ="" type="password" placeholder="" name="psw" required></input>
                        </div>
                        <h4 className="text-xs mt-1 ml-20">Forgot your password?</h4>

                        <button className="bg-text_yellow text-hp_blue px-2 py-1 rounded-md ml-20 mt-1">Login</button>
                        <div className={styles.gimg}>
                        <Image src={gimg} class="px-2 py-1 rounded-md ml-20 mt-1"></Image>
                        </div>
                    </div>
                </div>
            </main>
        <Footer />
        </div>
    )

}
