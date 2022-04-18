import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearState } from '../redux/userRedux';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import PrimaryButton from 'reusable/PrimaryButton';

import { FaHome } from 'react-icons/fa';
import Footer from 'components/Footer/Footer';

import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {
  deleteProduct,
  getProducts,
  addProduct,
  updateProduct,
} from '../redux/apiCalls';

const Container = styled.div`
  position: relative;
  height: 3000px;

  header {
    background-color: var(--primary);
    padding: 2rem 0rem;
    font-size: 2.4rem;
  }
`;

const Wrapper = styled.div`
  width: 85%;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;
  transition: all 0.15s;

  * {
    color: var(--text);
    font-weight: 600;
    font-size: 4rem;
  }

  * :hover {
    color: var(--text-hover);
  }
`;

const Main = styled.main`
  h2 {
    text-align: center;
    font-size: 3.2rem;
    padding: 2rem;
  }
`;

const ProductList = styled.div`
  margin: 0 auto;
  width: 1200px;

  height: 80vh;

  padding-bottom: 10rem;
  .productListItem {
    display: flex;
    align-items: center;
  }

  .productListImg {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
  }

  .productListEdit {
    border: none;
    border-radius: 10px;
    padding: 5px 10px;
    background-color: #3bb077;
    color: white;
    cursor: pointer;
    margin-right: 20px;
  }

  .productListDelete {
    color: red;
    cursor: pointer;
  }
`;

const AddProduct = styled.div`
  margin: 0 auto;
  width: 1000px;

  display: flex;
  justify-content: space-around;

  height: 80vh;

  .newProduct {
  }

  .addProductForm {
    margin-top: 10px;
  }

  .addProductItem {
    width: 250px;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }

  .addProductItem > label {
    color: gray;
    font-weight: 600;
    margin-bottom: 10px;
  }

  .addProductItem > input {
    padding: 10px;
  }

  .addProductItem > select {
    padding: 10px;
  }

  .addProductButton {
    padding: 1.4rem 3.6rem;
    border: none;
    border-radius: 5px;
    background-color: var(--text);
    color: white;
    font-size: 2.2rem;
    font-weight: 500;
    cursor: pointer;

    :hover {
      background-color: var(--text-hover);
    }
  }
`;

function AdminPage() {
  // @ts-ignore
  const auth = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState([]);
  const [id, setId] = useState('');
  const [cat, setCat] = useState([]);
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    getProducts(dispatch);
    // if (!auth.currentUser.isAdmin) {
    //   navigate('/login');
    // }
    // dispatch(clearState());
  }, []);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleCat = (e) => {
    setCat(e.target.value);
  };

  const handleDelete = (id) => {
    deleteProduct(id, dispatch);
  };

  const handleProductAdd = (e) => {
    e.preventDefault();
    const product = { ...inputs, category: cat };
    addProduct(product, dispatch);
  };

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const product = { ...inputs, category: cat };
    updateProduct(id, product, dispatch);
    // @ts-ignore
    window.location.reload(false);
    navigate('/');
  };

  const columns = [
    { field: '_id', headerName: '_id', width: 250 },
    {
      field: 'product',
      headerName: 'Product',
      width: 250,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: 'desc', headerName: 'Desc', width: 200 },
    {
      field: 'price',
      headerName: 'Price',
      width: 200,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <Container>
      <header>
        <Wrapper>
          <Link to="/">
            <h2>MatkoAdmin</h2>
          </Link>
          <Link to="/">
            <FaHome></FaHome>
          </Link>
        </Wrapper>
      </header>
      <Main>
        <h2>Products</h2>
        <ProductList>
          <DataGrid
            rows={products}
            disableSelectionOnClick
            columns={columns}
            getRowId={(row) => row._id}
            pageSize={15}
            checkboxSelection
          />
        </ProductList>
        <AddProduct>
          <div className="newProduct">
            <h1 className="addProductTitle">New Product</h1>
            <form className="addProductForm">
              <div className="addProductItem">
                <label>Img link</label>
                <input name="img" type="text" onChange={handleChange} />
              </div>
              <div className="addProductItem">
                <label>Category</label>
                <select name="category" onChange={handleCat}>
                  <option value="29er">29er</option>
                  <option value="27.5er">27.5er</option>
                  <option value="26er">26er</option>
                </select>
              </div>
              <div className="addProductItem">
                <label>Title</label>
                <input name="title" type="text" onChange={handleChange} />
              </div>
              <div className="addProductItem">
                <label>Frame (26er)</label>
                <input name="frame" type="text" onChange={handleChange} />
              </div>
              <div className="addProductItem">
                <label>Wheel size (27er)</label>
                <input name="wheel" type="text" onChange={handleChange} />
              </div>
              <div className="addProductItem">
                <label>Speed (km/h)</label>
                <input name="speed" type="text" onChange={handleChange} />
              </div>
              <div className="addProductItem">
                <label>Battery (kwh)</label>
                <input name="battery" type="text" onChange={handleChange} />
              </div>
              <div className="addProductItem">
                <label>Weight (kg)</label>
                <input name="weight" type="text" onChange={handleChange} />
              </div>
              <div className="addProductItem">
                <label>Travel (mm)</label>
                <input name="travel" type="text" onChange={handleChange} />
              </div>
              <div className="addProductItem">
                <label>Price ($)</label>
                <input name="price" type="text" onChange={handleChange} />
              </div>
              <div className="addProductItem">
                <label>Description</label>
                <input name="desc" type="text" onChange={handleChange} />
              </div>

              <button className="addProductButton" onClick={handleProductAdd}>
                Add
              </button>
            </form>
          </div>
          <div className="newProduct">
            <h1 className="addProductTitle">Update Product</h1>
            <form className="addProductForm">
              <div className="addProductItem">
                <label>Id</label>
                <input
                  name="_id"
                  type="text"
                  onChange={(e) => setId(e.target.value)}
                />
              </div>
              <div className="addProductItem">
                <label>Img link</label>
                <input name="img" type="text" onChange={handleChange} />
              </div>
              <div className="addProductItem">
                <label>Category</label>
                <select name="category" onChange={handleCat}>
                  <option value="29er">29er</option>
                  <option value="27.5er">27.5er</option>
                  <option value="26er">26er</option>
                </select>
              </div>

              <div className="addProductItem">
                <label>Title</label>
                <input name="title" type="text" onChange={handleChange} />
              </div>
              <div className="addProductItem">
                <label>Frame (26er)</label>
                <input name="frame" type="text" onChange={handleChange} />
              </div>
              <div className="addProductItem">
                <label>Wheel size (27er)</label>
                <input name="wheel" type="text" onChange={handleChange} />
              </div>
              <div className="addProductItem">
                <label>Speed (km/h)</label>
                <input name="speed" type="text" onChange={handleChange} />
              </div>
              <div className="addProductItem">
                <label>Battery (kwh)</label>
                <input name="battery" type="text" onChange={handleChange} />
              </div>
              <div className="addProductItem">
                <label>Weight (kg)</label>
                <input name="weight" type="text" onChange={handleChange} />
              </div>
              <div className="addProductItem">
                <label>Travel (mm)</label>
                <input name="travel" type="text" onChange={handleChange} />
              </div>
              <div className="addProductItem">
                <label>Price ($)</label>
                <input name="price" type="text" onChange={handleChange} />
              </div>
              <div className="addProductItem">
                <label>Description</label>
                <input name="desc" type="text" onChange={handleChange} />
              </div>

              <button
                className="addProductButton"
                onClick={handleUpdateProduct}
              >
                Update
              </button>
            </form>
          </div>
        </AddProduct>
      </Main>
      <Footer />
    </Container>
  );
}

export default AdminPage;
