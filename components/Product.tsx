import React from 'react'


const Product = () => {
    return (
<div className="padding-container max-container w-full pb-24">
    <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
        {/* Product 1 */}
        <div className="./public/product-box">
            <img src="./Panggilanku_seorang_guru.jpeg" alt="Product 1" className="product-image" style={{ maxWidth: 'max', maxHeight: '200px', width: 'auto', height: 'auto' }}  />
            <div className="product-details">
                <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Product 1</h2>
                <p className="regular-16 text-gray-30 xl:max-w-[520px] mb-1">Short description of Product 1.</p>
                
                <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
                    <button className="button">Buy Now</button>
                    <p className="regular-16 text-gray-30 xl:max-w-[520px]">$19.99</p>
                </div>
            </div>
        </div>
        
        {/* Product 2 */}
        <div className="product-box">
            <img src="./mei-ai.png" alt="Product 2" className="product-image" style={{ maxWidth: '200px', maxHeight: '200px', width: 'auto', height: 'auto' }}  />
            <div className="product-details">
                <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Product 2</h2>
                <p className="regular-16 text-gray-30 xl:max-w-[520px] mb-1">Short description of Product 2.</p>
                <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
                    <button className="button">Buy Now</button>
                    <p className="regular-16 text-gray-30 xl:max-w-[520px]">$19.99</p>
                </div>
            </div>
        </div>

        {/* Product 3 */}
        <div className="product-box">
            <img src="./Melepas Dia Pergi.png" alt="Product 3" className="product-image" style={{ maxWidth: '200px', maxHeight: '200px', width: 'auto', height: 'auto' }} />
            <div className="product-details">
                <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Product 3</h2>
                <p className="regular-16 text-gray-30 xl:max-w-[520px] mb-1">Short description of Product 3.</p>
                <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
                    <button className="button">Buy Now</button>
                    <p className="regular-16 text-gray-30 xl:max-w-[520px]">$19.99</p>
                </div>
            </div>
        </div>

        {/* Product 4 */}
        <div className="product-box">
            <img src="/product4.jpg" alt="Product 4" className="product-image" style={{ width: '200px', height: '200px' }} />
            <div className="product-details">
                <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Product 4</h2>
                <p className="regular-16 text-gray-30 xl:max-w-[520px] mb-1">Short description of Product 4.</p>
                <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
                    <button className="button">Buy Now</button>
                    <p className="regular-16 text-gray-30 xl:max-w-[520px]">$19.99</p>
                </div>
            </div>
        </div>
    </div>
</div>


    )}
export default Product;
