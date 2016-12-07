
export interface Content {
    id: string;
    title: string;
}

export class ContentStore {
    static titles: Content[] = [
        { id:'20161123', title:'Xanadont here'},
        { id:'20161207', title:'Markdown' }
    ];

    private static map: any = {};

    public static initialize() {
        this.titles.forEach(x => this.map[x.id] = x);   
    }

    public static entries(): Content[] {
        return this.titles;
    }

    public static entry(id: string): Content {
        return this.map[id];
    }
}
ContentStore.initialize();