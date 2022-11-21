import React from "react"

function TtdVitalPJT(props) {
  const pjtarr = props.pjtarr
  function sex(sextype) {
    if (sextype === "Laki-laki") {
      return "L"
    } else if (sextype === "Perempuan") {
      return "P"
    }
  }
  return (
    <>
      <p className="text-left">
        *{pjtarr.nama}, {sex(pjtarr.kelamin)}, {pjtarr.umur} th, {pjtarr.norm}, {pjtarr.ruang}*
        <br />
        Telp:
        <br />
        <br />
        *Diagnosis*
        <br />
        {pjtarr.diagnos}
        <br />
        <br />
        *Tindakan : ({props.tgl}/11/2022)*
        <br />
        {pjtarr.plan}
        <br />
        <br />
        TD: pre mmHg post mmHg
        <br />
        Kreatinin pre op: post op:
        <br />
        Hb pre op: post op:
        <br />
        EF pre op: %, post op: %
        <br />
        EKG pre op: post op:
        <br />
        SpO2: pre % post %
        <br />
        <br />
        CPB time: 89
        <br />
        Cross clamp time:
        <br />
        Ischemic time:
        <br />
        <br />
        DPJP : dr. {pjtarr.dpjp}
        <br />
        Operator : dr. {pjtarr.dpjp}
        <br />
        Assistant :
        <br />
      </p>
    </>
  )
}

export default TtdVitalPJT
