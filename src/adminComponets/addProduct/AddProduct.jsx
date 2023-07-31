import React, { useState, useEffect } from "react";
import Editor from "../ckEditor/CKEditor";



import "./addProduct.css";
function AddProduct() {

  const [files, setFiles] = useState(null);
  // const [images, setUplodImage] = useState([]);
  const [name, setName] = useState(null);
  const [stock, setStock] = useState(null);
  const [Barand, setBrand] = useState(null);
  const [price, setPrice] = useState(null);
  const [realPrice, setRealPrice] = useState(null);
  const [shortDiscription, setShortDetails] = useState(null);
  const [colorORsize, setColorORSize] = useState("");
  const [discription, setDiscription] = useState(null);
  const [category, setCategory] = useState(null);
  //ck editor

  const [editorLoaded, setEditorLoaded] = useState(false);
  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  async function AddProduct() {
   
    let formData = new FormData();
    if (files) {
      for (let i = 0; i < files.length; i++) {
        formData.append("images", files[i]);
      }
    }

    formData.append("name", name);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("realPrice", realPrice);
    formData.append("brand", Barand);
    formData.append("stock", stock);
    formData.append("discription", discription);
    formData.append("shortDetails", shortDiscription);
    formData.append("colorORsize", colorORsize);
  }

 
  return (
    <div className="AddProductParent">
      <h1>Add Prodct</h1>
      <hr />
      <form>
        <div className="inputs">
          <label htmlFor="">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="inputs">
          <label htmlFor="">Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="inputs">
          <label htmlFor="">Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="inputs">
          <label htmlFor="">Brand</label>
          <input
            type="text"
            value={Barand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </div>
        <div className="inputs">
          <label htmlFor="">Stock</label>
          <input
            type="number"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </div>
        <div className="inputs">
          <label htmlFor="">color/Size</label>
          <input
            type="text"
            value={colorORsize}
            onChange={(e) => setColorORSize(e.target.value)}
          />
        </div>
        <div className="inputs">
          <label htmlFor="">Real price</label>
          <input
            type="number"
            value={realPrice}
            onChange={(e) => setRealPrice(e.target.value)}
          />
        </div>
        <div className="inputs">
          <label htmlFor="">Short Discription</label>
          <input
            type="text"
            value={shortDiscription}
            onChange={(e) => setShortDetails(e.target.value)}
          />
        </div>
        <div className="inputs">
          <label htmlFor="">Discription</label>
          <Editor
            name="description"
            onChange={(data) => {
              setDiscription(data);
            }}
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

export default AddProduct;
