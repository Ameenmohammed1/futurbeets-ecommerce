import React, { useState, useEffect } from "react";
import Editor from "../ckEditor/CKEditor";
import { useNavigate, useLocation } from "react-router-dom";
import "./editProduct.css";
function EditProduct() {
  const { state } = useLocation();
  const [product, setProduct] = useState();
  const [files, setFiles] = useState();
  // const [images, setUplodImage] = useState([]);
  const [name, setName] = useState('');
  const [stock, setStock] = useState(0);
  const [Barand, setBrand] = useState('');
  const [price, setPrice] = useState(0);
  const [realPrice, setRealPrice] = useState(0);
  const [shortDiscription, setShortDetails] = useState();
  const [colorORsize, setColorORSize] = useState();
  const [discription, setDiscription] = useState('');
  const [category, setCategory] = useState('');
  //ck editor


  
  const [editorLoaded, setEditorLoaded] = useState(false);
  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  async function AddProduct() {
  
    let editProduct = new FormData();
    if (files) {
      for (let i = 0; i < files.length; i++) {
        editProduct.append("images", files[i]);
      }
    }
    editProduct.append("name", name ? name : product.name);
    editProduct.append("category", category ? category : product.category);
    editProduct.append("price", price ? price : product.price);
    editProduct.append("realPrice", realPrice ? realPrice : product.realPrice);
    editProduct.append("brand", Barand ? Barand : product.brand);
    editProduct.append("stock", stock ? stock : product.stock);
    editProduct.append("discription", discription ? discription : product.discription );
    editProduct.append("shortDetails", shortDiscription ? shortDiscription : product.shortDetails);
    editProduct.append("colorORsize",colorORsize?colorORsize:product.colORsiz);
    editProduct.append('id',state)
  }
  return (
    <div className="AddProductParent">
      <h1>Edit Prodct</h1>
      <hr />
      <form>
        <div className="inputs">
          <label htmlFor="">Name</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            defaultValue={product ? product.name : ""}
          />
        </div>
        <div className="inputs">
          <label htmlFor="">Category</label>
          <input
            type="text"
            onChange={(e) => setCategory(e.target.value)}
            defaultValue={product ? product.category : ""}
          />
        </div>
        <div className="inputs">
          <label htmlFor="">Price</label>
          <input
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            defaultValue={product ? product.price : ""}
          />
        </div>
        <div className="inputs">
          <label htmlFor="">Brand</label>
          <input
            type="text"
            onChange={(e) => setBrand(e.target.value)}
            defaultValue={product ? product.brand : ""}
          />
        </div>
        <div className="inputs">
          <label htmlFor="">Stock</label>
          <input
            type="number"
            onChange={(e) => setStock(e.target.value)}
            defaultValue={product ? product.stock : ""}
          />
        </div>
        <div className="inputs">
          <label htmlFor="">color/Size</label>
          <input
            type="text"
            onChange={(e) => setColorORSize(e.target.value)}
            defaultValue={product ? product.colORsiz : []}
          />
        </div>
        <div className="inputs">
          <label htmlFor="">Real price</label>
          <input
            type="number"
            onChange={(e) => setRealPrice(e.target.value)}
            defaultValue={product ? product.realPrice : ""}
          />
        </div>
        <div className="inputs">
          <label htmlFor="">Short Discription</label>
          <textarea
            onChange={(e) => setShortDetails(e.target.value)}
            defaultValue={product ? product.shortDetails : ""}
            name=""
            id=""
            cols="5"
            rows="0"
          ></textarea>
        </div>
        <div className="inputs">
          <label htmlFor="">Discription</label>
          <Editor
            name="description"
            onChange={(data) => {
              setDiscription(data);
            }}
            value={product ? product.discription : ""}
            editorLoaded={editorLoaded}
          />
          {/* {JSON.stringify(discription)} */}
        </div>
        <div className="inputs">
          <label htmlFor="">Images</label>
          <input
            type="file"
            name="images"
            multiple
            onChange={(e) => setFiles(e.target.files)}
          />
        </div>
      </form>
      <button className="btn1" onClick={() => AddProduct()}>
        Submit
      </button>
  
    </div>
  );
}

export default EditProduct;
