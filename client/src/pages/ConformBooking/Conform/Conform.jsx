import React from 'react'
import { useParams } from 'react-router-dom';

function Conform() {
    const { reservationUid, reservationId } = useParams();

    console.log(reservationId);
    console.log(reservationUid);

  return (
    <div>Conform</div>
  )
}

export default Conform