import React from 'react'


const Product = () => {
    return (
//         <div className="padding-container max-container w-full pb-24">
//         <div className="flex flex-wrap justify-between gap-5 lg:gap-10">

//         {/* Product 1 */}
//         <a href="/panggilangkuSeorangGuru">

//             <div className="product-box" style={{  border: '1px solid #ccc', padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//                 <img src="./Panggilanku_seorang_guru.jpeg" alt="Product 1" className="product-image" style={{ maxWidth: '200px', maxHeight: '200px', width: 'auto', height: 'auto' }}  />
//                 <div className="product-details" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
//                     <h2 className="bold-40 lg:bold-50 xl:max-w-[390px] text-center">Preorder<br/>Now!</h2>
//                     <p className="regular-16 text-gray-30 xl:max-w-[520px] mb-1 text-center">Buku ini ditulis oleh 16 guru, menguraikan soal panggilan menjadi guru dari berbagai sudut pandang.</p>
//                     <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
//                         <button className="button">Buy Now</button>
//                         {/* <button className="button" onClick={() => window.location.href='https://shopee.co.id/erika_arianto'}>Buy Now</button> */}
//                         <p className="regular-16 text-gray-30 xl:max-w-[520px]">Rp60.000</p>
//                     </div>
//                 </div>
//             </div>
//         </a>
        
//         {/* Product 2 */}
//         <a href="/saatAkuMelepasDiaPergi">
//         <div className="product-box" style={{ border: '1px solid #ccc', padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//             <img src="./Melepas Dia Pergi.png" alt="Product 3" className="product-image" style={{ maxWidth: '200px', maxHeight: '200px', width: 'auto', height: 'auto' }} />
//             <div className="product-details" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
//                 <h2 className="bold-40 lg:bold-50 xl:max-w-[390px] text-center">Latest<br/>Product</h2>
//                 <p className="regular-16 text-gray-30 xl:max-w-[520px] mb-1 text-center">Saat Aku Melepas Dia Pergi Siap atau tidak siap, perpisahan pasti akan terjadi.</p>
//                 <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
//                     <button className="button"> Buy Now</button>
//                     <p className="regular-16 text-gray-30 xl:max-w-[520px]">Rp80.000</p>
//                 </div>
//             </div>
//         </div>
//         </a>
//         {/* Product 3 */}
//         <a href="/meiAi">
//         <div className="product-box" style={{ border: '1px solid #ccc', padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//             <img src="./mei-ai.png" alt="Product 2" className="product-image" style={{ maxWidth: '200px', maxHeight: '200px', width: 'auto', height: 'auto' }}  />
//             <div className="product-details" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
//                 <h2 className="bold-40 lg:bold-50 xl:max-w-[390px] text-center">Kids<br/>Friendly</h2>
//                 <p className="regular-16 text-gray-30 xl:max-w-[520px] mb-1 text-center ">buku kisah nyata diangkat dari seorang anak usia 5 tahun dimana mamanya tengah berjuang dalam kanker ganas.</p>
//                 <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
//                     <button className="button">Buy Now</button>
//                     <p className="regular-16 text-gray-30 xl:max-w-[520px]">Rp50.000</p>
//                 </div>
//             </div>
//         </div>

//         </a>
//         </div>
// </div>
<div className="padding-container max-container w-full pb-24">
    <div className="flex flex-wrap justify-between gap-5 lg:gap-10">

        {/* Product 1 */}
        <a href="/panggilangkuSeorangGuru">
            <div className="product-box" style={{ border: '1px solid #ccc', padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src="./Panggilanku_seorang_guru.jpeg" alt="Product 1" className="product-image" style={{ maxWidth: '200px', maxHeight: '200px', width: 'auto', height: 'auto' }} />
                <div className="product-details" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <h2 className="bold-40 lg:bold-50 xl:max-w-[390px] text-center">Preorder<br />Now!</h2>
                    <p className="regular-16 text-gray-30 xl:max-w-[520px] mb-1 text-center">Buku ini ditulis oleh 16 guru, menguraikan<br/>soal panggilan menjadi guru dari berbagai sudut pandang.</p>
                    <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
                        <button className="button">Buy Now</button>
                        {/* <button className="button" onClick={() => window.location.href='https://shopee.co.id/erika_arianto'}>Buy Now</button> */}
                        <p className="regular-16 text-gray-30 xl:max-w-[520px]">Rp60.000</p>
                    </div>
                </div>
            </div>
        </a>

        {/* Product 2 */}
        <a href="/saatAkuMelepasDiaPergi">
            <div className="product-box" style={{ border: '1px solid #ccc', padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src="./Melepas Dia Pergi.png" alt="Product 3" className="product-image" style={{ maxWidth: '200px', maxHeight: '200px', width: 'auto', height: 'auto' }} />
                <div className="product-details" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <h2 className="bold-40 lg:bold-50 xl:max-w-[390px] text-center">Latest<br />Product</h2>
                    <p className="regular-16 text-gray-30 xl:max-w-[520px] mb-1 text-center">Saat Aku Melepas Dia Pergi Siap atau tidak siap,<br/> perpisahan pasti akan terjadi.</p>
                    <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
                        <button className="button"> Buy Now</button>
                        <p className="regular-16 text-gray-30 xl:max-w-[520px]">Rp80.000</p>
                    </div>
                </div>
            </div>
        </a>

        {/* Product 3 */}
        <a href="/meiAi">
            <div className="product-box" style={{ border: '1px solid #ccc', padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src="./mei-ai.png" alt="Product 2" className="product-image" style={{ maxWidth: '200px', maxHeight: '200px', width: 'auto', height: 'auto' }} />
                <div className="product-details" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <h2 className="bold-40 lg:bold-50 xl:max-w-[390px] text-center">Kids<br />Friendly</h2>
                    <p className="regular-16 text-gray-30 xl:max-w-[520px] mb-1 text-center ">buku kisah nyata diangkat dari seorang anak usia 5 tahun<br/>dimana mamanya tengah berjuang dalam kanker ganas.</p>
                    <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
                        <button className="button">Buy Now</button>
                        <p className="regular-16 text-gray-30 xl:max-w-[520px]">Rp50.000</p>
                    </div>
                </div>
            </div>
        </a>
    </div>
</div>


    )}
export default Product;
