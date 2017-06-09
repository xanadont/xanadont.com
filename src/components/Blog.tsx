import * as React from 'react';
import { Toc } from './Toc';
import { BlogEntry } from './BlogEntry';
import { Content } from './Content';
import { Router } from '../Router';

interface State {
    entryId: string;
    entry: string;
}

export class Blog extends React.Component<{}, State> {
    constructor() {
        super();
        this.state = { entryId:'20161123', entry:null };
        this.fetchEntry({ id:this.state.entryId, title:'' });

        window.addEventListener('hashchange', e => {
            console.log(e);
        });

        //window.history.pushState({}, "Title", "/20161123");   
    }

    render() {
        let defaultEntry = '1';
        return (
        <div id="body">
            <Toc selectedEntry={this.state.entryId} entryActivated={x => this.activateEntry(x)} />
            <div id="content">
                <BlogEntry id={defaultEntry} content={this.state.entry} />
            </div>
        </div>
        );
    }

    fetchEntry(entry: Content) {
        console.log('Must fetch: ' + entry.id);

        let url = './entries/' + entry.id + '.md';

        console.log(url);

        fetch(url).then(r => {
            if (r.ok) {
                r.text().then(body => this.setState({ entryId:entry.id, entry:body }));
            } else {
                console.log('Unable to retrieve blog post: ' + r.status);
            }
        })
        .catch(e => console.log(e));
    }

    activateEntry(entry: Content) {
        this.fetchEntry(entry);
    }

    componentDidMount() {
        new Router(this, this.handleRoute).hookLinks();
    }

    private handleRoute(me: any, route: string) {
        // This implementation is presently quite limited.
        // Only the links that are present in the DOM at startup
        // (the TOC entries) are hooked. Any dynamically loaded
        // content - the body of the blog articles - will not
        // yet be overridden.
        (me as Blog).activateEntry({ id:route.substr(1), title:'' });
    }
}