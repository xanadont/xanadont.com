export class Router {
    constructor(
        private listener: any,
        private handler: (listener: any, route: string) => void) {
    }

    hookLinks() {
        let links = document.querySelectorAll('a') as NodeListOf<HTMLAnchorElement>;
        for (let i = 0; i < links.length; ++i) {
            let link = links[i];
            let data: any = link;
            if (!data.hasListenerAttached) {
                link.addEventListener('click', (e: Event) => {
                    var path = (e.target as HTMLAnchorElement).pathname;
                    window.history.pushState({}, '', path);
                    this.handler(this.listener, path);
                });
                data.hasListenerAttached = true;
            }
        }
    }
}