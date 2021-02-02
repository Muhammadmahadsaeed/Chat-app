import React, { Component } from 'react'

import { Avatar } from 'antd'

export class UserWindowHeader extends Component {
    constructor(){
        super()
        this.state = {
            user: []
        }
    }
   
    componentDidMount() {
        this.getUser()
        
    }
    async getUser(){
        let user = await JSON.parse(localStorage.getItem('user'))
        this.setState({user: user})
    }
    render() {
       
        return (
            <div className="user-window-wrapper">

                <div className="user-window-header">
                    <div>
                        <Avatar size="large" src="https://cdn.pixabay.com/photo/2014/05/03/00/50/flower-child-336658_960_720.jpg" />
                    </div>

                    <div style={{marginLeft:10}}>
                        <p>Admin</p>

                    </div>

                </div>
            </div>

        )
    }
}

export default UserWindowHeader
