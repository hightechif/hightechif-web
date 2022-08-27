import React, { Fragment } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import globalVariables from '../../styles/globalVariables'

interface Props {
    children: React.ReactNode
}

const Layout: React.FC<Props> = (props) => {
    return <Fragment>
        <Header color={globalVariables.color.teal} colorSecondary={globalVariables.color.gray}/>
            <div>
                {props.children}
            </div>
        <Footer />
    </Fragment>
}

export default Layout