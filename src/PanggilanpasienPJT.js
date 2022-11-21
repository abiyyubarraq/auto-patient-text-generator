import React from "react"

function PanggilanpasienPJT(props) {
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
        Selamat pagi Dokter, mohon izin melampirkan jadwal operasi hari :
        <br />
        <br />*{props.hari}, {props.tgl} November 2022*
        <br />
        <br />*{pjtarr.nama}, {sex(pjtarr.kelamin)}, {pjtarr.umur} th, {pjtarr.norm}, {pjtarr.ruang}*
        <br />
        <br />
        *_Diagnosis_*
        <br />
        {pjtarr.diagnos}
        <br />
        <br />
        *_Tindakan_*
        <br />
        {pjtarr.plan}
        <br />
        GA, OK PJT {pjtarr.noruang} jam {pjtarr.jam}, dr. {pjtarr.dpjp}
        <br />
        <br />
        Pasien sudah di OK {pjtarr.noruang}
        <br />
        Anestesi persiapan
        <br />
        Instrumen persiapan
        <br />
        <br />
        Kondisi OK {pjtarr.noruang} pagi ini, suhu 17°C, kelembaban 55%
        <br />
        <br />
        Arteri line
        <br />
        Intubasi
        <br />
        CVC
        <br />
        Kateter
        <br />
        <br />
        Mohon arahan dokter
        <br />
        Terima kasih
        <br />
      </p>
    </>
  )
}

export default PanggilanpasienPJT
