import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormAddProduct = () => {
    const [kode_barang, setKode_barang] = useState("");
    const [tanggal_masuk_barang, setTanggal_masuk_barang] = useState("");
    const [ nama_barang, setNama_barang] = useState("");
    const [satuan, setSatuan] = useState("");
    const [terima, setTerima] = useState("");
    const [keluar, setKeluar] = useState("");
    const [so_akhir, setSo_akhir] = useState("");
    const [saldo_awal, setSaldo_awal] = useState("");
    const [penerima, setPenerima] = useState("");
    const [pengeluaran, setPengeluaran] = useState("");
    const [ harga_perpics ,setHarga_perpics] = useState("");
    const [ jumlah, setJumlah] = useState("");
    const [ tanggal_keluar_barang, setTanggal_keluar_barang] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate("");

    const saveProduct = async(e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/products', {
            kode_barang:kode_barang ,
            tanggal_masuk_barang:tanggal_masuk_barang ,
            nama_barang:nama_barang ,
            satuan:satuan ,
            terima:terima ,
            keluar:keluar ,
            so_akhir:so_akhir ,
            saldo_awal:saldo_awal ,
            penerima:penerima ,
            pengeluaran:pengeluaran ,
            harga_perpics:harga_perpics ,
            jumlah:jumlah ,
            tanggal_keluar_barang:tanggal_keluar_barang
            });
            navigate("/products");
        } catch (error) {
            if(error.response) {
                setMsg(error.response.data.msg);
            }
        }
    };

  return (
    <div>
         <h1 className="title">Products</h1>
        <h2 className="subtitle">Add New Product</h2>
         <div className="card is-shadowless">
            <div className="card-content">
                <div className="content">
                <form onSubmit={saveProduct}>
                    <p className="has-text-centered">{msg}</p>
             <div className="field">
                        <label className="label">kode_barang</label>
                        <div className="control">
                            <input 
                            type="text" 
                            className="input"  
                            value={kode_barang}
                            onChange={(e) => setKode_barang(e.target.value)}
                            placeholder="kode_barang"
                            />
                        </div>
                    </div>
              <div className="field">
                        <label className="label">tanggal_masuk_barang</label>
                        <div className="control">
                            <input 
                            type="text" 
                            className="input"  
                            value={tanggal_masuk_barang}
                            onChange={(e) => setTanggal_masuk_barang(e.target.value)}
                            placeholder="tanggal_masuk_barang"
                            />
                        </div>
                    </div>
               <div className="field">
                    <label className="label">nama_barang</label>
                        <div className="control">
                            <input 
                            type="text" 
                            className="input"  
                            value={nama_barang}
                            onChange={(e) => setNama_barang(e.target.value)}
                            placeholder="nama_barang"
                            />
                        </div>
                    </div>
                 <div className="field">
                        <label className="label">satuan</label>
                        <div className="control">
                            <input 
                            type="text" 
                            className="input"  
                            value={satuan}
                            onChange={(e) => setSatuan(e.target.value)}
                            placeholder="satuan"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">terima</label>
                        <div className="control">
                            <input 
                            type="text" 
                            className="input"  
                            value={terima}
                            onChange={(e) => setTerima(e.target.value)}
                            placeholder="terima"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">keluar</label>
                        <div className="control">
                            <input 
                            type="text" 
                            className="input"  
                            value={keluar}
                            onChange={(e) => setKeluar(e.target.value)}
                            placeholder="keluar"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">so_akhir</label>
                        <div className="control">
                            <input 
                            type="text" 
                            className="input"  
                            value={so_akhir}
                            onChange={(e) => setSo_akhir(e.target.value)}
                            placeholder="so_akhir"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">saldo_awal</label>
                        <div className="control">
                            <input 
                            type="text" 
                            className="input"  
                            value={saldo_awal}
                            onChange={(e) => setSaldo_awal(e.target.value)}
                            placeholder="saldo_awal"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">penerima</label>
                        <div className="control">
                            <input 
                            type="text" 
                            className="input"  
                            value={penerima}
                            onChange={(e) => setPenerima(e.target.value)}
                            placeholder="penerima"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">pengeluaran</label>
                        <div className="control">
                            <input 
                            type="text" 
                            className="input"  
                            value={pengeluaran}
                            onChange={(e) => setPengeluaran(e.target.value)}
                            placeholder="pengeluaran"
                            />
                        </div>
                    </div>
                 <div className="field">
                    <label className="label">harga_perpics</label>
                        <div className="control">
                            <input 
                            type="text" 
                            className="input"  
                            value={harga_perpics}
                            onChange={(e) => setHarga_perpics(e.target.value)}
                            placeholder="harga_perpics"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">jumlah</label>
                        <div className="control">
                            <input
                             type="text"
                             className="input" 
                             value={jumlah}
                             onChange={(e) => setJumlah(e.target.value)}
                             placeholder="jumlah" 
                             />
                        </div>
                    </div>
                 <div className="field">
                    <label className="label">tanggal_keluar_barang</label>
                        <div className="control">
                            <input 
                            type="text" 
                            className="input"  
                            value={tanggal_keluar_barang}
                            onChange={(e) => setTanggal_keluar_barang(e.target.value)}
                            placeholder="tanggal_keluar_barang"
                            />
                        </div>
                    </div>
                <div className="field">
                        <div className="control">
                             <button type="submit" className="button is-success">Save</button>
                        </div>
                    </div>
                </form>      
                </div>
            </div>
         </div>
    </div>
  )
}

export default FormAddProduct;