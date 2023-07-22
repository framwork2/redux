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
            ${ type === "primary" && "text-white bg-blue-500" }
                        ${ type === "danger" && "text-white bg-red-500" }

            
            
            ` }>
                { icon && icon }
                { children }

            </button>
        </div>
    )
}

export default Button