const Price = () => (
    <p>The price of apples is <span class="expensive">$0.48</span></p>
);

ReactDOM.render(
    <div>
        <h1>Welcome to GrocerEZ</h1>
        <Price></Price>
        <Price></Price>    
    </div>,
     document.getElementById('app')
);