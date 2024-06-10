import { React } from "react";
function NewsCarde() {
    // const { title, image, date } = props;

    return (
        <>
            <div className="m-20">   
               <div className="flex-col border rounded-[20px] w-[230px] h-[250px]">
                <div className="w-[230px] h-[140px] bg-cover bg-no-repeat bg-center">
                <img src="https://static-00.iconduck.com/assets.00/insert-image-icon-2048x1921-yclt1rdm.png" alt="Example Image" class="w-full h-full object-cover rounded-[10px]" />
                </div>

                {/* <div className="pr-2 pt-4 w-40" dir="rtl"><h6 className="bg-pale-blue">24 ديسمبر 2023</h6>  </div> */}
                <h6 class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-1 ml-30" dir="rtl">24 ديسمبر 2023</h6>

                <p className="text-sm p-2 font-bold" dir="rtl">الوزير الزعروري يشارك في المؤتمر الدولي لسوق العمل بالرياض</p>
              
            </div>
            
            </div>
        </>
    );
}


export default NewsCarde;