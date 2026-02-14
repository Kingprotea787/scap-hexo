let cartCount = 0;

function addToCart(productName) {
    cartCount++;
    document.querySelector('nav ul li a[href="#cart"]').textContent = `カート (${cartCount})`;
    showModal(`${productName} がカートに追加されました!`);
}

function showModal(message) {
    document.getElementById('modalMessage').textContent = message;
    document.getElementById('cartModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('cartModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('cartModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}