import './App.css';
import { products } from './db/db'; // Importa el objeto exportado

function App() {
  return (
    <>
      <div className='x2-flex'>
        <div className='header'>
          <nav>
            <a href="#" className="logo">Logo</a>
            <a href="#">La más puta</a>
            <a href="#">Putita</a>
            <a href="#">Putita</a>
            <a href="#">Putita</a>
            <a href="#">Putita</a>
            <a href="#">Putita</a>
            <a href="#">Putita</a>
          </nav>
        </div>
        <main>
          <h1>Productos</h1>
          <ul>
            {products.map(product => (
              <li key={product.id}>
                <strong>Nombre:</strong> {product.name} - <strong>Categoría:</strong> {product.category}
              </li>
            ))}
          </ul>
        </main>
      </div>

      <footer>
        <p>&copy; 2025 Mi Proyecto</p>
      </footer>
    </>
  );
}

export default App;
