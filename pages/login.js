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
            <main className={styles.main_container}>
                <div className={styles.container}>
                    <div className={styles.sign_up}>
                        <h1 className={styles.joinus}>Join Us</h1>
                        <div className={styles.signup_form}>
                            <label className="flex" htmlFor="name"><b>Name</b></label>
                            <input className ="mb-3" type="text" placeholder="" name="name" required></input>
                        </div>
                        <div className={styles.signup_form}>
                            <label className="flex" htmlFor="uname"><b>Username</b></label>
                            <input className ="mb-3" type="text" placeholder="" name="uname" required></input>
                        </div>
                        <div className={styles.signup_form}>
                            <label className="flex" htmlFor="psw"><b>Password</b></label>
                            <input className ="mb-3" type="password" placeholder="" name="psw" required></input>
                        </div>
                        <div className={styles.signup_form}>
                            <label className="flex" htmlFor="dob"><b>Date of birth</b></label>
                            <input className ="mb-3" type="date" placeholder="" name="dob" required></input>
                        </div>
                        <button className={styles.button}>Sign Up</button>   
                    </div>
                    <h2 className={styles.line}></h2>
                    <div className={styles.login}>
                        <h2 className={styles.already}>Already have an account?</h2>

                        <div className={styles.signup_form}>
                            <label className="flex" htmlFor="uname"><b>Username</b></label>
                            <input className ="mb-3" type="text" placeholder="" name="uname" required></input>
                        </div>
                        <div className={styles.signup_form}>
                            <label className="flex" htmlFor="psw"><b>Password</b></label>
                            <input className ="" type="password" placeholder="" name="psw" required></input>
                        </div>
                        <h4 className={styles.forgot}>Forgot your password?</h4>

                        <button className={styles.button}>Login</button>
                        <div className={styles.gimagecont}>
                            <Image src={gimg} className={styles.gimage}></Image>
                        </div>
                    </div>
                </div>
            </main>
            
            <Footer />
        </div>
    )
}
