const MessageCard = () => {
    return ( 
        <div className="bg-[#F9D86C] py-24 mx-20 pt-16 rounded-lg grid grid-cols-2">
            <h1 className="text-left font-bold text-white text-6xl ml-20">STAY UP TO DATE ABOUT</h1>    
            <form className="mx-24 mt-4">
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                </svg>
                </div>
                <input type="text" id="email-address-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Opinion Here...." />
            </div>
            </form>
            <h1 className="text-left font-bold text-white text-6xl ml-20">OUR LATEST OFFERS</h1>
            <button type="button" className="mx-24 px-2 text-dark bg-[#FFFFFF] mt-2 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm mt-8 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Send Us Your Opinion</button>   
        </div>
     );
}
 
export default MessageCard;