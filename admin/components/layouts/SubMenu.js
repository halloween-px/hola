import { Menu } from "antd";
import Link from "next/link";



const items2 = ['services'].map((key) => ({
    key,
    label: <Link href={`/hola/${key}`}>{ key }</Link>,
}))

const LayoutsSubMenu = () => {
    return (
          <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
            }}
            items={items2}
          />
    )
}

export default LayoutsSubMenu;