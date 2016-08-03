import { Modal, Button } from 'react-bootstrap';
import React from 'react';
import { actionCreators } from 'reducers/fretboard';

class RestartModal extends React.Component {

    confirm(){

        this.context.store.dispatch(actionCreators.changeTestDuration(this.props.pendingDurationChange,true));

    }

    cancel(){

        this.context.store.dispatch(actionCreators.cancelCurrentModal());

    }

    render(){

        return (<div className="static-modal">
            <Modal.Dialog>

                <Modal.Body>
                    This requires clearing your history. Are you sure you want to do that?
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={ ()=>this.cancel() }>Oops, no</Button>
                    <Button onClick={ ()=>this.confirm() } bsStyle="primary">Yup</Button>
                </Modal.Footer>

            </Modal.Dialog>
        </div>);

    }

}

// grant access to the store via context
RestartModal.contextTypes = {
    store: React.PropTypes.object.isRequired
};



export default RestartModal;