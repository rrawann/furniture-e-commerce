import Button from "../Buttons";

const Subscribe = () => {
  return (
<div className="flex justify-evenly items-center gap-20 mb-40 mt-40 max-sm:flex-col max-lg:flex-col"> 
<h3 className="text-5xl max-w-lg font-bold max-sm:pl-10">
Sign Up for <span className="text-customColor font-bold"> Updates</span> & Newsletter
</h3>


<div class="flex p-2.5 border border-gray-500 rounded-full ">
<input type="text" id="tagInput" placeholder="Subscribe with us" className="outline-none" /> 
<div className="sm:pl-40">
<Button 
 label='Sign up'
 backgroundColor='bg-customColor'
 borderColor='border-slate-gray'
 textColor='text-white'
/>
</div>
</div>

</div>
  );
};

export default Subscribe;
