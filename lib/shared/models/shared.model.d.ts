export interface GitHubUserSearchResponse {
    total_count: number;
    incomplete_results: boolean;
    items: GitHubUser[];
}
export interface GitHubUser {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    received_events_url: string;
    type: string;
    score: number;
}
export interface GitHubRepoSearchResponse {
    total_count: number;
    incomplete_results: boolean;
    items: GitHubRepo[];
}
export interface GitHubRepo {
    id: number;
    node_id: string;
    name: string;
    full_name: string;
    private: boolean;
    owner: GitHubUser;
    clone_url: string;
    forks_count: number;
    open_issues_count: number;
}
export interface UsState {
    id?: number;
    stateName: string;
    flag_img?: string;
    region?: string;
    cities?: UsCity[];
}
export interface UsCity {
    id: number;
    cityName: string;
    inStateName?: string;
}
export interface Car {
    id: number;
    brand: string;
    model: string;
    year?: string;
    description?: string;
}
export interface CarGroup {
    brand: string;
    items?: Car[];
}
export declare class Card {
    title: string;
    text: string;
    hide: boolean;
    constructor(title: string, text: string);
    toggle(): void;
}
export declare class NavBarModel {
    linkText: string;
    parentLink: string;
    menu: boolean;
    submenu: {
        childtext: string;
        link: string;
    }[];
}
//# sourceMappingURL=shared.model.d.ts.map