const handlePayment = async () => {
  try {
    const payload = {
      email: userEmail, // from state
      amount: VERIFICATION_FEE, // from constants
      verification_id: report.id,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/api/v1/payments/initiate`,
      payload
    );

    if (response.data.status === 200 && response.data.data.checkout_url) {
      window.location.href = response.data.data.checkout_url;
    } else {
      setError(response.data.message); // not alert()
    }
  } catch (err) {
    setError("Payment initiation failed. Try again.");
  }
};