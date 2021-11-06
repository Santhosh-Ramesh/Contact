import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
// import { useParams } from "react-router";
import './AddEdit.css';

import { toast } from 'react-toastify';

import { getDatabase, ref, set, get, child } from 'firebase/database';

import { database } from '../firebase-config';

function AddEdit(props) {
  const initialState = {
    id: '',
    name: '',
    email: '',
    contact: '',
  };
  const [state, setState] = useState(initialState);
  const [data, setData] = useState({});
  const { name, email, contact } = state;

  const history = useHistory();

  const { id } = useParams();

  useEffect(() => {
    const dbRef = ref(database);

    get(child(dbRef, `contacts`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log("addEdit snapshot",snapshot.val());
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
  }, [id]);

  useEffect(() => {
    if (id) {
      setState({ ...data[id] });
    } else {
      setState({ ...initialState });
    }
    return () => {
      setState({ ...initialState });
    };
  }, [id, data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !contact) {
      toast.error('Please fill the required fields');
    } else {
      if (!id) {
        const tid = Math.floor(Math.random() * 1000) + 1;
        set(ref(database, 'contacts/' + tid), {
          id: tid,
          name: name,
          email: email,
          contact: contact,
        }).catch((err) => {
          toast.error(err);
        });
        toast.success('Contact added successfully!');
      } else {
        const tid = id;
        set(ref(database, 'contacts/' + tid), {
          //   id: tid,
          //   name: name,
          //   email: email,
          //   contact: contact,
          ...state,
        }).catch((err) => {
          toast.error(err);
        });
        toast.success('Contact Updated successfully!');
      }

      setTimeout(() => history.push('/Contact/'), 500);
    }
  };

  const handleInputChange = (event) => {
    console.log('event', event);
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };
  console.log('state', state);

  return (
    <div style={{ marginTop: '100px' }}>
      <form
        style={{
          margin: 'auto',
          padding: '15px',
          maxWidth: '400px',
          alignContent: 'center',
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          value={name || ''}
          onChange={handleInputChange}
        />
        <label htmlFor="name">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email"
          value={email || ''}
          onChange={handleInputChange}
        />
        <label htmlFor="contact">Contact</label>
        <input
          type="number"
          id="contact"
          name="contact"
          placeholder="Your contact"
          value={contact || ''}
          onChange={handleInputChange}
        />
        <input type="submit" value={id ? 'Update' : 'Save'} />
      </form>
    </div>
  );
}

export default AddEdit;
