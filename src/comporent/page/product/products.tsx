import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'HOME', href: '#', current: true },
    { name: 'Product', href: '#', current: false },
    { name: 'Contect', href: '#', current: false },
    { name: 'About', href: '#', current: false },
]

function classNames ( ...classes: any )
{
    return classes.filter( Boolean ).join( ' ' )
}

export default function Example1 ()
{
    return (
        <Disclosure as="nav" className="bg-gray-800">
            { ( { open } ) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/ }
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    { open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    ) }
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <img
                                        className="h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                        alt="Your Company"
                                    />
                                </div>

                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        { navigation.map( ( item ) => (
                                            <a
                                                key={ item.name }
                                                href={ item.href }
                                                className={ classNames(
                                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'rounded-md px-3 py-2 text-sm font-medium'
                                                ) }
                                                aria-current={ item.current ? 'page' : undefined }
                                            >
                                                { item.name }
                                            </a>
                                        ) ) }
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-4 sm:pr-0">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path d="M1 1.75A.75.75 0 011.75 1h1.628a1.75 1.75 0 011.734 1.51L5.18 3a65.25 65.25 0 0113.36 1.412.75.75 0 01.58.875 48.645 48.645 0 01-1.618 6.2.75.75 0 01-.712.513H6a2.503 2.503 0 00-2.292 1.5H17.25a.75.75 0 010 1.5H2.76a.75.75 0 01-.748-.807 4.002 4.002 0 012.716-3.486L3.626 2.716a.25.25 0 00-.248-.216H1.75A.75.75 0 011 1.75zM6 17.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                </svg>

                                <button
                                    type="button"
                                    className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                >

                                    <span className="sr-only">View notifications</span>
                                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                                </button>


                                {/* Profile dropdown */ }
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span className="sr-only">Open user menu</span>
                                            <img
                                                className="h-8 w-8 rounded-full"
                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt=""
                                            />
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={ Fragment }
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <Menu.Item>
                                                { ( { active } ) => (
                                                    <a
                                                        href="#"
                                                        className={ classNames( active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700' ) }
                                                    >
                                                        Your Profile
                                                    </a>
                                                ) }
                                            </Menu.Item>
                                            <Menu.Item>
                                                { ( { active } ) => (
                                                    <a
                                                        href="#"
                                                        className={ classNames( active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700' ) }
                                                    >
                                                        Settings
                                                    </a>
                                                ) }
                                            </Menu.Item>
                                            <Menu.Item>
                                                { ( { active } ) => (
                                                    <a
                                                        href="#"
                                                        className={ classNames( active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700' ) }
                                                    >
                                                        Sign out
                                                    </a>
                                                ) }
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            { navigation.map( ( item ) => (
                                <Disclosure.Button
                                    key={ item.name }
                                    as="a"
                                    href={ item.href }
                                    className={ classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    ) }
                                    aria-current={ item.current ? 'page' : undefined }
                                >
                                    { item.name }
                                </Disclosure.Button>
                            ) ) }
                        </div>
                    </Disclosure.Panel>
                </>
            ) }
        </Disclosure>
    )
}