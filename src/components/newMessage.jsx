import React from 'react'
import { Form, TextArea } from 'semantic-ui-react'

class NewMessage extends React.Component {

    state = {
        message: ""
    }

    handleSubmitMessage = (event) => {
        this.setState({message: event.target.value})
    }




    render() {
        return (
            <Form
                style={{marginBottom: "3em", marginTop: "14em"}}
            >
                <TextArea 
                    placeholder="What's on your mind?"
                    onChange={this.handleSubmitMessage}
                    value={this.state.message}
                />

            </Form>
    )}
}

function mapStateToProps({auth}) {
    return {
        "token": auth.token
    }
}
// function mapDispatchToProps = (dispatch) => {
//     return {
        
//     }
// }



export default (NewMessage) 