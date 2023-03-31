export interface Task {
    id?: number;
    title: string;
    status: string;
    duedate: string;
    location: string;
    items: Array<string>;
    avatar: string;
    handler: string;
}

