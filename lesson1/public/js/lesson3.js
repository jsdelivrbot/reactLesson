var productCompoment = React.createClass({
    
    render: function(){
        return (
            <div className = "container">
                <p>Tên sản phẩm:</p>
                <span>Sơn pu</span>
                <p>Số lượng</p>
                <span className = "badge">10</span>
            </div>
            );
        
    }
});

var thanhtung = React.createClass({
    render: function(){
        return(
            <h2>thanh tung</h2>
            );
    }
});

ReactDOM.render(
    <div>
        <thanhtung/>

    </div>
, document.getElementById("root"));