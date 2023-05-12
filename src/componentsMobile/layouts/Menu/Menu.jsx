import React from 'react'
import Style from './menu.module.css'

export const Menu = () => {
  return (
    <section className={Style.menu}>
      <h2 className={Style.title}>Nuestra Carta</h2>
      <table>
        <h3 className={Style.subTitle}>Café</h3>
        <tr className={Style.row}>
          <td className={Style.item}>Product              $0.000</td>
        </tr>
        <tr className={Style.row2}>
          <td className={Style.item}>Product              $0.000</td>
        </tr>
        <tr className={Style.row}>
          <td className={Style.item}>Product              $0.000</td>
        </tr>
        <tr className={Style.row2}>
          <td className={Style.item}>Product              $0.000</td>
        </tr>
        <tr className={Style.row}>
          <td className={Style.item}>Product              $0.000</td>
        </tr>
      </table>
    </section>
  )
}
