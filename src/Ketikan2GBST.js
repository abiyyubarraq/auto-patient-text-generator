import React from "react"

function Ketikan2GBST(props) {
  const gbstarr = props.gbstarr

  return (
    <>
      {props.index}. Jadwal op tgl: {props.tgl}/12/2022
      <br />
      Jam: {gbstarr.jam}
      <br />
      OK: {gbstarr.noruang}
      <br />
      Status op: elektif
      <br />
      Nama: {gbstarr.nama}
      <br />
      RM: {gbstarr.norm}
      <br />
      Usia: {gbstarr.umur} tahun
      <br />
      Jenis kelamin : {gbstarr.kelamin}
      <br />
      Diagnosa: {gbstarr.diagnos}
      <br />
      Rencana op: {gbstarr.plan}
      <br />
      DPJP: dr. {gbstarr.dpjp}
      <br />
      <br />
    </>
  )
}

export default Ketikan2GBST
