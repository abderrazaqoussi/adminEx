/* This file contain the global configuration to use PNPJS with spfx */
// Imports
import { WebPartContext } from '@microsoft/sp-webpart-base'
import { spfi, SPFx, SPFI } from '@pnp/sp'
// import { LogLevel, PnPLogging } from '@pnp/logging'

let sp: SPFI = null // Define the type

export const getSP = (context?: WebPartContext): SPFI => {
  if (sp === null && context !== null) {
    sp = spfi().using(SPFx(context))
  }

  // initialize and return sp object
  return sp
}
/* 

, the function returns the sp object, which can be used to make SharePoint REST API calls.
*/
