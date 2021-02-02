import React, { Component } from 'react'
import axios from 'axios'
export class SearchBar extends Component {

    search(e) {
        let user = JSON.parse(localStorage.getItem('user'))
        axios.post(`http://192.168.0.96:401/bwccrm/searchUser`, { user_id: user.data.user_id, loginuser_name: user.data.user_name, input: e.target.value })
            .then(res => {

                console.log(res)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }
    render() {
        return (
            <div className="search-bar">
                <div>
                    <div className="mg-icon"><img src={require('./../../../assets/images/icons/magnifying-glass.png')} /></div>
                    <div className="search-input"><input type="text" placeholder="Search here" onChange={(e) => this.search(e)} /></div>
                </div>
            </div>
        )
    }
}

export default SearchBar
