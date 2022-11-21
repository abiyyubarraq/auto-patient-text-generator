import React, { useEffect, useState, useContext } from "react"
import "./App.css"
import Ketikan1PJT from "./Ketikan1PJT"
import Ketikan1GBST from "./Ketikan1GBST"
import Ketikan2PJT from "./Ketikan2PJT"
import Ketikan2GBST from "./Ketikan2GBST"
import PanggilanpasienGBST from "./PanggilanpasienGBST"
import PanggilanpasienPJT from "./PanggilanpasienPJT"
import TtdVitalPJT from "./TtdVitalPJT"
import TtdVitalGBST from "./TtdVitalGBST"

function App() {
  const options1 = [
    { value: "", text: "-Choose Kelamin-" },
    { value: "Laki-laki", text: "Laki-laki" },
    { value: "Perempuan", text: "Perempuan" },
  ]
  const options2 = [
    { value: "", text: "-Choose Kelamin-" },
    { value: "Laki-laki", text: "Laki-laki" },
    { value: "Perempuan", text: "Perempuan" },
  ]
  const [GeneralState, setGeneralState] = useState({
    hari: "",
    tgl: "",
  })
  const [GBSTState, setGbststate] = useState({
    nama: "",
    norm: "",
    umur: "",
    diagnos: "",
    plan: "",
    dpjp: "",
    jam: "",
    ruang: "",
    noruang: "",
    kelamin: options1[0].value,
  })

  const [PJTState, setPjtstate] = useState({
    nama: "",
    norm: "",
    umur: "",
    diagnos: "",
    plan: "",
    dpjp: "",
    jam: "",
    ruang: "",
    noruang: "",
    kelamin: options2[0].value,
  })

  const [GBSTarr, setGbstarr] = useState([])
  const [PJTarr, setPjtarr] = useState([])

  function handleSubmitGBST(e) {
    e.preventDefault()
    setGbstarr((oldArray) => [...oldArray, { nama: GBSTState.nama, norm: GBSTState.norm, umur: GBSTState.umur, diagnos: GBSTState.diagnos, plan: GBSTState.plan, dpjp: GBSTState.dpjp, jam: GBSTState.jam, ruang: GBSTState.ruang, noruang: GBSTState.noruang, kelamin: GBSTState.kelamin }])
    alert("save GBST succes")
  }

  function handleSubmitPJT(e) {
    e.preventDefault()
    setPjtarr((oldArray) => [...oldArray, { nama: PJTState.nama, norm: PJTState.norm, umur: PJTState.umur, diagnos: PJTState.diagnos, plan: PJTState.plan, dpjp: PJTState.dpjp, jam: PJTState.jam, ruang: PJTState.ruang, noruang: PJTState.noruang, kelamin: PJTState.kelamin }])
    alert("save PJT succes")
  }

  return (
    <div className="App">
      <h3 className="text-center mb-4">Input Data Pasien</h3>
      <div className="containerharitgl d-flex justify-content-center">
        <div className="form-group">
          <input onChange={(e) => setGeneralState({ ...GeneralState, hari: e.target.value })} className="form-control" type="text" placeholder="Hari"></input>
        </div>
        <div className="form-group">
          <input onChange={(e) => setGeneralState({ ...GeneralState, tgl: e.target.value })} className="form-control" type="text" placeholder="Tanggal"></input>
        </div>
      </div>

      <div className="container d-flex justify-content-center">
        <div className="pjtform col">
          <h4 className="font-weight-bold text-info">OK PJT</h4>
          <form onSubmit={handleSubmitPJT}>
            <div className="form-group">
              <input onChange={(e) => setPjtstate({ ...PJTState, nama: e.target.value })} className="form-control" type="text" placeholder="Nama pasien"></input>
            </div>
            <div className="form-group">
              <input onChange={(e) => setPjtstate({ ...PJTState, norm: e.target.value })} className="form-control" type="text" placeholder="NoRM"></input>
            </div>
            <div className="form-group">
              <input onChange={(e) => setPjtstate({ ...PJTState, umur: e.target.value })} className="form-control" type="text" placeholder="Umur"></input>
            </div>
            <div className="form-group">
              <textarea onChange={(e) => setPjtstate({ ...PJTState, diagnos: e.target.value })} className="form-control" type="text" placeholder="Diagnosis"></textarea>
            </div>
            <div className="form-group">
              <textarea onChange={(e) => setPjtstate({ ...PJTState, plan: e.target.value })} className="form-control" type="text" placeholder="Plan"></textarea>
            </div>
            <div className="form-group">
              <input onChange={(e) => setPjtstate({ ...PJTState, dpjp: e.target.value })} className="form-control" type="text" placeholder="dpjp"></input>
            </div>
            <div className="form-group">
              <input onChange={(e) => setPjtstate({ ...PJTState, jam: e.target.value })} className="form-control" type="text" placeholder="jam"></input>
            </div>
            <div className="form-group">
              <input onChange={(e) => setPjtstate({ ...PJTState, ruang: e.target.value })} className="form-control" type="text" placeholder="bangsal"></input>
            </div>
            <div className="form-group">
              <input onChange={(e) => setPjtstate({ ...PJTState, noruang: e.target.value })} className="form-control" type="text" placeholder="OK"></input>
            </div>
            <div className="form-group">
              <select onChange={(e) => setPjtstate({ ...PJTState, kelamin: e.target.value })} className="form-control" value={PJTState.kelamin}>
                {options2.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.text}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className="m-3 btn btn-lg btn-info">
              save okPJT
            </button>
          </form>
        </div>
        <div className="gbstform col">
          <h4 className="font-weight-bold text-success">OK GBST</h4>
          <form onSubmit={handleSubmitGBST}>
            <div className="form-group">
              <input onChange={(e) => setGbststate({ ...GBSTState, nama: e.target.value })} className="form-control" type="text" placeholder="Nama pasien"></input>
            </div>
            <div className="form-group">
              <input onChange={(e) => setGbststate({ ...GBSTState, norm: e.target.value })} className="form-control" type="text" placeholder="NoRM"></input>
            </div>
            <div className="form-group">
              <input onChange={(e) => setGbststate({ ...GBSTState, umur: e.target.value })} className="form-control" type="text" placeholder="Umur"></input>
            </div>
            <div className="form-group">
              <textarea onChange={(e) => setGbststate({ ...GBSTState, diagnos: e.target.value })} className="form-control" type="text" placeholder="Diagnosis"></textarea>
            </div>
            <div className="form-group">
              <textarea onChange={(e) => setGbststate({ ...GBSTState, plan: e.target.value })} className="form-control" type="text" placeholder="Plan"></textarea>
            </div>
            <div className="form-group">
              <input onChange={(e) => setGbststate({ ...GBSTState, dpjp: e.target.value })} className="form-control" type="text" placeholder="dpjp"></input>
            </div>
            <div className="form-group">
              <input onChange={(e) => setGbststate({ ...GBSTState, jam: e.target.value })} className="form-control" type="text" placeholder="jam"></input>
            </div>

            <div className="form-group">
              <input onChange={(e) => setGbststate({ ...GBSTState, ruang: e.target.value })} className="form-control" type="text" placeholder="bangsal"></input>
            </div>
            <div className="form-group">
              <input onChange={(e) => setGbststate({ ...GBSTState, noruang: e.target.value })} className="form-control" type="text" placeholder="OK"></input>
            </div>
            <div className="form-group">
              <select onChange={(e) => setGbststate({ ...GBSTState, kelamin: e.target.value })} className="form-control" value={GBSTState.kelamin}>
                {options1.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.text}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className="m-3 btn btn-lg btn-success">
              save okGBST
            </button>
          </form>
        </div>
      </div>

      <button
        onClick={() => {
          console.log(GBSTarr)
        }}
        type="submit"
        className="m-3 btn btn-lg btn-dark"
      >
        cekicekigbst
      </button>
      <button
        onClick={() => {
          console.log(PJTarr)
        }}
        type="submit"
        className="m-3 btn btn-lg btn-dark"
      >
        cekicekipjt
      </button>
      <div className="containerOutput1 p-3">
        <div class="row">
          <div class="col">
            <h4 className="font-weight-bold">Ketikan vers1</h4>
            <div className="body-content p-3">
              <p className="text-left">
                Mohon izin Dokter, izin melampirkan jadwal operasi hari:
                <br />
                <br />*{GeneralState.hari}, {GeneralState.tgl} November 2022*
                <br />
                <br />
                *OK PJT*
                <br />
                <br />
                {PJTarr.map((pjtarr, index) => {
                  return <Ketikan1PJT pjtarr={pjtarr} key={pjtarr._id} index={index + 1} />
                })}
                {/* it should map func of array */}
                *OK GBST*
                <br />
                <br />
                {GBSTarr.map((gbstarr, index) => {
                  return <Ketikan1GBST gbstarr={gbstarr} key={gbstarr._id} index={index + 1} />
                })}
                <br />
                Mohon arahan Dokter
                <br />
                Terima kasih Dokter
              </p>
            </div>
          </div>
          <div class="col">
            <h4 className="font-weight-bold">Ketikan vers2</h4>
            <div className="body-content p-3">
              <p className="text-left">
                Selamat Malam dokter, Mohon izin melampirkan jadwal Operasi Hari:
                <br />
                <br />*{GeneralState.hari}, {GeneralState.tgl} November 2022*
                <br />
                <br />
                *OK PJT*
                <br />
                <br />
                {PJTarr.map((pjtarr, index) => {
                  return <Ketikan2PJT tgl={GeneralState.tgl} pjtarr={pjtarr} key={pjtarr._id} index={index + 1} />
                })}
                {/* map */}
                <br />
                *OK GBST*
                <br />
                <br />
                {GBSTarr.map((gbstarr, index) => {
                  return <Ketikan2GBST tgl={GeneralState.tgl} gbstarr={gbstarr} key={gbstarr._id} index={index + 1} />
                })}
                {/* map */}
                Mohon arahan Dokter
                <br />
                Terima kasih Dokter
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="containerOutput2 p-3">
        <div class="row">
          <div class="col">
            <h4 className="font-weight-bold">Panggilan pasien</h4>
            <h6 className="font-weight-bold">Panggilan pasien PJT</h6>
            <div className="body-content p-3">
              {PJTarr.map((pjtarr) => {
                return <PanggilanpasienPJT hari={GeneralState.hari} tgl={GeneralState.tgl} pjtarr={pjtarr} key={pjtarr._id} />
              })}
              {/* map */}
            </div>
            <h6 className="font-weight-bold">Panggilan Pasien GBST</h6>
            <div className="body-content p-3">
              {" "}
              {GBSTarr.map((gbstarr) => {
                return <PanggilanpasienGBST hari={GeneralState.hari} tgl={GeneralState.tgl} gbstarr={gbstarr} key={gbstarr._id} />
              })}
              {/* map */}
            </div>
          </div>
          <div class="col">
            <h4 className="font-weight-bold">RMK</h4>
            <h6 className="font-weight-bold">RMK PJT</h6>
            <div className="body-content p-3">
              {PJTarr.map((pjtarr) => {
                return <TtdVitalPJT tgl={GeneralState.tgl} pjtarr={pjtarr} key={pjtarr._id} />
              })}
              {/* map */}
            </div>
            <h6 className="font-weight-bold">RMK GBST</h6>
            <div className="body-content p-3">
              {" "}
              {GBSTarr.map((gbstarr) => {
                return <TtdVitalGBST tgl={GeneralState.tgl} gbstarr={gbstarr} key={gbstarr._id} />
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
