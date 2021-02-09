import React, { Component } from "react";
class SelectGroupMembers extends React.Component {
    render() {
        if (this.props.currentStep !== 2) {
            return null
        }

        return (
            <div className="form-group">
                <label htmlFor="email">phone</label>
                <input
                    className="form-control"
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Enter email"
                    value={this.props.email} 
                    onChange={this.props.handleChange} 
                />
            </div>
        )
    }
}

export default SelectGroupMembers