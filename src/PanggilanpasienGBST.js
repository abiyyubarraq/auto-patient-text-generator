import React from "react"

function PanggilanpasienGBST(props) {
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
        Selamat pagi dokter, Mohon izin Dokter, izin melampirkan jadwal operasi hari :
        <br />
        <br />*{props.hari}, {props.tgl} November 2022*
        <br />
        <br />*{gbstarr.nama}, {sex(gbstarr.kelamin)}, {gbstarr.umur} th, {gbstarr.norm}, {gbstarr.ruang}*
        <br />
        <br />
        *_Diagnosis_*
        <br />
        {gbstarr.diagnos}
        <br />
        <br />
        *_Tindakan_*
        <br />
        {gbstarr.plan}
        <br />
        GA, OK GBST {gbstarr.noruang} jam {gbstarr.jam}, dr. {gbstarr.dpjp}
        <br />
        <br />
        <br />
        Pasien siap di panggil
        <br />
        Anastesi persiapan
        <br />
        Instrumen persiapan
        <br />
        <br />
        Mohon arahan Dokter
        <br />
        Terima kasih Dokter
      </p>
      <br />
    </>
  )
}

export default PanggilanpasienGBST
