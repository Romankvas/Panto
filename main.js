 
$('#cartBtn').on('click', function(e) {
    e.stopPropagation();
    $('#cartSidebar').toggleClass('active');
});

$(document).on('click', function(e) {
    if (!$(e.target).closest('#cartSidebar').length) {
        $('#cartSidebar').removeClass('active');
    }
});



 
let cartCount = 0;
$(document).on('click', '.add-item', function() {
    cartCount++;
    $('.cart-count').text(cartCount);
    $('.empty-msg').hide();
    
   
    $(this).css('transform', 'scale(0.8)');
    setTimeout(() => $(this).css('transform', 'scale(1)'), 200);
});
  
$('#orderForm').on('submit', function(e) {
    e.preventDefault();
    $('#cartSidebar').removeClass('active');
    $('#successModal').css('display', 'flex');
    
 
    cartCount = 0;
    $('.cart-count').text(cartCount);
    $('.empty-msg').show();
    this.reset();
});

function closeModal() {
    $('#successModal').hide();
}

 
axios.get('http://localhost:3000/api/products')
.then(res => {
    for(let el of res.data){
        let card = `
        <div class="product-card">
            <div class="img-box"><img src="https://redthread.uoregon.edu/files/original/affd16fd5264cab9197da4cd1a996f820e601ee4.png" alt=" "></div>
            <p class="category-label">${el.category}</p>
            <h4>${el.name}</h4>
            <div class="stars">★★★★★</div>
            <div class="card-footer">
                <span class="price"><sup>$</sup>${el.price}</span>
                <button class="add-item">+</button>
            </div>
        </div>`;
        $('.products-container').append(card);
    }
});




 