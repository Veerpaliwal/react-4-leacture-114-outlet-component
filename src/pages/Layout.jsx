import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <header >
         header
      </header>
      <main className="row">
        <aside className="col-4">aside</aside>
        <section className="col-8">
          <Outlet />
        </section>
      </main>
      <footer>
        footer
      </footer>
    
    </>
  )
}
