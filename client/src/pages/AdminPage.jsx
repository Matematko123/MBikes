import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearState } from '../redux/userRedux';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';

import { FaHome } from 'react-icons/fa';
import Footer from 'components/Footer/Footer';

import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { deleteProduct, getProducts } from '../redux/apiCalls';

const Container = styled.div`
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
  }
`;

const ProductList = styled.div`
  flex: 4;

  height: 100vh;
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

function AdminPage() {
  // @ts-ignore
  const auth = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    getProducts(dispatch);
    // if (!auth.currentUser.isAdmin) {
    //   navigate('/login');
    // }
    // dispatch(clearState());
  }, []);

  const handleDelete = (id) => {
    deleteProduct(id, dispatch);
  };

  const columns = [
    { field: '_id', headerName: 'ID', width: 220 },
    {
      field: 'product',
      headerName: 'Product',
      width: 200,
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
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/product/' + params.row._id}>
              <button className="productListEdit">Edit</button>
            </Link>
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
      </Main>
      <Footer />
    </Container>
  );
}

export default AdminPage;
