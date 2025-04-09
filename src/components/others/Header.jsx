import React, { useState, useEffect } from 'react';

const Header = (props) => {
  const [name, setName] = useState('');

  useEffect(() => {
    if (!props.data) {
      setName('Admin');
    } else {
      setName(props.data.name);
    }
  }, [props.data]); 

  const logOutUser = () => {
    localStorage.setItem('LoggedinUser', '');
    props.changeUser('');
  };

  return (
    <div className='flex items-end justify-between p-5 bg-emerald-300'>
      <h1 className='text-3xl'>
        Hello <br />
        <span className='text-4xl font-bold'>{name} 🖐</span>
      </h1>
      <button
        onClick={logOutUser}
        className='bg-yellow-300 border-2 rounded-xl p-2 px-3'
      >
        Log out
      </button>
    </div>
  );
};

export default Header;
