import { ReactNode } from "react"

export default interface IInputBox{
placeholder?:string
label?:string
name:string
register?:any
error?:string
icon?:ReactNode
type:"text"|"email"|"password"
}