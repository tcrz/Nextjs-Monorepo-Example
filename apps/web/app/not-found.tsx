
import { NotFound } from '@repo/ui/components'
import { truncateText } from '@repo/ui/utils'
import React from 'react'

const page = () => {
    console.log(truncateText('textbjnjn', 5))
  return (
    <NotFound />
  )
}

export default page