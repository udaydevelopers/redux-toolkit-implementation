// YourComponent.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchData } from '../redux/dataSlice';

const ToDo = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);
  const status = useSelector((state) => state.data.status);
  const error = useSelector((state) => state.data.error);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
<div className="container mt-4">
      <div className="row">
        <div className="col">
          <h2>Data Display - createAsyncThunk Method</h2>
          <div className="list-group">
            {data.map((item) => (
              <div key={item.id} className="list-group-item">
                {item.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
