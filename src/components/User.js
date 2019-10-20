import React from 'react';

class User extends React.Component {
    render() {
        const { params } = this.props.match;

        console.log(this.props);
        return (
            <div>
                <h1>User</h1>
                <p>{ params.id }</p>
            </div>
        );
    }
}

export default User;