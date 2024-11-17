import { ReactNode } from "react"

export default interface IButton{
type:"submit"|"button"
value?:string
children?:ReactNode
classname?:string
isloading?:boolean





}