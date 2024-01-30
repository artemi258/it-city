interface IContentRoutes {
 title: string;
 href: string;
}

interface IServicesRoutes {
 title: string;
 href: string;
}

interface IAdminPanelRoutes {
 title: string;
 href: string;
}

const contentRoutes: IContentRoutes[] = [
 { title: 'О нас', href: '/' },
 { title: 'прайс на услуги', href: '/services' },
 { title: 'магазин', href: '/shop' },
];

const servicesRoutes: IServicesRoutes[] = [
 { title: 'Заправка картриджей', href: '/services' },
 { title: 'Ремонт принтеров', href: '/services/printers' },
 { title: 'Ремонт компьютеров и ноутбуков', href: '/services/repairs' },
];

const adminPanelRoutes: IAdminPanelRoutes[] = [
 { title: 'Общие товары', href: '/adminPanel' },
 { title: 'Канцелярия', href: '/adminPanel/stationery' },
];

export const routes = {
 content: contentRoutes,
 services: servicesRoutes,
 adminPanel: adminPanelRoutes,
};