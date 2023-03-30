import React, { FormEvent, memo } from 'react'

interface IButtonPropList {
    label: string
    type: 'button' | 'submit' | 'reset'
    click: (e: FormEvent<HTMLInputElement>) => void
    disabled: boolean
}

const Button = ({ label, click, type, disabled }: IButtonPropList) => {
    return (
        <input
            type={type}
            value={label}
            onClick={click}
            disabled={disabled}
        />
    )
}

const MemoButton = memo(Button)

export { MemoButton as Button }