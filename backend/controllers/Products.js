import Products from "../models/ProductModel.js"
import User from "../models/UserModel.js";
import {Op} from "sequelize";

export const getProducts = async (req, res) =>{
    try {
        let response;
        if (req.role === "admin") {
            response = await Products.findAll({
                attributes:['uuid','kode_barang','tanggal_masuk_barang','nama_barang','satuan','terima','keluar','so_akhir','saldo_awal','penerima','pengeluaran','harga_perpics','jumlah','tanggal_keluar_barang'],
                include:[{
                    model: User,
                    attributes:['name','email']
                }]
            });
        }else {
            response = await Products.findAll({
                attributes:['uuid','kode_barang','tanggal_masuk_barang','nama_barang','satuan','terima','keluar','so_akhir','saldo_awal','penerima','pengeluaran','harga_perpics','jumlah','tanggal_keluar_barang'],
                where: {
                    userId: req.userId
                },
                include:[{
                    model: User,
                    attributes:['name','email']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getProductById = async(req, res) =>{
    try {
        const product = await Products.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!product) return res.status(404).json({msg: "Data tidak ditemukan"});
        let response;
        if (req.role === "admin") {
            response = await Products.findOne({
                attributes:['uuid','kode_barang','tanggal_masuk_barang','nama_barang','satuan','terima','keluar','so_akhir','saldo_awal','penerima','pengeluaran','harga_perpics','jumlah','tanggal_keluar_barang'],
                where:{
                    id: product.id
                },
                include:[{
                    model: User,
                    attributes:['name','email']
                }]
            });
        }else {
            response = await Products.findOne({
                attributes:['uuid','kode_barang','tanggal_masuk_barang','nama_barang','satuan','terima','keluar','so_akhir','saldo_awal','penerima','pengeluaran','harga_perpics','jumlah','tanggal_keluar_barang'],
                where: {
                    [Op.and]:[{id: product.id}, {userId: req.userId}]                  
                },
                include:[{
                    model: User,
                    attributes:['name','email']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }

}

export const createProduct = async(req,res) =>{
    const {kode_barang,tanggal_masuk_barang,nama_barang,satuan,terima,keluar,so_akhir,saldo_awal,penerima,pengeluaran,harga_perpics,jumlah,tanggal_keluar_barang} = req.body;
    try {
        await Products.create({
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
            tanggal_keluar_barang:tanggal_keluar_barang ,
            userId: req.userId
        });
        res.status(201).json({msg: "Product Created Successfuly"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const updateProduct =async(req, res) =>{
    try {
        const product = await Products.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!product) return res.status(404).json({msg: "Data tidak ditemukan"});
          const {kode_barang,tanggal_masuk_barang,nama_barang,satuan,terima,keluar,so_akhir,saldo_awal,penerima,pengeluaran,harga_perpics,jumlah,tanggal_keluar_barang} = req.body;
        if (req.role === "admin") {
            await Products.update({kode_barang,tanggal_masuk_barang,nama_barang,satuan,terima,keluar,so_akhir,saldo_awal,penerima,pengeluaran,harga_perpics,jumlah,tanggal_keluar_barang},{
                where:{
                    id: product.id
                }
         });
        }else {
            if(req.userId !== Products.userId) return res.status(403).json({msg: "Akses terlarang"})
            await Products.update({kode_barang,tanggal_masuk_barang,nama_barang,satuan,terima,keluar,so_akhir,saldo_awal,penerima,pengeluaran,harga_perpics,jumlah,tanggal_keluar_barang},{
                where:{
                    [Op.and]:[{id: Products.id}, {userId: req.userId}]
                }
         });

        }
        res.status(200).json({msg: "Product updated successfuly"})
    } catch (error) {
        res.status(500).json({msg: error.message});
      }

}


export const deleteProduct = async(req,res) =>{
    try {
        const product = await Products.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!product) return res.status(404).json({msg: "Data tidak ditemukan"});
          const {name, price} = req.body;
        if (req.role === "admin") {
            await Products.destroy({
                where:{
                    id: product.id
                }
         });
        }else {
            if(req.userId !== Products.userId) return res.status(403).json({msg: "Akses terlarang"})
            await Products.destroy({
                where:{
                    [Op.and]:[{id: Products.id}, {userId: req.userId}]
                }
         });

        }
        res.status(200).json({msg: "Product deleted successfuly"})
    } catch (error) {
        res.status(500).json({msg: error.message});
      }
};