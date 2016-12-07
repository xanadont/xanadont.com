import * as React from "react";
import { TocEntry } from "./TocEntry";
import { Content, ContentStore } from './Content';

interface Props {
    selectedEntry: string;
    entryActivated?: (entry:Content) => void;
}

interface State {
    selectedEntry: string;
}

export class Toc extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { selectedEntry:props.selectedEntry };
    }

    render() {
        let entries = ContentStore.entries().map(x => {
            let isActive = x.id == this.state.selectedEntry;
            return <TocEntry key={x.id} id={x.id} label={x.title} active={isActive} activated={id => this.activate(id) } />
        });

        return (
        <div id="toc">
            {entries}
        </div>
        );
    }

    activate(id: string) {
        this.setState({ selectedEntry:id });
        if (this.props.entryActivated)
            this.props.entryActivated(ContentStore.entry(id));
    }
}