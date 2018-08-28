import React from 'react'
import { Form, TextArea } from 'semantic-ui-react'

class NewMessage extends React.Component {


    render() {
        return (
            <Form>
                <TextArea placeholder="What's on your mind?" />
            </Form>
    )}
}

function mapStateToProps({auth}) {
    return {
        "token": auth.token
    }
}
function mapDispatchToProps = (dispatch) => {
    return {
        
    }
}



export default connect(mapStateToProps , undefined)(NewMessage) 