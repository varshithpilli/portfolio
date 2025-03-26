'use client'
import React, {useState} from 'react'

const Contact: React.FC = () => {
  const [result, setResult] = useState<string>("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");

    const form = event.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    formData.append("access_key", "4f119c75-5ae7-4d2d-a934-b862617da6d7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      form.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id='contact' className='w-11/12 min-h-screen pt-24 mx-auto'>

      <h2 className='font-ct text-center text-[40px] font-work font-semibold mb-4'>Contact</h2>
      <p className='font-mw text-center mb-8 text-gray-600 dark:text-gray-400 mt-2'>Feel free to reach out for any queries</p>

      <form onSubmit={onSubmit} className='flex flex-col gap-5 max-w-lg mx-auto p-6 bg-[#f6f6f6] dark:bg-[#202020] dark:border-black border border-gray-200 shadow-sm rounded-md'>
        <input className='font-mw px-4 py-2 outline-none border border-gray-300 bg-white rounded-md dark:bg-darkBg dark:border-black' type="text" required placeholder='Name' name='name' />
        <input className='font-mw px-4 py-2 outline-none border border-gray-300 bg-white rounded-md dark:bg-darkBg dark:border-black' type="email" required placeholder='Email' name='email' />
        <textarea className='font-mw px-4 py-2 outline-none border border-gray-300 bg-white rounded-md dark:bg-darkBg dark:border-black' name="message" placeholder='Message here...' rows={6}></textarea>
        <button className='font-mw bg-black/80 dark:bg-darkBg hover:bg-black duration-100 cursor-pointer text-white px-8 py-2 w-fit mx-auto rounded-full'>Submit</button>
        <p className='text-center'>{result}</p>
      </form>

    </div>
  )
}

export default Contact
