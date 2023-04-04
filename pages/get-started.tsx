import Image from "next/image"
import Logo from "@/public/logo.png"
import { useState } from "react"
import MultiStepForm from "@/components/Form/MultiStepForm"


export default function Dietary(): JSX.Element {


  return (
    <div className="min-h-full bg-[url('../public/background-2.gif')] bg-cover">
     <MultiStepForm></MultiStepForm>
    </div>
  )
}