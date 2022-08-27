import React from 'react'

import styled from 'styled-components'
import { Container } from 'reactstrap'
import Link from 'next/link'

interface StyleProp {
    color: string
    colorSecondary: string
}

const StyledHeader = styled.header`
    width: 100%;
    height: 80px;
    line-height: 80px;

    .nav__wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .logo h1 {
        font-size: 2rem;
        margin-bottom: 0;
    }

    .logo h1 span {
        color: ${(props: StyleProp) => props.color};
    }

    .nav__menu {
        display: flex;
        align-items: center;
        column-gap: 2.8rem;
    }

    .nav__menu a {
        color: #808DAD;
        font-weight: 500;
        font-size: 1rem;
        text-decoration: none;
        transition: 0.3s;
        cursor: pointer;
    }

    .nav__menu a:hover {
        color: ${(props: StyleProp) => props.color};
    }

    .nav__menu a:first-child {
        color: ${(props: StyleProp) => props.color};
    }

    .nav__right p {
        color: ${(props: StyleProp) => props.color};
        margin-left: 20px;
        position: relative;
    }

    .nav__right i {
        color: ${(props: StyleProp) => props.colorSecondary};
    }

    .nav__right p::before {
        content: '';
        position: absolute;
        top: 25%;
        left: -20px;
        width: 1px;
        height: 14px;
        background: ${(props: StyleProp) => props.colorSecondary};
        color: ${(props: StyleProp) => props.colorSecondary};
    }

    .header__shrink {
        position: sticky;
        top: 0;
        left: 0;
        width: 100%;
        height: 80px;
        line-height: 80px;
        box-shadow: 5px 5px 15px -5px #01D29344 !important;
        z-index: 9999;
    }
`

type NavLink = {
    path: string; 
    display: string;
}

const NAV__LINK: NavLink[] = [
    {
        path: '/',
        display: 'Home'
    },
    {
        path: '#about',
        display: 'About'
    },
    {
        path: '#services',
        display: 'Services'
    },
    {
        path: '#portfolio',
        display: 'Portfolio'
    },
    {
        path: '#contact',
        display: 'Contact'
    },
]

interface Props {
    color: string
    colorSecondary: string
}

const Header: React.FC<Props> = (props) => {
    return <StyledHeader color={props.color} colorSecondary={props.colorSecondary}>
        <Container>
            <div className='nav__wrapper'>

                {/* ============ navigation logo ============= */}
                <div className='logo'>
                    <h1><span>H</span>igh<span>T</span>ech<span>IF</span></h1>
                </div>

                {/* ============ nav menu ============= */}
                <div className="navigation">
                    <div className="nav__menu">
                        {NAV__LINK.map((item, index) => (
                            <Link href={item.path} key={index}>
                                {item.display}
                            </Link>
                        ))}

                        <div className="nav__right">
                            <p className='d-flex align-items-center gap-2 mb-0'> 
                                {" "}<i className="ri-phone-line"></i> +62 812 2022 0697 {" "}
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </Container>
    </StyledHeader>
}

export default Header