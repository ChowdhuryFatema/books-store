import PropTypes from 'prop-types';

const Cart = ({cart}) => {
    return (
        <div className="lg:w-[24%] w-full overflow-y-auto sticky top-3">
        <p className="text-center">Total Cart Item</p>
        <p className="text-center p-3" id="totalPriceDisplay"></p>
        <div id="cartContainer" className="cartContainer ">
          <table className="table-auto border w-full text-center">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody className="px-5">
                  {
                    cart.map(book => {

                        const {id, name, discountPrice} = book;
                        return (
                                <tr key={id}>
                                    <td className="text-sm">{name}</td>
                                    <td>{discountPrice}</td>
                                </tr>
                        )
                    })
                  }
            </tbody>
          </table>
        </div>
      </div>
    );
};


Cart.propTypes = {
    cart: PropTypes.array.isRequired
}

export default Cart;