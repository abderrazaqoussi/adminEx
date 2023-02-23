// Default Imports
import * as React from 'react'
import * as ReactDom from 'react-dom'
import TrainersManager from './components/TrainersManager'
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base'
import { IRootProps } from './interfaces/IRoot'
import { getSP } from './utils/pnpConfig'

export default class TrainersManagerWebPart extends BaseClientSideWebPart<IRootProps> {
  public render(): void {
    const element: React.ReactElement<IRootProps> = React.createElement(
      TrainersManager,
      {
        spContext: this.context,
      }
    )

    ReactDom.render(element, this.domElement)
  }

  //
  protected async onInit(): Promise<void> {
    await super.onInit()
    getSP(this.context)
  }

  //
  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement)
  }
}
