import React, { Fragment } from 'react'
import Styles from './header.module.css';
import Link from "next/link"
import {useRouter} from 'next/router'

const  Header =()=> {

    const router = useRouter()


    return (
        <Fragment>
            <div className={Styles.header} >
                <Link href='/' passHref>
                    <span className={router.pathname === '/' ? Styles.active : Styles.link} >Home</span> 
                </Link>
                <Link href='/blog' passHref>
                    <span className={router.pathname === '/blog' ? Styles.active : Styles.link}>Blog</span> 
                </Link>
                <Link href='/profile' passHref>
                    <span className={router.pathname === '/profile' ? Styles.active : Styles.link}>Profile</span>
                </Link>
                <Link href='/regions' passHref>
                    <span className={router.pathname === '/regions' ? Styles.active : Styles.link}>Region</span>
                </Link>
                <Link href='/items' passHref>
                    <span className={router.pathname === '/blog/items' ? Styles.active : Styles.link}>Items</span> 
                </Link>
                <Link href='/categories' passHref>
                    <span className={router.pathname === '/blog/categories' ? Styles.active : Styles.link}>Categories</span> 
                </Link>
                <Link href='/departements' passHref>
                    <span className={router.pathname === '/departements' ? Styles.active : Styles.link}>Departements</span> 
                </Link>
            </div>
        </Fragment>
    )
}

export default Header
