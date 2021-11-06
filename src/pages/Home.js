import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import './Home.css';
import { getDatabase, ref, child, get, remove } from 'firebase/database';
import { database } from '../firebase-config';
import { toast } from 'react-toastify';

import { useHistory, useParam } from 'react-router-dom';
function Home(props) {
  const [data, setData] = useState({});

  const [count,setCount] = useState(0);
  const history = useHistory();

  useEffect(() => {
    const dbRef = ref(database);

    get(child(dbRef, `contacts`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          setData({ ...snapshot.val() });
        } else {
          console.log('No data available');
          setData({});
        }
      })
      .catch((error) => {
        console.error(error);
      });
    return () => {
      setData({});
    };
  }, [count]);

  const onDelete = (id) => {
    const dbRef = ref(database);
    if (window.confirm('Are you sure that you wanted to delete that contact?')) {
        remove(child(dbRef,`/contacts/${id}`))
        toast.success('Contact removed successfully');
        setCount(1);
    }
  };

  console.log('data', data);
  return (
    <div style={{ marginTop: '100px' }}>
      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: 'center' }}>No.</th>
            <th style={{ textAlign: 'center' }}>Name</th>
            <th style={{ textAlign: 'center' }}>Email</th>
            <th style={{ textAlign: 'center' }}>Contact</th>
            <th style={{ textAlign: 'center' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map((id, index) => {
            return (
              <tr key={id}>
                <th scope="row">{index + 1}</th>
                <td>{data[id].name}</td>
                <td>{data[id].email}</td>
                <td>{data[id].contact}</td>
                <td>
                  <Link to={`/Contact/update/${id}`}>
                    <button className="btn btn-edit">Edit</button>
                  </Link>
                  <button
                    className="btn btn-delete"
                    onClick={() => {
                      onDelete(id);
                    }}
                  >
                    Delete
                  </button>
                  <Link to={`/Contact/view/${id}`}>
                    <button className="btn btn-view">View</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
