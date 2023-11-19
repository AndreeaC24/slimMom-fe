import { useState } from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';
import { useSelector } from 'react-redux';
import { setLoading } from 'redux/loader/loaderSlice';

const override = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '25px',
};

export const Loader = () => {
  const loaderState = useSelector(setLoading);
// eslint-disable-next-line
  let [color, setColor] = useState('rgba(251, 135, 69, 1)'); 

  console.log('Starea loader-ului:', loaderState);
  return (
    <div className="sweet-loading">
      <PropagateLoader
        color={color}
        cssOverride={override}
        loading={loaderState}
        size={30}
        speedMultiplier={1}
      />
    </div>
  );
}; 