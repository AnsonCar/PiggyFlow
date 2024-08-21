type TTPSidebar = {
    text?: string
    items: TTPSidebarItem[]
}

type TTPSidebarItem = {
    text: string
    link: string
    items?: TTTPSidebar[]
}
type TTableFormData = {
    [key: string]: {
        uuid: string, user_uuid: string, datetime: string, label: string, price: number
    }[]
}

type TTabeData = {
    date: string,
    total: number,
    item: {
        datetime: string, label: string, price: number, uuid: string
    }[]
}