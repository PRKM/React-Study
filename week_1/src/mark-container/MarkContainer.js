import React from 'react';

import marked from 'marked';

export default class MarkContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            markdown: ''
        };

        this.onMarkUpdate = this.onMarkUpdate.bind(this);
    }

    onMarkUpdate(event) {
        this.setState({markdown: marked(event.target.value)});
    }

    render() {
        return (
            <div>
                <textarea cols="50" rows="20" onChange={this.onMarkUpdate} />
                <div dangerouslySetInnerHTML={{__html: this.state.markdown}}>
                </div>
            </div>
        )
    }
}