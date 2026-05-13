const handlePayment = async () => {
    try {
        const payData = new FormData();
        payData.append('email', 'customer@example.com'); // Capture this from your form
        payData.append('amount', '12500'); 
        payData.append('verification_id', report.id);

        const response = await axios.post('http://localhost:8000/api/v1/payments/initiate', payData);
        
        // SQUAD REDIRECT HANDSHAKE
        if (response.data.status === 200 && response.data.data.checkout_url) {
            window.location.href = response.data.data.checkout_url;
        } else {
            alert("Error: " + response.data.message);
        }
    } catch (error) {
        console.error("Payment failed", error);
    }
};
