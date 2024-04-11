/* eslint-disable react/prop-types */
import ClipLoader from 'react-spinners/ClipLoader'

const override={
    display: 'bloch',
    margin: '100px auto',
};

const Spinner = ({ loading }) => {
  return (
   <ClipLoader 
   color='#4338ca'
   loading={loading}
   cssOverride={override}
   size={150}
   />
  )
}

export default Spinner