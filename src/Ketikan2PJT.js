import React from "react"

function Ketikan2PJT(props) {
  const pjtarr = props.pjtarr
  return (
    <>
      {props.index}. Jadwal op tgl: {props.tgl}/11/2022
      <br />
      Jam: {pjtarr.jam}
      <br />
      OK: {pjtarr.noruang}
      <br />
      Status op: elektif
      <br />
      Nama: {pjtarr.nama}
      <br />
      RM: {pjtarr.norm}
      <br />
      Usia: {pjtarr.umur} tahun
      <br />
      Jenis kelamin : {pjtarr.kelamin}
      <br />
      Diagnosa: {pjtarr.diagnos}
      <br />
      Rencana op: {pjtarr.plan}
      <br />
      DPJP: dr. {pjtarr.dpjp}
      <br />
      <br />
    </>
  )
}

export default Ketikan2PJT
