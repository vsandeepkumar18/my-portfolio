// import React from 'react';

// //image
// import Logo from '../assets/logo.svg';

// const Header = () => {
//   return <header className='py-8'>
//     <div className='container mx-auto'>
//       <div className='flex justify-between'>
//         <a href="#">
//           <img src={Logo} alt="" />
//         </a>
//         <button className='btn btn-sm'>Work with me </button>
//       </div>
//     </div>
//   </header>;
// };

// export default Header;

import React from 'react';

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href="#">
            <h1 className="text-2xl font-bold">Sandeep Kumar</h1>
          </a>
          <button className='btn btn-sm'>Work with me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
