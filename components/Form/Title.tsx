import React, { memo } from 'react'

interface ITitle {
  label: string
  fontSize: number
}

const Title = ({ label, fontSize }: ITitle) => {
  const style = {
    fontSize: `${fontSize}px`,
    padding: `${fontSize / 2}px 0`
  }

  return (
    <div style={style}>{label}</div>
  )
}

const MemoTitle = memo(Title)

export { MemoTitle as Title }