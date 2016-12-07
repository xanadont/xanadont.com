import * as React from "react";
//import { Promise } from "core-js";
//import { Fetch } from "whatwg-fetch";

interface Props {
    id: string;
    label: string;
    activated?: (id: string) => void;
    active: boolean;
}

interface State {
    count: number;
}

export class TocEntry extends React.Component<Props, State> {
    constructor(state: State) {
        super(state);
        this.state = { count:0 };
    }

    render() {
        let className = this.props.active ? 'active' : null; 
        return (
        <div id={this.props.id} className={className} onClick={e => this.entryClicked(e)}><h3>{this.props.label}</h3></div>
        );
    }

    entryClicked(event: React.MouseEvent<HTMLDivElement>) {
        //this.setState({count:++this.state.count});
        this.props.activated(this.props.id);
        console.log('selected');
    }
}