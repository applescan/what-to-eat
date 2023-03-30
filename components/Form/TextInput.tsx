import React, { ChangeEvent, memo } from 'react'

interface ITextInput {
  type: string
  value: string
  multiline?: boolean
  change: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const TextInput = ({ type, multiline, change, value }: ITextInput) => {
  return (
    multiline ?
      <textarea onChange={change}>{value}</textarea> :
      <input
        type={type}
        onChange={change}
        value={value}
      />
  )
}

const MemoTextInput = memo(TextInput)

export { MemoTextInput as TextInput }