import React from 'react'
import Container from '../../layouts/Container'
import Applist from './AppList'
import AppHeading from './AppHeading'


const Apps = () => {
  return (
    <section className="apps">
        <Container className="py-[80px]">
          <AppHeading />
           <Applist />
        </Container>
    </section>
  )
}

export default Apps;