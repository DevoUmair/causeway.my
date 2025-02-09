import React from 'react';
import payNow from '../../../../assets/booking/pay-now.svg';
import { useCausewayHqContext } from '../../../../context/CausewayHqContextProvider';
import hqApi from '../../../../axios/Axios';
import { useCausewayMyContext } from '../../../../context/CausewayMyContextProvider';

function PayNow() {
  const { reservedReservationDetail, payNowOpen, setPayNowOpen } = useCausewayHqContext(); 
  const {setOpenSerachLoader} = useCausewayMyContext() 
  
  const reservation = reservedReservationDetail?.reservation || {};
  const customer = reservedReservationDetail?.customer || {};
  const outstandingBalance = reservedReservationDetail?.total?.outstanding_balance?.amount || '0.00';
  const currency = reservedReservationDetail?.total?.outstanding_balance?.currency_icon || '';
  const securityDeposit = reservedReservationDetail?.total?.security_deposit?.amount || '0.00';
  const reservationId = reservation?.prefixed_id || 'N/A';
  const customerName = customer?.label || 'Guest';
  const paymentDue = (parseFloat(outstandingBalance) * 0.10).toFixed(2);
  const reservationUid = reservation?.uuid

  console.log(reservationUid);



  const payNowReservation = () => {
    setOpenSerachLoader(true)
    const reservation = reservedReservationDetail?.reservation || {};
    const outstandingBalance = reservedReservationDetail?.total?.outstanding_balance?.amount || '0.00';
    const reservationId = reservation?.id || 'N/A';
    const paymentDue = (parseFloat(outstandingBalance) * 0.10).toFixed(2);
    const reservationUid = reservation?.uuid
    const domain = window.location.origin;

    hqApi.post('/reservation/processPayment', null ,  {
        params: {
            amount : paymentDue,
            item_id: reservationId,
            label : `Reservation ${reservationId}`,
            description : `Paayment From API - Reservation ${reservationId}`,
            external_redirect : `${domain}/reservation/conform-booking/${reservationUid}/${reservationId}`
        }
    }).then((res) => {
        if(res?.status == 200){
            console.log(res);
            
            setTimeout(() => {
                setOpenSerachLoader(false);
                // const paymentUrl = res?.data?.payment_gateways_transaction?.external_url;
                // if (paymentUrl) {
                //     window.location.assign(paymentUrl); // Works similarly to href but is sometimes more reliable
                // } else {
                //     console.error("Payment URL not found");
                // }

                const paymentUrl = res?.data?.payment_gateways_transaction?.external_url;
                if (paymentUrl) {
                    window.open(paymentUrl, "_blank"); // Opens in a new tab or window
                } else {
                    console.error("Payment URL not found");
                }    
            }, 1000);
        }
    }).catch((err) => {
        console.log(err);
        setOpenSerachLoader(false)
    })
  }

  return (
    <div className={`blackBg custom-trans ${payNowOpen && 'blackBg-active'}`}>
      <div className='max-w-[800px] w-[95%] mx-auto p-[40px] flex flex-col md:flex-row justify-between items-center gap-5  h-auto md:h-[420px] rounded-2xl bg-white shadow-lg absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        {/* Left Image Section */}
        <div className='flex-1 flex justify-center items-center'>
          <img className='w-[250px] md:w-[400px]' src={payNow} alt='Pay Now' />
        </div>

        {/* Right Details Section */}
        <div className='flex-1 text-center md:text-left'>
          <h1 className='text-[22px] md:text-[25px] font-semibold'>Reservation - #{reservationId} - {customerName}</h1>
          <p className='mt-[10px] text-gray-700 text-sm md:text-base'>
            Your reservation is <span className='text-green-700 font-semibold' >pending</span>. Once you pay <span className='font-bold'>{currency}{paymentDue}</span> (10% of outstanding balance), the reservation will be confirmed.
          </p>
          <p className='mt-[10px] text-gray-600 text-sm md:text-base'>
            Outstanding Balance: <span className='font-bold'>{currency}{outstandingBalance}</span>
          </p>
          <p className='text-gray-600 text-sm md:text-base'>
            Security Deposit: <span className='font-bold'>{currency}{securityDeposit}</span>
          </p>
          <button onClick={payNowReservation} className='w-full md:w-auto border-none outline-none rounded-md bg-primaryCM py-3 px-5 mt-[20px] text-white font-semibold hover:bg-opacity-90 transition duration-300'>
            PAY NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default PayNow;
