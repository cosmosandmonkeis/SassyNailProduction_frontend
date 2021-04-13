import React, {useContext, useEffect, useState} from 'react'
import {Menu} from 'semantic-ui-react'
import {Link} from "react-router-dom";
import {AuthContext} from "../context/auth";

function DesktopMenuBar() {

    const [isAdmin, setAdmin] = useState(false)
    const {user, logout} = useContext(AuthContext)

    const pathname = window.location.pathname
    const path = pathname === '/' ? 'home' : pathname.substr(1)

    const [activeItem, setActiveItem] = useState(path)

    const handleItemClick = (e, {name}) => setActiveItem(name)

    useEffect(() => {
        if(user)
            setAdmin(user.admin)
    }, [user])

    console.log(user)

    return (user) ? (
        (
            <Menu size='massive' color='teal'>
                {
                    isAdmin === true ?
                        <div>
                            <Menu.Item
                                name='DASHBOARD'
                                active={activeItem === 'DASHBOARD'}
                                onClick={handleItemClick}
                                as={Link}
                                to='/profile'
                            />
                            <Menu.Item
                                name='VIEW_APPOINTMENTS'
                                active={activeItem === 'VIEW_APPOINTMENTS'}
                                onClick={handleItemClick}
                                as={Link}
                                to='/view_all'
                            />
                        </div>
                        :
                        <Menu.Item
                            name={user.username}
                            active={activeItem === 'user.username'}
                            onClick={handleItemClick}
                            as={Link}
                            to='/'
                        />
                }
                <Menu.Item
                    name='services'
                    active={activeItem === 'services'}
                    onClick={handleItemClick}
                    as={Link}
                    to='/services'
                />
                <Menu.Item
                    name='bookings'
                    active={activeItem === 'bookings'}
                    onClick={handleItemClick}
                    as={Link}
                    to='/bookings'
                />
                <Menu.Menu position='right'>
                    <Menu.Item
                        name='logout'
                        active={activeItem === 'logout'}
                        onClick={logout}
                    />
                </Menu.Menu>
            </Menu>
        )
    ) : (
        <Menu size='massive' color='teal'>
            <Menu.Item
                name='home'
                active={activeItem === 'home'}
                onClick={handleItemClick}
                as={Link}
                to='/'
            />
            <Menu.Item
                name='services'
                active={activeItem === 'services'}
                onClick={handleItemClick}
                as={Link}
                to='/services'
            />
            <Menu.Item
                name='bookings'
                active={activeItem === 'bookings'}
                onClick={handleItemClick}
                as={Link}
                to='/bookings'
            />
            <Menu.Menu position='right'>
                <Menu.Item
                    name='login'
                    active={activeItem === 'login'}
                    onClick={handleItemClick}
                    as={Link}
                    to='/login'
                />
                <Menu.Item
                    name='register'
                    active={activeItem === 'register'}
                    onClick={handleItemClick}
                    as={Link}
                    to='/register'
                />
            </Menu.Menu>
        </Menu>
    )

}

export default DesktopMenuBar
