import { Sequelize} from "sequelize";
import db from "../config/database.js";
import Users from "../models/UserModel.js";

const {DataTypes} = Sequelize;

const Products = db.define('product_inventaris_rsa',{
    uuid: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    kode_barang: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    tanggal_masuk_barang: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    nama_barang: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 100]
        }
    },
    satuan: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 100]
        }
    },
    terima: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    keluar: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    so_akhir: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            
        }
    },
    saldo_awal: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            
        }
    },
    penerima: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            
        }
    },
    pengeluaran: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            
        }
    },
    harga_perpics: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            
        }
    },
    jumlah: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            
        }
    },
     tanggal_keluar_barang: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
},{
    freezeTableName: true
});

Users.hasMany(Products);
Products.belongsTo(Users, {foreignkey: 'userId'});

export default Products;