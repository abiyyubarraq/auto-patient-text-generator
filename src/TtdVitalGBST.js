import React from "react"

function TtdVitalGBST(props) {
  const gbstarr = props.gbstarr
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
        *{gbstarr.nama}, {sex(gbstarr.kelamin)}, {gbstarr.umur} th, {gbstarr.norm}, {gbstarr.ruang}*
        <br />
        Telp:
        <br />
        <br />
        *Diagnosis :*
        <br />
        {gbstarr.diagnos}
        <br />
        <br />
        *Tindakan : ({props.tgl}/12/2022)*
        <br />
        {gbstarr.plan}
        <br />
        <br />
        TD: pre mmHg post mmHg
        <br />
        HR: pre x/mnt post x/mnt
        <br />
        RR: pre x/mnt on post x/mnt
        <br />
        SpO2: pre % post %
        <br />
        <br />
        DPJP : dr. {gbstarr.dpjp}
        <br />
        Operator : dr. {gbstarr.dpjp}
        <br />
        Assistant :
        <br />
      </p>
    </>
  )
}

export default TtdVitalGBST
