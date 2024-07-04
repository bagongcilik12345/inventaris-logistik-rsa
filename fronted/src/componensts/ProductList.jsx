import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        getProducts();
    },[]);

    const getProducts = async () =>{
        const response = await axios.get("http://localhost:5000/products");
        setProducts(response.data);
    };
    
    const deleteProduct = async (productId) =>{
        await axios.delete(`http://localhost:5000/products/${productId}`);
        getProducts();
    }
  
    return (
        <div>
        <h1 className="title">Products</h1>
    <h2 className="subtitle">List Of Products</h2>
    <Link to="/products/add" className="button is-primary mb-2">
        Add New
    </Link>
    <table className="table is-striped is-fullwidth">
        <thead>
            <tr>
                <th>NO</th>
                <th>KODE BARANG</th>
                <th>TANGGAL MASUK BARANG</th>
                <th>NAMA BARANG</th>
                <th>SATUAN</th>
                <th>TERIMA</th>
                <th>KELUAR</th>
                <th>SO AKHIR</th>
                <th>SALDO AWAL</th>
                <th>PENERIMA</th>
                <th>PENGELUARAN</th>
                <th>HARGA PERPICS</th>
                <th>JUMLAH</th>
                <th>TANGGAL KELUAR BARANG</th>
                <th>CREATED BY</th>
                <th>ACTIONS</th>
                
            </tr>
        </thead>
        <tbody>
            {products.map((product, index)=>(
                 <tr key={product.uuid}>
                 <td>{index + 1}</td>
                 <td>{product.kode_barang}</td>
                 <td>{product.tanggal_masuk_barang}</td>
                 <td>{product.nama_barang}</td>
                 <td>{product.satuan}</td>
                 <td>{product.terima}</td>
                 <td>{product.keluar}</td>
                 <td>{product.so_akhir}</td>
                 <td>{product.saldo_awal}</td>
                 <td>{product.penerima}</td>
                 <td>{product.pengeluaran}</td>
                 <td>{product.harga_perpics}</td>
                 <td>{product.jumlah}</td>
                 <td>{product.tanggal_keluar_barang}</td>
                 <td>{product.user.name}</td>
                 <td>
                    <Link to={`/products/edit/${product.uuid}`} className="button is-small is-info">Edit</Link>
                    <button onClick={()=> deleteProduct(product.uuid)} className="button is-small is-danger">Delete</button>
                 </td>
             </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;