import { Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import Link from "next/link";

const items1 = ['hola','users', 'posts', 'comments'].map((key) => ({
    key,
    label: <Link href={`/${key}`}>{ key }</Link>,
}));

const LayoutHeader = () => {
    return (
        <Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" items={items1} />
        </Header>
    )
}
export default LayoutHeader;