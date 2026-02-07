axios.get('http://localhost:3000/api/products')
.then(res=>{
    console.log(res.data);

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
        </div>
        `
        $('.products-container').append(card)
    }
})