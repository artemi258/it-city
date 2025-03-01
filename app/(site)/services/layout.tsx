import { ServicesPage } from '@pages';

export default async function ServicesLayout({
 children,
}: {
 children: React.ReactNode;
}): Promise<JSX.Element> {
 return <ServicesPage>{children}</ServicesPage>;
}
