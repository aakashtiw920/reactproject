import React from 'react';
import './Table.css'
import * as img from './imagevalue.js'
const item= [
  { id:1,image:img.abstract, product: 'Abstract 3D', stock: "32 in stock", price: "$10", totalSales: 20 },
  { id:2,image:img.sap, product: 'Sarphenes Illustration', stock: "32 in stock", price: "$20", totalSales: 20 },
];

const Table = () => {
  return (
    <div>
      <div className='upperpart'>
          <div className='productname'>
            <h2>Product Sell</h2>
          </div>
          <div className='searchcontainer'>
            <img src={img.search} className='logotable'></img>
              <input type="text" placeholder="Search..." className='search-bar-table'/>
          </div>
          <div className='menu'>
              <select id="menu" name="menu">
                <option value="option1">Last 30 days</option>
                <option value="option2">Last 15 days</option>
                <option value="option3">Last 10 days</option>
                <option value="option4">Last 5 days</option>
              </select>
          </div>
      </div>
      <div className='lowerpart'>
        <div>
            <table className='tabled' >
            <thead className='tablehead'>
              <tr className='tableheadrow'>
                <th className="header1" colSpan="2" >Product</th>
                <th className='header2'>Stock</th>
                <th className='header3'>Price</th>
                <th className='header4'>Total Sales</th>
              </tr>
            </thead>
            <div>
              <hr></hr>
            </div>
            <tbody className='tablebody'>
                {item.map((item)=>(
                  <tr className="tablerow" key={item.id}>
                    <td className='imagecol'><img src={item.image} className='tableimage' alt='Photu' ></img></td>
                    <td className='col1'>{item.product}</td>
                    <td className='col2'>{item.stock}</td>
                    <td className='col3'>{item.price}</td>
                    <td className='col4'>{item.totalSales}</td>
                  </tr>
                ))}
            </tbody>
          </table>
            </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Table;
