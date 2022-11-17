export interface IStore {
    currentTab: HTMLElement | null;
    currentRole?: string;
    tabs: HTMLElement[] | null;
}

export class StoreTabs implements IStore {
    currentTab: HTMLElement | null = null;
    private _currentRole: string = "";
    tabs: HTMLElement[] | null = null;
    subscribers: Function[] = [];

    get currentRole() {
        return this._currentRole;
    }
    set currentRole(x: string) {
        this._currentRole = x;
        this.subscribers.forEach(e => e(this._currentRole));
    }
    subscribe(cb: (data: string) => void) {
        this.subscribers.push(cb);
    }
    unsubscribe(cb: (data: string) => void) {
        this.subscribers = this.subscribers.filter(e => e !== cb);
    }
}

export const storeTabs = new StoreTabs();
export function tabs() {
    const tabsContainerElement = document.querySelector<HTMLElement>(".tabs");
    if (!tabsContainerElement) return;
    const tabs = Array.from(tabsContainerElement.children).map(e => e as HTMLElement);
    storeTabs.tabs = tabs;
    detectActiveTab(storeTabs);
    tabsContainerElement &&
        tabsContainerElement.addEventListener("click", (e: Event) => {
            const target = (e.target as HTMLElement).closest<HTMLButtonElement>(".tab");
            console.log("🚀 ~ target", target);
            if (!target) return;
            storeTabs.currentTab && storeTabs.currentTab?.removeAttribute("active");
            storeTabs.currentTab = target;
            storeTabs.currentRole = target?.dataset.index || "";
            storeTabs.currentTab && storeTabs.currentTab?.setAttribute("active", "active");
        });
}
function detectActiveTab(store: IStore): void {
    const active = store.tabs?.filter(e => e.getAttribute("active"))[0];
    if (!active) return;
    store.currentRole = active?.dataset.index;
    store.currentTab = active;
    console.log(store);
}
