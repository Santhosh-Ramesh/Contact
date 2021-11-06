import React, { useState, useEffect } from 'react';

import { getDatabase, ref, child, get, } from 'firebase/database';
import { database } from '../firebase-config';

import { useParams, Link } from 'react-router-dom';

import './View.css';

function View(props) {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const dbRef = ref(database);

    get(child(dbRef, `contacts/${id}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log('viewdata snapshot', snapshot.val());
          setUser({ ...snapshot.val() });
        } else {
          console.log('No data available');
          setUser({});
        }
      })
      .catch((error) => {
        console.error(error);
      });
    return () => {
      setUser({});
    };
  }, [id]);

  return (
    <div>
      <div style={{ marginTop: '150px' }}>
        <div className="card">
          <div className="card-header">
            <p>User Contact Detail</p>
          </div>
          <div className="container">
            <strong>ID:</strong>
            <span>{id}</span>
            <br />
            <br />
            <strong>Name:</strong>
            <span>{user.name}</span>
            <br />
            <br />
            <strong>Email:</strong>
            <span>{user.email}</span>
            <br />
            <br />
            <strong>Contact:</strong>
            <span>{user.contact}</span>
            <br />
            <br />
            <Link to="/Contact/">
                <button className="btn btn-edit">Go Back</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default View;
