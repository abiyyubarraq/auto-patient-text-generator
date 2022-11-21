import React from "react"

function Ketikan1PJT(props) {
  const pjtarr = props.pjtarr

  function sex(sextype) {
    if (sextype === "Laki-laki") {
      return "L"
    } else if (sextype === "Perempuan") {
      return "P"
    }
  }
  function converter(string) {
    return string.replace(/\r?\n/g, "_**_")
  }
  return (
    <>
      *{props.index}. {pjtarr.nama}, {sex(pjtarr.kelamin)}, {pjtarr.umur} th, {pjtarr.norm}, {pjtarr.ruang}*
      <br />
      <br />
      Diagnosis
      <br />
      *_{converter(pjtarr.diagnos)}_*
      <br />
      <br />
      Plan: {pjtarr.plan}
      <br />
      DPJP: dr. {pjtarr.dpjp}
      <br />
      GA, OK PJT {pjtarr.noruang} jam {pjtarr.jam}, dr. {pjtarr.dpjp}
      <br />
      <br />
    </>
  )
}

export default Ketikan1PJT
