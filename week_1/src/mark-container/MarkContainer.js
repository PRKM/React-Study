import React from 'react';

import marked from 'marked';

export default class MarkContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            markdown: ''
        };

        this.inputContainerStyle = {
            width: '40vw',
            marginLeft: '15px',
            marginRight: '5px',
            padding: '15px'
        };

        this.resultContainerStyle = {
            width: '60vw',
            minHeight: '438px',
            background: '#333',
            marginLeft: '5px',
            marginRight: '15px',
            paddingLeft: '10px',
            paddingRight: '10px',
            textAlign: 'left',
            color: '#fff'
        };

        this.onMarkUpdate = this.onMarkUpdate.bind(this);
    }

    onMarkUpdate(event) {
        this.setState({markdown: marked(event.target.value)});
    }

    render() {
        return (
            <div style={{width: '100%', display: 'flex'}}>
                <div>
                    <textarea style={this.inputContainerStyle} rows="30" onChange={this.onMarkUpdate} />
                </div>
                <div style={this.resultContainerStyle} dangerouslySetInnerHTML={{__html: this.state.markdown}}>
                </div>
            </div>
        )
    }
}