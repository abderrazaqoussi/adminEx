import * as React from 'react'
import styles from './../styles/TrainersManager.module.scss'
import { IRootProps } from '../interfaces/IRoot'
import { getSP } from './../utils/pnpConfig'
import '@pnp/sp/webs'
import '@pnp/sp/lists'

export default class TrainersManager extends React.Component<IRootProps> {
  async componentDidMount(): Promise<void> {
    try {
      const list = getSP().web.lists.getByTitle('ToDoList')
      console.log(list)
      // we can use this 'list' variable to run more queries on the list:
      const r = await list.select('Id')()

      // log the list Id to console
      console.log(r.Id)
    } catch (e) {
      console.error(e)
    }
  }
  public render(): React.ReactElement<IRootProps> {
    // const { spContext } = this.props

    return <div className={styles.trainersManager}>Hello World</div>
  }
}
