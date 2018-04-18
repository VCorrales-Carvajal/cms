import { BehaviorSubject } from "rxjs/BehaviorSubject";

export class MenuService {

    private activePage = new BehaviorSubject<string>("showPages");
    public page = this.activePage.asObservable();
    public setPage(pageLink: string) {
        this.activePage.next(pageLink)
    }

    private menu: Array<{ text: string, link: string }> = [
        { text: "Pages", link: "showPages" },
        { text: "Media", link: "showMedia" },
        { text: "Settings", link: "showSettings" }
    ];

    public getMenu(): Array<{ text: string, link: string }> {
        return this.menu;
    }

}