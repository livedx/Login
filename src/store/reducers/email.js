import React from 'react'
import PropTypes from 'prop-types'
export class Email extends React.Component {
    render() {
        const { email, } = this.props
        return (
            <div>
                <p>
                    Твой майл {email}
                </p>
            </div>
        )
    }
} Email.propTypes = {
    email: PropTypes.email.isRequired,
}