type TTTPSidebar = {
    text? : string
    items : TTPSidebarItem[]
}

type TTPSidebarItem = {
    text: string
    link: string
    items?: TTTPSidebar[]
}