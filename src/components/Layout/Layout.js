// import React, { useState } from 'react';
// import Header from './Header';
// import Footer from './Footer';
// import { Helmet } from 'react-helmet';
// import { Toaster } from 'react-hot-toast';
// import 'react-toastify/dist/ReactToastify.css';

// const Layout = ({ children, title, description, keywords, author }) => {
//   const [age, setAge] = useState(28);
//   const [name, setName] = useState('Taylor');
//   const [todos, setTodos] = useState(() => createTodos()); // Example using a function

//   return (
//     <div>
//       <Helmet>
//         <meta charSet="UTF-8" />
//         <meta name="description" content={description} />
//         <meta name="keywords" content={keywords} />
//         <meta name="author" content={author} />
//         <title>{title}</title>
//       </Helmet>
//       <Header />
//       <main style={{ minHeight: '70vh' }}>
//         <Toaster />
//         {children}
//       </main>
//       <Footer />
//     </div>
//   );
// };

// Layout.defaultProps = {
//   title: 'Ecommerce App',
//   description: 'mern stack project',
//   keywords: 'mern,react,node,mongodb',
//   author: 'Rajiv',
// };

// export default Layout;
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
export const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />

        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />

        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "70vh" }}>
        <ToastContainer />
        {children}
      </main>
      <Footer />
    </div>
  );
};
Layout.defaultProps = {
  title: "Ecommerce App",
  description: "mern stack project",
  keywords: "mern,react,node,mongodb",
  author: "Rajiv",
};
