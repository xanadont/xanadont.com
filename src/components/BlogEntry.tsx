import * as React from "react";
import * as ReactDom from "react-dom";
import * as Marked from "marked";

declare var hljs: any;

interface Props {
    id: string;
    content: string;
}

export class BlogEntry extends React.Component<Props, void> {
    refs: {
        main: any;
    }

    render() {
        let html = this.props.content ? Marked(this.props.content, null) : '';
        return (
        <div ref="main" id={this.props.id} dangerouslySetInnerHTML={{ __html: html }}></div>
        );
    }

    componentDidUpdate() {
        let main = ReactDom.findDOMNode(this.refs.main);
        let codeBlocks = document.querySelectorAll('code');
        for (let i = 0; i < codeBlocks.length; ++i) {
            hljs.highlightBlock(codeBlocks[i]);
        }
    }
}