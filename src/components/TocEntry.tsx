import * as React from 'react';

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
            <div><a href={this.props.id} className={className} onClick={e => this.entryClicked(e)}>{this.props.label}</a></div>
        );
    }

    entryClicked(event: React.MouseEvent<HTMLAnchorElement>) {
        //this.setState({count:++this.state.count});
        event.preventDefault();
        this.props.activated(this.props.id);
        console.log('selected');
    }
}