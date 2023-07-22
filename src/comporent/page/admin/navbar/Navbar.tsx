import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
type Props = {}

const Navbar = ( props: Props ) =>
{
    return (
        <div>    <Sidebar aria-label="Default sidebar example">
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Sidebar.Item
                        href="#"
                        icon={ HiChartPie }
                    >
                        <p>
                            Dashboard
                        </p>
                    </Sidebar.Item>

                    <Sidebar.Item
                        href="#"
                        icon={ HiUser }
                    >
                        <p>
                            Users
                        </p>
                    </Sidebar.Item>
                    <Sidebar.Item
                        href="#"
                        icon={ HiShoppingBag }
                    >
                        <p>
                            Products
                        </p>
                    </Sidebar.Item>
                    <Sidebar.Item
                        href="#"
                        icon={ HiArrowSmRight }
                    >
                        <p>
                            Sign In
                        </p>
                    </Sidebar.Item>
                    <Sidebar.Item
                        href="#"
                        icon={ HiTable }
                    >
                        <p>
                            Sign Up
                        </p>
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar></div>
    )
}

export default Navbar