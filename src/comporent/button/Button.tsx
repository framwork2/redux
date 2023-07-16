import React from 'react'

type ButtonProps = {
    type?: 'primary' | "danger" | "default",
    children?: React.ReactNode;
    icon?: React.ReactNode;
    onclick?: () => void
}

const Button = ( { type, children, icon, onclick }: ButtonProps ) =>
{
    return (
        <div>

            <button onClick={ onclick } className={ `border border-gray-300 py-2 px-4 justify:center
            ${ type === "primary" && "mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out" }
                        ${ type === "danger" && "text-white bg-red-500" }

            
            
            ` }>
                { children }

            </button>
        </div>
    )
}

export default Button