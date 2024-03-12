import { useState } from 'react';
import Title from '../Title/Title';
import './Books.css';
import { useEffect } from 'react';
import Book from '../Book/Book';
import Cart from '../Cart/Cart';
import { addToLS, getStoredCart } from '../../utilities/localStorage';

const Books = () => {

    const [books, setBooks] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, []);


    useEffect(() => {
        if(books.length){
            const storedCart = getStoredCart();

            const saveCart = [];
            for(const id of storedCart){
                const book = books.find(book => book.id === id)
                if(book){
                    saveCart.push(book);
                }
            }

            setCart(saveCart);
        }
    }, [books])


    const handleAddToCart = book => {
        setCart([...cart, book])

        addToLS(book.id)
    }

    return (
        <>
        <Title></Title>
        <section className="container max-w-[1200px] py-5 md:py-14 flex w-full justify-between flex-col lg:flex lg:flex-row gap-5 mx-auto px-5">
        <div
            id="productContainer"
            className="w-full lg:w-[75%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >  
            {
                books.map(book => <Book 
                    key={book.id} 
                    book={book}
                    handleAddToCart={handleAddToCart}>
                    </Book>)
            }
          </div>
        
  
         <Cart key={books.id} cart={cart}></Cart>


        </section>
      </>
    );
};

export default Books;