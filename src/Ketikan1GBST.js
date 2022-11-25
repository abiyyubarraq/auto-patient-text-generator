import React from "react"

function Ketikan1GBST(props) {
  const gbstarr = props.gbstarr

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
      *{props.index}. {gbstarr.nama}, {sex(gbstarr.kelamin)}, {gbstarr.umur} th, {gbstarr.norm}, {gbstarr.ruang}*
      <br />
      <br />
      Diagnosis
      <br />
      *_{converter(gbstarr.diagnos)}_*
      <br />
      <br />
      Plan: {gbstarr.plan}
      <br />
      GA, OK GBST {gbstarr.noruang} jam {gbstarr.jam}, dr. {gbstarr.dpjp}
      <br />
      <br />
    </>
  )
}

export default Ketikan1GBST
