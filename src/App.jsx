import './App.css';
import { products } from './db/db'; // Importamos los datos

function App() {
  return (
    <div className="app-container">
      {/* Barra lateral */}
      <aside className="sidebar">
        <div className="logo">Sistema Ventas</div>
        <nav>
          <a href="#" className="menu-item">
            <i className="fa fa-home"></i> Inicio
          </a>
          <a href="#" className="menu-item">
            <i className="fa fa-box"></i> Productos
          </a>
          <a href="#" className="menu-item">
            <i className="fa fa-shopping-cart"></i> Ventas
          </a>
          <a href="#" className="menu-item">
            <i className="fa fa-users"></i> Clientes
          </a>
          <a href="#" className="menu-item">
            <i className="fa fa-cogs"></i> Configuración
          </a>
        </nav>
      </aside>

      {/* Contenido principal */}
      <main className="main-content">
        <h1>Lista de Productos</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Categoría</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default App;
